import  express from 'express'
import { signIn,logoutUser} from '../controllers/auth.controller.js'
import { loginValidator } from '../middlewares/login.validation.middleware.js'



const router = express.Router()
const path = "/auth"

//........user login and log out...........//
router.post(`${path}/admin/signin`,loginValidator,signIn)
router.post(`${path}/admin/logout`,logoutUser)


export default router

