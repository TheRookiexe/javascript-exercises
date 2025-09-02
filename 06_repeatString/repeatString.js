const repeatString = function(s,n) {
    let res="";
    if (n<0){
        return "ERROR";
    }
    for(let i=0; i<n; i++){
        res+=s+"";
    }
    return res;
};

repeatString("Hey", 3);
repeatString('hello', 10);
repeatString('hi', 1);
repeatString('bye', 0);
repeatString('', 10)

// Do not edit below this line
module.exports = repeatString;
