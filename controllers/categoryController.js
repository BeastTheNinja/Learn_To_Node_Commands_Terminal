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

export const createRecord = async (req, res) => {
  try {
    const { name } = req.body;
    console.log("categoryController: createRecord", req.body);
    const data = await prisma.category.create({ data: { name: String(name) } });
    res.status(201).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send(`DB Fejl: Kunne ikke oprette category`);
  }
};

export const updateRecord = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { name } = req.body;
    console.log(`categoryController: updateRecord ${id}`, req.body);
    const data = await prisma.category.update({
      where: { id },
      data: { name: name !== undefined ? String(name) : undefined },
    });
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send(`DB Fejl: Kunne ikke opdatere category`);
  }
};

export const deleteRecord = async (req, res) => {
  try {
    const id = Number(req.params.id);
    console.log(`categoryController: deleteRecord ${id}`);
    await prisma.category.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).send(`DB Fejl: Kunne ikke slette category`);
  }
};
