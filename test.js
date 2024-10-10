// console.log('hellow world')

let x = "How are you";
console.log(x);

const interestRate= 1.1;
// interestRate=2;
console.log(interestRate);

// Objects

let person= {
    name: 'TestUser',
    age: 15
};

// for changing the values we can use
//dot notation
person.name='Change'

// braket notation 
person['name']='new name'

console.log(person.name);

//Arrays
let differentColors=['blue','green'];
// console.log(differentColors.length);

differentColors[2]='grey';
differentColors[3]=3;

console.log(differentColors);

//functions

function hello(name){
    console.log('asdf'+name);
}
hello('asdaf');