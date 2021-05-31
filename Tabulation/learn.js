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
};

// Problem 4 -> howSum

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

// Problem 5 -> bestSum

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

// Problem 6 -> canConstruct

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

// Problem 7 -> countConstruct

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

// Problem 8 -> allConstruct

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

console.log(allConstruct('purple',['purp','p','ur','le','purpl']));