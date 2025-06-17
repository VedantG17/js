//singleton => one of its type
//object literal -> non singleton -> multiple instances
//constructor ->singleton


//object literal (non singleton)
const mySym = Symbol("key1");
const JsUser = {
    name:"vedant",
    "full name":"Vedant Gusain",
    [mySym] : "mykey1",
    age:21,
    location:"India",
    email:"abc@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
JsUser.email = "qwerty@gmail.com";
// Object.freeze(JsUser)
JsUser.email = "changed@gmail.com";
// console.log(JsUser)
JsUser.greeting = function(){
    console.log("Hello hi ");
}
console.log(JsUser.greeting())

JsUser.greetingTwo = function(){
    console.log(`hello Js User ${this.name}`)
}

console.log(JsUser.greetingTwo())


