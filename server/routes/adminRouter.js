const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.post("/login", adminController.login);
router.get("/check_users", adminController.check_users);
router.put("/update_user/:userId", adminController.update_user);
router.delete("/delete_user/:userId", adminController.delete_user);
router.get("/check_skills", adminController.check_skills);
router.get("/check_skills_byUser/:userId", adminController.check_skills_byUser);
router.put("/update_skill/:skillId", adminController.update_skill);
router.delete("/delete_skill/:skillId", adminController.delete_skill);
router.post("/create_new_skill", adminController.create_new_skill);
router.delete("/delete_new_skill/:newSkillId", adminController.delete_new_skill);
router.get("/all_new_skills", adminController.all_new_skills);
router.post("/create_project", adminController.create_project);
router.get("/check_project", adminController.check_project);
router.put("/update_project/:projectId", adminController.update_project);
router.delete("/delete_project/:projectId", adminController.delete_project);


module.exports = router;