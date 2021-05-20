import express from 'express'
import {getAlltutorialsbytitle} from '../controllers/tutorial.js'

const router=express.Router();

router.get("/"getAlltutorialsbytitle)

export default router

