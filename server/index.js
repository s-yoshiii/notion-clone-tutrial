const express = require("express");
const app = express();
const PORT = 8000;
// http://localhost:8000/
app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.listen(PORT, () => {
  console.log("ローカルサーバー起動中・・・");
});
