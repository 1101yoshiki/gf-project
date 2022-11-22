const path = require("path");
const express = require("express");
const app = express();

//expressの静的コンテンツを応答する時は、buildフォルダ下のものを使うという設定
app.use(express.static(path.join(__dirname, "/build")));

const port = process.env.PORT || 4000;

app.use("/api", (req, res) => {
    res.send("Hello, World!");
 });

 app.post("/", async (req, res) => {
    console.log("req.body",req.body)
    const key = req.body.toString();
    const result = await knex
    .select("userName")
    .from("userTable")
    .where({
       [key]: true
    })
    .then(res => res.map(e => e.userName))

    res.send(result);
 });



app.listen(port, () => {
  console.log("App listening on port " + port);
});