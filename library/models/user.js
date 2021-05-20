import mongoose from 'mongoose'
const schema=mongoose.Schema

const userSchema =new schema({
    name : {

        type:string,
        required : true
    
    },
    gender: {
        type:string,
        required:true
    },
    age: {
        type:string,
        required:true
    },
    city: {
        type:string,
        required:true
    }
},{timestamps:true})

export const user = mongoose.model('user',userschema)