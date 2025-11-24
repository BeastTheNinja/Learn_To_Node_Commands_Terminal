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

export const createRecord = async (req, res) => {
  try {
    const { name, logo } = req.body;
    console.log("brandController: createRecord", req.body);
    const data = await prisma.brand.create({
      data: { name: String(name), logo: String(logo) },
    });
    res.status(201).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send(`DB Fejl: Kunne ikke oprette brand`);
  }
};

export const updateRecord = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { name, logo } = req.body;
    console.log(`brandController: updateRecord ${id}`, req.body);
    const data = await prisma.brand.update({
      where: { id },
      data: {
        name: name !== undefined ? String(name) : undefined,
        logo: logo !== undefined ? String(logo) : undefined,
      },
    });
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send(`DB Fejl: Kunne ikke opdatere brand`);
  }
};

export const deleteRecord = async (req, res) => {
  try {
    const id = Number(req.params.id);
    console.log(`brandController: deleteRecord ${id}`);
    await prisma.brand.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).send(`DB Fejl: Kunne ikke slette brand`);
  }
};
