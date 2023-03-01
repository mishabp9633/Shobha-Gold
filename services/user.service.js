import userModel from "../models/user.model.js"
import bcrypt from "bcrypt"
import {HttpException} from '../exceptions/exceptions.js';



export async function save (userdata){
       const user = await userModel.findOne({username:userdata.username})
       if(user){
        throw new HttpException(400, 'User already registerd')
       }
      const password = userdata.password
      const confirmPassword = userdata.confirmPassword

  const salt = await bcrypt.genSalt(10);
  const Password = await bcrypt.hash(password,salt)
  const ConfirmPassword = await bcrypt.hash(confirmPassword,salt)

  userdata.password=Password
  userdata.confirmPassword=ConfirmPassword
        const result = new userModel(userdata)
       await result.save()
        return {result}
    
}


export async function getDataAdminByToken (id){
  const result =await userModel.find({_id:id},{},{projection:{password:0,confirmPassword:0,isAdmin:0}})
  if(!result)throw new HttpException (404,"Admin not found by the given Token")
  return {result}
}



