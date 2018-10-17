<div><a href="https://app.codesignal.com/challenge/fy3iZcCkd54Ef3AjC" target="_blank">Code Signal - charLocation</a></div>
<div><strong>Not working</strong></div>
<div class="markdown"><p>On a hot summer day, you and some friends are hanging out at a camping ground. While foraging for food, you eat an unusual looking mushroom and you start to feel a little funny.</p>
<p>Later, back at the camp site, while relaxing in the shade, you spot a snake slithering towards your tent. Your friends freak out and try to find an employee of the premises, while you stay behind to keep an eye on the snake. While admiring its beauty, you start seeing the shapes on the snake's back as if they were characters of text. Maybe it's trying to tell you something!</p>
<p><img src="https://i.imgur.com/byMektW.png" alt="snake"></p>
<p>As the snake is closing in with its famous 'S' shaped curves, you find yourself wondering if you can find all the occurrences of the same character you recognize on the snake's back.</p>
<p>To make it easier, you imagine a column-limited text box filled in a snake-like pattern. That is, in the first line, text goes from left to right. In the second line, text goes from right to left. Third line left to right and so on. The head of snake is at <code>(0, 0)</code>.</p>
<p>Your goal is to find the coordinates of all the occurrences of a given character. Since you're able to read upside-down, don't worry about the direction / orientation of the character.</p>
<p>Return the answer in sorted order (by the row number first, then the column).</p>
<p><strong>Examples</strong></p>
<ul>
<li>
<p>For <code>tex = "I always wondered why I came to this world."</code>, <code>wid = 14</code> and <code>ch = "w"</code>, the output should be <code>charLocation(tex, wid, ch) = [[0, 4], [0, 9], [1, 9], [2, 9]]</code></p>
<p>The snake's text will look like this:</p>
<pre><code>I always wonde
emac I yhw der
 to this world
             .
</code></pre>
<p>There are 2 <code>"w"</code>'s in row <code>0</code>, at columns <code>4</code> and <code>9</code>, and there are also <code>"w"</code>'s in column <code>9</code> or rows <code>1</code> and <code>2</code>. So the answer is <code>[[0, 4], [0, 9], [1, 9], [2, 9]]</code>.</p>
</li>
<li>
<p>For <code>tex = "Why is it taking my friends so long, I'm going to die here if they don't hurry up."</code>, <code>wid = 30</code> and <code>ch = "'"</code>, the output should be <code>charLocation(tex, wid, ch) = [[1, 21], [2, 10]]</code></p>
<p>The snake text looks like this:</p>
<pre><code>Why is it taking my friends so
i ereh eid ot gniog m'I ,gnol 
f they don't hurry up.
</code></pre>
<p>There are only two apostrophes: one on row <code>1</code> at column <code>21</code>, and one on row <code>2</code> at column <code>10</code>.</p>
</li>
</ul>
<p><strong>Input / Output</strong></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] string tex</strong></p>
<p>A string of text containing English letters, numbers, punctuation, and whitespace.</p>
<p><em>Guaranteed constraints:</em><br>
<code>0 ≤ tex.length ≤ 1000</code><br>
<code>tex[i] ∈ {"A - Z", "a - z", "0 - 9", "()[]:;.,-'!", space}</code></p>
</li>
<li>
<p><strong>[input] integer wid</strong></p>
<p>A number representing the width of lines the snake makes.</p>
<p><em>Guaranteed constraints:</em><br>
<code>0 &lt; wid ≤ 150</code></p>
</li>
<li>
<p><strong>[input] char ch</strong></p>
<p>One character you are trying to find on the snake.</p>
<p><em>Guaranteed constraints:</em><br>
<code>ch ∈ {"A - Z", "a - z", "0 - 9", "()[]:;.,-'!", space}</code></p>
</li>
<li>
<p><strong>[output] array.array.integer</strong></p>
<p>An array of 2-element arrays representing the coordinates of all the occurrences of a character (sorted first by row, then by column).</p>
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