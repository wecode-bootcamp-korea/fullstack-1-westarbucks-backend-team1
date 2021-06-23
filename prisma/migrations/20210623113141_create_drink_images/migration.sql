-- CreateTable
CREATE TABLE `nutrition` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `one_serving_kcal` DECIMAL(65, 30),
    `sodium_mg` DECIMAL(65, 30),
    `fat_g` DECIMAL(65, 30),
    `sugars_g` DECIMAL(65, 30),
    `protein_g` DECIMAL(65, 30),
    `caffeine_mg` DECIMAL(65, 30),
    `drink_id` INTEGER NOT NULL,

    UNIQUE INDEX `nutrition_drink_id_unique`(`drink_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `drink_images` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `image_url` VARCHAR(191) NOT NULL,
    `drink_id` INTEGER NOT NULL,

    UNIQUE INDEX `drink_images_drink_id_unique`(`drink_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `nutrition` ADD FOREIGN KEY (`drink_id`) REFERENCES `drinks`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `drink_images` ADD FOREIGN KEY (`drink_id`) REFERENCES `drinks`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
