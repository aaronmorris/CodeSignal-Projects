<div><a href="https://app.codesignal.com/challenge/8FdeLisamv6cFZPAc" target="_blank">Code Signal - smallestProduct</a></div>
<div>I never got this one finished</div>
<div class="markdown"><p>Hi all, I have a tiny challenge for all of you today. I was given some arrays of integers and my mission is to find the smallest product of <code>3</code> elements in an array. I will need your help on this problem.</p>
<p>Please note that our integers can be negative and positive.</p>
<p><strong>Examples</strong></p>
<ul>
<li>
<p>For <code>arr = [1, 2, 3]</code>, the output should be <code>smallestProduct(arr) = 6</code></p>
<p>The only option is <code>1 * 2 * 3 = 6</code>.</p>
</li>
<li>
<p>For <code>arr = [-1, 0, -2, 3]</code>, the output should be <code>smallestProduct(arr) = 0</code></p>
<p>There are four possible products, and the smallest one is <code>0</code>:</p>
<ul>
<li><code>-1 * 0 * -2 = 0</code></li>
<li><code>-1 * 0 * 3 = 0</code></li>
<li><code>-1 * -2 * 3 = 6</code></li>
<li><code>0 * -2 * 3 = 0</code></li>
</ul>
</li>
</ul>
<p><strong>Input/Output</strong></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] array.integer arr</strong></p>
<p>An array of integers.</p>
<p><em>Guaranteed constraints:</em><br>
<code>3 ≤ arr.length ≤ 10<sup>5</sup></code><br>
<code> -10<sup>3</sup> ≤ arr[i] ≤ 10<sup>3</sup></code></p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>The smallest product of any 3 elements in the given array.</p>
</li>
</ul>
<p><strong>[JavaScript (ES6)] Syntax Tips</strong></p>
<pre><code class="language-javascript"><span class="hljs-comment">// Prints help message to the console</span>
<span class="hljs-comment">// Returns a string</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">helloWorld</span>(<span class="hljs-params">name</span>) </span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"This prints to the console when you Run Tests"</span>);
    <span class="hljs-keyword">return</span> <span class="hljs-string">"Hello, "</span> + name;
}

</code></pre>
</div>