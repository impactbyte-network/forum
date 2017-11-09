const express = require("express")
const router = express.Router()

const question = require("./controller")

router.get("/", question.get)
router.get("/:id", question.getOne)
router.post("/", question.post)
router.delete("/", question.delete)
router.delete("/:id", question.deleteOne)
router.put("/:id", question.putOne)

const answer = require("./answers/controller")

router.get("/questions/:id/answers", answer.get)
router.get("/questions/:id/answers/:id", answer.getOne)
router.post("/questions/:id/answers", answer.post)
router.delete("/questions/:id/answers", answer.delete)
router.delete("/questions/:id/answers/:id", answer.deleteOne)
router.put("/questions/:id/answers/:id", answer.putOne)

module.exports = router
