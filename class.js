// class mobile{
//     constructor(size, name, color, Ismic){
//         this.size=size
//         this.name=name
//         this.color=color
//         this.Ismic=mic
//     }
//     details(mobile1){
//         console.log(this.size)
//         console.log(this.name)
//         console.log(this.color)
//         console.log(this.mic)
//         return details
   

// }


// class student{
//     constructor(name1, add, rollnum, isGraduated){
//    this.name1=name1
//     this.add=add
//     this.rollnum=rollnum
//     this.isGraduated=isGraduated
// }
// details(){
// console.log(this.name1)
// console.log(this.add)
// console.log(this.rollnum)
// console.log(this.isGraduated)
// }
// getname(lastname){
//     return this.name1+ " " + lastname
// }
// }

// var student1 = new student ("Aniket", "Pune", 21, true)
// console.log(student1.name1)
// student1.details()

// var a=student1.getname("chavan")
// console.log(a)


class mobile{
    constructor(name,size, clr, isMic){
        this.name=name
        this.size=size
        this.clr=clr
        this.isMic=isMic
    }
details(){
    console.log(this.name)
    console.log(this.size)
    console.log(this.clr)
    console.log(this.isMic)
}
features(oppo){
    console.log("calling")
    console.log("play music")
    return this.features
}
}
var mob=new mobile("oppo", 5.5, "white", true)
console.log(mob.name)
mob.details()
mob.features()

