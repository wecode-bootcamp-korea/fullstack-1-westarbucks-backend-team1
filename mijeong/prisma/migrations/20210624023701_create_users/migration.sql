/*
  Warnings:

  - You are about to drop the column `review` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `users_email` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `users_name` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `users_password` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `users.users_email_unique` ON `users`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `review`,
    DROP COLUMN `users_email`,
    DROP COLUMN `users_name`,
    DROP COLUMN `users_password`,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `users.email_unique` ON `users`(`email`);
