import{_ as s,o as a,c as e,R as l}from"./chunks/framework.LBXiIpgL.js";const E=JSON.parse('{"title":"Laravel 解决CORS重复配置问题","description":"","frontmatter":{},"headers":[],"relativePath":"php/Laravel/cors-repeat.md","filePath":"php/Laravel/cors-repeat.md"}'),o={name:"php/Laravel/cors-repeat.md"},p=l(`<h1 id="laravel-解决cors重复配置问题" tabindex="-1">Laravel 解决CORS重复配置问题 <a class="header-anchor" href="#laravel-解决cors重复配置问题" aria-label="Permalink to &quot;Laravel 解决CORS重复配置问题&quot;">​</a></h1><blockquote><p>Laravel版本：10.23.1</p></blockquote><h2 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题&quot;">​</a></h2><p>在使用Laravel处理CORS问题时，如果自定义了新的中间件去处理的话，就会出现下面的报错：</p><div class="language-base vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">base</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Access to XMLHttpRequest at &#39;https://api.com/xxx&#39; from origin &#39;https://api.com/&#39; has been blocked by CORS policy: </span></span>
<span class="line"><span style="color:#e1e4e8;">The &#39;Access-Control-Allow-Origin&#39; header contains multiple values &#39;https://api.com/xxx, *&#39;, but only one is allowed.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Access to XMLHttpRequest at &#39;https://api.com/xxx&#39; from origin &#39;https://api.com/&#39; has been blocked by CORS policy: </span></span>
<span class="line"><span style="color:#24292e;">The &#39;Access-Control-Allow-Origin&#39; header contains multiple values &#39;https://api.com/xxx, *&#39;, but only one is allowed.</span></span></code></pre></div><p>  这里的意思是Origin的标头只允许有一个值，但是却设置了两个。</p><p>  这是因为：Laravel自带了一个CORS的中间件，里面的默认值是<code>*</code>，而在开发的过程中，我们往往会自定义中间件来根据请求者的Origin来设置Header，这就会造成了Origin参数的重复。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">header</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Access-Control-Allow-Origin: &quot;</span><span style="color:#F97583;">.</span><span style="color:#E1E4E8;"> $request</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">header</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Origin&quot;</span><span style="color:#E1E4E8;">));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">header</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Access-Control-Allow-Origin: &quot;</span><span style="color:#D73A49;">.</span><span style="color:#24292E;"> $request</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">header</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Origin&quot;</span><span style="color:#24292E;">));</span></span></code></pre></div><h2 id="解决方法" tabindex="-1">解决方法 <a class="header-anchor" href="#解决方法" aria-label="Permalink to &quot;解决方法&quot;">​</a></h2><p>  默认的CORS中间件在<code>config/cors.php</code>，但通常不需要去修改它。我们只需要在<code>app/Http/Kernel.php</code>中找到<code>$middleware</code>，并注释掉默认的配置行<code>HandleCors::class</code>：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">protected</span><span style="color:#E1E4E8;"> $middleware </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \\Illuminate\\Http\\Middleware\\HandleCors::class // 注释这一行</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">protected</span><span style="color:#24292E;"> $middleware </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \\Illuminate\\Http\\Middleware\\HandleCors::class // 注释这一行</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">];</span></span></code></pre></div><h2 id="补充" tabindex="-1">补充 <a class="header-anchor" href="#补充" aria-label="Permalink to &quot;补充&quot;">​</a></h2><p>  自定义的中间件，也是在<code>app/Http/Kernel.php</code>的<code>$middleware</code>中声明调用的。</p>`,13),n=[p];function t(c,r,i,d,h,y){return a(),e("div",null,n)}const g=s(o,[["render",t]]);export{E as __pageData,g as default};
