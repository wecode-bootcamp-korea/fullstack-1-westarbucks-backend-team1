import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getDrinksList = async (req, res) => {
  try {
    const drinks = await prisma.$queryRaw(`
      SELECT drinks.id, drinks.korean_name, drinks.english_name, categories.category_name
      FROM drinks
      JOIN categories
      ON categories.id = drinks.category_id;
    `);

    res.status(201).json({ drinks });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
