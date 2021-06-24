-- CreateTable
CREATE TABLE `nutrition` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kcal` VARCHAR(191) NOT NULL,
    `sodium` VARCHAR(191) NOT NULL,
    `saturated_fat` VARCHAR(191) NOT NULL,
    `sugar` VARCHAR(191) NOT NULL,
    `protein` VARCHAR(191) NOT NULL,
    `caffeine` VARCHAR(191) NOT NULL,
    `drink_id` INTEGER NOT NULL,

    INDEX `drink_id`(`drink_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `nutrition` ADD FOREIGN KEY (`drink_id`) REFERENCES `drinks`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
