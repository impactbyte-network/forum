const express = require("express")
const router = express.Router()

const controller = require("./controller")

router.get("/", controller.get)
router.get("/:id", controller.getOne)

router.post("/", controller.post)

router.delete("/", controller.delete)
router.delete("/:id", controller.deleteOne)

router.put("/:id", controller.putOne)

module.exports = router
