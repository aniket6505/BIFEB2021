// copy by value
// a=10
// b=a;
// a=100
// console.log(b)
// // in copy by value only value get copied

// // copy by referrence
// arr=[1,2,3,5,8]
// brr=arr
// arr[0]=105
// console.log(brr)
// in cpy by referrence address get copied


// Use function as a constructor
function student(firstname, lastname, age, isGraduated){
    this.firstname=firstname
    this.lastname=lastname
    this.age=age
    this.isGraduated=isGraduated
}
var student1=new student("Aniket","Satara", 22, true)
// console.log(student1.firstname+ " "+ student1.lastname+ " "+ student1.age)

var student2=new student("abc", "xyz", 30, false)
// console.log(student2.firstname+" "+ student2.lastname+" "+student2.age+" "+student2.isGraduated)

// object destrucring
function getdetail(student1){
    var detail=[student1.age, student1.firstname, student1.lastname]
    return detail
}
// var d=getdetail(student1)
// console.log(d[0])  we want age
// console.log(d[1])  we want firstname

// var[age1,name1,last1]=getdetail(student1)
// console.log(age1)
// console.log(name1)
// console.log(last1)


// var [first,last]="aniket chavan".split(" ")
// console.log(first)
// console.log(last)


// classes in js

