import express from "express";
import { carRouter } from "./routes/carRoute.js";
import { aboutRouter } from "./routes/aboutRoute.js";
import { departmentRouter } from "./routes/departmentRoute.js";
import { contactRouter } from "./routes/contactRoute.js";


const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("dav dav");
  console.log("yoyo");
});

app.use('/cars', carRouter);
app.use('/about', aboutRouter);
app.use('/departments', departmentRouter);
app.use('/contact', contactRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
