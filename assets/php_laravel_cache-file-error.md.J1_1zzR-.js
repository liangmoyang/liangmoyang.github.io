import{_ as a,o as s,c as l,R as n}from"./chunks/framework.LBXiIpgL.js";const d=JSON.parse('{"title":"Laravel 运行时提示缓存地址错误","description":"","frontmatter":{},"headers":[],"relativePath":"php/laravel/cache-file-error.md","filePath":"php/laravel/cache-file-error.md"}'),o={name:"php/laravel/cache-file-error.md"},e=n(`<h1 id="laravel-运行时提示缓存地址错误" tabindex="-1">Laravel 运行时提示缓存地址错误 <a class="header-anchor" href="#laravel-运行时提示缓存地址错误" aria-label="Permalink to &quot;Laravel 运行时提示缓存地址错误&quot;">​</a></h1><blockquote><p>Laravel版本：5.8</p></blockquote><h2 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题&quot;">​</a></h2><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">Tue</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Nov</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">21</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">21</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">15</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2023</span><span style="color:#E1E4E8;">] </span><span style="color:#79B8FF;">PHP</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Fatal</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">error</span><span style="color:#E1E4E8;">:  </span><span style="color:#79B8FF;">Uncaught</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">InvalidArgumentException</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">Please</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">provide</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">valid</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">cache</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#F97583;">.</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">E</span><span style="color:#E1E4E8;">:\\</span><span style="color:#79B8FF;">code</span><span style="color:#E1E4E8;">\\</span><span style="color:#79B8FF;">aijiajia_evaluate_3.0_api</span><span style="color:#E1E4E8;">\\</span><span style="color:#79B8FF;">vendor</span><span style="color:#E1E4E8;">\\</span><span style="color:#79B8FF;">laravel</span><span style="color:#E1E4E8;">\\</span><span style="color:#79B8FF;">framework</span><span style="color:#E1E4E8;">\\</span><span style="color:#79B8FF;">src</span><span style="color:#E1E4E8;">\\</span><span style="color:#79B8FF;">Illu</span></span>
<span class="line"><span style="color:#79B8FF;">minate</span><span style="color:#E1E4E8;">\\</span><span style="color:#79B8FF;">View</span><span style="color:#E1E4E8;">\\</span><span style="color:#79B8FF;">Compilers</span><span style="color:#E1E4E8;">\\</span><span style="color:#79B8FF;">Compiler</span><span style="color:#F97583;">.</span><span style="color:#79B8FF;">php</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">36</span></span>
<span class="line"><span style="color:#79B8FF;">Stack</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">trace</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#6A737D;">#0 E:\\code\\aijiajia_evaluate_3.0_api\\vendor\\laravel\\framework\\src\\Illuminate\\View\\ViewServiceProvider.php(141): Illuminate\\View\\Compilers\\Compiler-&gt;__construct(Object(Illuminate\\Filesys</span></span>
<span class="line"><span style="color:#79B8FF;">tem</span><span style="color:#E1E4E8;">\\</span><span style="color:#79B8FF;">Filesystem</span><span style="color:#E1E4E8;">), </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">#1 E:\\code\\aijiajia_evaluate_3.0_api\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\Container.php(785): Illuminate\\View\\ViewServiceProvider-&gt;Illuminate\\View\\{closure}(Object(Illumina</span></span>
<span class="line"><span style="color:#79B8FF;">te</span><span style="color:#E1E4E8;">\\</span><span style="color:#79B8FF;">Foundation</span><span style="color:#E1E4E8;">\\</span><span style="color:#79B8FF;">Application</span><span style="color:#E1E4E8;">), </span><span style="color:#F97583;">Array</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">#2 E:\\code\\aijiajia_evaluate_3.0_api\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\Container.php(667): Illuminate\\Container\\Container-&gt;build(Object(Closure))</span></span>
<span class="line"><span style="color:#6A737D;">#3 E:\\code\\aijiajia_evaluate_3.0_api\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\Container.php(615): Illuminate\\Container\\Container-&gt;resolve(&#39;blade.compiler&#39;, Array)</span></span>
<span class="line"><span style="color:#6A737D;">#4 E:\\code\\aijiajia_evaluate_3.0_api\\vendor\\laravel\\framework\\src\\Illu in E:\\code\\aijiajia_evaluate_3.0_api\\vendor\\laravel\\framework\\src\\Illuminate\\View\\Compilers\\Compiler.php on line 3</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[</span><span style="color:#005CC5;">Tue</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Nov</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">21</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">21</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">15</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2023</span><span style="color:#24292E;">] </span><span style="color:#005CC5;">PHP</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Fatal</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">error</span><span style="color:#24292E;">:  </span><span style="color:#005CC5;">Uncaught</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">InvalidArgumentException</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">Please</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">provide</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">a</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">valid</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">cache</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">path</span><span style="color:#D73A49;">.</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">in</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">E</span><span style="color:#24292E;">:\\</span><span style="color:#005CC5;">code</span><span style="color:#24292E;">\\</span><span style="color:#005CC5;">aijiajia_evaluate_3.0_api</span><span style="color:#24292E;">\\</span><span style="color:#005CC5;">vendor</span><span style="color:#24292E;">\\</span><span style="color:#005CC5;">laravel</span><span style="color:#24292E;">\\</span><span style="color:#005CC5;">framework</span><span style="color:#24292E;">\\</span><span style="color:#005CC5;">src</span><span style="color:#24292E;">\\</span><span style="color:#005CC5;">Illu</span></span>
<span class="line"><span style="color:#005CC5;">minate</span><span style="color:#24292E;">\\</span><span style="color:#005CC5;">View</span><span style="color:#24292E;">\\</span><span style="color:#005CC5;">Compilers</span><span style="color:#24292E;">\\</span><span style="color:#005CC5;">Compiler</span><span style="color:#D73A49;">.</span><span style="color:#005CC5;">php</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">36</span></span>
<span class="line"><span style="color:#005CC5;">Stack</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">trace</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#6A737D;">#0 E:\\code\\aijiajia_evaluate_3.0_api\\vendor\\laravel\\framework\\src\\Illuminate\\View\\ViewServiceProvider.php(141): Illuminate\\View\\Compilers\\Compiler-&gt;__construct(Object(Illuminate\\Filesys</span></span>
<span class="line"><span style="color:#005CC5;">tem</span><span style="color:#24292E;">\\</span><span style="color:#005CC5;">Filesystem</span><span style="color:#24292E;">), </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">#1 E:\\code\\aijiajia_evaluate_3.0_api\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\Container.php(785): Illuminate\\View\\ViewServiceProvider-&gt;Illuminate\\View\\{closure}(Object(Illumina</span></span>
<span class="line"><span style="color:#005CC5;">te</span><span style="color:#24292E;">\\</span><span style="color:#005CC5;">Foundation</span><span style="color:#24292E;">\\</span><span style="color:#005CC5;">Application</span><span style="color:#24292E;">), </span><span style="color:#D73A49;">Array</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">#2 E:\\code\\aijiajia_evaluate_3.0_api\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\Container.php(667): Illuminate\\Container\\Container-&gt;build(Object(Closure))</span></span>
<span class="line"><span style="color:#6A737D;">#3 E:\\code\\aijiajia_evaluate_3.0_api\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\Container.php(615): Illuminate\\Container\\Container-&gt;resolve(&#39;blade.compiler&#39;, Array)</span></span>
<span class="line"><span style="color:#6A737D;">#4 E:\\code\\aijiajia_evaluate_3.0_api\\vendor\\laravel\\framework\\src\\Illu in E:\\code\\aijiajia_evaluate_3.0_api\\vendor\\laravel\\framework\\src\\Illuminate\\View\\Compilers\\Compiler.php on line 3</span></span></code></pre></div><h2 id="解决" tabindex="-1">解决 <a class="header-anchor" href="#解决" aria-label="Permalink to &quot;解决&quot;">​</a></h2><p><code>storage</code>文件夹下，新建<code>framework/views</code>文件夹即可。</p>`,6),p=[e];function r(t,c,i,y,E,C){return s(),l("div",null,p)}const v=a(o,[["render",r]]);export{d as __pageData,v as default};
