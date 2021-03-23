const rokket = (array1, array2) => {

    return array2.reduce((prev, curr) => {
        return (prev.includes(curr))? prev : [...prev, curr]
    }, array1);
    
}


console.log(rokket([1, 2, 5], [2, 1, 6])) // this outputs [1, 2, 5, 6]
console.log(rokket([1, 2, 3], [4, 5, 6])) // this outputs [1, 2, 3, 4, 5, 6]

module.exports =  {
    rokket
};