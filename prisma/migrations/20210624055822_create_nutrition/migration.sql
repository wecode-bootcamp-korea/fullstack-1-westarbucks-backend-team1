/*
  Warnings:

  - You are about to drop the column `caffeine` on the `nutrition` table. All the data in the column will be lost.
  - You are about to drop the column `protein` on the `nutrition` table. All the data in the column will be lost.
  - You are about to drop the column `saturated_fat` on the `nutrition` table. All the data in the column will be lost.
  - You are about to drop the column `sodium` on the `nutrition` table. All the data in the column will be lost.
  - You are about to drop the column `sugar` on the `nutrition` table. All the data in the column will be lost.
  - Added the required column `caffeine_mg` to the `nutrition` table without a default value. This is not possible if the table is not empty.
  - Added the required column `protein_g` to the `nutrition` table without a default value. This is not possible if the table is not empty.
  - Added the required column `saturated_fat_g` to the `nutrition` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sodium_mg` to the `nutrition` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sugar_g` to the `nutrition` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `nutrition` DROP COLUMN `caffeine`,
    DROP COLUMN `protein`,
    DROP COLUMN `saturated_fat`,
    DROP COLUMN `sodium`,
    DROP COLUMN `sugar`,
    ADD COLUMN `caffeine_mg` VARCHAR(191) NOT NULL,
    ADD COLUMN `protein_g` VARCHAR(191) NOT NULL,
    ADD COLUMN `saturated_fat_g` VARCHAR(191) NOT NULL,
    ADD COLUMN `sodium_mg` VARCHAR(191) NOT NULL,
    ADD COLUMN `sugar_g` VARCHAR(191) NOT NULL;
