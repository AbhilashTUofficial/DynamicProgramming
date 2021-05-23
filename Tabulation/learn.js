// Tabulation

// Problem 1 -> Fibonacci 

const fib=(n)=>{
    const table=Array(n+1).fill(0);
    table[1]=1;
    for(let i=0;i<=n;i++){
        table[i+1]+=table[i];
        table[i+2]+=table[i];
    }
    return table[n];
}

// Problem 2 -> Grid Traversal

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

// Problem 3 -> canSum
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


console.log(canSum(7,[5,3,4,7]));