const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false;

// console.log(tinderUser)

const regularUser ={
    email:"@some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"vedant",
            lastname:"gusain"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname) //? if something mightnot be there

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"d"}
// const obj3 = {obj1,obj2}
const obj3 = Object.assign({},obj1,obj2,obj4)
console.log(obj3)

const obj5 = {...obj1,...obj2}
console.log(obj5)

const users =[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"i@gmail.com"
    },
    {
        id:3,
        email:"j@gmail.com"
    }
]

console.log(users[0].email)
console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn'))
console.log(tinderUser.hasOwnProperty('gender'))

//destructuring
const course = {
    coursename:"js in english",
    price:"1000",
    courseInstructor:"Hitesh"
}

// course.coursename

console.log(course.courseInstructor)
//syntactical sugar extract courseInstructor and rename it in short frm the object course
const {courseInstructor:instructor} = course
console.log(instructor)

{
    "name":"Vedant",
    "gender":"Male"
}
//use json formatter to understand complex api response