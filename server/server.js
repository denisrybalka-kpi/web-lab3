const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./myapp.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the myapp.db database.");
});
db.serialize(() => {
  db.run(`DROP TABLE IF EXISTS users`); // This line is just for development purposes, remove it in production
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    gender TEXT NOT NULL,
    birthdate DATE NOT NULL,
    totalPosts INTEGER NOT NULL,
    totalComments INTEGER NOT NULL,
    totalLikesReceived INTEGER NOT NULL,
    totalCommentsReceived INTEGER NOT NULL
)`);

  db.run(`DROP TABLE IF EXISTS posts`); // This line is also just for development purposes, remove it in production
  db.run(`CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      author_id INTEGER,
      FOREIGN KEY (author_id) REFERENCES users (id)
    )`);
});

app.post("/register", async (req, res) => {
  const { username, email, password, gender, birthdate } = req.body;
  if (!(email && password && username && gender && birthdate)) {
    return res.status(400).send("All input is required");
  }

  const encryptedPassword = await bcrypt.hash(password, 10);

  db.run(
    `INSERT INTO users (username, email, password, gender, birthdate, totalPosts, totalComments, totalLikesReceived, totalCommentsReceived) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [username, email, encryptedPassword, gender, birthdate, 0, 0, 0, 0],
    function (err) {
      if (err) {
        console.error(err.message);
        return res.status(500).send("Failed to create user");
      }
      res.status(201).send("User created successfully");
    }
  );
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (!(username && password)) {
    return res.status(400).send("All input is required");
  }

  db.get(
    `SELECT * FROM users WHERE username = ?`,
    [username],
    async (err, user) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error");
      }

      if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({ message: "Login successful", user });
      } else {
        res.status(400).send("Invalid Credentials");
      }
    }
  );
});

app.post("/posts", (req, res) => {
  const { title, content, author_id } = req.body;

  if (!title || !content || !author_id) {
    return res.status(400).send("Missing title, content, or author ID");
  }

  const sql = `INSERT INTO posts (title, content, author_id) VALUES (?, ?, ?)`;
  const params = [title, content, author_id];

  db.run(sql, params, function (err) {
    if (err) {
      console.error(err.message);
      return res.status(500).send("Failed to create new post");
    }
    res.status(201).send({ id: this.lastID });
  });
});

app.get("/posts", (req, res) => {
  const sql =
    "SELECT p.id, p.title, p.content, u.username AS author FROM posts p JOIN users u ON p.author_id = u.id";
  db.all(sql, [], (err, posts) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send("Failed to retrieve posts");
    }
    res.json(posts);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
