class User {

    constructor(_firstName, _lastName, _age,_location){
        this.firstName = _firstName
        this.lastName = _lastName
        this.age = _age
        this.location =_location
    } 

    confrontAge(User2) {
        if (this.age < User2.age) return console.log(this.firstName + ' è più giovane di ' + User2.firstName);

        if (this.age > User2.age) return console.log(this.firstName + ' è più vecchio di '+ User2.firstName);

        return console.log(this.firstName + ' e ' + User2.firstName + ' hanno la stessa età');
    }

}

const User1 = new User('Mario', 'Rossi', 22, 'Padova')
const User2 = new User('Antonio', 'Bianchi', 24, 'Roma')

User1.confrontAge(User2)

const User3 = new User('Roberta', 'Stira', 17, 'Palemmo')

User3.confrontAge(User1)

