import { prisma } from "../prisma.js";

export const getRecords = async (req, res) => {
  try {
    console.log("carController: getRecords");
    const data = await prisma.car.findMany({
      include: {
        brand: { select: { id: true, name: true } },
        category: { select: { id: true, name: true } },
      },
    });
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send(`DB Fejl: Kunne ikke hente liste af biler`);
  }
};

export const getRecord = async (req, res) => {
  try {
    const id = Number(req.params.id);
    console.log(`carController: getRecord ${id}`);
    const record = await prisma.car.findUnique({
      where: { id },
      include: { brand: true, category: true },
    });
    if (!record) return res.status(404).send(`Bil ikke fundet`);
    res.json(record);
  } catch (error) {
    console.error(error);
    res.status(500).send(`DB Fejl: Kunne ikke hente bilen`);
  }
};
