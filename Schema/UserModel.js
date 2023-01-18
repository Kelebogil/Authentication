// third party import
const {Schema,model} =require ("mongoose")

//schema 
const UserSchemer =Schema({
    name:{
        type:String,
        required:true,
        trim: true,
        min:3
     },
     email:{
        type:String,
        required:true,
        trim: true,
        unique:true
     },
     password:{
        type:String,
        required:true,
        trim: true,
        min:6
     }
},{
    timestamps:true
})

module.exports=model('User',UserSchemer)