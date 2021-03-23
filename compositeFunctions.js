let data = [];

const rokket = (num) => {

    data.push(num);
    if (data.length >= 3) {
        let result = data.reduce((prev, curr) => {
            return prev * curr;
        });
        data = [];
        return result;
    }

    return rokket;
}

console.log(rokket(2)(5)(3)) // this outputs 30
console.log(rokket(4)(2)(2)) // this outputs 16
console.log(rokket(8)(2)(1)) // this also outputs 16


module.exports =  {
    rokket
};