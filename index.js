'use strict';

class Father {
    constructor (name = 'Darth') {
        this.name = name.toUpperCase();
    }

    get myName () {
        return this.name;
    }
}

const father_one = new Father();

console.log(father_one.myName);
 
class Son extends Father {    
    constructor  (son, father = ' Darth') {
        super();
        this.name = `${son} ${father.toUpperCase()}'s son`;
    }
}

const son_one = new Son('Luke');

console.log(son_one.myName);
