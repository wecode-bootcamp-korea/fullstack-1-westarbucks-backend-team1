/*
  Warnings:

  - You are about to drop the column `drinks_english_name` on the `drinks` table. All the data in the column will be lost.
  - You are about to drop the column `drinks_name` on the `drinks` table. All the data in the column will be lost.
  - You are about to alter the column `email` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `password` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(30)`.
  - Added the required column `korean_name` to the `drinks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `drinks` DROP COLUMN `drinks_english_name`,
    DROP COLUMN `drinks_name`,
    ADD COLUMN `english_name` VARCHAR(191),
    ADD COLUMN `korean_name` VARCHAR(191) NOT NULL,
    MODIFY `description` VARCHAR(1000) NOT NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `email` VARCHAR(100) NOT NULL,
    MODIFY `password` VARCHAR(30) NOT NULL;
