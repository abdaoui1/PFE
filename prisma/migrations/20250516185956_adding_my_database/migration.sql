/*
  Warnings:

  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `image` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `nom` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `prenom` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `sexe` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `tele` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    DROP COLUMN `image`,
    DROP COLUMN `nom`,
    DROP COLUMN `prenom`,
    DROP COLUMN `sexe`,
    DROP COLUMN `tele`,
    DROP COLUMN `userId`,
    ADD COLUMN `typeUser` ENUM('ETUDIANT', 'PROF', 'ADMIN') NOT NULL DEFAULT 'ETUDIANT';

-- CreateTable
CREATE TABLE `Etudiant` (
    `cne` VARCHAR(191) NOT NULL,
    `nomEtd` VARCHAR(191) NOT NULL,
    `prenomEtd` VARCHAR(191) NOT NULL,
    `sexeEtd` ENUM('HOMME', 'FEMME') NOT NULL,
    `teleEtd` VARCHAR(191) NULL,
    `image` VARCHAR(191) NULL DEFAULT '/avatars/default.svg',
    `emailEtd` VARCHAR(191) NOT NULL,
    `idClasse` INTEGER NOT NULL,

    UNIQUE INDEX `Etudiant_emailEtd_key`(`emailEtd`),
    PRIMARY KEY (`cne`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Prof` (
    `idProf` INTEGER NOT NULL AUTO_INCREMENT,
    `nomProf` VARCHAR(191) NOT NULL,
    `prenomProf` VARCHAR(191) NOT NULL,
    `sexeProf` ENUM('HOMME', 'FEMME') NOT NULL,
    `teleProf` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NULL DEFAULT '/avatars/default.svg',
    `emailProf` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Prof_emailProf_key`(`emailProf`),
    PRIMARY KEY (`idProf`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Admin` (
    `emailAdmin` VARCHAR(191) NOT NULL,
    `nomAdmin` VARCHAR(191) NOT NULL,
    `prenomAdmin` VARCHAR(191) NOT NULL,
    `sexeAdmin` ENUM('HOMME', 'FEMME') NOT NULL,
    `teleAdmin` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NULL DEFAULT '/avatars/default.svg',

    PRIMARY KEY (`emailAdmin`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Classe` (
    `idClasse` INTEGER NOT NULL AUTO_INCREMENT,
    `effectif` INTEGER NULL,
    `idFiliere` INTEGER NOT NULL,

    PRIMARY KEY (`idClasse`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Filiere` (
    `idFiliere` INTEGER NOT NULL AUTO_INCREMENT,
    `nomFiliere` VARCHAR(191) NOT NULL,
    `abrFiliere` VARCHAR(191) NOT NULL,
    `semestre` ENUM('S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10') NOT NULL,

    PRIMARY KEY (`idFiliere`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Lieu` (
    `idLieu` INTEGER NOT NULL AUTO_INCREMENT,
    `nomLieu` VARCHAR(191) NOT NULL,
    `typeLieu` ENUM('AMPHI', 'SALLE') NOT NULL DEFAULT 'SALLE',
    `bloc` ENUM('A', 'B', 'C', 'D') NOT NULL,
    `capacite` INTEGER NULL,
    `etat` VARCHAR(191) NULL,

    PRIMARY KEY (`idLieu`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Module` (
    `idModule` INTEGER NOT NULL AUTO_INCREMENT,
    `nomModule` VARCHAR(191) NOT NULL,
    `departement` VARCHAR(191) NULL,
    `dure` INTEGER NOT NULL,

    PRIMARY KEY (`idModule`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Seance` (
    `idSeance` INTEGER NOT NULL AUTO_INCREMENT,
    `typeSeance` ENUM('COURS', 'TD', 'TP') NOT NULL,
    `dateSeance` DATETIME(3) NOT NULL,
    `idModule` INTEGER NOT NULL,
    `idLieu` INTEGER NOT NULL,
    `idClasse` INTEGER NOT NULL,
    `idProf` INTEGER NOT NULL,

    INDEX `Seance_idModule_idx`(`idModule`),
    INDEX `Seance_idLieu_idx`(`idLieu`),
    INDEX `Seance_idClasse_idx`(`idClasse`),
    INDEX `Seance_idProf_idx`(`idProf`),
    PRIMARY KEY (`idSeance`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Etudiant` ADD CONSTRAINT `Etudiant_emailEtd_fkey` FOREIGN KEY (`emailEtd`) REFERENCES `User`(`email`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Etudiant` ADD CONSTRAINT `Etudiant_idClasse_fkey` FOREIGN KEY (`idClasse`) REFERENCES `Classe`(`idClasse`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Prof` ADD CONSTRAINT `Prof_emailProf_fkey` FOREIGN KEY (`emailProf`) REFERENCES `User`(`email`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Admin` ADD CONSTRAINT `Admin_emailAdmin_fkey` FOREIGN KEY (`emailAdmin`) REFERENCES `User`(`email`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Classe` ADD CONSTRAINT `Classe_idFiliere_fkey` FOREIGN KEY (`idFiliere`) REFERENCES `Filiere`(`idFiliere`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Seance` ADD CONSTRAINT `Seance_idModule_fkey` FOREIGN KEY (`idModule`) REFERENCES `Module`(`idModule`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Seance` ADD CONSTRAINT `Seance_idLieu_fkey` FOREIGN KEY (`idLieu`) REFERENCES `Lieu`(`idLieu`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Seance` ADD CONSTRAINT `Seance_idClasse_fkey` FOREIGN KEY (`idClasse`) REFERENCES `Classe`(`idClasse`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Seance` ADD CONSTRAINT `Seance_idProf_fkey` FOREIGN KEY (`idProf`) REFERENCES `Prof`(`idProf`) ON DELETE RESTRICT ON UPDATE CASCADE;
