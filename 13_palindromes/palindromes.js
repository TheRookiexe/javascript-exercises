const palindromes = function (Str, i=0) {
    const cleaned = Str.toLowerCase().replace(/[^a-z0-9]/g, '')
    let len = cleaned.length;
    
    if (i>=len/2){
        return true;
    }
    if (cleaned[i]!==cleaned[len-1-i]){
        return false;
    }
    return palindromes(cleaned, i+1);
};

// Do not edit below this line
module.exports = palindromes;
