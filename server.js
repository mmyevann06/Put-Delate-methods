const express = require("express");
const app = express();
const db = require("./db");

app.use(express.json());

/* ================= CATEGORY CRUD ================= */

// GET
app.get("/categories", (req, res) => {
  db.query("SELECT * FROM categories", (err, result) => {
    res.send(result);
  });
});

// POST
app.post("/categories", (req, res) => {
  const { name } = req.body;
  db.query("INSERT INTO categories (name) VALUES (?)", [name], (err) => {
    res.send("Category added");
  });
});

// PUT
app.put("/categories/:id", (req, res) => {
  const { name } = req.body;
  const id = req.params.id;

  db.query("UPDATE categories SET name=? WHERE id=?", [name, id], () => {
    res.send("Category updated");
  });
});

// DELETE
app.delete("/categories/:id", (req, res) => {
  db.query("DELETE FROM categories WHERE id=?", [req.params.id], () => {
    res.send("Category deleted");
  });
});

/* ================= PRODUCT CRUD ================= */

// GET
app.get("/products", (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    res.send(result);
  });
});

// POST
app.post("/products", (req, res) => {
  const { name, price, category_id } = req.body;

  db.query(
    "INSERT INTO products (name, price, category_id) VALUES (?, ?, ?)",
    [name, price, category_id],
    () => {
      res.send("Product added");
    }
  );
});

// PUT
app.put("/products/:id", (req, res) => {
  const { name, price } = req.body;
  const id = req.params.id;

  db.query(
    "UPDATE products SET name=?, price=? WHERE id=?",
    [name, price, id],
    () => {
      res.send("Product updated");
    }
  );
});

// DELETE
app.delete("/products/:id", (req, res) => {
  db.query("DELETE FROM products WHERE id=?", [req.params.id], () => {
    res.send("Product deleted");
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});