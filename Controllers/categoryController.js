const db = require("../db");

exports.getAllCategories = (req, res) => {
  db.query("SELECT * FROM categories", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.createCategory = (req, res) => {
  const { name } = req.body;

  db.query(
    "INSERT INTO categories (name) VALUES (?)",
    [name],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ message: "Category added", id: result.insertId });
    }
  );
};

exports.updateCategory = (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  db.query(
    "UPDATE categories SET name = ? WHERE id = ?",
    [name, id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.json({ message: "Category updated" });
    }
  );
};

exports.deleteCategory = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM categories WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Category deleted" });
  });
};