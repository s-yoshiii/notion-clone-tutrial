const { body, validationResult } = require("express-validator");
const router = require("express").Router();
require("dotenv").config();

const User = require("../models/user");
const validation = require("../handlers/validation");
const userController = require("../controllers/users");
// ユーザー新規登録API
router.post(
  "/resister",
  body("username")
    .isLength({ min: 8 })
    .withMessage("ユーザー名は8文字以上です。"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("パスワードは8文字以上です。"),
  body("confirmPassword")
    .isLength({ min: 8 })
    .withMessage("確認用パスワードは8文字以上です。"),
  body("username").custom((value) => {
    return User.findOne({ username: value }).then((user) => {
      if (user) {
        return Promise.reject("このユーザーはすでに使われています。");
      }
    });
  }),
  validation.validate,
  userController.resister
);

module.exports = router;
