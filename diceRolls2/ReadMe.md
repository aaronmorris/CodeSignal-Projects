<div><a href="https://codefights.com/challenge/x5BYvZjQDmQDDb5F9" target="_blank">Code Fights - diceRolls2</a></div>
<br />
<div><p><strong>I have no idea how to solve this</strong></p></div>
<br />
<div class="markdown"><p>The <a href="https://codefights.com/challenge/vkYjc6mY5oeAbFyEG" target="_blank">last time</a> you wagered on a dice game, you ended up losing pretty badly. This time, you'd like to strategize by choosing the sum that's most likely to be rolled.</p>
<p>Given an array <code>dice</code> of arrays of integers representing the face values for each die, find the total value that's most probable.</p>
<p>Assume a <a href="keyword://discrete-uniform-distribution" target="_blank">discrete uniform distribution</a> for each die. If there are multiple answers, choose the smallest one.</p>
<p><strong>Example</strong></p>
<ul>
<li>
<p>For <code>dice = [[1, 2], [3, 4]]</code>, the output should be <code>diceRolls2(dice) = 5</code>.</p>
<p>There are four possible outcomes:</p>
<ul>
<li><code>1 + 3 = 4</code></li>
<li><code>1 + 4 = 5</code></li>
<li><code>2 + 3 = 5</code></li>
<li><code>2 + 4 = 6</code></li>
</ul>
<p>Since there are 2 ways to roll a <code>5</code>, it's the most probable sum.</p>
</li>
<li>
<p>For <code>dice = [[1, 2, 5], [2, 3, 7]]</code>, the output should be <code>diceRolls2(dice) = 4</code>.</p>
<p>There are two most probable sums: <code>4</code> (<code>1 + 3</code> and <code>2 + 2</code>) and <code>8</code> (<code>1 + 7</code> and <code>5 + 3</code>). Since <code>4</code> is smaller, it's the answer.</p>
</li>
</ul>
<p><strong>Input / Output</strong></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] array.array.integer dice</strong></p>
<p>An array of arrays of integers representing the face values of each die. The values of each die are arranged in non-decreasing order.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ dice.length ≤ 100</code><br>
<code>1 ≤ dice[i].length ≤ 100</code><br>
<code>0 ≤ dice[i][j] ≤ 5 · 10<sup>4</sup></code></p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>An integer representing the number you should bet on (ie: the most probable number to appear by rolling <code>dice</code>).</p>
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