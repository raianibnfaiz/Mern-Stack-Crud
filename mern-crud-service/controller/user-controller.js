import { response } from 'express';
import User from '../model/user-schema.js';

export const getUser= async(request,response)=>{
    try{
        let user=await User.find()
        response.status(200).json(user);
    }catch(error){
        response.status(409).json({ message: error.message});  
    }

}
export const addUser= async(request,response)=>{
    const user= request.body;
    const newUser= new User(user);
    try{
        await newUser.save();
        response.status(201).json(newUser);
    }catch(error){
        response.status(409).json({ message: error.message});  
    }

}
export const getUserById= async(request,response)=>{
    const id = request.params.id;
    try{
        const user= await User.findById(id)
        response.json(user);
    }catch(error){
        response.json({message:error.message})
    }
}
export const editUser= async(request,response)=>{
        const user=request.body;
        const editedUser=new User(user);

    try{
        await User.updateOne({_id:request.params.id},editedUser)
        response.json(editedUser)
    }catch(error){
        response.json({message:error.message});
    }
}
export const deleteUser= async(request,response)=>{
    
    try{
        await User.deleteOne({_id:request.params.id})
        response.json("user is deleted")
    }catch(error){
        response.json({message:error.message})
    }
}