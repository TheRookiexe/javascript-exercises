function getAge(death, birth){
    if(!death){
        death = new Date().getFullYear();
    }
    return death-birth
}

const findTheOldest = function(arr) {
    return arr.reduce((oldest, current)=>{
        let oldestAge= getAge(oldest.yearOfDeath, oldest.yearOfBirth);
        let currentAge= getAge(current.yearOfDeath, current.yearOfBirth);
        return oldestAge<currentAge ? current : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
