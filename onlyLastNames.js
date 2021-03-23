const contacts = [
    { firstName: 'Juanito', lastName: 'Rokket' },
    { firstName: 'James', lastName: 'Bond' },
    { firstName: 'Harry', lastName: 'Potter' }
]

const rokket = (contacts) => {
    return contacts.map((value) => value.lastName);
}


console.log(rokket(contacts)) // this outputs ['Rokket', 'Bond', 'Potter']

module.exports =  {
    rokket
};