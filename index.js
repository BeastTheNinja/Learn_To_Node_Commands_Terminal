import express from "express";

const ROOT = 3000;
const ABOUT = 4000;
const CONTACT = 5000;
const CARS = 6000;

const app = express();

app.get("/", (req, res) => {
  res.send("dav dav");
  console.log("yoyo");
});

app.get("/about", (req, res) => {
  res.send("about page");
  console.log("about pages here ");
});

app.get("/contact", (req, res) => {
  res.send("contact page");
  console.log("contact pages here ");
});

app.get("/cars", (req, res) => {
  res.send("cars page");
  console.log("cars pages here ");
});

app.listen(ROOT, () => {
  console.log(`Server is running on http://localhost:${ROOT}`);
});
