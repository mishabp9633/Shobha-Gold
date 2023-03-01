import  express from 'express'
import { getGoldRate, goldRateData, updateGoldRate } from '../controllers/goldRate.controller.js'
import { adminMiddleware } from '../middlewares/auth.middleware.js'
import { goldrateValidator } from '../middlewares/goldRate.middleware.js'



const router = express.Router()
const path = "/goldrate"

//........goldRate...........//
router.post(`${path}/save`,adminMiddleware,goldrateValidator,goldRateData)
router.get(`${path}/get`,getGoldRate)
router.put(`${path}/update/:id`,adminMiddleware,goldrateValidator,updateGoldRate)


export default router
