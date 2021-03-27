// var cc="hie"
// printcc(cc)
// function printcc(input){
//     console.log(input)
//     return
// }

// 2nd way using variable 
// var hi=function(msg){
//     console.log(msg)
// }
// hi("hiee")


// 3rd way using arrow function
// hi=(msg)=>{console.log(msg)}
// hi("hieee")

// 4th way if we have only one statement in arrow function there is not need to use curley bracket
// hi=(msg)=>console.log(msg)
// hi("hieeee")


// return keyword
//  hi=(msg)=>{console.log(msg)
//     return a
// }
 

// var a = hi("hieee")
// console.log("world")


// return a func from a func 
// func can be assigned to a variable
// function hi(msg){
//     console.log(msg)

// var world=function() {
// console.log("world")
// }
// return world
// }
// w=hi("hello")
// w()


// this operator
// if you are using some func inside obj 
// for access the obj attributes you have to use this operator for accessing
var student=
{Name:"Aniket",
Address:"Google",
Rollnumber:10,
isGraduated: false,
info:function() {
    console.log(this.Name)
    console.log(this.Address)
    console.log(this.Rollnumber)
    console.log(this.isGraduated)
},
getName :(LastName)=>{
return student.Name+" "+LastName
}
}
var fullname = student.getName("Chavan")
console.log(student.getName("Chavan"))