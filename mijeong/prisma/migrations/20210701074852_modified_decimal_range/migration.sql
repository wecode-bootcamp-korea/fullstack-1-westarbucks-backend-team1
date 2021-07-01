/*
  Warnings:

  - You are about to alter the column `one_serving_kcal` on the `nutritions` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(5,2)`.
  - You are about to alter the column `sodium_mg` on the `nutritions` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(5,2)`.
  - You are about to alter the column `saturated_fat_g` on the `nutritions` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(5,2)`.
  - You are about to alter the column `sugars_g` on the `nutritions` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(5,2)`.
  - You are about to alter the column `protein_g` on the `nutritions` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(5,2)`.
  - You are about to alter the column `caffeine_mg` on the `nutritions` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(5,2)`.

*/
-- AlterTable
ALTER TABLE `nutritions` MODIFY `one_serving_kcal` DECIMAL(5, 2),
    MODIFY `sodium_mg` DECIMAL(5, 2),
    MODIFY `saturated_fat_g` DECIMAL(5, 2),
    MODIFY `sugars_g` DECIMAL(5, 2),
    MODIFY `protein_g` DECIMAL(5, 2),
    MODIFY `caffeine_mg` DECIMAL(5, 2);
