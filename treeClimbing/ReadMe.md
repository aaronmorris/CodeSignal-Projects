<div><a href="https://app.codesignal.com/challenge/6mSjYpDwAeiCgBSsr" target="_blank">Code Signal - treeClimbing</a></div>
<div class="markdown"><p>You and your friends had an enjoyable but challenging time rock climbing, so now you're aiming for something simpler - climbing trees! Since you weren't all able to climb the wall before, you'd like to find a tree where as many friends as possible can reach the top.</p>
<p>Given an array <code>branches</code> containing 2-element integer arrays of the form <code>[height, weightLimit]</code>, and an array <code>friends</code> containing 2-element integer arrays of the form <code>[reach, weight]</code>, find how many friends can reach the top of the tree.</p>
<p>Each friend is able to reach from one branch to another if their <code>weight</code> is less than or equal to the next branch's <code>weightLimit</code> and their <code>reach</code> is greater than or equal to the difference in <code>height</code>.</p>
<p>Since everyone is still a little sore from the rock climbing, no one will have the strength to help pull up the climber following below, so for this climb, each friend is on their own (but maybe we'll try again later once everyone's fully recovered).</p>
<p>*NOTE: All friends start at a height of <code>0</code>, so it's not guaranteed that the first branch is reachable</p>
<p><strong>Example</strong></p>
<ul>
<li>
<p>For <code>branches = [[3,10], [6,9], [7,2], [10,7], [11,1], [12,2], [18,9]]</code> and <code>friends = [[4,1], [7,10], [6,2], [7,6]]</code>, the output should be <code>treeClimbing(branches, friends) = 1</code>.</p>
<ul>
<li>Friend <code>0</code> only has a reach of <code>4</code>, so they're not able to reach any further than the first branch</li>
<li>Friend <code>1</code> has a weight of <code>10</code>, so they can only be supported by the branches at heights <code>3</code> and <code>18</code>, but it would require a reach of <code>15</code> to get between them, so since their reach is only <code>7</code>, they can't make it</li>
<li>Friend <code>2</code> has a weight of <code>2</code>, so they can be supported by all the branches except the one at height <code>11</code>. They can reach the top by grabbing the branches at heights <code>3</code>, <code>6</code>, <code>10</code>, <code>12</code>, and <code>18</code> (since the difference in heights is always less than or equal to their reach of <code>6</code>)</li>
<li>Friend <code>3</code> can make it to the branch at height <code>10</code>, but since they're too heavy for the branch at <code>12</code>, and they can't quite reach from <code>10</code> to <code>18</code>, they won't be able to reach the top</li>
</ul>
<p>Since only one friend can climb this tree, it's not a very good choice. We should probably keep looking for a better climbing tree.</p>
</li>
</ul>
<p><strong>Input / Output</strong></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] array.array.integer branches</strong></p>
<p>An array of 2-element arrays representing the <code>height</code> and <code>weightLimit</code> of each branch, respectively. The array is sorted in ascending order of <code>height</code>.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ branches.length ≤ 1000</code><br>
<code>1 ≤ branches[0] ≤ 10<sup>6</sup></code><br>
<code>1 ≤ branches[1] ≤ 1000</code></p>
</li>
<li>
<p><strong>[input] array.array.integer friends</strong></p>
<p>An array of 2-element arrays representing the <code>reach</code> and <code>weight</code> of each friend, respectively. The array is not necessarily sorted.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ friends.length ≤ 1000</code><br>
<code>1 ≤ friends[0] ≤ 10<sup>5</sup></code><br>
<code>1 ≤ friends[1] ≤ 1000</code></p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>An integer representing the number of friends who can reach the top branch of the tree. Note that for each branch along the path, <strong>including the top branch</strong>, the friend must have the <code>reach</code> to get to the <code>height</code> of the branch, and must have a <code>weight</code> less than or equal to the branch's <code>weightLimit</code>. It's not possible for a friend to reach the top if they can't be supported by the top branch.</p>
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