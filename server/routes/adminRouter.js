const express = require("express");
const router = express.Router();
const adminController = require('../controllers/adminController');


router.post("/login", adminController.login)
router.get("/check_users", adminController.check_users)
router.put("/update_user/:userId", adminController.update_user)
router.delete("/delete_user/:userId", adminController.delete_user)
router.get("/check_skills", adminController.check_skills)
router.get("/check_skills_byUser/:userId", adminController.check_skills_byUser)
router.put("/update_skill/:skillId" , adminController.update_skill)
router.delete("/delete_skill/:skillId" , adminController.delete_skill)


module.exports = router;