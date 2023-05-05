const express = require("express");
const mongoose = require("mongoose");
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

// http://localhost:8000/

app.listen(PORT, () => {
  console.log("ローカルサーバー起動中・・・");
});
