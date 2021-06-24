/*
  Warnings:

  - You are about to alter the column `name` on the `allergies` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `name` on the `categories` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `korean_name` on the `drinks` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `english_name` on the `drinks` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `email` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `password` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(20)`.

*/
-- DropIndex
DROP INDEX `users.email_password_created_at_updated_at_deleted_at_index` ON `users`;

-- AlterTable
ALTER TABLE `allergies` MODIFY `name` VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE `categories` MODIFY `name` VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE `drink_images` MODIFY `image_url` VARCHAR(3000) NOT NULL;

-- AlterTable
ALTER TABLE `drinks` MODIFY `korean_name` VARCHAR(50) NOT NULL,
    MODIFY `english_name` VARCHAR(100),
    MODIFY `description` VARCHAR(1000) NOT NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `email` VARCHAR(100) NOT NULL,
    MODIFY `password` VARCHAR(20) NOT NULL;

-- CreateIndex
CREATE INDEX `users.email_password_index` ON `users`(`email`, `password`);
