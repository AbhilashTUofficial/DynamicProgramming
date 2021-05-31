# Tabulation
<br/>

## 1. Steps
- Visualize the problem as a tree.
- Size the table based on the inputs.
- Initialize the table with default values.
- seed the trivial answer into the table.
- Iterate through the table.
- fill further positions based on the current position.

<br/><br/>

## Problem 1 - Fibonacci Sequence
<details>
<pre>
Write a function fib(n) that takes in a number as an argument.
The function should return the n-th number of the fibonacci sequence.
The 1st and 2nd number of the sequence is 1.

To generate the next number of the sequence, we sum the previous two.
js object, keys will be arg to fn, value will be the return value.
</pre>
</details>

| With Tabulation | Space Complexity : O(n) | Time Complexity : O(n) |
|-----|-----|-----|

	const fib=(n)=>{
    const table=Array(n+1).fill(0);
    table[1]=1;
    for(let i=0;i<=n;i++){
        table[i+1]+=table[i];
        table[i+2]+=table[i];
    }
    return table[n];
	};

<br/><br/>

## Problem 2 - Grid Traversal
<details>
<pre>
Say that your are a traveler on a 2D grid. You begin in the 
top-left corner and your goal is to travel to the bottom-right
corner. You may only move down or right.
In how ways can you travel to the goal on a grid with dimension m*n?
write a function gridTraveler(m,n) that calculates this.
</pre>
</details>


| With Tabulation | Space Complexity : O(m*n) | Time Complexity : O(m*n) |
|-----|-----|-----|

	const gridTraveler=(m,n)=>{
    const table=Array(m+1).fill().map(
        ()=> Array(n+1).fill(0)
    )
    table[1][1]=1;
    for(let i=0;i<=n;i++){
        for(let j=0;j<=m;j++){
            const current=table[i][j];
            if(j+1<=n)table[i][j+1]+= current;
            if(i+1<=m)table[i+1][j]+= current;
        }
    }
    return table[m][n];
	};

<br/><br/>

## Problem 3 - CanSum
<details>
<pre>
 Write a function canSum(targetSum, numbers) that takes in a 
 targetSum and an array of numbers a arguments.
 The function should return a boolean indicating whether or not it
 is possible to generate the targetSum using numbers from the array.
</pre>
</details>

| With Tabulation | Space Complexity : O(m) | Time Complexity : O(n) |
|-----|-----|-----|

	const canSum=(n,numbers)=>{
		const table=Array(n+1).fill(false);
		table[0]=true;
		for(let i=0;i<=n;i++){
			if(table[i]===true){
				for(let num of numbers){
					table[i+num]=true;
				}
			}
		}
		return table[n];
	};

<br/><br/>

## Problem 4 - howSum
<details>
<pre>
 Write a function howSum(targetSum, numbers) that takes in a
 targetSum and an array of numbers as arguments.

 The function should return an array containing any combination of
 elements that add up to exactly the targetSum. If there is no 
 combination that adds up to the targetSum, then return null.

 If there are multiple combinations possible, you may return any single one.
</pre>
</details>

| With Tabulation | Space Complexity : O(m^2) | Time Complexity : O(n*m^2) |
|-----|-----|-----|

	const howSum=(n,numbers)=>{
    const table=Array(n+1).fill(null);
    table[0]=[];
    for(let i=0;i<=n;i++){
        if(table[i]!=null){
            for(let num of numbers){
                table[i+num]=[...table[i],num];
            }
        }
    }
    return table[n];
	};

<br/><br/>

## Problem 5 - bestSum
<details>
<pre>
 Write a function bestSum(targetSum, numbers) that takes in a
 targetSum and an array of numbers as arguments.

 The function should return an array containing the shortest
 combination of numbers that add up to exactly the targetSum.

 If there is a tie for the shortest combination, you may return any
 one of the shortest.
</pre>
</details>

| With Tabulation | Space Complexity : O(m^2) | Time Complexity : O(m^2*n) |
|-----|-----|-----|

	const bestSum=(n,numbers)=>{
    const table=Array(n+1).fill(null);
    table[0]=[];
    for(let i=0;i<=n;i++){
        if(table[i]!=null){
            for(let num of numbers){
                const combination=[...table[i],num];
                if(!table[i+num] || table[i+num].length>combination.length){
                    table[i+num]= combination;
                }
            }
        }
    }
    return table[n];
	};

<br/><br/>

## Problem 6 - canConstruct
<details>
<pre>
Write a function can Construct(n,wordBank) that accepts a
target string and an array of strings.

The function should return a boolean indicating whether or not the
target can be constructed by concatenating elements of the 
wordBank array.
</pre>
</details>

| With Memoization | Space Complexity : O(n*m^2) | Time Complexity : O(m^2) |
|-----|-----|-----|

	const canConstruct=(n,wordBank)=>{
    const table=Array(n+1).fill(false);
    table[0]=true;
    for(let i=0;i<=n.length;i++){
        if(table[i]===true){
            for(let word of wordBank){
                if(n.slice(i,i+word.length)=== word){
                    table[i+word.length]=true;
                }
            }
        }
    }
    return table[n.length];
	};

<br/><br/>

## Problem 7 - countConstruct
<details>
<pre>
Write a function countConstruct(target, wordBank) that accepts a target string and an array of strings.

The function should return the number of ways that the target can be constructed by concatenating elements of the wordBank array.

You may reuse elements of wordBank as may times as needed.
</pre>
</details>

| With Tabulation | Space Complexity : O(n*m^2) | Time Complexity : O(m^2) |
|-----|-----|-----|

	const countConstruct=(n,wordBank)=>{
    const table=Array(n.length+1).fill(0);
    table[0]=1;
    for(let i=0;i<=n.length;i++){
     for(let word of wordBank){
         if(n.slice(i,i+word.length)=== word){
             table[i+word.length]+=table[i];
         }
       }   
    }
    return table[n.length];
	}


<br/><br/>

## Problem 8 - allConstruct
<details>
<pre>
Write a function allConstruct(target, wordBank) that accepts a target string and an array of strings.

The function should return a 2D array containing all of the ways
that the target can be constructed by concatenating elements of 
the wordBank array. Each element of the 2D array should represent
one combination that constructs the target.

You may reuse elements of wordBank as may times as needed.
</pre>
</details>

| With Tabulation | Space Complexity : O(n^m) | Time Complexity : O(n^m) |
|-----|-----|-----|

	const allConstruct=(n,wordBank)=>{
    const table=Array(n.length+1).fill().map(()=>[]);
    table[0]=[[]];
    for(let i=0;i<=n.length;i++){
        for(let word of wordBank){
            if(n.slice(i,i+word.length)=== word){
                const newComb=table[i].map(subArray=>[...subArray,word]);
                table[i+word.length].push(...newComb);
            }
        }
    }
    return table[n.length];
	}


<br/><br/>