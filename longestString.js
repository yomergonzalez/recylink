const list = ['best', 'company', 'ever']


const rokket = (list) => {
    const order = list.sort((a, b) => b.length - a.length);
    return order[0];
}

console.log(rokket(list)) // this outputs 'company'

module.exports =  {
    rokket
};