import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { JWT_SECRET, JWT_EXPIRES_IN, NODE_ENV } from '../config/env.js';
import User from '../models/user.model.js';
export const signup=async(req,res,next)=>
{
     const session=await mongoose.startSession();
     session.startTransaction();
        try{ 
            const{name,email,password}=req.body;    
            const existingUser=await User.findOne({email});
            if(existingUser){
               const error=new Error('User already exists');
               error.statusCode=409; // Conflict
               throw error;
            }
            //hashthe password
            const hasedPassword=await bcrypt.hash(password,10);
            const newuser=await User.create([{name,email,password:hasedPassword}],{session});
            await session.commitTransaction();
            //create a JWT token
            const token=jwt.sign({id:newuser[0]._id},JWT_SECRET,{expiresIn:JWT_EXPIRES_IN});

            await session.commitTransaction();
            res.status(201).json({
                success:true,
                message: 'User signed up successfully',
                data:{
                    token,
                    user:newuser[0] // Return the newly created user    
                }
            });
        }catch(error){
            await session.abortTransaction();
            session.endSession();
            next(error);
        }
}
export const signin=async(req,res,next)=>
{
    try{
        const{email,password}=req.body;
        const user=await User.findOne({email});
        if(!user){
            const error=new Error('User not found');
            error.statusCode=404; // Not Found
            throw error;
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            const error=new Error('Invalid credentials');
            error.statusCode=401; // Unauthorized
            throw error;
        }
        //create a JWT token
        const token=jwt.sign({id:user._id},JWT_SECRET,{expiresIn:JWT_EXPIRES_IN});
        res.status(200).json({
            success:true,
            message: 'User signed in successfully',
            data:{
                token,
                user
            }
        });
    }catch(error)
    {
        next(error);
    }
}
export const signout=async(req,res,next)=>
{
       try{
              // Invalidate the token by removing it from the client side
              res.status(200).json({
                success:true,
                message: 'User signed out successfully'
              });       
       }catch(error)
       {
           next(error); 
       }
}