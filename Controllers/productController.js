const db = require("../db");

exports.getAllProducts = (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.createProduct = (req, res) => {
  const { name, price, category_id } = req.body;

  db.query(
    "INSERT INTO products (name, price, category_id) VALUES (?, ?, ?)",
    [name, price, category_id],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ message: "Product added", id: result.insertId });
    }
  );
};

exports.updateProduct = (req, res) => {
  const { name, price, category_id } = req.body;
  const { id } = req.params;

  db.query(
    "UPDATE products SET name = ?, price = ?, category_id = ? WHERE id = ?",
    [name, price, category_id, id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.json({ message: "Product updated" });
    }
  );
};

exports.deleteProduct = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM products WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Product deleted" });
  });
};