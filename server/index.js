const express = require("express");
const mongoose = require("mongoose");
const CreptJS = require("crypto-js");
const app = express();
const PORT = 8000;
require("dotenv").config();
// DB接続
try {
  mongoose.connect(process.env.MONGODB_URL);
  console.log("DBと接続中");
} catch (error) {
  console.log(error);
}

// ユーザー新規登録API
app.post("/resister", (req, res) => {
  // パスワードの受け取り
  const password = req.body.password;
  try {
    // パスワードの暗号化
  } catch {}
});

// http://localhost:8000/

app.listen(PORT, () => {
  console.log("ローカルサーバー起動中・・・");
});
