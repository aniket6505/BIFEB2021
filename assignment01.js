var arr=[1,2,3,33,4,0]
console.log(arr)

// max value in array
var max=arr[0]
for(let i=0; i<arr.length; i++){
if(arr[i]>max){
max=arr[i];
console.log("max value is "+max)
}
}
// min value in array
var min=arr[0]
for(let i=0; i<arr.length; i++){
if(arr[i]<min){
min=arr[i];
console.log("min value is "+min)
}
}

// sum of all elements in array
function printsum(){
        num=arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5]
        return num
    }
 var sum= printsum()
console.log("sum is "+ sum )


   

