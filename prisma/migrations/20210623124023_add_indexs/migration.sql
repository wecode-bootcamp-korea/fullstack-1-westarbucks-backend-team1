-- CreateIndex
CREATE INDEX `drink_images.image_url_index` ON `drink_images`(`image_url`);

-- CreateIndex
CREATE INDEX `drinks.korean_name_english_name_description_index` ON `drinks`(`korean_name`, `english_name`, `description`);

-- CreateIndex
CREATE INDEX `nutrition.one_serving_kcal_sodium_mg_fat_g_sugars_g_protein_g_ca` ON `nutrition`(`one_serving_kcal`, `sodium_mg`, `fat_g`, `sugars_g`, `protein_g`, `caffeine_mg`);

-- CreateIndex
CREATE INDEX `users.email_password_created_at_updated_at_deleted_at_index` ON `users`(`email`, `password`, `created_at`, `updated_at`, `deleted_at`);
