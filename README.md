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
	}

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
	}

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

| Without Memoization | Space Complexity : O(m) | Time Complexity: O(n^m) |
|-----|-----|-----|

	const howSum=(n,arr)=>{
		if(n===0) return[];
		if(n<0) return null;
		for(let num of arr){
			const remainder=n-num;
			const remainderResult=howSum(remainder,arr);
			if(remainderResult !== null){
				return [...remainderResult, num];
			}
		}
		return null;
	};

| With Memoization | Space Complexity : O(m^2) | Time Complexity : O(n*m^2) |
|-----|-----|-----|

	const howSum=(n, arr,memo={})=>{
	if(n in memo) return memo[n];
	if(n===0) return[];
	if(n<0) return null;
	for(let num of arr){
		const remainder=n-num;
		const remainderResult=howSum(remainder,arr,memo);
		if(remainderResult !== null){
		memo[n]=[ ...remainderResult, num];
		return memo[n];
		}
	}
	memo[n]=null;
	return null;
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

| Without Memoization | Space Complexity : O(m^2) | Time Complexity: O(n^m*m) |
|-----|-----|-----|

	const bestSum=(n,arr)=>{
	if(n===0)return [];
	if(n<0)return null;
	let shortestCombination=null;
	for(let num of arr){
		const remainder=n-num;
		const remainderCombination=bestSum(remainder,arr);
		if(remainderCombination !== null){
			const combination=[ ...remainderCombination, num];	
			if(shortestCombination === null || combination.length<shortestCombination.length){
				shortestCombination=combination;
			}
		}
		
	}
	
	return shortestCombination;	
};


| With Memoization | Space Complexity : O(m^2) | Time Complexity : O(m^2*n) |
|-----|-----|-----|

	const bestSum=(n,arr,memo={})=>{
		if(n in memo) return memo[n];
		if(n===0) return[];
		if(n<0) return null;
		let shortestCombination=null;
		for (let num of arr){
			const remainder=n-num;
			const remainderCombination=bestSum(remainder,arr,memo);
			if(remainderCombination!==null){
				const combination= [...remainderCombination,num];
				if(shortestCombination===null || combination.length<shortestCombination.length){
					shortestCombination=combination;
				}
			}
		}
		memo[n]=shortestCombination;
		return memo[n];
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

| Without Memoization | Space Complexity : O(n^m*m) | Time Complexity: O(m^2) |
|-----|-----|-----|

	const canConstruct=(n,arr)=>{
	if(n ==='')	return true;
	
	for(let str of arr){
		if( n.indexOf(str)===0){
			const suffix=n.slice(str.length);
			if(canConstruct(suffix,arr) === true){
				return true;
			}
		}
	}
	return false;
	};


| With Memoization | Space Complexity : O(n*m^2) | Time Complexity : O(m^2 |
|-----|-----|-----|

	const canConstruct=(n,arr,memo={})=>{
	if(n in memo) return memo[n];
	if(n ==='')	return true;
	
	for(let str of arr){
		if( n.indexOf(str)===0){
			const suffix=n.slice(str.length);
			if(canConstruct(suffix,arr,memo) === true){
				memo[n]=true;
				return memo[n];
			}
		}
	}
	memo[n]= false;
	return memo[n];
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

| Without Memoization | Space Complexity : O(n^m*m) | Time Complexity: O(m^2) |
|-----|-----|-----|

	const countConstruct=(n,arr)=>{
	if(n== '') return 1;

	let totalWays=0;
	for(let str of arr){
		if(n.indexOf(str)===0){
			const suffix=n.slice(str.length);
			const numWayForRest=countConstruct(suffix,arr);
			totalWays+=numWayForRest;
		}
	}
	return totalWays;
	};


| With Memoization | Space Complexity : O(n*m^2) | Time Complexity : O(m^2) |
|-----|-----|-----|

	const countConstruct=(n,arr,memo={})=>{
	if(n in memo) return memo[n];
	if(n== '') return 1;

	let totalWays=0;
	for(let str of arr){
		if(n.indexOf(str)===0){
			const suffix=n.slice(str.length);
			const numWayForRest=countConstruct(suffix,arr,memo);
			memo[n]=numWayForRest;
			totalWays+=memo[n];
		}
	}
	memo[n]=totalWays;
	return memo[n];
	};

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

| Without Memoization | Space Complexity : O(m) | Time Complexity: O(n^m) |
|-----|-----|-----|

	const allConstruct=(n,arr)=>{

	if( n === '' ) return [[]];
	const result=[];
	
	for(let str of arr){
		if(n.indexOf(str)===0){
			const suffix=n.slice(str.length);
			const suffixResult=allConstruct(suffix,arr);
			const compResult=suffixResult.map(comb=>[str, ...comb]);
			result.push(...compResult);
		}
	}
	return result;
	};

| With Memoization | Space Complexity : O(m) | Time Complexity : O(n^) |
|-----|-----|-----|

	const allConstruct=(n,arr,memo={})=>{
	if(n in memo) return memo[n];
	if( n === '' ) return [[]];
	const result=[];
	
	for(let str of arr){
		if(n.indexOf(str)===0){
			const suffix=n.slice(str.length);
			const suffixResult=allConstruct(suffix,arr,memo);
			const compResult=suffixResult.map(comb=>[str, ...comb]);
			result.push(...compResult);
		}
	}
	memo[n]=result;
	return memo[n];
	};

<br/><br/>