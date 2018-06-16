<div class="split-panel--first -layout -vertical -flex -relative" style="flex-basis: 40%;"><div class="-fit -layout-v"><div class="-layout-v -flex -bg-white"><div class="tabs -view-ide"><div class="-layout -center"><div class="-layout -center"><div class="icon -size-16 -disabled -on-click"><div class="-layout-h -center"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M19.1 3.2L10.32 12l8.78 8.8-2.7 2.7L4.9 12 16.4.5l2.7 2.7z"></path></svg></div></div></div><div class="tabs--wrapper -layout"><div class="tabs--tabs -layout"><div class="tabs--tab -layout -center -active"><div class="tabs--title">Description</div></div><div class="tabs--tab -layout -center"><div class="tabs--title"><span class="-nowrap">My solutions</span></div></div><div class="tabs--tab -layout -center"><div class="tabs--title">Leaderboard</div></div><div class="tabs--tab -layout -center"><div class="tabs--title">Comments</div></div><div class="tabs--tab -layout -center"><div class="tabs--title">Readme</div></div></div></div><div class="-layout -center"><div class="icon -size-16 -on-click"><div class="-layout-h -center"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M4.9 20.8l8.78-8.8L4.9 3.2 7.6.5 19.1 12 7.6 23.5l-2.7-2.7z"></path></svg></div></div></div><div class="-layout -center -flex -space -margin-h-16 -self-stretch"><div class="-flex"></div><div class="task-left--pill"><div class="pill -view-ide -theme-dark -size-24 -layout-inline -center-center"><div class="-layout-h -center -space-h-8">CODEWRITING</div></div></div></div></div><div class="tabs--line-bottom"></div></div><div class="-flex -relative"><div class="-fit -scroll"><div class="-layout-v -fit"><div class="-flex -scroll -padding-16"><div class="markdown"><p>Your rocket has arrived safely back to your home on Earth's moon, and you've already received a letter from one of your Martian pen pals! You're excited to read what it says but the text is encrypted, so you'll need to figure out the secret cipher (a number that can be used to decode the message).</p>
<p>To help you find the secret cipher, your pen pal enclosed some hints:</p>
<ul>
<li>The number has <code>numberLength</code> digits (with no leading zeroes)</li>
<li>The digits of the number add up to <code>sumOfDigits</code></li>
<li>It's the <code>k</code>th-largest number with this property (0-based)</li>
<li>If there are less than <code>k</code> of these numbers, just keep repeating the sequence</li>
</ul>
<p>Follow your pen pal's clues to find the secret cipher!</p>
<p><em>Note: there's a chance that your pen pal made a mistake in their haste to send out the message, so it might not be possible to find a number that's consistent with the clues. In this case, return <code>-1</code>.</em></p>
<p><strong>Example</strong></p>
<ul>
<li>
<p>For <code>numberLength = 3</code>, <code>sumOfDigits = 4</code>, and <code>k = 7</code>, the output should be <code>secretNumber(numberLength, sumOfDigits, k) = 301</code>.</p>
<p>There are nine 3-digit numbers whose digits add up to 4:<br>
<code>103</code>, <code>112</code>, <code>121</code>, <code>130</code>, <code>202</code>, <code>211</code>, <code>220</code>, <code>301</code>, <code>310</code>, and <code>400</code>;<br>
so the 7th (0-based) number would be <code>301</code>.</p>
</li>
<li>
<p>For <code>numberLength = 5</code>, <code>sumOfDigits = 2</code>, and <code>k = 8</code>, the output should be <code>secretNumber(numberLength, sumOfDigits, k) = 11000</code>.</p>
<p>There are only five 5-digit numbers whose digits add up to 2, so we'll keep repeating the sequence until we have enough numbers:<br>
<code>10001</code>, <code>10010</code>, <code>10100</code>, <code>11000</code>, <code>20000</code>, <code>10001</code>, <code>10010</code>, <code>10100</code>, <code>11000</code>;<br>
so the 8th (0-based) number is <code>11000</code>.</p>
</li>
<li>
<p>For <code>numberLength = 4</code>, <code>sumOfDigits = 100</code>, and <code>k = 3</code>, the output should be <code>secretNumber(numberLength, sumOfDigits, k) = -1</code>.</p>
<p>It's not possible for a 4-digit number to have digits that sum to <code>100</code>, so we return <code>-1</code>.</p>
</li>
</ul>
<p><strong>Input / Output</strong></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] integer numberLength</strong></p>
<p>An integer representing the number of digits in the secret cipher.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ numberLength ≤ 9</code></p>
</li>
<li>
<p><strong>[input] integer sumOfDigits</strong></p>
<p>An integer representing the sum of the digits in the secret cipher.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ sumOfDigits ≤ 1000</code></p>
</li>
<li>
<p><strong>[input] integer k</strong></p>
<p>An integer representing the index of the number we're looking for.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ k ≤ 10<sup>8</sup></code></p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>An integer representing the secret cipher (or <code>-1</code> if it's not possible to find a number that meets the specifications).</p>
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
</div></div></div></div></div></div><div class="-layout-h -bg-blue-grey-7" style="height: 48px;"><div class="-layout-h -center -padding-h-16 -flex -space-h-8"><div class="-flex"></div><div class="-layout-h -center -space-h-8"><div><div class="button -type-dark -view-flat -shape-circle" role="button" tabindex="0"><div class="button--content -layout-h -center-center -space-h-8"><div class="icon -size-16"><div class="-layout-h -center"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M1 20.125h4v-12H1v12zm22-11c0-1.1-.9-2-2-2h-6.3l.94-4.57.03-.32c0-.4-.17-.78-.44-1.05L14.17.125l-6.57 6.6c-.38.35-.6.85-.6 1.4v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.1-.23.14-.47.14-.73v-2z"></path></svg></div></div></div></div></div><div><div class="button -type-dark -view-flat -shape-circle" role="button" tabindex="0"><div class="button--content -layout-h -center-center -space-h-8"><div class="icon -size-16"><div class="-layout-h -center"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M15 3.875H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.1.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.3l-.94 4.57-.03.32c0 .4.17.78.44 1.05l1.06 1.06 6.6-6.6c.35-.35.57-.85.57-1.4v-10c0-1.1-.9-2-2-2zm4 0v12h4v-12h-4z"></path></svg></div></div></div></div></div><div><div class="button -type-dark -view-flat -shape-circle" role="button" tabindex="0"><div class="button--content -layout-h -center-center -space-h-8"><div class="icon -size-14"><div class="-layout-h -center"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M14.6 3.06L14.07.3H1.7v23.4h2.74v-9.64h7.7l.55 2.75h9.6V3.07h-7.7z"></path></svg></div></div></div></div></div></div></div></div><div class="tour-spot"></div></div></div>