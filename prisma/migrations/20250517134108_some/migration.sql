/*
  Warnings:

  - You are about to drop the column `semestre` on the `filiere` table. All the data in the column will be lost.
  - You are about to drop the column `dateSeance` on the `seance` table. All the data in the column will be lost.
  - Added the required column `semestre` to the `Classe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `day` to the `Seance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numeroSeance` to the `Seance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `classe` ADD COLUMN `groupe` ENUM('G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8') NULL,
    ADD COLUMN `section` ENUM('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H') NULL,
    ADD COLUMN `semestre` ENUM('S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10') NOT NULL;

-- AlterTable
ALTER TABLE `filiere` DROP COLUMN `semestre`;

-- AlterTable
ALTER TABLE `seance` DROP COLUMN `dateSeance`,
    ADD COLUMN `day` ENUM('MONDAY', 'TUESDAY', 'WEDNEDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY') NOT NULL,
    ADD COLUMN `numeroSeance` ENUM('FIRST', 'SECOND', 'THIRD', 'FOURTH', 'FIFTH', 'SIXTH') NOT NULL,
    MODIFY `typeSeance` ENUM('COURS', 'TD', 'TP') NULL;
