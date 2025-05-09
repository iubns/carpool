import cors from "cors"
import express, { Router } from "express"
import subwayDataRouter from "./subwayDataRouter"

const router: Router = express.Router()

router.use(cors())
router.use("/subwayData", subwayDataRouter)

export default router
