import{_ as a,o as e,c as t,R as r}from"./chunks/framework.LBXiIpgL.js";const u=JSON.parse('{"title":"Transaction 事务","description":"","frontmatter":{},"headers":[],"relativePath":"sql/mysql-transcation.md","filePath":"sql/mysql-transcation.md"}'),i={name:"sql/mysql-transcation.md"},o=r('<h1 id="transaction-事务" tabindex="-1">Transaction 事务 <a class="header-anchor" href="#transaction-事务" aria-label="Permalink to &quot;Transaction 事务&quot;">​</a></h1><h2 id="概论" tabindex="-1">概论 <a class="header-anchor" href="#概论" aria-label="Permalink to &quot;概论&quot;">​</a></h2><ul><li>要么全部成功，要么全部失败（回滚）</li><li>MyISAM不支持事务</li><li>四个特性：原子性、一致性、隔离性、持久性。</li><li><code>begin/start transaction</code> -&gt; <code>commit/rollback</code><ul><li><code>begin</code>并不是事务的开始，之后的第一条执行语句才是。</li></ul></li><li>查询当前事务的数量：<code>select * from information_schema.innodb_trx</code></li></ul><h2 id="现象" tabindex="-1">现象 <a class="header-anchor" href="#现象" aria-label="Permalink to &quot;现象&quot;">​</a></h2><h3 id="脏读" tabindex="-1">脏读 <a class="header-anchor" href="#脏读" aria-label="Permalink to &quot;脏读&quot;">​</a></h3><p>读到了并不一定最终存在的数据：读到了其他事务未提交的数据，而这些数据有可能会被回滚，最终并不会被存到数据库中，成为了不存在的数据。</p><h3 id="幻读" tabindex="-1">幻读 <a class="header-anchor" href="#幻读" aria-label="Permalink to &quot;幻读&quot;">​</a></h3><p>在事务中的不同次的查询中返回了不同的数据集。MySQL利用行锁+间隙锁解决幻读问题（也叫Next-Key锁）</p><h3 id="可重复读" tabindex="-1">可重复读 <a class="header-anchor" href="#可重复读" aria-label="Permalink to &quot;可重复读&quot;">​</a></h3><p>在同一个事务内，任意时刻读到的同一批数据都是一致的。</p><h3 id="不可重复度" tabindex="-1">不可重复度 <a class="header-anchor" href="#不可重复度" aria-label="Permalink to &quot;不可重复度&quot;">​</a></h3><p>在同一个事务内，不同时刻读到的同一批数据可能是不一样的，可能会受到其他事务的影响。</p><h2 id="隔离级别" tabindex="-1">隔离级别 <a class="header-anchor" href="#隔离级别" aria-label="Permalink to &quot;隔离级别&quot;">​</a></h2><h3 id="读未提交-read-uncommited" tabindex="-1">读未提交 Read Uncommited <a class="header-anchor" href="#读未提交-read-uncommited" aria-label="Permalink to &quot;读未提交 Read Uncommited&quot;">​</a></h3><p>可以读到其他事务未提交的数据，但是不一定是其他事务最终提交后的数据。 如果其他事务发生了回滚，就会出现<b>脏读</b>。</p><p><u>不加锁，没什么隔离效果，可以理解为没有隔离</u></p><h3 id="读提交-read-commited" tabindex="-1">读提交 Read Commited <a class="header-anchor" href="#读提交-read-commited" aria-label="Permalink to &quot;读提交 Read Commited&quot;">​</a></h3><p>也称为：不可重复读。 事务内只能读到其他事务已经提交过的数据，解决了脏读，但也导致了同一事务中不同时刻读到的数据是可能不一样的（即不可重复读）。</p><p><u>任何事务对数据的修改都会第一时间暴露给其他事务，即便没有提交</u></p><h3 id="可重复读-repeatable-read" tabindex="-1">可重复读 Repeatable Read <a class="header-anchor" href="#可重复读-repeatable-read" aria-label="Permalink to &quot;可重复读 Repeatable Read&quot;">​</a></h3><p>同一事务在任何时刻读到的数据集都是保持一致的。 可重复读是在事务开始的时候生成了当前事务全局性的快照，而读提交是每次执行语句时都会重新生成一次快照。</p><h3 id="串行化-serializable" tabindex="-1">串行化 Serializable <a class="header-anchor" href="#串行化-serializable" aria-label="Permalink to &quot;串行化 Serializable&quot;">​</a></h3><p>将事务的执行变为顺序执行，等同于单线程执行。写的时候会加排他锁，其他事务不能并发读写。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p>隔离强度越强，性能越差。 事务隔离是通过锁来实现的。</p><p>查询隔离级别：<code>show variables like &#39;transaction_isolation&#39;</code>或<code>show variables like &#39;tx_isolation&#39;</code></p><p>修改隔离级别：<code>set [global] transaction isolation level 新隔离级别 committed</code></p><h2 id="文章推荐-参考" tabindex="-1">文章推荐/参考 <a class="header-anchor" href="#文章推荐-参考" aria-label="Permalink to &quot;文章推荐/参考&quot;">​</a></h2><ul><li><a href="https://zhuanlan.zhihu.com/p/117476959" target="_blank" rel="noreferrer">MySQL事务隔离级别和实现原理</a></li><li><a href="https://mp.weixin.qq.com/s?__biz=MzkyMzU5Mzk1NQ==&amp;mid=2247506911&amp;idx=1&amp;sn=43d2a3e83f70888234f5665f895c2fb6&amp;source=41#wechat_redirect" target="_blank" rel="noreferrer">5000字，10张图，完全掌握 MySQL 事务隔离级别</a></li><li><a href="https://mp.weixin.qq.com/s?__biz=MzkxNTU5MjE0MQ==&amp;mid=2247493041&amp;idx=1&amp;sn=4d9d9d67e1c307edf72caa13371bba53&amp;source=41#wechat_redirect" target="_blank" rel="noreferrer">mysql主库更新后，从库都读到最新值了，主库还有可能读到旧值吗？</a></li></ul>',29),l=[o];function n(d,c,s,h,m,p){return e(),t("div",null,l)}const q=a(i,[["render",n]]);export{u as __pageData,q as default};
