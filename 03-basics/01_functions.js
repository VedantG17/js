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




