const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "public")));
app.use(cors({ origin: true }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/products", require("./routes/api/products"));
app.use("/api/posts", require("./routes/api/posts"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server runing on port ${PORT}`));
