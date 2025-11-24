import { Router } from "express";
import { createRecord } from "../controllers/carController.js";

const router = Router();

router.get("/", (req, res) => {
  console.log("liste af biler");
  res.send("liste af biler");
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  res.send(`Bil detaljer: ${id}`);
});

router.post('/', createRecord)
export { router as carRouter };
