const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/forgot_password", userController.forgot_password);
router.post("/reset_password", userController.reset_password);
router.post("/create_skill", userController.create_skill);
router.get("/check_skill/:userId", userController.check_skill);
router.put("/update_skill/:skillId", userController.update_skill);
router.delete("/delete_skill/:skillId", userController.delete_skill);
router.get("/info/:userId", userController.user_info);
router.get("/all_users", userController.all_users);
router.get("/check_skills_byUser/:userId",userController.check_skills_byUser)
router.get("/all_skills", userController.all_skills);
router.post("/add_project", userController.add_project);



module.exports = router;
