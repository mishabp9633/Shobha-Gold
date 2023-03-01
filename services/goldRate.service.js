import goldRate from "../models/goldrate.model.js"
import {HttpException} from '../exceptions/exceptions.js';



export async function save(Data){
    const goldrateData = await goldRate.create({...Data})
    console.log(goldrateData)
    return {goldrateData}
}

export async function getData (){
  const result = await goldRate.find()
  if(!result)throw new HttpException (404,"No gold rate added yet")
  return {result}
}


export async function update(id,data){
    const goldrate = await goldRate.findByIdAndUpdate(id,data,{new:true})
    if(!goldrate) throw new HttpException(404, "Gold rate not found")
    return { goldrate }
 }

