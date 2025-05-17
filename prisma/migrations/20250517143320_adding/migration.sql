-- DropForeignKey
ALTER TABLE `classe` DROP FOREIGN KEY `Classe_idFiliere_fkey`;

-- DropIndex
DROP INDEX `Classe_idFiliere_fkey` ON `classe`;

-- AddForeignKey
ALTER TABLE `Classe` ADD CONSTRAINT `Classe_idFiliere_fkey` FOREIGN KEY (`idFiliere`) REFERENCES `Filiere`(`idFiliere`) ON DELETE CASCADE ON UPDATE CASCADE;
