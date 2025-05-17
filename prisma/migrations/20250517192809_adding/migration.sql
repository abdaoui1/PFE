/*
  Warnings:

  - A unique constraint covering the columns `[numeroSalle]` on the table `Lieu` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `abrModule` to the `Module` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `module` ADD COLUMN `abrModule` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Lieu_numeroSalle_key` ON `Lieu`(`numeroSalle`);
