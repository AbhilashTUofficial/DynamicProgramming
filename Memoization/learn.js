// Memoization

// Problem 1 -> Fibonacci 

const fib=(n, memo={})=>{
	if(n in memo)return memo[n];
	if(n<=2)return 1;
	memo[n] = fib(n-1,memo)+fib(n-2,memo);
	return memo[n];
};

// Problem 2 -> Grid Traversal

const gridTraveler=(m,n,memo={})=>{
	const key=m+','+n;
	if(key in memo) return memo[key];
	if(m===1 && n===1) return 1;
	if(m===0 || n===0)return 0;
	memo[key]= gridTraveler(m-1,n,memo)+gridTraveler(m,n-1,memo);
	return memo[key];
}

// Problem 3 -> canSum

const canSum=(n, arr,memo={})=>{
	if(n in memo)return memo[n];
	if(n===0)return true;
	if(n<0)return false;
	for(let num of arr){
		const remainder=n-num;
		if(canSum(remainder,arr,memo) === true) {
			memo[n]=true;
			return true;
		}
	}
	memo[n]=false;
	return false;
}

// Problem 4 -> howSum

const howSum=(n, arr,memo={})=>{
	if(n in memo) return memo[n];
	if(n===0) return[];
	if(n<0) return null;
	for(let num of arr){
		const remainder=n-num;
		const remainderResult=howSum(remainder,arr,memo);
		if(remainderResult !== null){
		memo[n]=[ ...remainderResult,num];
		return memo[n];
		}
	}
	memo[n]=null;
	return null;
}

// Problem 5 -> bestSum

const bestSum=(n,arr,memo={})=>{
	if(n in memo) return memo[n];
	if(n===0)return [];
	if(n<0)return null;
	let shortestCombination=null;
	for(let num of arr){
		const remainder=n-num;
		const remainderCombination=bestSum(remainder,arr,memo);
		if(remainderCombination !== null){
			const combination=[ ...remainderCombination, num];	
			if(shortestCombination === null || combination.length<shortestCombination.length){
				shortestCombination=combination;
			}
		}
	}
	memo[n]=shortestCombination;	
	return memo[n];
};

// Problem 6 -> canConstruct

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

// Problem 7 -> countConstruct

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

// Problem 8 -> allConstruct

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

console.log(allConstruct("purple",["purp","p","ur","le","purpl"]));



















