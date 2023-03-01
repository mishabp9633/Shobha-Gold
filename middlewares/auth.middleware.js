import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";


export async function adminMiddleware(req,res,next){
    const token = req.header('Authorization') && req.header('Authorization').split('Bearer ')[1] || null;

if (!token) {
    res.status(401).send({message:"Access denied.No token provided"})
    return
}
try {
    
    const decoded = jwt.verify(token,process.env.SECRET_KEY)
    const user = await userModel.findOne({_id: decoded._id})
    console.log('user:' ,user._id);

    if(user.isAdmin !=true)
    res.status(403).send({message:'Access denied . Not an admin'})
    req.body.user = user
    next()
} catch (error) {
    res.status(400).send({message:"Invalid token"})
}
}

