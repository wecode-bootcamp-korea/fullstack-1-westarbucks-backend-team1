-- CreateTable
CREATE TABLE `category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `category_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `drinks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `drinks_name` VARCHAR(191) NOT NULL,
    `drinks_english_name` VARCHAR(191),
    `category_id` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `is_new` BOOLEAN NOT NULL,
    `created_at` DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `category_id`(`category_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `drinks` ADD FOREIGN KEY (`category_id`) REFERENCES `category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
