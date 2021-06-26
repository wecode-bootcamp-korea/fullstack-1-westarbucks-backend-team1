/* eslint-disable no-unused-vars */
import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

const drinks = async(req, res) => {
  try {
    const drinks = await prisma.$queryRaw(`
      SELECT drinks.id, drinks.korean_name, drinks.english_name,
      categories.category_name
      FROM drinks
      JOIN categories
      ON categories.id = drinks.category_id;                   
    `);
    res.status(200).json({ drinks });
  } catch (err){
    res.status(500).json({message: '🚨ALERT!!!!ALERT!!!!THIS IS ERROR!!!!!🚨'});
  }
};


export { drinks };
