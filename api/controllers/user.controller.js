import User from "../model/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";


export const test = (req, res) => {
    res.json({
        message: "API is working"
    });
    };


//update user
export const updateUser = async (req,res,next) =>{
    if(req.user.id !== req.params.id){
        return next(errorHandler(401,"you can update only your account!"));
    }
    try {
        if(req.body.password){
            req.body.password = bcryptjs.hashSync(req.body.password,10);
        }
        const updateUser = await User.findByIdAndUpdate(
            req.params.id,
            {$set: {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                profilePicture: req.body.profilePicture
            }
        },
        {new:true}
        );
        const {password, ...rest} = updateUser._doc;
        res.status(200).json(rest);
    } catch (error) {
        next(error);
    }
}


//Delete User
export const deleteUser = async (req, res, next) => {
    if(req.user.id !== req.params.id){
        return next(errorHandler(401, "You can Delete only your Account!"));
    }
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json('User has been deleted.')
    } catch (error) {
        next(error)
    }
}

