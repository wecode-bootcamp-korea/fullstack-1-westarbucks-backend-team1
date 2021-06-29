-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `users_name` VARCHAR(191) NOT NULL,
    `users_email` VARCHAR(191) NOT NULL,
    `users_password` VARCHAR(191) NOT NULL,
    `users_favorite` VARCHAR(191) NOT NULL,
    `review` VARCHAR(191),
    `created_at` DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `users.users_email_unique`(`users_email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
