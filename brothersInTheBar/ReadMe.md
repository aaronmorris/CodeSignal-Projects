<div><a href='https://app.codesignal.com/challenge/dHjGPiEYFFcrwKMip' target='_blank'>codeSignal - brothersInTheBar</a></div><br />
<div class="markdown"><p>Three brothers walk into a bar. All the beverages are placed in one line at the long bar table. The size of each glass is represented in an array of integers, <code>glasses</code>.</p>
<p>The brothers will drink a round if they can find <code>3</code> <strong>consecutive</strong> glasses of the same size. The barman removes the empty glasses from the table immediately after each round.</p>
<p>Find the maximum number of rounds the three brothers can drink.</p>
<p><strong>Example</strong></p>
<ul>
<li>
<p>For <code>glasses = [1, 1, 2, 3, 3, 3, 2, 2, 1, 1]</code>, the output should be <code>brothersInTheBar(glasses) = 3</code>.</p>
<p>The brothers can start with a round of size <code>3</code>, then after the glasses are cleared, a round of size <code>2</code> can be formed, followed by a round of size <code>1</code>. One glass will be left at the table.</p>
<p><img src="https://codefightsuserpics.s3.amazonaws.com/tasks/brothersInTheBar/img/brothersInTheBar.png?_tm=1532293407479" alt=""></p>
</li>
<li>
<p>For <code>glasses = [1, 1, 2, 1, 2, 2, 1, 1]</code>, the output should be <code>brothersInTheBar(glasses) = 0</code>.</p>
<p>There are no 3 <strong>consecutive</strong> glasses of the same size.</p>
</li>
</ul>
<p><strong>Input/Output</strong></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] array.integer glasses</strong></p>
<p>The sizes of glasses in the row.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ glasses.length ≤ 10<sup>5</sup></code>,<br>
<code>1 ≤ glasses[i] ≤ 10<sup>6</sup></code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>The maximum number of rounds the brothers can drink.</p>
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