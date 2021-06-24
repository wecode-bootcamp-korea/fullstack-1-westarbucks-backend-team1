/*
  Warnings:

  - You are about to alter the column `description` on the `drinks` table. The data in that column could be lost. The data in that column will be cast from `VarChar(2000)` to `VarChar(191)`.
  - You are about to drop the column `drink_id` on the `nutritions` table. All the data in the column will be lost.
  - You are about to drop the `favorites` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[drinks_id]` on the table `nutritions` will be added. If there are existing duplicate values, this will fail.
  - Made the column `created_at` on table `allergies` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `categories` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `drink_allergies` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `drink_images` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `drinks` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `drinks_id` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Made the column `created_at` on table `nutritions` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `favorites` DROP FOREIGN KEY `favorites_ibfk_1`;

-- DropForeignKey
ALTER TABLE `nutritions` DROP FOREIGN KEY `nutritions_ibfk_1`;

-- AlterTable
ALTER TABLE `allergies` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `categories` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `drink_allergies` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `drink_images` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `drinks` MODIFY `description` VARCHAR(191) NOT NULL,
    MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `nutritions` DROP COLUMN `drink_id`,
    ADD COLUMN `drinks_id` INTEGER NOT NULL,
    MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `users` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- DropTable
DROP TABLE `favorites`;

-- CreateIndex
CREATE UNIQUE INDEX `nutritions_drinks_id_unique` ON `nutritions`(`drinks_id`);

-- AddForeignKey
ALTER TABLE `nutritions` ADD FOREIGN KEY (`drinks_id`) REFERENCES `drinks`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
