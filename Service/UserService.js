//userScheme import
const UserSchemer=require('../Schema/UserModel')

//third party  import
const bcrypt = require('bcryptjs')

const apiUrls= async(request, response, next)=>{
    return response.status(200).json({message:"nomayin"})
}

const signUp = async(request,response, next)=>{

    //get user data
    const {name, email, password }=request.body

    //hashing the password
    const hashedpassword = bcrypt.hashSync(password,12)
    
    const user = new UserSchemer({
        name:name,
        email:email,
        password:hashedpassword
    })

    try {
        //Save Userdata to database
        await user.save()
        return response.status(200).json({message:"user signed up", status:"success",data:user._doc})
    } catch (error) {
        
        return response.status(400).json({message:error.message, status:"Error",data:null})
    }
   
}

const signIn = async(request,response, next)=>{
    return response.status(200).json({massage:"user signed in"})
}

const getUser = async(request,response, next)=>{
    try {
        const user = await UserSchemer.findById(id).select(`-password`).exec()
        return response.status(200).json({massage:"Got user"})
    } catch (error) {
        return response.status(400).json({message:error.message, status:"Error",data:null})      
    }
}

const getUsers = async(request,response, next)=>{
 try {
    const users = await UserSchemer.find({}).select('-password').exec()
    return response.status(200).json({message:"users", status:"success",data:users})
 } catch (error) {
    return response.status(400).json({message:error.message, status:"Error",data:null})
 }
}


const updateUser = async(request,response, next)=>{
    return response.status(200).json({massage:"user Updated"})
}

const deleteUser = async(request,response, next)=>{
    return response.status(200).json({massage:"user Deleted"})
}

module.exports ={
    apiUrls,
    signIn,
    signUp,
    updateUser,
    getUser,
    getUsers,
    deleteUser
}