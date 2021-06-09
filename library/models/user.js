import mongoose from 'mongoose'
const schema=mongoose.Schema

const userSchema =new schema({
    name : {

        type:String,
        required : true
    
    },
    gender: {
        type:String,
        required:true
    },
    age: {
        type:String,
        required:true
    },
    city: {
        type:String,
        required:true
    }
},{timestamps:true})

export const user = mongoose.model('user',userSchema)