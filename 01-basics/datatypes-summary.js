// datatypes -> primitive and non primitive(ref type)

// PRIMITIVE 
//7 types : String,Number,Boolean, null,undefined,Symbol,BigInt

const score = 100 
const scoreValue =100.3
const isLoggedIn = false
const outsideTemp = null;
let userEmail; //undefined
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id)
console.log(anotherId)
console.log(id===anotherId)
const bigNumber = 123456712345n

//Refernce Type (Non Primitive)
//Arrays, Objects , Functions

const heros = ["superman","batman","spiderman"] //array 

let myObj = {
    name:"vedant",
    age:"20",
}

const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof bigNumber)
console.log(typeof outsideTemp) //outsideTemp was null but it gives type as object
console.log(typeof myFunction)

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

// ++++++++++++++++++++++++++++++++++++++++++++++

//2 Type of Memories => Stack (Primitive) and Heap(Non Primitive)
//STACK -> COPY , heap ->reference 

let myYoutubename="vedantu" //goes in stack
let anotherName = myYoutubename //goes in stack
anotherName = "newname" //copy made and changed
console.log(myYoutubename); //vedantu
console.log(anotherName); //newname

//goes in heap 
let userOne ={
    email:"useremail.com",
    upi:"user@ybl"
}
let userTwo = userOne //same refernce in userOne so anychange in userOne reflected here

userTwo.email ="xyz@gmail.com"
console.log(userOne.email) //xyz@gmail.com
console.log(userTwo.email) //xyz@gmail.com