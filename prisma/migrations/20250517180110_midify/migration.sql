-- AlterTable
ALTER TABLE `lieu` MODIFY `nomLieu` VARCHAR(191) NULL,
    MODIFY `typeLieu` ENUM('AMPHI', 'SALLE') NULL DEFAULT 'SALLE',
    MODIFY `bloc` ENUM('A', 'B', 'C', 'D') NULL;
