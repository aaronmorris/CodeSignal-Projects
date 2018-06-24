<div><a href="https://codefights.com/challenge/pcHsPcqKBoiQjJyCx" tareget="_blank">Code Fights - alternatingKeys</a></div>
<div class="markdown"><p>You're a pretty fast typer - each keystroke takes you 75 milliseconds, but if you're able to use a different hand than the previous key, it only takes you 50.</p>
<p>You use your left hand for the Q, W, E, R, T, A, S, D, F, G, Z, X, C, V, and B keys, and you use your right hand for the Y, U, I, O, P, H, J, K, L, N, and M keys. You can use either hand for the spacebar.</p>
<p><img src="https://i.imgur.com/X1BGCyc.png" alt="keyboard layout"><br>
<em>Note: for the purpose of this challenge, we'll ignore all other keys.</em></p>
<p>Given a string <code>text</code>, find the shortest time it'll take for you to type it out (in milliseconds). The first keystroke always takes 50ms.</p>
<p><strong>Example</strong></p>
<ul>
<li>
<p>For <code>text = "abc"</code>, the output should be <code>alternatingKeys(text) = 200</code>.</p>
<p>The first keystroke always takes 50ms, but since you need to use your left hand again for the <code>b</code> and <code>c</code> keys, each of those keystrokes will take 75ms, for a total of <code>50 + 75 + 75 = 200</code>.</p>
</li>
<li>
<p>For <code>text = "land"</code>, the output should be <code>alternatingKeys(text) = 200</code>.</p>
<p>Again, the first keystroke will take 50ms, but since each key alternates between your left and right hand, they'll each only take 50ms, for a total of <code>50 + 50 + 50 + 50 = 200</code>.</p>
</li>
</ul>
<p><strong>Input / Output</strong></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] string text</strong></p>
<p>A string representing the text you're trying to type. Consists of lowercase letters and spaces.</p>
<p><em>Guaranteed constraints:</em><br>
<code>0 ≤ text.length ≤ 10<sup>5</sup></code></p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>An integer representing the minimum number of milliseconds it'll take you to type out <code>text</code>.</p>
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