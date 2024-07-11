import express from "express";
const app = express();
const port = 6000;

app.get("/", (req, res) => {
  res.send("Hello word");
});

app.post("/register", (req, res) => {
  res.sendStatus(200);
});

app.put("/user/angela ", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/angela", (res, req) => {
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log(`Server Running on Port ${port}`);
});
