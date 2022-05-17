-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 22, 2022 at 11:49 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `phoneapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `email`
--

CREATE TABLE `email` (
  `codMail` int(5) NOT NULL,
  `mail` varchar(320) NOT NULL,
  `tel` bigint(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `nota`
--

CREATE TABLE `nota` (
  `codNota` int(5) NOT NULL,
  `creador` int(5) NOT NULL,
  `fecha` date NOT NULL,
  `peligrosidad` int(1) NOT NULL CHECK (`peligrosidad` between 0 and 9),
  `impacto` int(1) NOT NULL CHECK (`impacto` between 0 and 9),
  `completada` tinyint(1) NOT NULL,
  `tel` bigint(15) NOT NULL,
  `contenido` varchar(10000) NOT NULL,
  `detalles` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `nota`
--

INSERT INTO `nota` (`codNota`, `creador`, `fecha`, `peligrosidad`, `impacto`, `completada`, `tel`, `contenido`, `detalles`) VALUES
(3, 1, '0000-00-00', 2, 3, 0, 622627305, 'Borro la primera nota', 'aaas aaas'),
(4, 1, '0000-00-00', 2, 3, 1, 987987654, 'segunda nota v23', 'Detalles borrados miau'),
(5, 1, '0000-00-00', 2, 3, 0, 622627305, 'tercera nota v2', 'detalles generales de la nota'),
(6, 1, '0000-00-00', 2, 9, 0, 987987654, 'cuarta nota v5', 'Escribe aquí los detalles de la nota.'),
(7, 1, '0000-00-00', 5, 5, 1, 1, 'He resumido la nota', 'Escribe aquí los detalles de la nota.'),
(8, 1, '0000-00-00', 2, 1, 1, 622627305, 'Resume aquí la nota', 'Escribe aquí los detalles de la nota.'),
(9, 1, '0000-00-00', 2, 1, 0, 622627305, 'aaaa2 2', 'Escribe aquí los detalles de la nota.'),
(10, 1, '0000-00-00', 2, 1, 1, 622627305, 'aaaa2 2', 'Escribe aquí los detalles de la nota.'),
(11, 1, '0000-00-00', 1, 1, 1, 622627305, 'aaaaa2 patata', 'Escribe aquí los detalles de la nota.'),
(12, 1, '0000-00-00', 1, 1, 0, 622627305, 'aaaaa2 patata v2', 'Escribe aquí los detalles de la nota.'),
(13, 1, '0000-00-00', 2, 2, 1, 622627305, 'Resume aquí la nota4234', 'Escribe aaaaa'),
(14, 1, '2022-03-22', 1, 1, 1, 622627305, 'Resume aquí la nota', 'Escribe aquí los detalles de la nota.'),
(15, 1, '2022-03-22', 1, 5, 1, 6555555, 'Y ahora la modifico', 'estos son los detaañññes áéó'),
(16, 1, '2022-03-22', 1, 2, 1, 345345345, 'Alguien necesita algo', 'Y no debemos tardar mucho'),
(17, 1, '2022-03-22', 2, 5, 1, 622627304, 'Cambio el resumen', 'Muchos detallesMuchos detallesMuchos detallesMuchos detallesMuchos detallesMuchos detallesMuchos detallesMuchos detallesMuchos detallesMuchos detallesMuchos detallesMuchos detallesMuchos detallesMuchos detallesMuchos detallesMuchos detallesMuchos detallesMuchos detallesMuchos detallesMuchos detallesMuchos detallesMuchos detalles 1321434'),
(18, 1, '2022-03-21', 2, 3, 1, 987987654, 'cuarta nota v4', 'Blabababnaladsfsdfdsf'),
(19, 1, '2022-03-22', 1, 2, 1, 99988889, 'Una nota cualquiera', 'Detallitos'),
(20, 1, '2022-03-22', 3, 2, 1, 987987654, 'WeeeeeNotaaaaa', 'Weeee detalles'),
(21, 1, '2022-03-22', 1, 2, 1, 124511, 'Resume aquí la nota', 'Escribe aquí los detalles de la nota.'),
(22, 1, '2022-03-22', 0, 0, 1, 622627305, 'Resume aquí la ', 'Escribe aquí los detalles de la nota.'),
(23, 1, '2022-03-22', 3, 1, 1, 622627305, 'Resume aquí la nota', 'Escribe aquí los detalles de la nota.'),
(24, 1, '2022-03-22', 4, 1, 1, 622627305, 'aaaaaaaaaaaaaaaaaaaa', '333333333.'),
(25, 1, '2022-03-22', 1, 9, 1, 622627305, 'Resume aquí la nota', 'Escribe aquí 4234234234detalles de la nota.'),
(26, 1, '2022-03-22', 3, 1, 1, 622627305, 'Resume aquí la nota', 'Escribe aquí los detalles de la nota.'),
(27, 1, '2022-03-22', 0, 0, 1, 6226245451, 'Resume aquí la nota', 'Escribe aquí los detalles de la nota.'),
(28, 1, '2022-03-22', 3, 1, 1, 676748289, 'Una nota del telefono mal memorizao', 'MLEM'),
(29, 1, '2022-03-22', 4, 4, 1, 45455454, 'Resume aquí la nota 2', 'Escribe aquí los detalles de la nota.'),
(30, 1, '2022-03-22', 3, 1, 1, 1234, 'Resume aquí la nota', 'Escribe aquí los detalles de la nota.'),
(31, 1, '2022-03-22', 3, 1, 0, 12315612, 'Resume aquí la nota', 'Escribe aquí los detalles de la nota.'),
(32, 1, '2022-03-22', 3, 2, 0, 123, 'Resume aquí la nota', 'Escribe aquí los detalles de la nota.');

-- --------------------------------------------------------

--
-- Table structure for table `persona`
--

CREATE TABLE `persona` (
  `codPer` int(5) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `detalles` varchar(10000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `persona`
--

INSERT INTO `persona` (`codPer`, `nombre`, `detalles`) VALUES
(1, 'Perico', ''),
(9, 'Juan Cuadra', 'Es la segunda persona'),
(10, 'Pedro Poole', 'Nota aleatoria'),
(11, 'Juan Cuesta', '211232354dsfadsfadsf'),
(12, 'Juan cuadra', '62262685fdsgsdfg'),
(13, 'Juan cuadra', '62262685fdsgsdfg'),
(14, 'Maria Sumadre2', 'Lolaos'),
(15, 'Alberto Moria', 'Esta es una nota'),
(16, 'Pedro Poole', 'dsfsdfdsf'),
(17, 'No perico', 'Jajajaja'),
(18, 'Macacayo', '123'),
(19, 'Polaina', '123'),
(20, 'Grumpy', 'En realidad es hambre.'),
(21, 'Laleli', ''),
(22, 'fff', '2'),
(23, 'Pablo', 'Miau');

-- --------------------------------------------------------

--
-- Table structure for table `telefono`
--

CREATE TABLE `telefono` (
  `tel` bigint(15) NOT NULL,
  `codPer` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `telefono`
--

INSERT INTO `telefono` (`tel`, `codPer`) VALUES
(0, 1),
(1, 1),
(2, 1),
(3, 1),
(12, 1),
(65, 1),
(91, 1),
(112, 1),
(123, 1),
(134, 1),
(154, 1),
(213, 1),
(445, 1),
(654, 1),
(698, 1),
(1213, 1),
(1234, 1),
(2354, 1),
(3123, 1),
(4342, 1),
(6544, 1),
(6985, 1),
(12347, 1),
(33123, 1),
(45785, 1),
(65444, 1),
(74564, 1),
(99994, 1),
(99999, 1),
(112998, 1),
(123111, 1),
(123213, 1),
(124511, 1),
(234234, 1),
(345345, 1),
(457857, 1),
(543453, 1),
(622621, 1),
(629848, 1),
(698556, 1),
(954963, 1),
(990028, 1),
(999554, 1),
(999999, 1),
(1235623, 1),
(1544444, 1),
(1561312, 1),
(3423444, 1),
(3424234, 1),
(4234234, 1),
(4578545, 1),
(6245421, 1),
(6298482, 1),
(6487534, 1),
(6555555, 1),
(6999999, 1),
(7111111, 1),
(7777777, 1),
(8747874, 1),
(9999999, 1),
(12312313, 1),
(12315612, 1),
(23423423, 1),
(34534535, 1),
(54345345, 1),
(61445454, 1),
(61919191, 1),
(62222222, 1),
(62245684, 1),
(62444198, 1),
(62945654, 1),
(63263254, 1),
(81414141, 1),
(99988889, 1),
(99999999, 1),
(331235234, 1),
(345345345, 1),
(611617112, 1),
(622624545, 1),
(622627303, 1),
(622627444, 1),
(987987654, 1),
(1231113123, 1),
(6226214234, 1),
(6226245452, 1),
(6226273051, 1),
(6226273058, 1),
(6226273324, 1),
(6898989877, 1),
(12311131234, 1),
(123111312345, 1),
(622627305111, 1),
(1231113123453, 1),
(12311131234531, 1),
(123111312345312, 1),
(123111312345313, 1),
(123111312345314, 1),
(123111312345315, 1),
(123111312345316, 1),
(123111312345317, 1),
(123111312345318, 1),
(12451245, 10),
(34234444, 10),
(622627305, 10),
(6226245451, 10),
(622627304, 14),
(4578, 18),
(12356, 19),
(676748289, 20),
(5454, 21),
(45455454, 22),
(545345, 23);

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `codUsu` int(5) NOT NULL,
  `nomUsu` varchar(60) NOT NULL,
  `conUsu` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`codUsu`, `nomUsu`, `conUsu`) VALUES
(1, 'Pedro', '$2y$10$KTVj653Dmczyd1wVT0FuRO/k8W1j7ljWkXql68RyDCoMf2mwib2uW');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `email`
--
ALTER TABLE `email`
  ADD PRIMARY KEY (`codMail`),
  ADD KEY `fk_mail_tel` (`tel`);

--
-- Indexes for table `nota`
--
ALTER TABLE `nota`
  ADD PRIMARY KEY (`codNota`),
  ADD KEY `fk_nota_tel` (`tel`),
  ADD KEY `fk_not_usu` (`creador`);

--
-- Indexes for table `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`codPer`);

--
-- Indexes for table `telefono`
--
ALTER TABLE `telefono`
  ADD PRIMARY KEY (`tel`),
  ADD KEY `telPer` (`codPer`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`codUsu`),
  ADD UNIQUE KEY `nomUsu` (`nomUsu`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `email`
--
ALTER TABLE `email`
  MODIFY `codMail` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `nota`
--
ALTER TABLE `nota`
  MODIFY `codNota` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `persona`
--
ALTER TABLE `persona`
  MODIFY `codPer` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `codUsu` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `email`
--
ALTER TABLE `email`
  ADD CONSTRAINT `fk_mail_tel` FOREIGN KEY (`tel`) REFERENCES `telefono` (`tel`);

--
-- Constraints for table `nota`
--
ALTER TABLE `nota`
  ADD CONSTRAINT `fk_not_usu` FOREIGN KEY (`creador`) REFERENCES `usuario` (`codUsu`),
  ADD CONSTRAINT `fk_nota_tel` FOREIGN KEY (`tel`) REFERENCES `telefono` (`tel`);

--
-- Constraints for table `telefono`
--
ALTER TABLE `telefono`
  ADD CONSTRAINT `telPer` FOREIGN KEY (`codPer`) REFERENCES `persona` (`codPer`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
