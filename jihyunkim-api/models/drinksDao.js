import prisma from '../prisma';

const viewAllDrinks = async () => {
  const drinks = await prisma.$queryRaw(
    `SELECT 
        drinks.id, drinks.korean_name, drinks.english_name,
        categories.category_name, 
        nutritions.one_serving_kcal, nutritions.sodium_mg, 
        nutritions.saturated_fat_g, nutritions.sugars_g, 
        nutritions.protein_g, nutritions.caffeine_mg, 
        allergies.allergy
      FROM 
        drinks
      JOIN 
        categories
      ON 
        categories.id = drinks.category_id
      JOIN
        nutritions
      ON 
        drinks.id = nutritions.drink_id
      LEFT JOIN
        drink_allergies
      ON
        drinks.id = drink_allergies.drink_id
      LEFT JOIN
        allergies
      ON 
        allergies.id = drink_allergies.allergy_id`
  );

  return drinks;
};

export default { viewAllDrinks };
