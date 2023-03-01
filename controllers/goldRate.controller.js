import {
    save,getData,update
} from '../services/goldRate.service.js'




export async function goldRateData(req, res, next) {
    try {

        const goldRateData = req.body

        const result = await save(goldRateData)
        res.status(200).send(result)
    }
    catch (err) {
        console.log('err:',err)
            next(err)
        }
    }





export async function getGoldRate(req, res, next) {
    try {
        const result = await getData()
        res.status(200).send(result)
    }
    catch (err) {
        console.log('err:',err)
        next(err)
    }
}


export async function updateGoldRate(req,res,next){
    try{
        const goldRateId = req.params.id
        console.log(goldRateId);
        const goldRateData = req.body
        const result = await update(goldRateId,goldRateData)
        console.log('result',result)
        res.status(200).send(result)
    }catch(err){
        console.log(err);
        next(err)
    }    
}
