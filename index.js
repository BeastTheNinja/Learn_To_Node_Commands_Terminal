import express from "express";
import dotenv from "dotenv";
import { carRouter } from "./routes/carRoute.js";
import { brandRouter } from "./routes/brandRoute.js";
import { categoryRouter } from "./routes/categoryRoute.js";
import { aboutRouter } from "./routes/aboutRoute.js";
import { departmentRouter } from "./routes/departmentRoute.js";
import { contactRouter } from "./routes/contactRoute.js";

dotenv.config();

const PORT = process.env.SERVERPORT || 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("dav dav");
  console.log("yoyo");
});

app.use("/api/cars", carRouter);
app.use("/api/brands", brandRouter);
app.use("/api/categories", categoryRouter);
app.use("/about", aboutRouter);
app.use("/departments", departmentRouter);
app.use("/contact", contactRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
