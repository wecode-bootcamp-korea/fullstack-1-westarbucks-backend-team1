-- CreateTable
CREATE TABLE `drink_images` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `image_url` VARCHAR(191) NOT NULL,
    `drinks_id` INTEGER NOT NULL,

    INDEX `drinks_id`(`drinks_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `drink_images` ADD FOREIGN KEY (`drinks_id`) REFERENCES `drinks`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
