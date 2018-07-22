<div><a href="https://app.codesignal.com/challenge/vCcqqvqBYM8k2dHhE" target="_blank">Code Signal - guessIt</a></div>
<div>I think this solution works, but the time limit on the site wouldn't pass it.  The regex takes too long to process</div>
<div class="markdown"><p>Welcome to the game show of <em>Guess It</em>, the place where you guess the message behind our clues and win big prizes!</p>
<p>We first give you a <code>message</code>, a string with lowercase alphabet letters, numbers, punctuation, and the <code>$</code> symbol. This symbol could represent anything -- any length of characters, or absolutely nothing, so be careful!</p>
<p>Once we give you some possible options to choose from, we want you to guess which of those choices could be the message hidden behind those <code>$</code> symbols. If you get all of them correct, you get a chance to win big!</p>
<p><em>Note: The matching process should cover the entire message, not just a section of it.</em></p>
<p><strong>Example</strong></p>
<ul>
<li>
<p>For <code>message = "prizes$"</code> and <code>options = ["prizes!", "prizes?", "prizes :D", "prizes", "money!", "big prizes", "prizes suck"]</code>, the output should be <code>["prizes!", "prizes?", "prizes :D", "prizes", "prizes suck"]</code></p>
<p><img src="https://i.imgur.com/dpp3Tjz.png" alt="https://i.imgur.com/dpp3Tjz.png"></p>
<p>In the last section, you can place <code>"!"</code>, <code>"?"</code>, <code>" :D"</code>, <code>""</code>, or <code>" suck"</code> to make it match the five options. No matter what you replace, you will never get <code>"money!"</code> or <code>"big prizes"</code> because of the prefix, which excludes those two options.</p>
</li>
</ul>
<p><strong>Input / Output</strong></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] string message</strong></p>
<p>A string that contains lowercase letters from <code>a - z</code> along with numbers, punctuation, and the <code>$</code> symbol.</p>
<p><em>Guaranteed Constraints:</em><br>
<code>1 ≤ message.length ≤ 1000</code><br>
<code>message[i] ∈ {"a" - "z", "0" - "9" ". , ! ? : $"}</code></p>
</li>
<li>
<p><strong>[input] array.string options</strong></p>
<p>An array that contains all the possible matches for <code>message</code>. These strings will also only contain lowercase letters from <code>a - z</code>, along with numbers and punctuation, but will <em>never</em> contain the <code>$</code> symbol.</p>
<p><em>Guaranteed Constraints:</em><br>
<code>1 ≤ options.length ≤ 1000</code><br>
<code>1 ≤ options[i].length ≤ 1000</code><br>
<code>options[i][j] ∈ {"a" - "z", "0123456789", ". , ! ? :"}</code></p>
</li>
<li>
<p><strong>[output] array.string</strong></p>
<p>An array of strings that could represent the hidden message without any conflicting characters. Keep the order they appear in the original array.</p>
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