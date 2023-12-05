import{_ as a,o as e,c as s,R as l}from"./chunks/framework.LBXiIpgL.js";const m=JSON.parse('{"title":"slice 切片","description":"","frontmatter":{},"headers":[],"relativePath":"golang_review/data_type/slice.md","filePath":"golang_review/data_type/slice.md"}'),n={name:"golang_review/data_type/slice.md"},i=l(`<h1 id="slice-切片" tabindex="-1">slice 切片 <a class="header-anchor" href="#slice-切片" aria-label="Permalink to &quot;slice 切片&quot;">​</a></h1><h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h2><ul><li>slice是对数组的封装。</li><li>从切片的头部添加元素的性能一般要比从尾部添加元素的性能差很多，因为在头部添加一般都会导致内存的重新分配。</li><li>要注意slice在<code>for range</code>里的表现</li><li>深拷贝<code>copy()</code></li></ul><h2 id="底层实现" tabindex="-1">底层实现 <a class="header-anchor" href="#底层实现" aria-label="Permalink to &quot;底层实现&quot;">​</a></h2><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">type slice struct{</span></span>
<span class="line"><span style="color:#e1e4e8;">	array unsafe.Pointer // 指向底层数组</span></span>
<span class="line"><span style="color:#e1e4e8;">	len int</span></span>
<span class="line"><span style="color:#e1e4e8;">	cap int</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">type slice struct{</span></span>
<span class="line"><span style="color:#24292e;">	array unsafe.Pointer // 指向底层数组</span></span>
<span class="line"><span style="color:#24292e;">	len int</span></span>
<span class="line"><span style="color:#24292e;">	cap int</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><ul><li>底层数组可以被多个slice同时指向。</li></ul><h2 id="nil和empty" tabindex="-1">nil和empty <a class="header-anchor" href="#nil和empty" aria-label="Permalink to &quot;nil和empty&quot;">​</a></h2><ul><li>nil切片：<code>var s []int</code>，<code>== nil</code>成立</li><li>empty切片：<code>s1 := []int{}</code>，<code>== nil</code> 不成立</li></ul><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var s1 []int</span></span>
<span class="line"><span style="color:#e1e4e8;">s2 := []int{}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">fmt.Printf(&quot;%v %p \\n&quot;, s1 == nil, &amp;s1) // true 0xc0000080f0</span></span>
<span class="line"><span style="color:#e1e4e8;">fmt.Printf(&quot;%v %p \\n&quot;, s2 == nil, &amp;s2) // false 0xc000008108</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var s1 []int</span></span>
<span class="line"><span style="color:#24292e;">s2 := []int{}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">fmt.Printf(&quot;%v %p \\n&quot;, s1 == nil, &amp;s1) // true 0xc0000080f0</span></span>
<span class="line"><span style="color:#24292e;">fmt.Printf(&quot;%v %p \\n&quot;, s2 == nil, &amp;s2) // false 0xc000008108</span></span></code></pre></div><ul><li>nil切片引用数组指针地址为0，而empty切片引用数组地址指向一个固定值，所有empty切片指向的数组的引用地址都是同一个固定值。</li><li>nil切片和empty切片都可以直接<code>append</code></li><li>json序列化的结果会不同 <ul><li>nil -&gt; null</li><li>empty -&gt; []</li></ul></li></ul><h2 id="扩容后的内存容量计算" tabindex="-1">扩容后的内存容量计算 <a class="header-anchor" href="#扩容后的内存容量计算" aria-label="Permalink to &quot;扩容后的内存容量计算&quot;">​</a></h2><p>计算的基本依据：</p><ul><li>旧的cap的两倍是否小于1024</li><li>内存的分配规律</li><li>内存对齐</li></ul><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><h4 id="字面量的一种赋值形式" tabindex="-1">字面量的一种赋值形式 <a class="header-anchor" href="#字面量的一种赋值形式" aria-label="Permalink to &quot;字面量的一种赋值形式&quot;">​</a></h4><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">s1 := []int{0,1,2,8:100} // 0,1,2,0,0,0,0,0,100 直接给下标8赋值</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">s1 := []int{0,1,2,8:100} // 0,1,2,0,0,0,0,0,100 直接给下标8赋值</span></span></code></pre></div><h2 id="文章参考" tabindex="-1">文章参考 <a class="header-anchor" href="#文章参考" aria-label="Permalink to &quot;文章参考&quot;">​</a></h2><ul><li><a href="https://mp.weixin.qq.com/s/u74E8QbLRPl6YAL7PxjwSQ" target="_blank" rel="noreferrer">看完这期图解，别再搞不清切片拷贝了</a></li><li><a href="https://mp.weixin.qq.com/s?__biz=MjM5MDUwNTQwMQ==&amp;mid=2257483743&amp;idx=1&amp;sn=af5059b90933bef5a7c9d491509d56d9&amp;scene=21#wechat_redirect" target="_blank" rel="noreferrer">深度解密Go语言之Slice</a></li><li><a href="https://mp.weixin.qq.com/s/-aOb4i2Zb9P7WLJ6M-NRgg" target="_blank" rel="noreferrer">Go 面试专题 | slice 扩容后的内存容量如何计算？</a></li></ul>`,18),t=[i];function o(p,c,r,d,h,u){return e(),s("div",null,t)}const y=a(n,[["render",o]]);export{m as __pageData,y as default};
