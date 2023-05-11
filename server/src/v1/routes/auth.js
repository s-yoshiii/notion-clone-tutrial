const { body, validationResult } = require("express-validator");
const User = require("../models/user");
const router = require("express").Router();
const CryptoJS = require("crypto-js");
const JWT = require("jsonwebtoken");
require("dotenv").config();
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
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  async (req, res) => {
    // パスワードの受け取り
    const password = req.body.password;

    try {
      // パスワードの暗号化
      req.body.password = CryptoJS.AES.encrypt(
        password,
        process.env.SECRET_KEY
      );
      // ユーザーの新規作成
      const user = await User.create(req.body);
      // JWTの発行
      const token = JWT.sign({ id: user._id }, process.env.TOKEN_SECRET_KEY, {
        expiresIn: "24h",
      });
      return res.status(200).json({ user, token });
    } catch (err) {
      return res.status(500).json(err);
    }
  }
);

module.exports = router;
