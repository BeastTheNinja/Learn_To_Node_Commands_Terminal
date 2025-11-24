import { prisma } from "../prismaClient.js";

export const createRecord = async (req, res) => {
  const { category, brand, model, year, price, fueltype } = req.body;

  if (!category || !brand || !model || !year || !price || !fueltype) {
    return res.status(400).send("All fields are required");
  }
};
