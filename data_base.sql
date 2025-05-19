-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 19 mai 2025 à 03:11
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `shedule_time`
--

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

CREATE TABLE `admin` (
  `emailAdmin` varchar(191) NOT NULL,
  `nomAdmin` varchar(191) NOT NULL,
  `prenomAdmin` varchar(191) NOT NULL,
  `sexeAdmin` enum('HOMME','FEMME') NOT NULL,
  `teleAdmin` varchar(191) NOT NULL,
  `image` varchar(191) DEFAULT '/avatars/default.svg'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `admin`
--

INSERT INTO `admin` (`emailAdmin`, `nomAdmin`, `prenomAdmin`, `sexeAdmin`, `teleAdmin`, `image`) VALUES
('abdssamadabdaoui@gmail.com', 'admin', 'fouade', 'HOMME', '0641982307', '/avatars/default.svg');

-- --------------------------------------------------------

--
-- Structure de la table `classe`
--

CREATE TABLE `classe` (
  `idClasse` int(11) NOT NULL,
  `effectif` int(11) DEFAULT NULL,
  `idFiliere` int(11) NOT NULL,
  `groupe` enum('G1','G2','G3','G4','G5','G6','G7','G8') DEFAULT NULL,
  `section` enum('A','B','C','D','E','F','G','H') DEFAULT NULL,
  `semestre` enum('S1','S2','S3','S4','S5','S6','S7','S8','S9','S10') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `classe`
--

INSERT INTO `classe` (`idClasse`, `effectif`, `idFiliere`, `groupe`, `section`, `semestre`) VALUES
(1, 80, 5, NULL, NULL, 'S3'),
(2, 85, 5, NULL, NULL, 'S4'),
(3, NULL, 5, 'G1', NULL, 'S3'),
(4, NULL, 5, 'G1', NULL, 'S4'),
(5, NULL, 5, 'G2', NULL, 'S3'),
(6, 30, 5, 'G2', NULL, 'S4'),
(7, 90, 6, NULL, 'A', 'S1'),
(8, 40, 6, 'G1', 'A', 'S1'),
(9, 40, 6, 'G2', 'A', 'S1'),
(10, 40, 6, 'G3', 'A', 'S1'),
(11, 40, 6, 'G4', 'A', 'S1'),
(12, 90, 6, NULL, 'B', 'S1'),
(13, 40, 6, 'G1', 'B', 'S1'),
(14, 40, 6, 'G2', 'B', 'S1'),
(15, 40, 6, 'G3', 'B', 'S1'),
(16, 40, 6, 'G4', 'B', 'S1'),
(17, 70, 6, NULL, 'C', 'S1'),
(18, 35, 6, 'G1', 'C', 'S1'),
(19, 35, 6, 'G2', 'C', 'S1'),
(20, 55, 6, 'G3', 'C', 'S1'),
(21, 55, 6, 'G4', 'C', 'S1'),
(37, 90, 6, NULL, 'A', 'S2'),
(38, 40, 6, 'G1', 'A', 'S2'),
(39, 40, 6, 'G2', 'A', 'S2'),
(40, 40, 6, 'G3', 'A', 'S2'),
(41, 40, 6, 'G4', 'A', 'S2'),
(42, 90, 6, NULL, 'B', 'S2'),
(43, 40, 6, 'G1', 'B', 'S2'),
(44, 40, 6, 'G2', 'B', 'S2'),
(45, 40, 6, 'G3', 'B', 'S2'),
(46, 40, 6, 'G4', 'B', 'S2'),
(47, 70, 6, NULL, 'C', 'S2'),
(48, 35, 6, 'G1', 'C', 'S2'),
(49, 35, 6, 'G2', 'C', 'S2'),
(50, 55, 6, 'G3', 'C', 'S2'),
(51, 55, 6, 'G4', 'C', 'S2'),
(52, 100, 1, NULL, NULL, 'S1'),
(53, 40, 1, 'G1', NULL, 'S1'),
(54, 40, 1, 'G2', NULL, 'S1'),
(55, 40, 1, 'G3', NULL, 'S1'),
(56, 40, 1, 'G4', NULL, 'S1'),
(57, 100, 1, NULL, NULL, 'S2'),
(58, 40, 1, 'G1', NULL, 'S2'),
(59, 40, 1, 'G2', NULL, 'S2'),
(60, 40, 1, 'G3', NULL, 'S2'),
(61, 40, 1, 'G4', NULL, 'S2'),
(62, 100, 2, NULL, 'A', 'S1'),
(63, 40, 2, 'G1', 'A', 'S1'),
(64, 40, 2, 'G2', 'A', 'S1'),
(65, 40, 2, 'G3', 'A', 'S1'),
(66, 46, 2, 'G4', 'A', 'S1'),
(67, 100, 2, NULL, 'B', 'S1'),
(68, 40, 2, 'G1', 'B', 'S1'),
(69, 40, 2, 'G2', 'B', 'S1'),
(70, 45, 2, 'G3', 'B', 'S1'),
(71, 60, 2, 'G4', 'B', 'S1'),
(72, 100, 2, NULL, 'C', 'S1'),
(73, 40, 2, 'G1', 'C', 'S1'),
(74, 40, 2, 'G2', 'C', 'S1'),
(75, 40, 2, 'G3', 'C', 'S1'),
(76, 40, 2, 'G4', 'C', 'S1'),
(77, 100, 2, NULL, 'A', 'S2'),
(78, 40, 2, 'G1', 'A', 'S2'),
(79, 40, 2, 'G2', 'A', 'S2'),
(80, 40, 2, 'G3', 'A', 'S2'),
(81, 46, 2, 'G4', 'A', 'S2'),
(82, 100, 2, NULL, 'B', 'S2'),
(83, 40, 2, 'G1', 'B', 'S2'),
(84, 40, 2, 'G2', 'B', 'S2'),
(85, 45, 2, 'G3', 'B', 'S2'),
(86, 60, 2, 'G4', 'B', 'S2'),
(87, 100, 2, NULL, 'C', 'S2'),
(88, 40, 2, 'G1', 'C', 'S2'),
(89, 40, 2, 'G2', 'C', 'S2'),
(90, 40, 2, 'G3', 'C', 'S2'),
(91, 39, 2, 'G4', 'C', 'S2'),
(92, 110, 5, NULL, NULL, 'S1'),
(93, 46, 5, 'G1', NULL, 'S1'),
(94, 40, 5, 'G2', NULL, 'S1'),
(95, 35, 5, 'G3', NULL, 'S1'),
(96, 46, 5, 'G4', NULL, 'S1'),
(97, 110, 5, NULL, NULL, 'S2'),
(98, 44, 5, 'G1', NULL, 'S2'),
(99, 40, 5, 'G2', NULL, 'S2'),
(100, 35, 5, 'G3', NULL, 'S2'),
(101, 46, 5, 'G4', NULL, 'S2'),
(102, 70, 3, NULL, NULL, 'S3'),
(103, 46, 3, 'G1', NULL, 'S3'),
(104, 40, 3, 'G2', NULL, 'S3'),
(105, 60, 3, NULL, NULL, 'S4'),
(106, 44, 3, 'G1', NULL, 'S4'),
(107, 40, 3, 'G2', NULL, 'S4'),
(108, 40, 4, NULL, NULL, 'S3'),
(109, 30, 4, 'G1', NULL, 'S3'),
(110, 30, 4, NULL, NULL, 'S4'),
(111, NULL, 4, 'G1', NULL, 'S4'),
(200, 40, 100, NULL, NULL, 'S6');

-- --------------------------------------------------------

--
-- Structure de la table `etudiant`
--

CREATE TABLE `etudiant` (
  `cne` varchar(191) NOT NULL,
  `nomEtd` varchar(191) NOT NULL,
  `prenomEtd` varchar(191) NOT NULL,
  `sexeEtd` enum('HOMME','FEMME') NOT NULL,
  `teleEtd` varchar(191) DEFAULT NULL,
  `image` varchar(191) DEFAULT '/avatars/default.svg',
  `emailEtd` varchar(191) NOT NULL,
  `idClasse` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `etudiant`
--

INSERT INTO `etudiant` (`cne`, `nomEtd`, `prenomEtd`, `sexeEtd`, `teleEtd`, `image`, `emailEtd`, `idClasse`) VALUES
('F182938470', 'etudiantA', 'prenomETDA', 'HOMME', '0693230800', '/avatars/default.svg', 'emailETDA@gmail.com', 1),
('F182938471', 'etudiantB', 'prenomETDB', 'FEMME', '0693231801', '/avatars/default.svg', 'emailETDB@gmail.com', 2),
('F1829384710', 'etudiantM', 'prenomETDM', 'HOMME', '069323108010', '/avatars/default.svg', 'emailETDM@gmail.com', 11),
('F1829384711', 'etudiantN', 'prenomETDN', 'FEMME', '069323118011', '/avatars/default.svg', 'emailETDN@gmail.com', 12),
('F1829384712', 'etudiantO', 'prenomETDO', 'HOMME', '069323128012', '/avatars/default.svg', 'emailETDO@gmail.com', 13),
('F1829384713', 'etudiantP', 'prenomETDP', 'FEMME', '069323138013', '/avatars/default.svg', 'emailETDP@gmail.com', 14),
('F1829384714', 'etudiantQ', 'prenomETDQ', 'HOMME', '069323148014', '/avatars/default.svg', 'emailETDQ@gmail.com', 15),
('F1829384715', 'etudiantR', 'prenomETDR', 'FEMME', '069323158015', '/avatars/default.svg', 'emailETDR@gmail.com', 16),
('F1829384716', 'etudiantS', 'prenomETDS', 'HOMME', '069323168016', '/avatars/default.svg', 'emailETDS@gmail.com', 17),
('F1829384717', 'etudiantT', 'prenomETDT', 'FEMME', '069323178017', '/avatars/default.svg', 'emailETDT@gmail.com', 18),
('F1829384718', 'etudiantV', 'prenomETDV', 'HOMME', '069323188018', '/avatars/default.svg', 'emailETDV@gmail.com', 19),
('F1829384719', 'etudiantY', 'prenomETDY', 'FEMME', '069323198019', '/avatars/default.svg', 'emailETDY@gmail.com', 20),
('F182938472', 'etudiantC', 'prenomETDC', 'HOMME', '0693232802', '/avatars/default.svg', 'emailETDC@gmail.com', 3),
('F182938473', 'etudiantD', 'prenomETDD', 'FEMME', '0693233803', '/avatars/default.svg', 'emailETDD@gmail.com', 4),
('F182938474', 'etudiantE', 'prenomETDE', 'HOMME', '0693234804', '/avatars/default.svg', 'emailETDE@gmail.com', 5),
('F182938475', 'etudiantF', 'prenomETDF', 'FEMME', '0693235805', '/avatars/default.svg', 'emailETDF@gmail.com', 6),
('F182938476', 'etudiantG', 'prenomETDG', 'HOMME', '0693236806', '/avatars/default.svg', 'emailETDG@gmail.com', 7),
('F182938477', 'etudiantH', 'prenomETDH', 'FEMME', '0693237807', '/avatars/default.svg', 'emailETDH@gmail.com', 8),
('F182938478', 'etudiantK', 'prenomETDK', 'HOMME', '0693238808', '/avatars/default.svg', 'emailETDK@gmail.com', 9),
('F182938479', 'etudiantL', 'prenomETDL', 'FEMME', '0693239809', '/avatars/default.svg', 'emailETDL@gmail.com', 10);

-- --------------------------------------------------------

--
-- Structure de la table `filiere`
--

CREATE TABLE `filiere` (
  `idFiliere` int(11) NOT NULL,
  `nomFiliere` varchar(191) NOT NULL,
  `abrFiliere` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `filiere`
--

INSERT INTO `filiere` (`idFiliere`, `nomFiliere`, `abrFiliere`) VALUES
(1, 'math info physique', 'MIP'),
(2, 'Biologie, Chimie, Géologie', 'BCG'),
(3, 'Informatique (MIP)', 'MIP/INFO'),
(4, 'Mathematique (MIP)', 'MIP/MATH'),
(5, 'informatique applique', 'IA'),
(6, 'Physique Chimie', 'PC'),
(100, 'Smi developpement et bases de donnees', 'SMI/BD');

-- --------------------------------------------------------

--
-- Structure de la table `lieu`
--

CREATE TABLE `lieu` (
  `idLieu` int(11) NOT NULL,
  `nomLieu` varchar(191) DEFAULT NULL,
  `typeLieu` enum('AMPHI','SALLE') DEFAULT 'SALLE',
  `bloc` enum('A','B','C','D') DEFAULT NULL,
  `capacite` int(11) DEFAULT NULL,
  `etat` varchar(191) DEFAULT NULL,
  `numeroSalle` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `lieu`
--

INSERT INTO `lieu` (`idLieu`, `nomLieu`, `typeLieu`, `bloc`, `capacite`, `etat`, `numeroSalle`) VALUES
(1, NULL, 'SALLE', 'A', 60, 'contient projecteur , et les prises', 1),
(2, NULL, 'SALLE', 'A', 38, 'mauvaise etat', 2),
(3, NULL, 'SALLE', 'A', 55, 'ne contient ni les prises ni un projecteur', 3),
(4, NULL, 'SALLE', 'A', 50, 'contient projecteur , et les prises', 4),
(5, NULL, 'SALLE', 'A', 60, 'contient projecteur , et les prises', 5),
(6, NULL, 'SALLE', 'A', 55, 'contient un projecteur mais il n\'y a pas beaucoup de prises', 6),
(7, NULL, 'SALLE', 'A', 60, 'contient projecteur , et les prises', 7),
(8, NULL, 'SALLE', 'A', 50, 'contient projecteur , et les prises', 8),
(9, NULL, 'SALLE', 'A', 55, 'ne contient ni les prises ni un projecteur', 9),
(10, NULL, 'SALLE', 'A', 50, 'contient projecteur , et les prises', 10),
(11, NULL, 'SALLE', 'A', 60, 'contient projecteur , et les prises', 11),
(12, NULL, 'SALLE', 'A', 55, 'contient un projecteur mais il n\'y a pas beaucoup de prises', 12),
(13, NULL, 'SALLE', 'A', 60, 'contient projecteur , et les prises', 13),
(14, NULL, 'SALLE', 'A', 50, 'contient projecteur , et les prises', 14),
(15, NULL, 'SALLE', 'A', 55, 'ne contient ni les prises ni un projecteur', 15),
(16, NULL, 'SALLE', 'A', 50, 'contient projecteur , et les prises', 16),
(17, NULL, 'SALLE', 'B', 60, 'contient projecteur , et les prises', 17),
(18, NULL, 'SALLE', 'B', 65, 'contient un projecteur mais il n\'y a pas beaucoup de prises', 18),
(19, NULL, 'SALLE', 'B', 60, 'contient projecteur , et les prises', 19),
(20, NULL, 'SALLE', 'B', 50, 'contient projecteur , et les prises', 20),
(21, NULL, 'SALLE', 'B', 65, 'ne contient ni les prises ni un projecteur', 21),
(22, NULL, 'SALLE', 'B', 50, 'contient projecteur , et les prises', 22),
(23, NULL, 'SALLE', 'B', 60, 'contient projecteur , et les prises', 23),
(24, NULL, 'SALLE', 'B', 65, 'contient un projecteur mais il n\'y a pas beaucoup de prises', 24),
(25, NULL, 'SALLE', 'B', 60, 'contient projecteur , et les prises', 25),
(26, NULL, 'SALLE', 'B', 50, 'contient projecteur , et les prises', 26),
(27, NULL, 'SALLE', 'B', 65, 'ne contient ni les prises ni un projecteur', 27),
(28, NULL, 'SALLE', 'B', 50, 'contient projecteur , et les prises', 28),
(29, NULL, 'SALLE', 'B', 60, 'contient projecteur , et les prises', 29),
(30, NULL, 'SALLE', 'B', 65, 'contient un projecteur mais il n\'y a pas beaucoup de prises', 30),
(31, NULL, 'SALLE', 'B', 60, 'contient projecteur , et les prises', 31),
(32, NULL, 'SALLE', 'B', 50, 'contient projecteur , et les prises', 32),
(33, NULL, 'SALLE', 'C', 65, 'ne contient ni les prises ni un projecteur', 33),
(34, NULL, 'SALLE', 'C', 54, 'contient projecteur , et les prises', 34),
(35, NULL, 'SALLE', 'C', 40, 'contient projecteur , et les prises', 35),
(36, NULL, 'SALLE', 'C', 65, 'contient un projecteur mais il n\'y a pas beaucoup de prises', 36),
(37, NULL, 'SALLE', 'C', 40, 'contient projecteur , et les prises', 37),
(38, NULL, 'SALLE', 'C', 54, 'contient projecteur , et les prises', 38),
(39, NULL, 'SALLE', 'C', 65, 'ne contient ni les prises ni un projecteur', 39),
(40, NULL, 'SALLE', 'C', 54, 'contient projecteur , et les prises', 40),
(41, NULL, 'SALLE', 'C', 40, 'contient projecteur , et les prises', 41),
(42, NULL, 'SALLE', 'C', 65, 'contient un projecteur mais il n\'y a pas beaucoup de prises', 42),
(43, NULL, 'SALLE', 'C', 40, 'contient projecteur , et les prises', 43),
(44, NULL, 'SALLE', 'C', 54, 'contient projecteur , et les prises', 44),
(45, NULL, 'SALLE', 'C', 65, 'ne contient ni les prises ni un projecteur', 45),
(46, NULL, 'SALLE', 'C', 54, 'contient projecteur , et les prises', 46),
(47, NULL, 'SALLE', 'C', 40, 'contient projecteur , et les prises', 47),
(48, NULL, 'SALLE', 'C', 65, 'contient un projecteur mais il n\'y a pas beaucoup de prises', 48),
(49, NULL, 'SALLE', 'D', 40, 'contient projecteur , et les prises', 49),
(50, NULL, 'SALLE', 'D', 54, 'contient projecteur , et les prises', 50),
(51, NULL, 'SALLE', 'D', 62, 'ne contient ni les prises ni un projecteur', 51),
(52, NULL, 'SALLE', 'D', 54, 'contient projecteur , et les prises', 52),
(53, NULL, 'SALLE', 'D', 40, 'contient projecteur , et les prises', 53),
(54, NULL, 'SALLE', 'D', 62, 'contient un projecteur mais il n\'y a pas beaucoup de prises', 54),
(55, NULL, 'SALLE', 'D', 40, 'contient projecteur , et les prises', 55),
(56, NULL, 'SALLE', 'D', 54, 'contient projecteur , et les prises', 56),
(57, NULL, 'SALLE', 'D', 62, 'ne contient ni les prises ni un projecteur', 57),
(58, NULL, 'SALLE', 'D', 54, 'contient projecteur , et les prises', 58),
(59, NULL, 'SALLE', 'D', 40, 'contient projecteur , et les prises', 59),
(60, NULL, 'SALLE', 'D', 62, 'contient un projecteur mais il n\'y a pas beaucoup de prises', 60),
(61, NULL, 'SALLE', 'D', 40, 'contient projecteur , et les prises', 61),
(62, NULL, 'SALLE', 'D', 54, 'contient projecteur , et les prises', 62),
(63, NULL, 'SALLE', 'D', 62, 'ne contient ni les prises ni un projecteur', 63),
(64, NULL, 'SALLE', 'D', 54, 'contient projecteur , et les prises', 64),
(65, 'Farabi', 'AMPHI', NULL, 140, 'tres bonne etat', NULL),
(66, 'Nafiss', 'AMPHI', NULL, 130, 'tres bonne etat', NULL),
(67, 'Haitam', 'AMPHI', NULL, 160, 'tres bonne etat', NULL),
(68, 'Bayrouni', 'AMPHI', NULL, 160, 'tres bonne etat', NULL),
(69, 'Nouvel', 'AMPHI', NULL, 160, 'tres bonne etat', NULL),
(70, 'Ibn Youness', 'AMPHI', NULL, 120, 'parfait', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `module`
--

CREATE TABLE `module` (
  `idModule` int(11) NOT NULL,
  `nomModule` varchar(191) NOT NULL,
  `departement` varchar(191) DEFAULT NULL,
  `dure` int(11) NOT NULL,
  `abrModule` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `module`
--

INSERT INTO `module` (`idModule`, `nomModule`, `departement`, `dure`, `abrModule`) VALUES
(1, 'ModA', 'Departement d\'Informatique', 50, 'ModA'),
(2, 'ModB', 'Departement d\'Informatique', 50, 'ModB'),
(3, 'ModC', 'Departement d\'Informatique', 50, 'ModC'),
(4, 'ModD', 'Departement d\'Informatique', 50, 'ModD'),
(5, 'ModE', 'Departement d\'Informatique', 50, 'ModE'),
(6, 'ModF', 'Departement d\'Informatique', 50, 'ModF'),
(7, 'ModG', 'Departement d\'Biologie', 57, 'ModG'),
(8, 'ModH', 'Departement d\'Biologie', 57, 'ModH'),
(9, 'ModK', 'Departement d\'Biologie', 57, 'ModK'),
(10, 'ModL', 'Departement d\'Biologie', 57, 'ModL'),
(11, 'ModM', 'Departement de Math', 48, 'ModM'),
(12, 'ModN', 'Departement de Math', 48, 'ModN'),
(13, 'ModO', 'Departement de Math', 48, 'ModO'),
(14, 'ModP', 'Departement de Math', 48, 'ModP'),
(15, 'ModQ', 'Departement de Math', 48, 'ModQ'),
(16, 'ModR', 'Departement de Math', 48, 'ModR'),
(17, 'ModS', 'Departement de Physique', 38, 'ModS'),
(18, 'ModT', 'Departement de Physique', 38, 'ModT'),
(19, 'ModV', 'Departement de Physique', 38, 'ModV'),
(20, 'ModY', 'Departement de Physique', 38, 'ModY'),
(22, 'J2EE', 'Informatique', 40, 'J2EE'),
(23, 'Programmation JAVA', 'Informatique', 40, 'Prog JAVA'),
(25, 'Administration des bases de donnees', 'Informatique', 47, 'Admin BD'),
(26, 'Prog Web', 'Informatique', 47, 'Prog Web');

-- --------------------------------------------------------

--
-- Structure de la table `prof`
--

CREATE TABLE `prof` (
  `idProf` int(11) NOT NULL,
  `nomProf` varchar(191) NOT NULL,
  `prenomProf` varchar(191) NOT NULL,
  `sexeProf` enum('HOMME','FEMME') NOT NULL,
  `teleProf` varchar(191) NOT NULL,
  `image` varchar(191) DEFAULT '/avatars/default.svg',
  `emailProf` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `prof`
--

INSERT INTO `prof` (`idProf`, `nomProf`, `prenomProf`, `sexeProf`, `teleProf`, `image`, `emailProf`) VALUES
(2, 'ProfA', 'prenomProfA', 'HOMME', '0693930800', '/avatars/default.svg', 'emailProfA@gmail.com'),
(3, 'ProfB', 'prenomProfB', 'FEMME', '0693931801', '/avatars/default.svg', 'emailProfB@gmail.com'),
(4, 'ProfC', 'prenomProfC', 'HOMME', '0693932802', '/avatars/default.svg', 'emailProfC@gmail.com'),
(5, 'ProfD', 'prenomProfD', 'FEMME', '0693933803', '/avatars/default.svg', 'emailProfD@gmail.com'),
(6, 'ProfE', 'prenomProfE', 'HOMME', '0693934804', '/avatars/default.svg', 'emailProfE@gmail.com'),
(7, 'ProfF', 'prenomProfF', 'FEMME', '0693935805', '/avatars/default.svg', 'emailProfF@gmail.com'),
(8, 'ProfG', 'prenomProfG', 'HOMME', '0693936806', '/avatars/default.svg', 'emailProfG@gmail.com'),
(9, 'ProfH', 'prenomProfH', 'FEMME', '0693937807', '/avatars/default.svg', 'emailProfH@gmail.com'),
(10, 'ProfK', 'prenomProfK', 'HOMME', '0693938808', '/avatars/default.svg', 'emailProfK@gmail.com'),
(11, 'ProfL', 'prenomProfL', 'FEMME', '0693939809', '/avatars/default.svg', 'emailProfL@gmail.com'),
(12, 'ProfM', 'prenomProfM', 'HOMME', '069393108010', '/avatars/default.svg', 'emailProfM@gmail.com'),
(13, 'ProfN', 'prenomProfN', 'FEMME', '069393118011', '/avatars/default.svg', 'emailProfN@gmail.com'),
(14, 'ProfO', 'prenomProfO', 'HOMME', '069393128012', '/avatars/default.svg', 'emailProfO@gmail.com'),
(15, 'ProfP', 'prenomProfP', 'FEMME', '069393138013', '/avatars/default.svg', 'emailProfP@gmail.com'),
(16, 'ProfQ', 'prenomProfQ', 'HOMME', '069393148014', '/avatars/default.svg', 'emailProfQ@gmail.com'),
(17, 'ProfR', 'prenomProfR', 'FEMME', '069393158015', '/avatars/default.svg', 'emailProfR@gmail.com'),
(18, 'ProfS', 'prenomProfS', 'HOMME', '069393168016', '/avatars/default.svg', 'emailProfS@gmail.com'),
(19, 'ProfT', 'prenomProfT', 'FEMME', '069393178017', '/avatars/default.svg', 'emailProfT@gmail.com'),
(20, 'ProfV', 'prenomProfV', 'HOMME', '069393188018', '/avatars/default.svg', 'emailProfV@gmail.com'),
(21, 'ProfY', 'prenomProfY', 'FEMME', '069393198019', '/avatars/default.svg', 'emailProfY@gmail.com');

-- --------------------------------------------------------

--
-- Structure de la table `seance`
--

CREATE TABLE `seance` (
  `idSeance` int(11) NOT NULL,
  `typeSeance` enum('COURS','TD','TP') DEFAULT NULL,
  `idModule` int(11) NOT NULL,
  `idLieu` int(11) NOT NULL,
  `idClasse` int(11) NOT NULL,
  `idProf` int(11) NOT NULL,
  `day` enum('MONDAY','TUESDAY','WEDNEDAY','THURSDAY','FRIDAY','SATURDAY','SUNDAY') NOT NULL,
  `numeroSeance` enum('FIRST','SECOND','THIRD','FOURTH','FIFTH','SIXTH') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `seance`
--

INSERT INTO `seance` (`idSeance`, `typeSeance`, `idModule`, `idLieu`, `idClasse`, `idProf`, `day`, `numeroSeance`) VALUES
(1, NULL, 23, 35, 200, 3, 'TUESDAY', 'FIRST'),
(2, NULL, 23, 35, 200, 3, 'THURSDAY', 'SECOND'),
(3, NULL, 25, 35, 200, 4, 'WEDNEDAY', 'FIRST'),
(4, NULL, 25, 35, 200, 4, 'WEDNEDAY', 'SECOND'),
(5, NULL, 26, 48, 200, 5, 'THURSDAY', 'FIRST'),
(6, NULL, 26, 48, 200, 5, 'THURSDAY', 'SECOND');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `email` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `typeUser` enum('ETUDIANT','PROF','ADMIN') NOT NULL DEFAULT 'ETUDIANT'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`email`, `password`, `typeUser`) VALUES
('abdssamadabdaoui@gmail.com', 'pwd1', 'ADMIN'),
('abdssamadabdaouiadmin@gmail.com', 'hey', 'ADMIN'),
('emailETDA@gmail.com', 'pwd2', 'ETUDIANT'),
('emailETDB@gmail.com', 'pwd3', 'ETUDIANT'),
('emailETDC@gmail.com', 'pwd14', 'ETUDIANT'),
('emailETDD@gmail.com', 'pwd15', 'ETUDIANT'),
('emailETDE@gmail.com', 'pwd16', 'ETUDIANT'),
('emailETDF@gmail.com', 'pwd17', 'ETUDIANT'),
('emailETDG@gmail.com', 'pwd18', 'ETUDIANT'),
('emailETDH@gmail.com', 'pwd19', 'ETUDIANT'),
('emailETDK@gmail.com', 'pwd20', 'ETUDIANT'),
('emailETDL@gmail.com', 'pwd21', 'ETUDIANT'),
('emailETDM@gmail.com', 'pwd4', 'ETUDIANT'),
('emailETDN@gmail.com', 'pwd5', 'ETUDIANT'),
('emailETDO@gmail.com', 'pwd6', 'ETUDIANT'),
('emailETDP@gmail.com', 'pwd7', 'ETUDIANT'),
('emailETDQ@gmail.com', 'pwd8', 'ETUDIANT'),
('emailETDR@gmail.com', 'pwd9', 'ETUDIANT'),
('emailETDS@gmail.com', 'pwd10', 'ETUDIANT'),
('emailETDT@gmail.com', 'pwd11', 'ETUDIANT'),
('emailETDV@gmail.com', 'pwd12', 'ETUDIANT'),
('emailETDY@gmail.com', 'pwd13', 'ETUDIANT'),
('emailProfA@gmail.com', 'pwd22', 'PROF'),
('emailProfB@gmail.com', 'pwd23', 'PROF'),
('emailProfC@gmail.com', 'pwd24', 'PROF'),
('emailProfD@gmail.com', 'pwd25', 'PROF'),
('emailProfE@gmail.com', 'pwd26', 'PROF'),
('emailProfF@gmail.com', 'pwd27', 'PROF'),
('emailProfG@gmail.com', 'pwd28', 'PROF'),
('emailProfH@gmail.com', 'pwd29', 'PROF'),
('emailProfK@gmail.com', 'pwd30', 'PROF'),
('emailProfL@gmail.com', 'pwd31', 'PROF'),
('emailProfM@gmail.com', 'pwd32', 'PROF'),
('emailProfN@gmail.com', 'pwd33', 'PROF'),
('emailProfO@gmail.com', 'pwd34', 'PROF'),
('emailProfP@gmail.com', 'pwd35', 'PROF'),
('emailProfQ@gmail.com', 'pwd36', 'PROF'),
('emailProfR@gmail.com', 'pwd37', 'PROF'),
('emailProfS@gmail.com', 'pwd38', 'PROF'),
('emailProfT@gmail.com', 'pwd39', 'PROF'),
('emailProfV@gmail.com', 'pwd40', 'PROF'),
('emailProfY@gmail.com', 'pwd41', 'PROF');

-- --------------------------------------------------------

--
-- Structure de la table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('095d66db-119e-4d13-b5bd-a8fae2ff30dc', 'd50b8b6237666f2609d657028b5131f737da6eb21e84a6e960e40fd8f5c12fcd', '2025-05-19 00:49:59.303', '20250517180110_midify', NULL, NULL, '2025-05-19 00:49:59.246', 1),
('0b85bb2d-c91a-4cca-9bb2-84e1dcf81766', 'da586e763bba0a3eab98ea9bc7ab9bd2650bf09259044405a19ad022b31deb3c', '2025-05-19 00:49:59.324', '20250517181019_midify', NULL, NULL, '2025-05-19 00:49:59.306', 1),
('141f8bc6-7d22-4990-83d1-2493eb2aeb6d', 'aecc7a143d20d5a1e4a47cb085cee2b1a48326e6787ba915516757001a684d36', '2025-05-17 14:33:20.635', '20250517143320_adding', NULL, NULL, '2025-05-17 14:33:20.576', 1),
('1d541e31-c1d9-49e7-9bba-3637248ac8d1', 'b011ff8199b2858041b02a0da650e55c3a8f6e2af46d7efe390c436e4a41b1bb', '2025-05-19 00:49:58.043', '20250505153808_init', NULL, NULL, '2025-05-19 00:49:57.941', 1),
('1e6fb8f3-ed51-4f8b-8206-6835328c355d', 'b5634c7e305726b47154a356eaa51843af2e2d2cf787796471b40b4f24d36e13', '2025-05-17 13:41:09.518', '20250517134108_some', NULL, NULL, '2025-05-17 13:41:09.471', 1),
('545c011a-77d1-4247-ac4b-56ea6552e4e4', '0607ca277f8eb82dec72cf8aa7c0de3913b6e35647970321ec3954dde4ab8d03', '2025-05-19 00:49:59.389', '20250517192809_adding', NULL, NULL, '2025-05-19 00:49:59.327', 1),
('72964b7d-695e-423d-9f5b-ff09d0283555', '62cceacd80754878dbe5c84d0acc3d1c0f43317da8dd1210c70ae667e6aed3ad', '2025-05-16 18:59:57.144', '20250516185956_adding_my_database', NULL, NULL, '2025-05-16 18:59:56.735', 1),
('95df617f-ab88-4ae5-a14c-d9ad9e51444c', 'da586e763bba0a3eab98ea9bc7ab9bd2650bf09259044405a19ad022b31deb3c', '2025-05-17 18:10:20.484', '20250517181019_midify', NULL, NULL, '2025-05-17 18:10:20.474', 1),
('a9836df8-00d9-4167-8502-f4a97196df26', 'b011ff8199b2858041b02a0da650e55c3a8f6e2af46d7efe390c436e4a41b1bb', '2025-05-16 18:59:31.299', '20250505153808_init', NULL, NULL, '2025-05-16 18:59:31.274', 1),
('b81918e0-42c1-43c3-94f8-f66f45da26e8', 'b5634c7e305726b47154a356eaa51843af2e2d2cf787796471b40b4f24d36e13', '2025-05-19 00:49:59.141', '20250517134108_some', NULL, NULL, '2025-05-19 00:49:59.023', 1),
('cb19d2d0-f01f-4645-9c30-e61932171489', 'd50b8b6237666f2609d657028b5131f737da6eb21e84a6e960e40fd8f5c12fcd', '2025-05-17 18:01:11.599', '20250517180110_midify', NULL, NULL, '2025-05-17 18:01:11.561', 1),
('dc5ff46e-267b-423d-8e2c-798d4a9acc9a', '62cceacd80754878dbe5c84d0acc3d1c0f43317da8dd1210c70ae667e6aed3ad', '2025-05-19 00:49:59.021', '20250516185956_adding_my_database', NULL, NULL, '2025-05-19 00:49:58.047', 1),
('ea748949-cd4e-47b8-a54f-941af0fa8e93', 'aecc7a143d20d5a1e4a47cb085cee2b1a48326e6787ba915516757001a684d36', '2025-05-19 00:49:59.244', '20250517143320_adding', NULL, NULL, '2025-05-19 00:49:59.143', 1),
('ece2f3dc-5ec0-4497-a277-3d305e30c7c4', '0607ca277f8eb82dec72cf8aa7c0de3913b6e35647970321ec3954dde4ab8d03', '2025-05-17 19:28:10.516', '20250517192809_adding', NULL, NULL, '2025-05-17 19:28:10.496', 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`emailAdmin`);

--
-- Index pour la table `classe`
--
ALTER TABLE `classe`
  ADD PRIMARY KEY (`idClasse`),
  ADD KEY `Classe_idFiliere_fkey` (`idFiliere`);

--
-- Index pour la table `etudiant`
--
ALTER TABLE `etudiant`
  ADD PRIMARY KEY (`cne`),
  ADD UNIQUE KEY `Etudiant_emailEtd_key` (`emailEtd`),
  ADD KEY `Etudiant_idClasse_fkey` (`idClasse`);

--
-- Index pour la table `filiere`
--
ALTER TABLE `filiere`
  ADD PRIMARY KEY (`idFiliere`);

--
-- Index pour la table `lieu`
--
ALTER TABLE `lieu`
  ADD PRIMARY KEY (`idLieu`),
  ADD UNIQUE KEY `Lieu_numeroSalle_key` (`numeroSalle`);

--
-- Index pour la table `module`
--
ALTER TABLE `module`
  ADD PRIMARY KEY (`idModule`);

--
-- Index pour la table `prof`
--
ALTER TABLE `prof`
  ADD PRIMARY KEY (`idProf`),
  ADD UNIQUE KEY `Prof_emailProf_key` (`emailProf`);

--
-- Index pour la table `seance`
--
ALTER TABLE `seance`
  ADD PRIMARY KEY (`idSeance`),
  ADD KEY `Seance_idModule_idx` (`idModule`),
  ADD KEY `Seance_idLieu_idx` (`idLieu`),
  ADD KEY `Seance_idClasse_idx` (`idClasse`),
  ADD KEY `Seance_idProf_idx` (`idProf`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD UNIQUE KEY `User_email_key` (`email`);

--
-- Index pour la table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `classe`
--
ALTER TABLE `classe`
  MODIFY `idClasse` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=201;

--
-- AUTO_INCREMENT pour la table `filiere`
--
ALTER TABLE `filiere`
  MODIFY `idFiliere` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT pour la table `lieu`
--
ALTER TABLE `lieu`
  MODIFY `idLieu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT pour la table `module`
--
ALTER TABLE `module`
  MODIFY `idModule` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT pour la table `prof`
--
ALTER TABLE `prof`
  MODIFY `idProf` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT pour la table `seance`
--
ALTER TABLE `seance`
  MODIFY `idSeance` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `admin`
--
ALTER TABLE `admin`
  ADD CONSTRAINT `Admin_emailAdmin_fkey` FOREIGN KEY (`emailAdmin`) REFERENCES `user` (`email`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `classe`
--
ALTER TABLE `classe`
  ADD CONSTRAINT `Classe_idFiliere_fkey` FOREIGN KEY (`idFiliere`) REFERENCES `filiere` (`idFiliere`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `etudiant`
--
ALTER TABLE `etudiant`
  ADD CONSTRAINT `Etudiant_emailEtd_fkey` FOREIGN KEY (`emailEtd`) REFERENCES `user` (`email`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Etudiant_idClasse_fkey` FOREIGN KEY (`idClasse`) REFERENCES `classe` (`idClasse`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `prof`
--
ALTER TABLE `prof`
  ADD CONSTRAINT `Prof_emailProf_fkey` FOREIGN KEY (`emailProf`) REFERENCES `user` (`email`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `seance`
--
ALTER TABLE `seance`
  ADD CONSTRAINT `Seance_idClasse_fkey` FOREIGN KEY (`idClasse`) REFERENCES `classe` (`idClasse`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Seance_idLieu_fkey` FOREIGN KEY (`idLieu`) REFERENCES `lieu` (`idLieu`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Seance_idModule_fkey` FOREIGN KEY (`idModule`) REFERENCES `module` (`idModule`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Seance_idProf_fkey` FOREIGN KEY (`idProf`) REFERENCES `prof` (`idProf`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
