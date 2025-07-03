function sayMyName(){
    
    console.log("v")
    console.log("e")
    console.log("d")
    console.log("a")
    console.log("n")
    console.log("t")
}


console.log(sayMyName())




// function addNum(num1,num2){
//     console.log(num1+num2)
// }
// const result = addNum(1,4)
// console.log("RESULT: ", result)


function addNum(num1,num2){
    let result = num1+num2
    return result
    console.log("Vedant") //doesnt print as after return
}

const result =  
console.log(addNum(2,3))

function loginUserMessage(username = "unnamed user"){
    if(!username){  //if true as  !undefined = !false -> true
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage()) //undefined if no arg provided



function calculateCartPrice(val1 , val2 , ...num1){   // ... is rest operator = pack in a bundle also spread operator as per usage
    return num1
}
console.log(calculateCartPrice(200,300,400,900));

const user ={
    username: "vedant",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleObject(user)

handleObject({
    username:"Sam",
    price:299
})

const myNewArray =[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,600,943,93]));
