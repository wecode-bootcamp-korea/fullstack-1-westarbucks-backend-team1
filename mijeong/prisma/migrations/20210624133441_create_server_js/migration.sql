/*
  Warnings:

  - You are about to drop the column `drinks_id` on the `drink_images` table. All the data in the column will be lost.
  - You are about to drop the column `users_favorite` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `drinks_allergies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `nutrition` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `drink_id` to the `drink_images` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `drink_images` DROP FOREIGN KEY `drink_images_ibfk_1`;

-- DropForeignKey
ALTER TABLE `drinks` DROP FOREIGN KEY `drinks_ibfk_1`;

-- DropForeignKey
ALTER TABLE `drinks_allergies` DROP FOREIGN KEY `drinks_allergies_ibfk_1`;

-- DropForeignKey
ALTER TABLE `drinks_allergies` DROP FOREIGN KEY `drinks_allergies_ibfk_2`;

-- DropForeignKey
ALTER TABLE `nutrition` DROP FOREIGN KEY `nutrition_ibfk_1`;

-- AlterTable
ALTER TABLE `drink_images` DROP COLUMN `drinks_id`,
    ADD COLUMN `drink_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `users_favorite`,
    ADD COLUMN `favorite` VARCHAR(191),
    MODIFY `email` VARCHAR(191) NOT NULL,
    MODIFY `password` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `category`;

-- DropTable
DROP TABLE `drinks_allergies`;

-- DropTable
DROP TABLE `nutrition`;

-- CreateTable
CREATE TABLE `categories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `category_name` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `drink_allergies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `drink_id` INTEGER NOT NULL,
    `allergy_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nutritions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `one_serving_kcal` DECIMAL(65, 30),
    `sodium_mg` DECIMAL(65, 30),
    `saturated_fat_g` DECIMAL(65, 30),
    `sugars_g` DECIMAL(65, 30),
    `protein_g` DECIMAL(65, 30),
    `caffeine_mg` DECIMAL(65, 30),
    `drink_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `nutritions_drink_id_unique`(`drink_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `drinks` ADD FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `drink_images` ADD FOREIGN KEY (`drink_id`) REFERENCES `drinks`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `drink_allergies` ADD FOREIGN KEY (`allergy_id`) REFERENCES `allergies`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `drink_allergies` ADD FOREIGN KEY (`drink_id`) REFERENCES `drinks`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `nutritions` ADD FOREIGN KEY (`drink_id`) REFERENCES `drinks`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
