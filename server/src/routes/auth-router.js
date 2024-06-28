const express=require("express")

const router = express.Router();
const authControllers=require("../controllers/auth-controller")

const validate = require("../middleware/validate-middleware");
const signupSchema = require("../validators/auth-validator");


router
  .route("/register")
  .post(validate(signupSchema), authControllers.register);
router.route('/login').post(authControllers.login);

module.exports = router