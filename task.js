var num=[1,2,3,33,4,0]
console.log(num)
console.log(num.length)

var max=num[0]
for(i=0; i<num.length; i++){
if(num[i]>max){
max=num[i];
console.log(max)
}
}
var min=num[0]
for(i=0; i<num.length; i++){
if(num[i]<min){
min=num[i];
console.log(min)
}
}

function printsum(){
        num=num[0]+num[1]+num[2]+num[3]+num[4]+num[5]
        return num
    }
 var sum= printsum()
console.log(sum)

   

