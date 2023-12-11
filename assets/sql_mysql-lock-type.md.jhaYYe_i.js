import{_ as e,o as a,c as o,R as t}from"./chunks/framework.LBXiIpgL.js";const p=JSON.parse('{"title":"不同的锁","description":"","frontmatter":{},"headers":[],"relativePath":"sql/mysql-lock-type.md","filePath":"sql/mysql-lock-type.md"}'),l={name:"sql/mysql-lock-type.md"},r=t(`<h1 id="不同的锁" tabindex="-1">不同的锁 <a class="header-anchor" href="#不同的锁" aria-label="Permalink to &quot;不同的锁&quot;">​</a></h1><h2 id="s锁-share-lock-共享锁-读锁" tabindex="-1">S锁 / Share Lock / 共享锁 / 读锁 <a class="header-anchor" href="#s锁-share-lock-共享锁-读锁" aria-label="Permalink to &quot;S锁 / Share Lock / 共享锁 / 读锁&quot;">​</a></h2><p><code>share mode</code> 或者 <code>for share</code></p><h2 id="x锁-exclusive-lock-独占锁-写锁" tabindex="-1">X锁 / Exclusive Lock / 独占锁 / 写锁 <a class="header-anchor" href="#x锁-exclusive-lock-独占锁-写锁" aria-label="Permalink to &quot;X锁 / Exclusive Lock / 独占锁 / 写锁&quot;">​</a></h2><p><code>for update</code></p><h2 id="乐观锁" tabindex="-1">乐观锁 <a class="header-anchor" href="#乐观锁" aria-label="Permalink to &quot;乐观锁&quot;">​</a></h2><p>使用CAS机制，采用类似版本号比较之类的操作（不会死锁）</p><h2 id="悲观锁" tabindex="-1">悲观锁 <a class="header-anchor" href="#悲观锁" aria-label="Permalink to &quot;悲观锁&quot;">​</a></h2><p>在修改数据之前，先尝试为该数据加上排他锁。（先锁，后操作，有死锁的可能）</p><h2 id="死锁" tabindex="-1">死锁 <a class="header-anchor" href="#死锁" aria-label="Permalink to &quot;死锁&quot;">​</a></h2><ul><li>死锁检测<code>show engine innodb status/G</code></li><li>开启死锁检测参数<code>innodb_deadlock_detect</code>:<code>on</code></li><li>出现死锁后的解决策略： <ul><li>进入等到直到超时，超时设置<code>innodb_lock_wait_timeout</code>，默认50s</li><li>主动回滚死锁链条中的某个事务，给其他事务的执行让路</li></ul></li></ul><h2 id="全局锁" tabindex="-1">全局锁 <a class="header-anchor" href="#全局锁" aria-label="Permalink to &quot;全局锁&quot;">​</a></h2><p>对整个数据库实例加锁，是粒度最大的锁。加锁后，只能做读操作，所有写操作都会被阻塞。常用于全库备份时。 <code>flush table with read lock</code> <code>unlcok tables</code></p><h2 id="表级锁" tabindex="-1">表级锁 <a class="header-anchor" href="#表级锁" aria-label="Permalink to &quot;表级锁&quot;">​</a></h2><p>对整张表加锁。读/写锁除了会限制其他线程的操作外，还会限制<b>加锁线程</b>的行为。 <code>lock tables TABLE_NAME wirte</code> <code>lock tables TABLE_NAME read</code> <code>unlock tables</code></p><h2 id="mdl元数据锁" tabindex="-1">MDL元数据锁 <a class="header-anchor" href="#mdl元数据锁" aria-label="Permalink to &quot;MDL元数据锁&quot;">​</a></h2><p>metadata lock，5.5版本引进。不需要像表锁那样显式地加锁和解锁，而是在访问表时自动加上。</p><blockquote><p>MDL读锁之间不互斥，也就是说，允许多个线程同时对加了MDL读锁的表结构进行CRUD操作。 MDL写锁，它和读锁、写锁都是互斥的，目的是用来保证变更表结构操作的安全性。也就是说，当对表结构进行变更时，会被默认加上MDL写锁，因此如果有两个线程要同时给一个表加字段，其中一个要等另一个执行完才能开始执行。 MDL读写锁是在事务commit之后才会被释放。</p></blockquote><h2 id="意向锁" tabindex="-1">意向锁 <a class="header-anchor" href="#意向锁" aria-label="Permalink to &quot;意向锁&quot;">​</a></h2><p>intention lock，属于表锁</p><h2 id="auto-inc锁" tabindex="-1">AUTO-INC锁 <a class="header-anchor" href="#auto-inc锁" aria-label="Permalink to &quot;AUTO-INC锁&quot;">​</a></h2><p>特殊的表级锁</p><h2 id="行锁" tabindex="-1">行锁 <a class="header-anchor" href="#行锁" aria-label="Permalink to &quot;行锁&quot;">​</a></h2><pre><code>MySQL的行锁是在引擎层实现的，InnoDB支持，MyISAM不支持。
</code></pre><h4 id="记录锁-record-lock" tabindex="-1">记录锁 Record Lock <a class="header-anchor" href="#记录锁-record-lock" aria-label="Permalink to &quot;记录锁 Record Lock&quot;">​</a></h4><h4 id="间隙锁-gap-lock" tabindex="-1">间隙锁 Gap Lock <a class="header-anchor" href="#间隙锁-gap-lock" aria-label="Permalink to &quot;间隙锁 Gap Lock&quot;">​</a></h4><h4 id="插入意向锁-insert-intention-lock" tabindex="-1">插入意向锁 Insert Intention Lock <a class="header-anchor" href="#插入意向锁-insert-intention-lock" aria-label="Permalink to &quot;插入意向锁 Insert Intention Lock&quot;">​</a></h4><p>是一种特殊的间隙锁</p><h4 id="临建锁-next-key-lock" tabindex="-1">临建锁 Next-Key Lock <a class="header-anchor" href="#临建锁-next-key-lock" aria-label="Permalink to &quot;临建锁 Next-Key Lock&quot;">​</a></h4><h2 id="文章参考-推荐" tabindex="-1">文章参考/推荐 <a class="header-anchor" href="#文章参考-推荐" aria-label="Permalink to &quot;文章参考/推荐&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/7200264747450531897" target="_blank" rel="noreferrer">图解+示例，彻底把 MySQL锁搞懂了！</a></li></ul>`,31),c=[r];function i(n,d,h,s,k,u){return a(),o("div",null,c)}const q=e(l,[["render",i]]);export{p as __pageData,q as default};
