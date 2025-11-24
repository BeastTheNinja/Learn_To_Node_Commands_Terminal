import { prisma } from "../prisma.js";

export const getRecords = async (req, res) => {
  try {
    console.log("categoryController: getRecords");
    const data = await prisma.category.findMany();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send(`DB Fejl: Kunne ikke hente liste af categories`);
  }
};

export const getRecord = async (req, res) => {
  try {
    const id = Number(req.params.id);
    console.log(`categoryController: getRecord ${id}`);
    const record = await prisma.category.findUnique({ where: { id } });
    if (!record) return res.status(404).send(`Category ikke fundet`);
    res.json(record);
  } catch (error) {
    console.error(error);
    res.status(500).send(`DB Fejl: Kunne ikke hente category`);
  }
};

