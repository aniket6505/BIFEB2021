// comma opeartor
// x=10
// x=x++,x
// // x=++x
// console.log(++x)


// function returnnum(x){
// return x,x++,++x,x
// }
// result=returnnum(1)
// console.log(result)


// call back function





// asyncronoius behaviour
// console.log("start")
// function login(username,pass){
//     returndata=function(){
//         console.log("user is authenticated")
//     }
//     setTimeout(returndata,5000)
//     return "ok"
// }
// var isValidated=login("sfdds", 124536)
// console.log(isValidated)
// console.log("end")




var g=10
function login(){
    returndata=function(){
        console.log("in call back function")
        console.log(++g)
    }
    setTimeout(returndata, 1000)
    return ++g
}
var result=login()
++g
console.log(result)
console.log(g)
