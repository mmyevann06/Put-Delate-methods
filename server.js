const express = require("express");
const app = express();

app.use(express.json());

// ROUTES
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");

app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});