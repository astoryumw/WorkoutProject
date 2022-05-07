// node file
const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const path = require('path');
const crypto = require('crypto');
const mongoose = require('mongoose');
const multer = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

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

app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

const Pool = require("pg").Pool;
const config = {
    host: "localhost",
    user: "postgres",
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
        // console.log(resp);
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

const mongoURI = 'mongodb+srv://AustinDB:Vcube56!@cluster0.abnfm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// const conn = mongoose.createConnection(mongoURI);

// Init gfs
// let gfs;

// conn.once('open', () => {
//   // Init stream
//   gfs = Grid(conn.db, mongoose.mongo);
//   gfs.collection('uploads');
// });

// const storage = new GridFsStorage({
//   url: mongoURI,
//   file: (req, file) => {
//     return new Promise((resolve, reject) => {
//       crypto.randomBytes(16, (err, buf) => {
//         if (err) {
//           return reject(err);
//         }
//         const filename = buf.toString('hex') + path.extname(file.originalname);
//         const fileInfo = {
//           filename: filename,
//           bucketName: 'uploads'
//         };
//         resolve(fileInfo);
//       });
//     });
//   }
// });
// const upload = multer({ storage });

// use insertOne?
// app.post('/upload', upload.single('image'), (req, res) => {
//   console.log("I'm in /upload");
//   res.json({ image: req.image });
//   gfs.collection.files.createIndex({ filename: req.image });
//   // console.log(req);
//   // res.redirect('/');
// });

MongoClient.connect(mongoURI, {
    useUnifiedTopology: true })
.then(client => {
    console.log("Connected to database!");
    const db = client.db('workouts');
    const collections = db.collection('list');
    const collectionsImage = db.collection('images');
    const conn = mongoose.createConnection(mongoURI);

    let gfs;

    conn.once('open', () => {
      // Init stream
      gfs = Grid(conn.db, mongoose.mongo);
      gfs.collection('uploads');
    });

    const storage = new GridFsStorage({
      url: mongoURI,
      file: (req, file) => {
        return new Promise((resolve, reject) => {
          crypto.randomBytes(16, (err, buf) => {
            if (err) {
              return reject(err);
            }
            const filename = buf.toString('hex') + path.extname(file.originalname);
            const fileInfo = {
              filename: filename,
              bucketName: 'uploads'
            };
            resolve(fileInfo);
          });
        });
      }
    });
    const upload = multer({ storage });
    // const newDb = client.db("myFirstDatabase");
    // const newBucket = new mongodb.GridFSBucket(newDb);
    

    app.post('/upload', upload.single('image'), (req, res) => {
      console.log("I'm in /upload");
      res.json({ image: req });
      // collectionsImage.createIndex({ filename: req.image });
      // gfs.collection.files.createIndex({ filename: req.image });
      // console.log(req.image);
      res.redirect('/');
    });

    app.get('/photo/:filename', (req,res) => {
      gfs.files.findOne({ filename: req.params.filename }, (err,image) => {
        res.json(image);
        // if (!image || image.length===0) {
        //   console.log("Nothing in the database");
        // } else {
        //   console.log("There is something in the database");
        //   // res.json(image);

        //   if (image.contentType === 'image/jpeg' || image.contentType === 'image/png') {
        //     console.log("Something did work");
        //     const readstream = gfs.createReadStream({filename: image.filename});
        //     // readstream.pipe(res);
        //   } else {
        //     console.log("Something didn't work");
        //   }
        // }
      })
    })

    app.get('/', (req,res) => {
      gfs.files.find().toArray((err, image) => {
        if (!image || image.length===0) {
          res.render('index', { image: false });
        } else {
          // image.map(file => {
          //   if (
          //     file.contentType === 'image/jpeg' ||
          //     file.contentType === 'image/png'
          //   ) {
          //     file.isImage = true;
          //   } else {
          //     file.isImage = false;
          //   }
          // });
          res.render('index', { image: image });
        }
      })
    })

    app.get('/workouts', (req,res) => {
        const cursor = collections.find();
        
        const result = cursor.toArray()
        .then(results => {
          //console.log(results);
          //console.log(typeof(results));
          // console.log(Object.values(results));
          res.json({ workout: results })
        })
        .catch(error => console.error(error));
    })

    // create workout might turn into adding an array of elements so they can add as many as they want
    app.post('/addWorkout', (req,res) => {
      // console.log("this is my body");
      // console.log(req.body);
      var myObjects = req.body;
      // console.log(typeof(myObjects));
      var myArray = Object.values(myObjects);
      // console.log(myArray[0][0]);
      
      const newObject = {workout: myArray};
      // console.log(myObject);
      collections.insertOne(newObject, function(err, reeeeeeee) {
        if (err) throw err;
        res.json({workout: "Added!"});
      })
    })



}).catch(console.error);

app.listen(app.get("port"), () => {
    console.log(`Find the server at http://localhost:${app.get("port")}`);
});