import express from "express";
import { carRouter } from "./routes/carRoute";


const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("dav dav");
  console.log("yoyo");
});

app.use('/cars', carRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
