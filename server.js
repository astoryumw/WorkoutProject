// node file
const express = require("express");
const cors = require("cors");
// const bodyParser = require("body-parser");
const app = express();

app.set("port", 3001);
const argon2 = require("argon2");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const Pool = require("pg").Pool;
const config = {
    host: "localhost",
    user: "Austin",
    password: "astros5",
    database: "workout"
};

const pool = new Pool(config);

app.get("/hello", (req,res) => {
    res.json("Hello world!");
});

app.post("/login", async (req,res) => {
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;
    console.log(username + password);
    try {
        const temp = "SELECT * FROM accountLogin WHERE username=$1";
        const resp = await pool.query(temp, [username]);
        console.log(resp);
        if (resp.rowCount === 0) {
            res.json({ status: "account not found" });
        } else {
            console.log(resp.rows[0].password);
            if (await argon2.verify(resp.rows[0].password, password)) {
                res.json("Log in succesful!");
            } else {
                res.json("Incorrect password");
            }
        }
    } catch (err) {
        console.log(err);
    }
});

app.post("/create", async (req, res) => {
    let hash;
    const username = req.body.username;
    const password = req.body.password;
    try {
      hash = await argon2.hash(password, "abcdefghijklmnop");
      console.log("HASH " + hash);
      const query = "INSERT INTO accountLogin (username, password) VALUES ($1, $2)";
      const result = await pool.query(query, [username, hash]);
      //console.log(result);
      if (result.rowCount == 1) {
        res.json("User created");
      } else {
        res.json("User not created");
      }
    } catch (err) {
      console.log("ERROR " + err);
      if (err.message.search("duplicate") != -1) {
        res.json("Username taken");
      }
    }
  });

app.listen(app.get("port"), () => {
    console.log(`Find the server at http://localhost:${app.get("port")}`);
});