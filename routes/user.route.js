import  express from 'express'
import {
    userData, 
    getAdminByToken,
} from '../controllers/user.controller.js'

import { adminMiddleware } from '../middlewares/auth.middleware.js'
import { userMiddleware } from '../middlewares/user.middleware.js'


const router = express.Router()
const path = "/user"

//..............admin..............//
router.post(`${path}/signup`,userMiddleware,userData)
router.get(`${path}/get`,adminMiddleware,getAdminByToken)


export default router

