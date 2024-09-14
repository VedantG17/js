const name ="Vedant"
const repoCount = 10

// console.log(name+repoCount+" Value") //not prefered (outdated)

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Vedant-vg')
console.log(gameName[0])
console.log(gameName.__proto__) //multiple func in 
console.log(gameName.length)
console.log(gameName.toUpperCase()) //didnt change original value just changed a copy
console.log(gameName.charAt(2))
console.log(gameName.indexOf('a'))
const newString = gameName.substring(0,4) //0,1, 2, 3 -> [start,end) , negative value dont work here
console.log(newString)

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newStringOne = "          Vedant   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://vedant.com/vedant%20gusain"
console.log(url.replace("%20",'-'))
console.log(url.includes('okokok'))

console.log(gameName.split('-'));
