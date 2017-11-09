const express = require("express")
const router = express.Router()

const question = require("./controller")
const answer = require("./answers/controller")

router.get("/", question.get)
router.get("/:id", question.getOne)
router.post("/", question.post)
router.delete("/", question.delete)
router.delete("/:id", question.deleteOne)
router.put("/:id", question.putOne)

router.get("/:id/answers", answer.get)
router.get("/:id/answers/:id", answer.getOne)
router.post("/:id/answers", answer.post)
router.delete("/:id/answers", answer.delete)
router.delete("/id/answers/:id", answer.deleteOne)
router.put("/:id/answers/:id", answer.putOne)

module.exports = router
