// node file
const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
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

app.post("/login", cors(), async (req,res) => {
    // console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;
    
    try {
        const temp = "SELECT password FROM accountLogin WHERE username=$1";
        const resp = await pool.query(temp, [username]);
        // console.log(resp.rowCount);
        if (resp.rowCount === 0) {
            res.sendStatus(401);
        } else {
            // console.log(resp.rows[0].password);
            // console.log(password);
            if (await argon2.verify(resp.rows[0].password, password)) {
                res.sendStatus(200);
            } else {
                res.sendStatus(401);
            }
        }
    } catch (err) {
        console.log(err);
    }
});

app.get("/user-info", async (req,res) => {
    const user = req.query.username;
    try {
        const temp = await pool.query("SELECT * FROM accountLogin WHERE username=$1",[user]);
        res.send(temp.rows);
    } catch (err) {
        console.log(err);
    }
})

app.post("/create", cors(), async (req, res) => {
    let hash;
    const username = req.body.username;
    const password = req.body.password;
    try {
      hash = await argon2.hash(password, "abcdefghijklmnop");
      // console.log("HASH " + hash);
      const query = "INSERT INTO accountLogin (username, password) VALUES ($1, $2)";
      const result = await pool.query(query, [username, hash]);
      //console.log(result);
      if (result.rowCount == 1) {
        res.json("User created");
      } else {
        res.json("User not created");
      }
    } catch (err) {
      // console.log("ERROR " + err);
      if (err.message.search("duplicate") != -1) {
        res.json("Username taken");
      }
    }
});

// app.update("/update", cors(), async (req,res) => {
//   const id = req.body.id;

//   // need to receive id before this
//   const query = "UPDATE accountLogin SET username=$1 AND password=$2 WHERE id=$1";
// });

MongoClient.connect("mongodb+srv://AustinDB:Vcube56!@cluster0.abnfm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useUnifiedTopology: true })
.then(client => {
    // console.log("Connected to database!");
    const db = client.db('workouts');
    const collections = db.collection('list');

    app.get('/workouts', (req,res) => {
        const cursor = collections.find();

        const result = cursor.toArray()
        .then(results => {
          // console.log(results);
          res.json({ workout: results })
        })
        .catch(error => console.error(error));
    })

    // create workout might turn into adding an array of elements so they can add as many as they want
    app.post('/addWorkout', (req,res) => {
      const name = req.body.name;
      console.log(req.body.length);
      


      // const myObject = {name: name, difficulty: difficulty};
      // console.log(myObject);
      /*collections.insertOne(myObject, function(err, reeeeeeee) {
        if (err) throw err;
        res.json({workout: "Added!"});
      })*/
    })

}).catch(console.error);

app.listen(app.get("port"), () => {
    console.log(`Find the server at http://localhost:${app.get("port")}`);
});