<div><a href="https://app.codesignal.com/challenge/NnuZsrqSTc8bxuuh8" target="_blank">Code Signal - makeFunNotWar</a></div>
<div><strong>Not working - works in most simple cases</strong></div>
<div class="markdown"><p>Your friend comes over for game night. You have a deck of cards and you two decide to play <a href="https://en.wikipedia.org/wiki/War_(card_game)" target="_blank">War</a>. There are many variations, but we'll be playing with the following rules:</p>
<ul>
<li>The deck is divided evenly among the players, giving each a down stack.</li>
<li>In unison, each player reveals the top card of their deck—this is a "battle"—and the player with the higher card takes both of the cards played and moves them to a discard pile (of their own); Aces are high, and suits are ignored.</li>
<li>If the two cards played are of equal value, then there is a "war". Both players place the next 3 cards of their pile face down and then another card face-up. The owner of the higher face-up card wins the war and adds all cards (the original 2, the face down 6, and the final 2) to the pile of discards (their winnings).</li>
<li>If the face-up cards are again equal then the battle repeats with another set of face-down / up cards. This repeats until one player's face-up card is higher than their opponent's.</li>
</ul>
<p>This seems a little boring, so your friend wants to make it more interesting. She suggests if both of your cards have the same suit, the <em>lower</em> number wins, just to keep it fresh. You agree and tell her to bring it on.</p>
<p>You are given two arrays of strings, representing each player's deck of cards. The arrays are formatted like this:</p>
<p><code>["3H","10C", "AD","JS"]</code></p>
<p>Your task is to determine the number of cards each player has in their discarded pile (all of their 'winnings') and output an array of integers in the form:</p>
<p><code>[Player1 earnings, Player2 earnings]</code></p>
<p><strong>NOTE:</strong></p>
<ul>
<li>The top of the pile is index <code>0</code> in the array.</li>
<li>It is guaranteed that you won't run out of cards during a war.</li>
<li>This is <em>not</em> a standard deck; repeats are allowed.</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em;">Example</span></p>
<ul>
<li>
<p>For: <code>p1Cards = ["3H", "10C", "AD", "JS"]</code> and <code>p2Cards = ["2D", "8S", "KH", "8C"]</code>, the output should be <code>makeFunNotWar(p1Cards, p2Cards) = [8, 0]</code></p>
<table>
<thead>
<tr>
<th>Player 1</th>
<th>Player 2</th>
<th>Winner</th>
<th>Points</th>
</tr>
</thead>
<tbody>
<tr>
<td>3H</td>
<td>2D</td>
<td>3H (Player 1)</td>
<td>[2,0]</td>
</tr>
<tr>
<td>10C</td>
<td>8S</td>
<td>10C (Player 1)</td>
<td>[4,0]</td>
</tr>
<tr>
<td>AD</td>
<td>KH</td>
<td>AD (Player 1)</td>
<td>[6,0]</td>
</tr>
<tr>
<td>JS</td>
<td>8C</td>
<td>JS (Player 1)</td>
<td>[8,0]</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>For <code>p1Cards = ["2D", "7H", "JD", "3C"]</code> and <code>p2Cards: ["3H", "10C", "AD", "JS"]</code>, the output should be <code>makeFunNotWar(p1Cards, p2Cards) = [2, 6]</code></p>
<table>
<thead>
<tr>
<th>Player 1</th>
<th>Player 2</th>
<th>Winner</th>
<th>Points</th>
</tr>
</thead>
<tbody>
<tr>
<td>2D</td>
<td>3H</td>
<td>3H (Player 2)</td>
<td>[0,2]</td>
</tr>
<tr>
<td>7H</td>
<td>10C</td>
<td>10C (Player 2)</td>
<td>[0,4]</td>
</tr>
<tr>
<td>JD</td>
<td>AD</td>
<td>JD (Player 1) NOTE THE SUIT</td>
<td>[2,4]</td>
</tr>
<tr>
<td>3C</td>
<td>JS</td>
<td>JS (Player 2)</td>
<td>[2,6]</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>For <code>p1Cards = ["5H", "3C", "4C", "5C", "JD"]</code> and <code>p2Cards = ["5H", "5C", "8C", "9C", "7D"]</code>, the output should be <code>[0, 10]</code></p>
<table>
<thead>
<tr>
<th>Player 1</th>
<th>Player 2</th>
<th>Winner</th>
<th>Points</th>
</tr>
</thead>
<tbody>
<tr>
<td>5H</td>
<td>5H</td>
<td>WAR</td>
<td>[0,0]</td>
</tr>
<tr>
<td>3C</td>
<td>5C</td>
<td>Place</td>
<td>[0,0]</td>
</tr>
<tr>
<td>4C</td>
<td>8C</td>
<td>Place</td>
<td>[0,0]</td>
</tr>
<tr>
<td>5C</td>
<td>9C</td>
<td>Place</td>
<td>[0,0]</td>
</tr>
<tr>
<td>JD</td>
<td>7D</td>
<td>7D (Player 2) is winner of war. Note suit</td>
<td>[0,10]</td>
</tr>
</tbody>
</table>
</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em;">Input / Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] array.string p1Cards</strong></p>
<p>An array of strings representing the first player's hand.</p>
<p><em>Guaranteed constraints:</em><br>
<code>0 ≤ p1Cards.length ≤ 3 · 10<sup>4</sup></code><br>
<code>2 ≤ p1Cards[i].length ≤ 3</code></p>
</li>
<li>
<p><strong>[input] array.string p2Cards</strong></p>
<p>An array of strings representing the second player's hand.</p>
<p><em>Guaranteed constraints:</em><br>
<code>p2Cards.length = p1Cards.length</code><br>
<code>2 ≤ p2Cards[i].length ≤ 3</code></p>
</li>
<li>
<p><strong>[output] array.integer</strong></p>
<ul>
<li>A 2-element array representing the final scores of the game.</li>
</ul>
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