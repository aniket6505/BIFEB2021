import express from 'express'
import {getAlltutorialsbytitle,gettutorialsById,createTutorial,deletetutorialById,updatetutorialById} from '../controllers/tutorial.js'

const router=express.Router();

router.get("/",getAlltutorialsbytitle)
router.get("/:id",gettutorialsById)
router.post("/", createTutorial)
router.delete("/:id", deletetutorialById)
router.put("/:id",updatetutorialById)
export default router;

