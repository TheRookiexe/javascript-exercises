const sumAll = function(a,n) {
    let sum=0;
    if (Number.isInteger(a) && Number.isInteger(n) && a>=1 && n>=1){
        if (a>n){
            let temp=a;
            a = n;
            n =  temp;
        }
        for(let i = a; i<=n; i++){
            sum+=i;
        }   
        return sum;
        
    }else{
        return "ERROR";
    }
};

sumAll(2, 4);

// Do not edit below this line
module.exports = sumAll;
