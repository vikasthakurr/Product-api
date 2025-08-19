import express from "express";
import fs from "fs";
import cors from "cors";
import path from "path";

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.static(path.resolve()));

app.get("/products", (req, res) => {
  fs.readFile("./product.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error reading product data");
    } else {
      res.send(data);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
