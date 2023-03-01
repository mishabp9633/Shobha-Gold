// import { MongoTopologyClosedError } from "mongodb";
import mongoose from "mongoose";


export const gramRateSchema = new mongoose.Schema({
    gramRate:{
        type:Number,
        required:true,
        max: [10000, "You enter a invalid gram rate"],
        min: [1000, "You enter a invalid gram rate"],
    },
    pavanRate:{
        type:Number,
        required:true,
        max: [100000, "You enter a invalid pavan rate"],
        min: [10000, "You enter a invalid pavan rate"],
    },
    GST:{
        type:Number,
    }

},{timestamps:true});

const goldrate = mongoose.model("Goldrate", gramRateSchema);
export default goldrate;
