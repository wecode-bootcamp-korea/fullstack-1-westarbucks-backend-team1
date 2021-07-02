/*
  Warnings:

  - A unique constraint covering the columns `[drink_id]` on the table `nutrition` will be added. If there are existing duplicate values, this will fail.
  - Made the column `created_at` on table `drinks` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `drinks` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `users` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX `nutrition_drink_id_unique` ON `nutrition`(`drink_id`);
