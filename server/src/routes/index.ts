import express, { Router } from "express"

import cors from "cors"

const router: Router = express.Router()

router.use(cors())

export default router
