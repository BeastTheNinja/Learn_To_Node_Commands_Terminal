import { prisma } from "../prismaClient.js";

export const createRecord = async (req, res) => {
  const { category, brand, model, year, price, fueltype } = req.body;

  if (!category || !brand || !model || !year || !price || !fueltype) {
    return res.status(400).json("All fields are required");
  }

  try {
    const data = await prisma.cars.create({
      data: {
        category,
        brand,
        model,
        year: Number(year),
        price,
        fueltype,
      },
    });
    res.status(201).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "NOGET GIK GALT VED OPRETTELSE AF BIL" });
  }
};
