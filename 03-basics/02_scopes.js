// var c =300

let a = 300
if(true){
    let a = 10
    const b = 20
    console.log("Innner: ",a)
}

// console.log(a)
// console.log(b)

// console.log(c)

function one(){
    const username = "vedant"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
    
}
// one()

if(true){
    const username = "vedant"
    if(username === "vedant"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


//++++++++++++++++++++++++++++++++   interesting  ++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addone(5))
function addone(num){              //function
    return num +1
}




addTwo(5)
const addTwo = function(num){       //expression
    return num+2
}



