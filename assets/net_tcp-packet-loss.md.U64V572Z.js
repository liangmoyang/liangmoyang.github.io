import{_ as e,o as a,c as o,R as c}from"./chunks/framework.LBXiIpgL.js";const m=JSON.parse('{"title":"TCP协议丢包","description":"","frontmatter":{},"headers":[],"relativePath":"net/tcp-packet-loss.md","filePath":"net/tcp-packet-loss.md"}'),t={name:"net/tcp-packet-loss.md"},d=c('<h1 id="tcp协议丢包" tabindex="-1">TCP协议丢包 <a class="header-anchor" href="#tcp协议丢包" aria-label="Permalink to &quot;TCP协议丢包&quot;">​</a></h1><h2 id="在三次握手建立连接时丢包" tabindex="-1">在三次握手建立连接时丢包 <a class="header-anchor" href="#在三次握手建立连接时丢包" aria-label="Permalink to &quot;在三次握手建立连接时丢包&quot;">​</a></h2><p>在第一次握手之后，服务端会建立一个半连接，暂存于<code>半连接队列</code>，之后再发出第二次握手。在第三次握手来了之后，半连接升级为全连接，暂存于<code>全连接队列</code>，等待程序执行<code>accept()</code>来取走调用。</p><p>队列会有长度，如果队列满了，新来的包就会被丢弃。<u><em>可用命令查看溢出次数</em></u></p><h2 id="流量控制丢包" tabindex="-1">流量控制丢包 <a class="header-anchor" href="#流量控制丢包" aria-label="Permalink to &quot;流量控制丢包&quot;">​</a></h2><p>为了避免太多数据包进入网卡造成异常，让数据按一定的规则进入队列依次处理，这就是“流量控制”机制：Queueing Disciplines（QDISC）。</p><p>查看流控队列的长度：<code>ifconfig</code>命令中<code>txqueuelen</code>的值。</p><p>当数据过多，而流控队列长度不够大时，就容易出现丢包。</p><p>同样是<code>ifconfig</code>命令，其中的<code>dropped</code>的值如果大于0，则可能已经发生了流控丢包。可以尝试通过修改流控队列的长度来解决：<code>ifconfig [网卡] txqueuelen 1500</code></p><h2 id="接收缓冲区丢包" tabindex="-1">接收缓冲区丢包 <a class="header-anchor" href="#接收缓冲区丢包" aria-label="Permalink to &quot;接收缓冲区丢包&quot;">​</a></h2><p>使用<code>scoket</code>进行网络编程时，内核都会分配一个发送缓冲区和接收缓冲区。</p><p>执行<code>send()</code>方法时，数据包并不会直接就从网卡中发送出去，而是将数据都拷贝到内核的发送缓冲区中，由内核决定什么时候发送和发送多少数据。</p><p>而从外部网络接收到的数据包就暂存在接收缓冲区，等待用户空间的应用程序将数据包取走。</p><p>这两个缓冲区都是有大小限制的。<code>sysctl net.ipv4.tcp_reme</code> <code>sysctl net.ipv4.tcp_wmen</code>，分别有三个字段，对应<code>min``default``max</code>，缓冲区大小会在min和max之间动态调整。 而当接收缓冲区满了，TCP接收窗口就会变为0，如果这时候还有数据发来，就会发生丢包。</p><h2 id="ringbuffer过小导致丢包" tabindex="-1">RingBuffer过小导致丢包 <a class="header-anchor" href="#ringbuffer过小导致丢包" aria-label="Permalink to &quot;RingBuffer过小导致丢包&quot;">​</a></h2><p>网卡在接收数据时，会将数据暂存到<code>RingBuffer</code>接收缓冲区里，然后等待内核来取走。如果缓冲区过小，而接收的数据又过快，就可能会发生溢出导致丢包。</p><p>查看是否丢包：<code>ifconfig</code>命令中的<code>overruns</code>参数是否大于0。</p><p>一个网卡里可以有多个<code>RingBuffer</code>，修改<code>RingBuffer</code>的长度：<code>ethtool -G [网卡] rx 4096 tx 4096</code>，其中<code>rx</code>是发送，<code>tx</code>是接收。</p><h2 id="网卡丢包" tabindex="-1">网卡丢包 <a class="header-anchor" href="#网卡丢包" aria-label="Permalink to &quot;网卡丢包&quot;">​</a></h2><p>常见的：网线质量差，解除不良，性能不足等。</p><p>查看当前网卡支持的最大速度：<code>ethtool [网卡]</code></p><h2 id="两端之间的网络丢包" tabindex="-1">两端之间的网络丢包 <a class="header-anchor" href="#两端之间的网络丢包" aria-label="Permalink to &quot;两端之间的网络丢包&quot;">​</a></h2><p>机器与各种设备之间，包括路由器、交换机和各种光缆路线等，都可能会发生丢包。查看丢包：<code>ping``mtr</code>。</p><h2 id="处理丢包" tabindex="-1">处理丢包 <a class="header-anchor" href="#处理丢包" aria-label="Permalink to &quot;处理丢包&quot;">​</a></h2><p>丢包是很常见的，几乎不可避免的。</p><h4 id="如何处理" tabindex="-1">如何处理 <a class="header-anchor" href="#如何处理" aria-label="Permalink to &quot;如何处理&quot;">​</a></h4><ol><li>使用TCP协议做传输。发送端在发出数据后会等待接收端回复<code>ack</code>，如果收不到，会重传。</li></ol><h2 id="使用了tcp协议就不会丢包了吗" tabindex="-1">使用了TCP协议就不会丢包了吗 <a class="header-anchor" href="#使用了tcp协议就不会丢包了吗" aria-label="Permalink to &quot;使用了TCP协议就不会丢包了吗&quot;">​</a></h2><p>TCP位于传输层，而应用程序位于应用层。当TCP接收到数据后，就会与了一个<code>ack</code>，此时TCP的任务就结束了，但应用程序还需要从TCP的接收缓冲区中取出数据，如果此时出现了其他问题，如内存不足或者bug闪退了，那么这条“数据”也就丢掉了。</p><p>TCP只保证传输层的消息可靠性，并不保证应用层的消息可靠性。</p><h2 id="文章参考" tabindex="-1">文章参考 <a class="header-anchor" href="#文章参考" aria-label="Permalink to &quot;文章参考&quot;">​</a></h2><p><a href="https://mp.weixin.qq.com/s/b1IkQt68jAOa6rHw3OcmVA" target="_blank" rel="noreferrer">用了TCP协议，就一定不会丢包吗？</a></p>',32),r=[d];function i(n,p,l,h,s,u){return a(),o("div",null,r)}const _=e(t,[["render",i]]);export{m as __pageData,_ as default};
