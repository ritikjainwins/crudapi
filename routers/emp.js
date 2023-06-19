const express = require("express");
const router = express.Router();
const Employer = require("../controllers/services");
const {validateEmp,ValidationForPost,ValidationForPatch} = require("../middleware")

router.route("/info").post(validateEmp(ValidationForPost),Employer.createEmp);
router.route("/info").get(Employer.getEmp);
router.route("/info/:id").get(Employer.getByIdEmp);
router.route("/info/:id").patch(validateEmp(ValidationForPatch),Employer.patchEmp);
router.route("/info/:id").delete(Employer.deleteEmp);


module.exports = router;