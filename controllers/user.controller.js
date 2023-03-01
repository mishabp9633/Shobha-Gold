import {
    save, getDataAdminByToken
} from '../services/user.service.js'




export async function userData(req, res, next) {
    try {

        const userdata = req.body

        const result = await save(userdata)
        res.status(200).send(result)
    }
    catch (err) {
           console.log('err:',err)
            next(err)
        }
}




export async function getAdminByToken(req, res, next) {
    try {
        const userId = req.body.user._id
        const result = await getDataAdminByToken(userId)

        res.status(200).send(result)
    }
    catch (err) {
        next(err)
    }
}




