
const rokket = (string, number) => {
    return String(string).repeat(number);
}

console.log(rokket('node', 5)) // this outputs 'nodenodenodenodenode'
console.log(rokket('abc', 2)) // this outputs 'abcabc'

module.exports =  {
    rokket
};