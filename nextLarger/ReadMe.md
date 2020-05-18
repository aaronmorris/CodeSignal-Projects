<div class="markdown -serif"><p><em>Note: Write a solution with <code>O(n)</code> complexity, since this is what you would be asked to do during a real interview.</em></p>
<p>Given an array <code>a</code> composed of distinct elements, find the next larger element for each element of the array, i.e. the first element to the right that is greater than this element, in the order in which they appear in the array, and return the results as a new array of the same length. If an element does not have a larger element to its right, put <code>-1</code> in the appropriate cell of the result array.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<p>For <code>a = [6, 7, 3, 8]</code>, the output should be<br>
<code>nextLarger(a) = [7, 8, 8, -1]</code>.</p>
<p>In this array, the next larger element for <code>6</code> is <code>7</code>, for <code>7</code> is <code>8</code>, for <code>3</code> is <code>8</code> (<code>7</code> is not a valid option since elements from <code>a</code> can only be compared to elements to their right), and for <code>8</code> there is no such element, so we put <code>-1</code> in the last cell.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] array.integer a</strong></p>
<p>An array composed of distinct elements.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ a.length ≤ 10<sup>4</sup></code>,<br>
<code>0 ≤ a[i] ≤ 10<sup>5</sup></code>.</p>
</li>
<li>
<p><strong>[output] array.integer</strong></p>
<ul>
<li>The result array, in which the <code>i<sup>th</sup></code> cell corresponds to the first element in <code>a</code> to the right of <code>a[i]</code> that is larger than <code>a[i]</code>, or <code>-1</code> if there is no such element.</li>
</ul>
</li>
</ul>
<p><strong>[JavaScript (ES6)] Syntax Tips</strong></p>
<pre><code class="language-javascript"><span>// Prints help message to the console</span>
<span>// Returns a string</span>
<span><span>function</span> <span>helloWorld</span>(<span>name</span>) </span>{
    <span>console</span>.log(<span>"This prints to the console when you Run Tests"</span>);
    <span>return</span> <span>"Hello, "</span> + name;
}

</code></pre>
</div>