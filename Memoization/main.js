
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


console.log(bestSum(300,[2,14]))
