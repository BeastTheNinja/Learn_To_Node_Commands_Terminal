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

export const createRecord = async (req, res) => {
  try {
    const { categoryId, brandId, model, year, price, fuelType } = req.body;
    console.log("carController: createRecord", req.body);
    const data = await prisma.car.create({
      data: {
        categoryId: Number(categoryId),
        brandId: Number(brandId),
        model: String(model),
        year: Number(year),
        price: Number(price),
        fuelType: String(fuelType),
      },
    });
    res.status(201).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send(`DB Fejl: Kunne ikke oprette bilen`);
  }
};

export const updateRecord = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { categoryId, brandId, model, year, price, fuelType } = req.body;
    console.log(`carController: updateRecord ${id}`, req.body);
    const data = await prisma.car.update({
      where: { id },
      data: {
        categoryId: categoryId !== undefined ? Number(categoryId) : undefined,
        brandId: brandId !== undefined ? Number(brandId) : undefined,
        model: model !== undefined ? String(model) : undefined,
        year: year !== undefined ? Number(year) : undefined,
        price: price !== undefined ? Number(price) : undefined,
        fuelType: fuelType !== undefined ? String(fuelType) : undefined,
      },
    });
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send(`DB Fejl: Kunne ikke opdatere bilen`);
  }
};

export const deleteRecord = async (req, res) => {
  try {
    const id = Number(req.params.id);
    console.log(`carController: deleteRecord ${id}`);
    await prisma.car.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).send(`DB Fejl: Kunne ikke slette bilen`);
  }
};
