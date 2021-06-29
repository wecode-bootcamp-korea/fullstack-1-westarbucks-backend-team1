/*
  Warnings:

  - You are about to alter the column `one_serving_kcal` on the `nutritions` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(4,1)`.
  - You are about to alter the column `sodium_mg` on the `nutritions` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(4,1)`.
  - You are about to alter the column `saturated_fat_g` on the `nutritions` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(4,1)`.
  - You are about to alter the column `sugars_g` on the `nutritions` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(4,1)`.
  - You are about to alter the column `protein_g` on the `nutritions` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(4,1)`.
  - You are about to alter the column `caffeine_mg` on the `nutritions` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(4,1)`.

*/
-- AlterTable
ALTER TABLE `nutritions` MODIFY `one_serving_kcal` DECIMAL(4, 1),
    MODIFY `sodium_mg` DECIMAL(4, 1),
    MODIFY `saturated_fat_g` DECIMAL(4, 1),
    MODIFY `sugars_g` DECIMAL(4, 1),
    MODIFY `protein_g` DECIMAL(4, 1),
    MODIFY `caffeine_mg` DECIMAL(4, 1);
