//1970 jan 1st
//Dates

let myDate = new Date()

console.log(myDate.toString())  
console.log(myDate.toDateString()) 
console.log(myDate.toLocaleString()) 
console.log(myDate.toTimeString()) 
console.log(myDate.toJSON()) 
console.log(myDate.toISOString()) 

console.log(typeof myDate) //object
let myCreatedDate = new Date(2023,0,23,5,3) //month starts form 0
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleString())
let newDate = new Date("2024-01-09") //month starts from 1 yyyy-mm-dd
console.log(newDate.toLocaleString())

let newDate2 = new Date("01-14-2024") //mm-dd-yyyy
console.log(newDate2.toLocaleString())

let myTimeStamp = Date.now() //milliseconds form 1st jan 1970
console.log(myTimeStamp)
console.log(newDate2.getTime())
console.log(Date.now()/1000)
console.log(Math.floor(Date.now()/1000))

let newDate3 = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())
console.log(newDate.getHours())

newDate.toLocaleString('default',{
    weekday:"long",
    
})
