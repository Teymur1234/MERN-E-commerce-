import express from "express"

import protectRoute from "../middlewares/protectRoute.js"

import {addOrder , getSingleOrder , getOrders} from "../controllers/orders.controller.js"

const router = express.Router()

router.use(protectRoute)

router.get("/",getOrders)
router.get("/:userId",getSingleOrder)
router.post("/",addOrder)

export default router