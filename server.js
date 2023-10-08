const express = require("express");
const cors = require("cors");
const http = require("http");
const stripe = require("./routes/stripe");

//Initialize express app
const app = express();

// BODYPARSER MIDDLEWARE
app.use(express.json());

//CORS
app.use(cors());

//Initialize server
const PORT = "4000";
const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("im Running ");
});
app.use("/api/stripe", stripe);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
