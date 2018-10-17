<div><a href="https://app.codesignal.com/challenge/QMz3QA6eedRtf4Fds" target="_blank">Code Signal - frisbees</a></div>
<div class="markdown"><p>You and your friends are seizing another summer day, passing around the frisbee in the park. You have the most fun when the game is fair, so as much as possible, you would all like to ensure that everyone receives the disc an equal number of times. You also like to challenge yourselves, so when possible, you'll go for the longest pass you can throw.</p>
<p>So each friend will throw according to the following rules:</p>
<ul>
<li>Pass to the friend who has held the frisbee the least amount of times.</li>
<li>In the event of a tie, pass to the furthest among these friends you can reach.</li>
<li>If there's also a tie for furthest, pass to the one of these friends with the lowest index.</li>
</ul>
<p>Given an array <code>friends</code> containing info about each player (where they're standing and how far they can throw), as well as the index of the starting player and the total number of passes, your task is to find which player will be holding the frisbee after all the passes are complete.</p>
<p><em>NOTE: Because you and your friends are really good at frisbee, it's safe to assume that all passes will be completed successfully; none of you will fumble a throw or catch.</em></p>
<p><strong>Example</strong></p>
<ul>
<li>
<p>For <code>friends = [[152, 213, 276], [274, 259, 151], [40, 57, 130], [203, 87, 189], [43, 182, 163]]</code>, <code>numberOfPasses = 19</code>, and <code>startingPlayer = 4</code>, the output should be <code>frisbees(friends, numberOfPasses, startingPlayer) = 4</code>.</p>
<p><img src="https://i.imgur.com/uN68rOp.gif" alt="example"></p>
<p>After 19 passes, player <code>4</code> holds the frisbee.</p>
</li>
</ul>
<p><strong>Input / Output</strong></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] array.array.integer friends</strong></p>
<p>An array containing 3-element arrays with info about each player, of the form <code>[xCoordinate, yCoordinate, throwingRange]</code>. It's guaranteed that no player can reach more than <code>400</code> friends or fewer than <code>1</code> friend. It's not guaranteed that every player will receive the disc.</p>
<p><em>Guaranteed constraints:</em><br>
<code>2 ≤ friends.length ≤ 5000</code><br>
<code>friends[i].length = 3</code><br>
<code>0 ≤ friends[i][0] ≤ 400</code><br>
<code>0 ≤ friends[i][1] ≤ 400</code><br>
<code>0 ≤ friends[i][2] ≤ 400</code></p>
</li>
<li>
<p><strong>[input] integer numberOfPasses</strong></p>
<p>An integer representing the total number of times the disc was passed.</p>
<p><em>Guaranteed constraints:</em><br>
<code>0 ≤ numberOfPasses ≤ 2500</code></p>
</li>
<li>
<p><strong>[input] integer startingPlayer</strong></p>
<p>An integer representing the index of the player who starts with the frisbee.</p>
<p><em>Guaranteed constraints:</em><br>
<code>0 ≤ startingPlayer &lt; friends.length</code></p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>The index of the player that will hold the frisbee after all the passes have been completed.</p>
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