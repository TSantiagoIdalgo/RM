const {Router} = require("express")
const {users, postUser} = require("../controllers/controllers")
const router = Router()


router.get("/users", users)

router.post("/users", postUser)


module.exports = router