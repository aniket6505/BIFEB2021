// map
// for square all elements in array normal ex
// var arr=[2,3,4,5,6]
// for(let i=0; i<arr.length; i++){
//     arr[i]=arr[i] * arr[i]
    
// }
// console.log(arr)

// // now use map
// function sqr(num){
//     return num*num
// }
// var arr1=[1,2,3,4,5,6,7,8,9]
// console.log(arr1.map(sqr))


// // filter
// function even(num){
//     isEven=false
//     if(num%2==0){
//         isEven=true
//     }
//     return isEven
// }
// var arr2=[1,2,3,45,6,10]
// console.log(arr2.filter(even))


// normal way to reduce reduce
// var brr=[2,3,45,6,7]
// prod=1
// for(let i=0; i<brr.length; i++){
//     prod= brr[i]* prod
// }
// console.log(prod)


// // using reduce func
// function prodallnum(a,b){
//     return a*b
// }

// var ar= [1,2]
// console.log(ar.reduce(prodallnum))




// using arrow func

prodallnumber=(a,b)=>{
    return a*b
}
    var xyz=[10,2,5]
    console.log(xyz.reduce(prodallnumber))


