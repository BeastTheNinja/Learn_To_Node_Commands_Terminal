import { prisma } from "../prisma.js";

export const getRecords = async (req, res) => {
  try {
    console.log("brandController: getRecords");
    const data = await prisma.brand.findMany();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send(`DB Fejl: Kunne ikke hente liste af brands`);
  }
};

export const getRecord = async (req, res) => {
  try {
    const id = Number(req.params.id);
    console.log(`brandController: getRecord ${id}`);
    const record = await prisma.brand.findUnique({ where: { id } });
    if (!record) return res.status(404).send(`Brand ikke fundet`);
    res.json(record);
  } catch (error) {
    console.error(error);
    res.status(500).send(`DB Fejl: Kunne ikke hente brand`);
  }
};
// Only getRecords and getRecord are required for the current lesson.
