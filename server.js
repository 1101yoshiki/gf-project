const path = require("path");
const express = require("express");
const app = express();
const knex = require("./src/db/index")

// const allowCrossDomain = function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
//     res.header(
//       'Access-Control-Allow-Headers',
//       'Content-Type, Authorization, access_token'
//     )
// }
// app.use(allowCrossDomain);
//expressの静的コンテンツを応答する時は、buildフォルダ下のものを使うという設定
app.use(express.static(path.join(__dirname, "/build")));

const port = process.env.PORT || 4000;

app.get("/api", (req, res) => {
    res.send("Hello, World!");
});

app.get("/", (req, res) => {
res.send("konnitiwa");
});

app.use(express.json())
app.get("/user/:num", async (req, res) => {
console.log("req.params.num",req.params.num)
let result;
if (req.params.num === "undefined"){
    result = await knex
    .select("userName")
    .from("userTable")
    .then(res => res.map(e => e.userName));
} else {
    const key = req.params.num.toString();
    result = await knex
    .select("userName")
    .from("userTable")
    .where({
        [key]: true
    })
    .then(res => res.map(e => e.userName));
}
res.send(result).status(200).end();
});

app.get("/login/:userName/:pass", (req, res) => {
    console.log("req.params.userName",req.params.userName);
    console.log("req.params.pass",req.params.pass)
    const userName = req.params.userName;
    const pass = req.params.pass;
    knex
    .select(
        "userName",
        "pass"
    )
    .from("userTable")
    .where({
        userName: userName,
        pass: pass
    })
    .then(result=>{
        console.log(result)
        if (result.length === 0) {
            res.type("json").send([{message:"ユーザーが存在しないまたはパスワードが違います"}]).status(200).end();
        } else {
            res.send(result).status(200).end()
        }
    }); 
});

app.get("/login/:userName", (req, res) => {
    console.log("req.params.userName",req.params.userName);
    const userName = req.params.userName;
    knex
    .select(
        "userName",
    )
    .from("userTable")
    .where({
        userName: userName,
    })
    .then(result=>{
        console.log(result)
        if (result.length === 0) {
            res.type("json").send([{message:"新規ユーザーです"}]).status(200).end();
        } else {
            res.send(result).status(200).end()
        }
    }); 
});

app.get("/alldata/:userName", (req, res)=> {
    const userName = req.params.userName;
    knex
    .select()
    .from("userTable")
    .where({
        userName: userName,
    })
    .then(result=>{
        console.log(result)
        if (result.length === 0) {
            res.type("json").send([{message:"ユーザー情報が存在していません"}]).status(200).end();
        } else {
            res.send(result).status(200).end()
        }
    }); 
});


app.post("/singup", async (req, res) => {
    console.log("req.body",req.body);
    await knex("userTable")
    .insert(req.body);
    res.status(200).end();
});

app.put("/update", async (req, res) => {
    const userName = req.body.userName;
    await knex("userTable")
    .where({
        userName:userName
    })
    .update(req.body);

    res.status(200).end();
});


app.listen(port, () => {
  console.log("App listening on port " + port);
});