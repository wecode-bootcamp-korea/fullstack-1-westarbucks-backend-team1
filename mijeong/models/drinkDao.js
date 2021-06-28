/* eslint-disable no-unused-vars */
import prisma from '../../prisma';

const drinksList = async() => {
  const drinks = await prisma.$queryRaw(`
  SELECT drinks.id, drinks.korean_name, drinks.english_name,
  categories.category_name
  FROM drinks
  JOIN categories
  ON categories.id = drinks.category_id;
  `);

  return drinks;
};

export default { drinksList };
