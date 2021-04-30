-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-04-2021 a las 03:21:49
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `coronanalyst`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuenta`
--

CREATE TABLE `cuenta` (
  `idCuenta` int(11) NOT NULL,
  `idTipo_De_Cuenta` int(11) NOT NULL,
  `Usuario` varchar(45) NOT NULL,
  `Contraseña` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `cuenta`
--

INSERT INTO `cuenta` (`idCuenta`, `idTipo_De_Cuenta`, `Usuario`, `Contraseña`) VALUES
(1, 3, 'adm', '$2b$10$jvZWD7TqKJs.kg3j1V7GKulqRjJDMnRTZhYQjPiOdHBcOzukGQroi'),
(2, 2, 'cli', '$2b$10$0tbc23ZIQiW.akxQT264w.hGbfd9PHRtbtJ8/WznXrbq9mJTkeeO6'),
(3, 1, 'us', '$2b$10$b66Zdfo7pgc8dJDCzyejt.IbY/YYZ60J0byMRaE6UdLVy2WQwk2fK'),
(92, 1, 'jesus', '$2b$10$9OMzul3s9jjz7gQl4hzu8uPACpO2DPbttZyUxLaIoQP32yNAOlyQi'),
(93, 1, 'no@no.no', '$2b$10$TXHMTPOzZQ.ei9W5SD1qXOygOs5707n9G/DUTGlCjLqIRL7WyyAB.'),
(94, 1, 'nose@nose.nose', '$2b$10$yc1rJ1ZOuxLqHEfVUSTPEuwBgjJFea/9bynYwKkZ8ChyEHQcvwL36'),
(95, 1, '1@1.com', '$2b$10$cE85pMLePV8XTpWveip5v.lC/c8ajvfxxwLRFpH5jwPkXg.X.u9Bu'),
(96, 1, 'pito@pito.pito', '$2b$10$TTaAisoxrjSyUm8NyCw8ReE0MJMkP8j90uRjCOEF6BNGLvM3WuJiC'),
(97, 1, 'a@a.com', '$2b$10$OPQejhpmDQqbd8ykSB3q9ud/iX59Q5ZP9vbqda5ye3SBce2P7qZQ6'),
(98, 1, '2@2.co', '$2b$10$8mVU4jOcBFd8Y5pF0WJLROibcJCqxgKVsRlPGZzZervgW2/5806Cy'),
(99, 1, '3@3.co', '$2b$10$mAD2sZjtNW0bgp1bQpVDy.kX9IX.nkF3p1p3fTIPhygodb.JBbvae'),
(100, 1, 'javi@javi.javi', '$2b$10$wJTGcTOpnf0Qq1BptnQWSOPALjAgzouLI60QEwu5yBq2MAlxiKhVi'),
(101, 1, '5@1.pa', '$2b$10$/DPWSOuoR6Tp7zljeRIDsuwF7/tBnOZm8EjY6JRZAdIToQHQP2sCe'),
(102, 1, '5@1.paa', '$2b$10$eoyIayxdoWv82NTs..issecjoFwYShTQ71IiUkvTqvR5MB6dP.xgi'),
(103, 1, 'e5@1.pa', '$2b$10$rMJgXN6r.GwkPpbKnctZ9.WcsTNe8eeo45Vfd.qWFUjX0Mq0T26kO'),
(104, 1, 'aasfaw5@1.pa', '$2b$10$yZlfvYHqaJLdMnmbDrZV2.JUXLAUbnvgcT32YJAf5PfO1AUrjTarO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `datos_personales`
--

CREATE TABLE `datos_personales` (
  `idDatos_Personales` int(11) NOT NULL,
  `idCuenta` int(11) NOT NULL,
  `Genero` varchar(45) NOT NULL,
  `Edad` varchar(45) NOT NULL,
  `Estado_Civil` varchar(45) NOT NULL,
  `Nivel_estudios` varchar(45) NOT NULL,
  `Ocupacion` varchar(45) NOT NULL,
  `Ingreso_mensual` varchar(45) NOT NULL,
  `Localidad` varchar(45) NOT NULL,
  `IP` varchar(45) DEFAULT NULL,
  `Dispositivo` varchar(45) DEFAULT NULL,
  `SO` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `datos_personales`
--

INSERT INTO `datos_personales` (`idDatos_Personales`, `idCuenta`, `Genero`, `Edad`, `Estado_Civil`, `Nivel_estudios`, `Ocupacion`, `Ingreso_mensual`, `Localidad`, `IP`, `Dispositivo`, `SO`) VALUES
(1, 93, 'Mujer', '21-25', 'Casado(a)', 'Secundaria', 'Sector Judicial', '$1,000 - $10,000', 'Nayarit', '', '', ''),
(2, 94, 'Otro', '21-25', 'Unión libre', 'Secundaria', 'Sector de Informática', '$1,000 - $10,000', 'Nayarit', '', '', ''),
(3, 95, 'Otro', '15-20', 'Divorciado(a)', 'Secundaria', 'Sector de Informática', '$10,000 - $30,000', 'Guanajuato', 'null', 'null', 'null'),
(4, 96, 'Mujer', '21-25', 'Divorciado(a)', 'Preparatoria', 'Sector de Servicios Financieros', 'Menos de $1,000', 'Nuevo León', '', '', ''),
(5, 97, 'Mujer', '21-25', 'Casado(a)', 'Universidad', 'Sector Judicial', 'Menos de $1,000', 'Michoacán', '', '', ''),
(6, 98, 'Otro', 'Menor de 15', 'Soltero(a)', 'Universidad', 'Sector Judicial', '$1,000 - $10,000', 'Hidalgo', '', '', ''),
(7, 99, 'Otro', '26-30', 'Unión libre', 'Preparatoria', 'Hogar', '$1,000 - $10,000', 'Michoacán', '', '', ''),
(8, 100, 'Hombre', '21-25', 'Divorciado(a)', 'Preparatoria', 'Sector de Servicios Financieros', 'Menos de $1,000', 'Nayarit', '', '', ''),
(9, 101, 'Hombre', '15-20', 'Unión libre', 'Preparatoria', 'Sector de Servicios Financieros', '$1,000 - $10,000', 'Hidalgo', '', '', ''),
(10, 102, 'Mujer', '31-35', 'Divorciado(a)', 'Preparatoria', 'Hogar', '$1,000 - $10,000', 'Nuevo León', '', '', ''),
(11, 103, 'Otro', '31-35', 'Divorciado(a)', 'Universidad', 'Sector de Servicios Financieros', 'Menos de $1,000', 'Oaxaca', '', '', ''),
(12, 104, 'Mujer', '21-25', 'Viudo(a)', 'Universidad', 'Sector Judicial', '$1,000 - $10,000', 'Morelos', '', '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `opciones`
--

CREATE TABLE `opciones` (
  `idOpciones` int(11) NOT NULL,
  `idPreguntas` int(11) NOT NULL,
  `Opcion` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `opciones`
--

INSERT INTO `opciones` (`idOpciones`, `idPreguntas`, `Opcion`) VALUES
(101, 1, 'Más de 10 veces al mes'),
(102, 1, '6 a 10 veces al mes'),
(103, 1, '1 a 5 veces al mes.'),
(104, 1, '1 vez cada varios meses'),
(105, 1, 'No realizaba compras en línea'),
(201, 2, 'Mercado Libre'),
(202, 2, 'Amazon'),
(203, 2, 'Facebook Marketplace'),
(204, 2, 'Alibaba / Aliexpress'),
(205, 2, 'eBay'),
(206, 2, 'E-shop propia de cada marca (Nike, Supreme, Walmart, Liverpool, etc.)'),
(207, 2, 'Otros'),
(208, 2, 'No realizaba compras en línea'),
(301, 3, 'Tarjeta de crédito'),
(302, 3, 'Tarjeta de débito'),
(303, 3, 'Paypal'),
(304, 3, 'Mercado Pago'),
(305, 3, 'Efectivo'),
(306, 3, 'Transferencia electrónica'),
(307, 3, 'Depósito en tiendas de conveniencia (Oxxo, 7Eleven, etc.)'),
(308, 3, 'Otro'),
(309, 3, 'No realizaba compras en línea'),
(401, 4, 'Ropa'),
(402, 4, 'Comida a domicilio (Rappi, UberEats, etc.)'),
(403, 4, 'Super a domicilio (víveres)'),
(404, 4, 'Muebles y/o electrodomésticos'),
(405, 4, 'Coleccionables'),
(406, 4, 'Libros (físicos o electrónicos)'),
(407, 4, 'Computadoras y/o electrónicos'),
(408, 4, 'Herramientas y ferretería'),
(409, 4, 'Entretenimiento (música, tv, videojuegos, juguetes, etc.)'),
(410, 4, 'Programas o aplicaciones'),
(411, 4, 'Reservaciones y boletos'),
(412, 4, 'Artículos de higiene'),
(413, 4, 'Artí­culos deportivos'),
(414, 4, 'No realizaba compras en línea'),
(415, 4, 'Otros'),
(501, 5, '7 horas o más al día'),
(502, 5, '6 a 2 horas al día'),
(503, 5, '6 a 2 horas a la semana'),
(504, 5, 'Menos de dos horas a la semana'),
(601, 6, 'Más de 10 veces por mes'),
(602, 6, '10 a 6 veces al mes'),
(603, 6, '5 a 1 vez al mes'),
(604, 6, '1 vez cada varios meses'),
(605, 6, 'No realizo compras en línea'),
(701, 7, 'Mercado Libre'),
(702, 7, 'Amazon'),
(703, 7, 'Facebook Marketplace'),
(704, 7, 'Alibaba / Aliexpress'),
(705, 7, 'eBay'),
(706, 7, 'E-shop propia de cada marca (Nike, Supreme, Walmart, Liverpool, etc.)'),
(707, 7, 'Otros'),
(708, 7, 'No realizo compras en línea'),
(801, 8, 'Tarjeta de crédito'),
(802, 8, 'Tarjeta de débito'),
(803, 8, 'Paypal'),
(804, 8, 'Mercado Pago'),
(805, 8, 'Efectivo'),
(806, 8, 'Transferencia Electrónica'),
(807, 8, 'Depósito en tiendas de conveniencia (Oxxo, 7Eleven, etc.)'),
(808, 8, 'Otro'),
(809, 8, 'No realizo compras en línea'),
(901, 9, 'Ropa'),
(902, 9, 'Comida a domicilio (Rappi, UberEats, etc.)'),
(903, 9, 'Super a domicilio (víveres)'),
(904, 9, 'Muebles y/o electrodomésticos'),
(905, 9, 'Coleccionables'),
(906, 9, 'Libros (físicos o electrónicos)'),
(907, 9, 'Computadoras y/o electrónicos'),
(908, 9, 'Herramientas y ferretería'),
(909, 9, 'Entretenimiento (música, tv, videojuegos, juguetes, etc.)'),
(910, 9, 'Programas o aplicaciones'),
(911, 9, 'Reservaciones y boletos'),
(912, 9, 'Artículos de higiene'),
(913, 9, 'Artículos deportivos'),
(914, 9, 'No realizaba compras en línea'),
(915, 9, 'Otros'),
(1001, 10, '7 horas o más al día'),
(1002, 10, '6 a 2 horas al día'),
(1003, 10, '6 a 2 horas a la semana'),
(1004, 10, 'Menos de 2 horas a la semana'),
(1101, 11, 'Menos de 1,000'),
(1102, 11, '1,000 - 2,500'),
(1103, 11, '2,500 - 5,000'),
(1104, 11, '5,000 - 7,500'),
(1105, 11, '7,500 - 10,000'),
(1106, 11, 'Más de 10,000'),
(1201, 12, 'Físico'),
(1202, 12, 'Línea'),
(1301, 13, 'Sí'),
(1302, 13, 'No'),
(1401, 14, 'Diabetes'),
(1402, 14, 'Hipertensión'),
(1403, 14, 'Obesidad'),
(1404, 14, 'Asma'),
(1405, 14, 'Condiciones cardiacas'),
(1406, 14, 'Inmunodeficiencia'),
(1407, 14, 'Hepatitis'),
(1408, 14, 'Otros no listados'),
(1409, 14, 'Ninguna'),
(1501, 15, 'Ansiedad'),
(1502, 15, 'Estrés'),
(1503, 15, 'Depresión'),
(1504, 15, 'Déficit de atención'),
(1505, 15, 'Baja de rendimiento laboral/académico'),
(1506, 15, 'Baja autoestima'),
(1507, 15, 'Otros no enlistados'),
(1508, 15, 'No me he sentido afectado'),
(1601, 16, 'Aumentó'),
(1602, 16, 'Permaneció igual que antes'),
(1603, 16, 'Disminuyó');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntas`
--

CREATE TABLE `preguntas` (
  `idPreguntas` int(11) NOT NULL,
  `Pregunta` varchar(140) NOT NULL,
  `Tipo` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `preguntas`
--

INSERT INTO `preguntas` (`idPreguntas`, `Pregunta`, `Tipo`) VALUES
(1, '¿Qué tan seguido compraba en línea?', 'Radio'),
(2, '¿Qué plataformas utilizaba para realizar compras en línea?', 'Checkbox'),
(3, '¿Qué métodos de pago utilizaba más para realizar sus compras en línea? ', 'Checkbox'),
(4, '\r\n¿De cuáles de las siguientes categorías realizaba compras?\r\n', 'Checkbox'),
(5, '¿Cuánto tiempo estima que se encontraba usando la computadora para actividades diarias?', 'Radio'),
(6, '¿Qué tan seguido compra en línea ahora?', 'Radio'),
(7, '¿Qué plataformas utiliza para realizar compras en línea?', 'Checkbox'),
(8, '¿Qué método de pago utiliza usted para sus compras en internet?', 'Checkbox'),
(9, '\r\n¿De cuáles de las siguientes categorías ha realizado compras?\r\n', 'Checkbox'),
(10, '¿Cuánto tiempo estima que usa la computadora para actividades diarias?', 'Radio'),
(11, '¿En promedio cuánto dinero estima que gasta en compras en línea al mes? ', 'Radio'),
(12, '¿Actualmente compras más seguido en físico o en línea?', 'Radio'),
(13, '¿Desde que empezó la pandemia, ha presentado síntomas relacionados al COVID-19?', 'Radio'),
(14, '¿Usted sufre de alguna de las siguientes condiciones médicas?', 'Checkbox'),
(15, '¿A causa de la pandemia usted se ha sentido relacionado con algunas de las siguientes situaciones?', 'Checkbox'),
(16, 'Durante la pandemia, ¿Cómo ha cambiado su actividad física?', 'Radio');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `respuestas`
--

CREATE TABLE `respuestas` (
  `idRespuestas` int(11) NOT NULL,
  `fkCuenta` int(11) NOT NULL,
  `fkPreguntas` int(11) NOT NULL,
  `fkOpciones` int(11) NOT NULL,
  `Respuesta` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `respuestas`
--

INSERT INTO `respuestas` (`idRespuestas`, `fkCuenta`, `fkPreguntas`, `fkOpciones`, `Respuesta`) VALUES
(1, 93, 1, 103, 'c) 1 a 5 veces al mes.'),
(2, 93, 2, 204, 'd) Alibaba / Aliexpress'),
(3, 93, 2, 206, 'f) E-shop propia de cada marca (Nike, Supreme, Wal'),
(4, 93, 3, 306, 'f) Transferencia electrónica'),
(5, 93, 4, 407, 'g) Computadoras y/o electrónicos'),
(6, 93, 4, 404, 'd) Muebles y/o electrodomésticos'),
(7, 93, 4, 402, 'b) Comida a domicilio (Rappi, UberEats, etc.)'),
(8, 93, 6, 604, 'd) 1 vez cada varios meses'),
(9, 93, 5, 503, 'c) 6 a 2 horas a la semana'),
(10, 93, 7, 704, 'd) Alibaba / Aliexpress'),
(11, 93, 7, 703, 'c) Facebook Marketplace'),
(12, 93, 8, 804, 'd) Mercado Pago'),
(13, 93, 8, 805, 'e) Efectivo'),
(14, 93, 9, 903, 'c) Super a domicilio (víveres)'),
(15, 93, 9, 901, 'a) Ropa'),
(16, 93, 10, 1002, 'b) 6 a 2 horas al día'),
(17, 93, 11, 1106, 'f) Más de 10,000'),
(18, 93, 12, 1202, 'b) Línea'),
(19, 93, 13, 1302, 'b) No'),
(20, 93, 14, 1402, 'b) Hipertensión'),
(21, 93, 14, 1404, 'd) Asma'),
(22, 93, 14, 1405, 'e) Condiciones cardiacas'),
(23, 93, 15, 1507, 'g) Otros no enlistados'),
(24, 93, 15, 1503, 'c) Depresión'),
(25, 93, 16, 1603, 'c) Disminuyó'),
(26, 94, 1, 103, 'c) 1 a 5 veces al mes.'),
(27, 94, 2, 203, 'c) Facebook Marketplace'),
(28, 94, 3, 305, 'e) Efectivo'),
(29, 94, 4, 409, 'i) Entretenimiento (música, tv, videojuegos, jugue'),
(30, 94, 4, 404, 'd) Muebles y/o electrodomésticos'),
(31, 94, 5, 504, 'd) Menos de dos horas a la semana'),
(32, 94, 7, 702, 'b) Amazon'),
(33, 94, 6, 601, 'a) Más de 10 veces por mes'),
(34, 94, 8, 803, 'c) Paypal'),
(35, 94, 9, 905, 'e) Coleccionables'),
(36, 94, 9, 907, 'g) Computadoras y/o electrónicos'),
(37, 94, 10, 1004, 'd) Menos de 2 horas a la semana'),
(38, 94, 11, 1104, 'd) 5,000 - 7,500'),
(39, 94, 9, 912, 'l) Artículos de higiene'),
(40, 94, 12, 1202, 'b) Línea'),
(41, 94, 13, 1302, 'b) No'),
(42, 94, 14, 1404, 'd) Asma'),
(43, 94, 14, 1402, 'b) Hipertensión'),
(44, 94, 15, 1504, 'd) Déficit de atención'),
(45, 94, 15, 1507, 'g) Otros no enlistados'),
(46, 94, 16, 1603, 'c) Disminuyó'),
(47, 95, 1, 102, 'b) 6 a 10 veces al mes'),
(48, 95, 2, 203, 'c) Facebook Marketplace'),
(49, 95, 16, 1602, 'b) Permaneció igual que antes'),
(50, 95, 15, 1508, 'h) No me he sentido afectado'),
(51, 95, 15, 1504, 'd) Déficit de atención'),
(52, 95, 14, 1408, 'h) Otros no listados'),
(53, 95, 14, 1405, 'e) Condiciones cardiacas'),
(54, 95, 14, 1403, 'c) Obesidad'),
(55, 95, 13, 1301, 'a) Sí'),
(56, 95, 12, 1201, 'a) Físico'),
(57, 95, 11, 1101, 'a) Menos de 1,000'),
(58, 95, 10, 1003, 'c) 6 a 2 horas a la semana'),
(59, 95, 9, 911, 'k) Reservaciones y boletos'),
(60, 95, 9, 907, 'g) Computadoras y/o electrónicos'),
(61, 95, 9, 905, 'e) Coleccionables'),
(62, 95, 9, 903, 'c) Super a domicilio (víveres)'),
(63, 95, 8, 806, 'f) Transferencia Electrónica'),
(64, 95, 8, 804, 'd) Mercado Pago'),
(65, 95, 8, 802, 'b) Tarjeta de débito'),
(66, 95, 7, 706, 'f) E-shop propia de cada marca (Nike, Supreme, Wal'),
(67, 95, 7, 703, 'c) Facebook Marketplace'),
(68, 95, 6, 604, 'd) 1 vez cada varios meses'),
(69, 95, 5, 502, 'b) 6 a 2 horas al día'),
(70, 95, 4, 413, 'm) Artí­culos deportivos'),
(71, 95, 4, 409, 'i) Entretenimiento (música, tv, videojuegos, jugue'),
(72, 95, 4, 404, 'd) Muebles y/o electrodomésticos'),
(73, 95, 3, 304, 'd) Mercado Pago'),
(74, 95, 2, 208, 'h) No realizaba compras en línea'),
(75, 97, 1, 103, 'c) 1 a 5 veces al mes.'),
(76, 97, 2, 202, 'b) Amazon'),
(77, 97, 2, 205, 'e) eBay'),
(78, 97, 2, 206, 'f) E-shop propia de cada marca (Nike, Supreme, Wal'),
(79, 97, 2, 208, 'h) No realizaba compras en línea'),
(80, 97, 3, 304, 'd) Mercado Pago'),
(81, 97, 3, 303, 'c) Paypal'),
(82, 97, 3, 309, 'i) No realizaba compras en línea'),
(83, 97, 4, 408, 'h) Herramientas y ferretería'),
(84, 97, 4, 404, 'd) Muebles y/o electrodomésticos'),
(85, 97, 4, 413, 'm) Artí­culos deportivos'),
(86, 97, 4, 410, 'j) Programas o aplicaciones'),
(87, 97, 4, 411, 'k) Reservaciones y boletos'),
(88, 97, 5, 502, 'b) 6 a 2 horas al día'),
(89, 97, 6, 605, 'e) No realizo compras en línea'),
(90, 97, 7, 706, 'f) E-shop propia de cada marca (Nike, Supreme, Wal'),
(91, 97, 7, 704, 'd) Alibaba / Aliexpress'),
(92, 97, 7, 703, 'c) Facebook Marketplace'),
(93, 97, 8, 805, 'e) Efectivo'),
(94, 97, 8, 802, 'b) Tarjeta de débito'),
(95, 97, 8, 808, 'h) Otro'),
(96, 97, 8, 809, 'i) No realizo compras en línea'),
(97, 97, 9, 905, 'e) Coleccionables'),
(98, 97, 9, 912, 'l) Artículos de higiene'),
(99, 97, 9, 913, 'm) Artículos deportivos'),
(100, 97, 9, 909, 'i) Entretenimiento (música, tv, videojuegos, jugue'),
(101, 97, 11, 1102, 'b) 1,000 - 2,500'),
(102, 97, 12, 1201, 'a) Físico'),
(103, 97, 13, 1301, 'a) Sí'),
(104, 97, 14, 1405, 'e) Condiciones cardiacas'),
(105, 97, 14, 1404, 'd) Asma'),
(106, 97, 14, 1402, 'b) Hipertensión'),
(107, 97, 15, 1504, 'd) Déficit de atención'),
(108, 97, 15, 1508, 'h) No me he sentido afectado'),
(109, 97, 15, 1507, 'g) Otros no enlistados'),
(110, 97, 16, 1603, 'c) Disminuyó'),
(111, 97, 10, 1002, 'b) 6 a 2 horas al día'),
(112, 98, 1, 102, 'b) 6 a 10 veces al mes'),
(113, 98, 2, 202, 'b) Amazon'),
(114, 98, 2, 206, 'f) E-shop propia de cada marca (Nike, Supreme, Wal'),
(115, 98, 2, 203, 'c) Facebook Marketplace'),
(116, 98, 3, 302, 'b) Tarjeta de débito'),
(117, 98, 3, 308, 'h) Otro'),
(118, 98, 3, 309, 'i) No realizaba compras en línea'),
(119, 98, 4, 402, 'b) Comida a domicilio (Rappi, UberEats, etc.)'),
(120, 98, 4, 401, 'a) Ropa'),
(121, 98, 4, 403, 'c) Super a domicilio (víveres)'),
(122, 98, 4, 404, 'd) Muebles y/o electrodomésticos'),
(123, 98, 4, 405, 'e) Coleccionables'),
(124, 98, 4, 406, 'f) Libros (físicos o electrónicos)'),
(125, 98, 4, 407, 'g) Computadoras y/o electrónicos'),
(126, 98, 4, 408, 'h) Herramientas y ferretería'),
(127, 98, 4, 409, 'i) Entretenimiento (música, tv, videojuegos, jugue'),
(128, 98, 4, 410, 'j) Programas o aplicaciones'),
(129, 98, 4, 411, 'k) Reservaciones y boletos'),
(130, 98, 4, 412, 'l) Artículos de higiene'),
(131, 98, 4, 413, 'm) Artí­culos deportivos'),
(132, 98, 4, 415, 'o) Otros'),
(133, 98, 4, 414, 'n) No realizaba compras en línea'),
(134, 98, 2, 201, 'a) Mercado Libre'),
(135, 98, 2, 204, 'd) Alibaba / Aliexpress'),
(136, 98, 2, 205, 'e) eBay'),
(137, 98, 2, 207, 'g) Otros'),
(138, 98, 2, 208, 'h) No realizaba compras en línea'),
(139, 98, 3, 301, 'a) Tarjeta de crédito'),
(140, 98, 3, 303, 'c) Paypal'),
(141, 98, 3, 304, 'd) Mercado Pago'),
(142, 98, 3, 305, 'e) Efectivo'),
(143, 98, 3, 306, 'f) Transferencia electrónica'),
(144, 98, 3, 307, 'g) Depósito en tiendas de conveniencia (Oxxo, 7Ele'),
(145, 98, 5, 502, 'b) 6 a 2 horas al día'),
(146, 98, 6, 603, 'c) 5 a 1 vez al mes'),
(147, 98, 7, 701, 'a) Mercado Libre'),
(148, 98, 7, 702, 'b) Amazon'),
(149, 98, 7, 703, 'c) Facebook Marketplace'),
(150, 98, 7, 704, 'd) Alibaba / Aliexpress'),
(151, 98, 7, 705, 'e) eBay'),
(152, 98, 7, 707, 'g) Otros'),
(153, 98, 7, 706, 'f) E-shop propia de cada marca (Nike, Supreme, Wal'),
(154, 98, 8, 801, 'a) Tarjeta de crédito'),
(155, 98, 8, 802, 'b) Tarjeta de débito'),
(156, 98, 8, 806, 'f) Transferencia Electrónica'),
(157, 98, 8, 807, 'g) Depósito en tiendas de conveniencia (Oxxo, 7Ele'),
(158, 98, 8, 809, 'i) No realizo compras en línea'),
(159, 98, 9, 901, 'a) Ropa'),
(160, 98, 9, 908, 'h) Herramientas y ferretería'),
(161, 98, 9, 907, 'g) Computadoras y/o electrónicos'),
(162, 98, 9, 904, 'd) Muebles y/o electrodomésticos'),
(163, 98, 9, 903, 'c) Super a domicilio (víveres)'),
(164, 98, 9, 914, 'n) No realizaba compras en línea'),
(165, 98, 9, 915, 'o) Otros'),
(166, 98, 9, 913, 'm) Artículos deportivos'),
(167, 98, 10, 1002, 'b) 6 a 2 horas al día'),
(168, 98, 11, 1105, 'e) 7,500 - 10,000'),
(169, 98, 12, 1202, 'b) Línea'),
(170, 98, 13, 1302, 'b) No'),
(171, 98, 14, 1404, 'd) Asma'),
(172, 98, 14, 1402, 'b) Hipertensión'),
(173, 98, 14, 1401, 'a) Diabetes'),
(174, 98, 15, 1508, 'h) No me he sentido afectado'),
(175, 98, 16, 1602, 'b) Permaneció igual que antes'),
(176, 99, 1, 101, 'a) Más de 10 veces al mes'),
(177, 99, 2, 204, 'd) Alibaba / Aliexpress'),
(178, 99, 3, 305, 'e) Efectivo'),
(179, 99, 4, 405, 'e) Coleccionables'),
(180, 99, 4, 403, 'c) Super a domicilio (víveres)'),
(181, 99, 4, 409, 'i) Entretenimiento (música, tv, videojuegos, jugue'),
(182, 99, 4, 410, 'j) Programas o aplicaciones'),
(183, 99, 4, 402, 'b) Comida a domicilio (Rappi, UberEats, etc.)'),
(184, 99, 6, 601, 'a) Más de 10 veces por mes'),
(185, 99, 5, 502, 'b) 6 a 2 horas al día'),
(186, 99, 7, 705, 'e) eBay'),
(187, 99, 7, 708, 'h) No realizo compras en línea'),
(188, 99, 8, 805, 'e) Efectivo'),
(189, 99, 9, 902, 'b) Comida a domicilio (Rappi, UberEats, etc.)'),
(190, 99, 9, 912, 'l) Artículos de higiene'),
(191, 99, 9, 909, 'i) Entretenimiento (música, tv, videojuegos, jugue'),
(192, 99, 10, 1003, 'c) 6 a 2 horas a la semana'),
(193, 99, 11, 1105, 'e) 7,500 - 10,000'),
(194, 99, 13, 1301, 'a) Sí'),
(195, 99, 12, 1201, 'a) Físico'),
(196, 99, 14, 1406, 'f) Inmunodeficiencia'),
(197, 99, 14, 1402, 'b) Hipertensión'),
(198, 99, 15, 1503, 'c) Depresión'),
(199, 99, 15, 1507, 'g) Otros no enlistados'),
(200, 99, 16, 1603, 'c) Disminuyó'),
(201, 100, 1, 102, 'b) 6 a 10 veces al mes'),
(202, 100, 2, 206, 'f) E-shop propia de cada marca (Nike, Supreme, Wal'),
(203, 100, 3, 302, 'b) Tarjeta de débito'),
(204, 100, 4, 402, 'b) Comida a domicilio (Rappi, UberEats, etc.)'),
(205, 100, 4, 408, 'h) Herramientas y ferretería'),
(206, 100, 4, 413, 'm) Artí­culos deportivos'),
(207, 100, 5, 502, 'b) 6 a 2 horas al día'),
(208, 100, 6, 602, 'b) 10 a 6 veces al mes'),
(209, 100, 7, 703, 'c) Facebook Marketplace'),
(210, 100, 8, 801, 'a) Tarjeta de crédito'),
(211, 100, 7, 706, 'f) E-shop propia de cada marca (Nike, Supreme, Wal'),
(212, 100, 8, 806, 'f) Transferencia Electrónica'),
(213, 100, 9, 903, 'c) Super a domicilio (víveres)'),
(214, 100, 9, 913, 'm) Artículos deportivos'),
(215, 100, 10, 1002, 'b) 6 a 2 horas al día'),
(216, 100, 11, 1102, 'b) 1,000 - 2,500'),
(217, 100, 12, 1202, 'b) Línea'),
(218, 100, 13, 1302, 'b) No'),
(219, 100, 14, 1404, 'd) Asma'),
(220, 100, 15, 1508, 'h) No me he sentido afectado'),
(221, 100, 15, 1504, 'd) Déficit de atención'),
(222, 100, 16, 1602, 'b) Permaneció igual que antes'),
(223, 101, 1, 105, 'e) No realizaba compras en línea'),
(224, 101, 2, 202, 'b) Amazon'),
(225, 101, 2, 206, 'f) E-shop propia de cada marca (Nike, Supreme, Wal'),
(226, 101, 3, 301, 'a) Tarjeta de crédito'),
(227, 101, 3, 304, 'd) Mercado Pago'),
(228, 101, 3, 306, 'f) Transferencia electrónica'),
(229, 101, 3, 307, 'g) Depósito en tiendas de conveniencia (Oxxo, 7Ele'),
(230, 101, 4, 404, 'd) Muebles y/o electrodomésticos'),
(231, 101, 4, 407, 'g) Computadoras y/o electrónicos'),
(232, 101, 6, 602, 'b) 10 a 6 veces al mes'),
(233, 101, 5, 503, 'c) 6 a 2 horas a la semana'),
(234, 101, 4, 412, 'l) Artículos de higiene'),
(235, 101, 7, 703, 'c) Facebook Marketplace'),
(236, 101, 7, 708, 'h) No realizo compras en línea'),
(237, 101, 8, 804, 'd) Mercado Pago'),
(238, 101, 8, 806, 'f) Transferencia Electrónica'),
(239, 101, 9, 904, 'd) Muebles y/o electrodomésticos'),
(240, 101, 9, 908, 'h) Herramientas y ferretería'),
(241, 101, 9, 913, 'm) Artículos deportivos'),
(242, 101, 10, 1002, 'b) 6 a 2 horas al día'),
(243, 101, 11, 1103, 'c) 2,500 - 5,000'),
(244, 101, 12, 1202, 'b) Línea'),
(245, 101, 14, 1401, 'a) Diabetes'),
(246, 101, 14, 1407, 'g) Hepatitis'),
(247, 101, 15, 1502, 'b) Estrés'),
(248, 101, 15, 1508, 'h) No me he sentido afectado'),
(249, 101, 16, 1602, 'b) Permaneció igual que antes'),
(250, 101, 13, 1301, 'a) Sí'),
(251, 102, 1, 102, 'b) 6 a 10 veces al mes'),
(252, 102, 2, 203, 'c) Facebook Marketplace'),
(253, 102, 2, 206, 'f) E-shop propia de cada marca (Nike, Supreme, Wal'),
(254, 102, 3, 305, 'e) Efectivo'),
(255, 102, 3, 301, 'a) Tarjeta de crédito'),
(256, 102, 4, 404, 'd) Muebles y/o electrodomésticos'),
(257, 102, 4, 409, 'i) Entretenimiento (música, tv, videojuegos, jugue'),
(258, 102, 5, 502, 'b) 6 a 2 horas al día'),
(259, 102, 6, 603, 'c) 5 a 1 vez al mes'),
(260, 102, 7, 706, 'f) E-shop propia de cada marca (Nike, Supreme, Wal'),
(261, 102, 7, 702, 'b) Amazon'),
(262, 102, 8, 808, 'h) Otro'),
(263, 102, 8, 805, 'e) Efectivo'),
(264, 102, 9, 902, 'b) Comida a domicilio (Rappi, UberEats, etc.)'),
(265, 102, 9, 909, 'i) Entretenimiento (música, tv, videojuegos, jugue'),
(266, 102, 9, 914, 'n) No realizaba compras en línea'),
(267, 102, 10, 1004, 'd) Menos de 2 horas a la semana'),
(268, 102, 11, 1102, 'b) 1,000 - 2,500'),
(269, 102, 12, 1202, 'b) Línea'),
(270, 102, 13, 1302, 'b) No'),
(271, 102, 14, 1409, 'i) Ninguna'),
(272, 102, 14, 1405, 'e) Condiciones cardiacas'),
(273, 102, 15, 1501, 'a) Ansiedad'),
(274, 102, 16, 1601, 'a) Aumentó'),
(275, 103, 1, 103, 'c) 1 a 5 veces al mes.'),
(276, 103, 2, 204, 'd) Alibaba / Aliexpress'),
(277, 103, 2, 208, 'h) No realizaba compras en línea'),
(278, 103, 3, 302, 'b) Tarjeta de débito'),
(279, 103, 3, 304, 'd) Mercado Pago'),
(280, 103, 3, 305, 'e) Efectivo'),
(281, 103, 3, 309, 'i) No realizaba compras en línea'),
(282, 103, 4, 405, 'e) Coleccionables'),
(283, 103, 4, 412, 'l) Artículos de higiene'),
(284, 103, 5, 503, 'c) 6 a 2 horas a la semana'),
(285, 103, 6, 602, 'b) 10 a 6 veces al mes'),
(286, 103, 7, 701, 'a) Mercado Libre'),
(287, 103, 7, 703, 'c) Facebook Marketplace'),
(288, 103, 7, 704, 'd) Alibaba / Aliexpress'),
(289, 103, 7, 708, 'h) No realizo compras en línea'),
(290, 103, 8, 802, 'b) Tarjeta de débito'),
(291, 103, 8, 803, 'c) Paypal'),
(292, 103, 8, 809, 'i) No realizo compras en línea'),
(293, 103, 9, 901, 'a) Ropa'),
(294, 103, 9, 910, 'j) Programas o aplicaciones'),
(295, 103, 9, 914, 'n) No realizaba compras en línea'),
(296, 103, 10, 1002, 'b) 6 a 2 horas al día'),
(297, 103, 11, 1105, 'e) 7,500 - 10,000'),
(298, 103, 12, 1202, 'b) Línea'),
(299, 103, 13, 1301, 'a) Sí'),
(300, 103, 14, 1403, 'c) Obesidad'),
(301, 103, 14, 1405, 'e) Condiciones cardiacas'),
(302, 103, 15, 1503, 'c) Depresión'),
(303, 103, 15, 1507, 'g) Otros no enlistados'),
(304, 103, 16, 1601, 'a) Aumentó'),
(305, 104, 1, 102, 'b) 6 a 10 veces al mes'),
(306, 104, 2, 203, 'c) Facebook Marketplace'),
(307, 104, 2, 208, 'h) No realizaba compras en línea'),
(308, 104, 3, 302, 'b) Tarjeta de débito'),
(309, 104, 3, 303, 'c) Paypal'),
(310, 104, 4, 403, 'c) Super a domicilio (víveres)'),
(311, 104, 4, 408, 'h) Herramientas y ferretería'),
(312, 104, 4, 412, 'l) Artículos de higiene'),
(313, 104, 5, 502, 'b) 6 a 2 horas al día'),
(314, 104, 6, 602, 'b) 10 a 6 veces al mes'),
(315, 104, 7, 703, 'c) Facebook Marketplace'),
(316, 104, 7, 706, 'f) E-shop propia de cada marca (Nike, Supreme, Wal'),
(317, 104, 8, 803, 'c) Paypal'),
(318, 104, 8, 809, 'i) No realizo compras en línea'),
(319, 104, 9, 903, 'c) Super a domicilio (víveres)'),
(320, 104, 9, 910, 'j) Programas o aplicaciones'),
(321, 104, 10, 1004, 'd) Menos de 2 horas a la semana'),
(322, 104, 11, 1102, 'b) 1,000 - 2,500'),
(323, 104, 12, 1202, 'b) Línea'),
(324, 104, 13, 1302, 'b) No'),
(325, 104, 14, 1406, 'f) Inmunodeficiencia'),
(326, 104, 15, 1501, 'a) Ansiedad'),
(327, 104, 16, 1602, 'b) Permaneció igual que antes'),
(328, 104, 15, 1507, 'g) Otros no enlistados');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_de_cuenta`
--

CREATE TABLE `tipo_de_cuenta` (
  `idTipo_De_Cuenta` int(11) NOT NULL,
  `Tipo_Cuenta` varchar(45) NOT NULL,
  `Crear_Cuenta` tinyint(4) NOT NULL,
  `Iniciar_Sesion` tinyint(4) NOT NULL,
  `Contestar_Encuesta` tinyint(4) NOT NULL,
  `Ver_Datos` tinyint(4) NOT NULL,
  `Descargar_Datos` tinyint(4) NOT NULL,
  `Ver_Datos_Cliente` tinyint(4) NOT NULL,
  `Descargar_Datos_Cliente` tinyint(4) NOT NULL,
  `Administrar_Cuentas` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tipo_de_cuenta`
--

INSERT INTO `tipo_de_cuenta` (`idTipo_De_Cuenta`, `Tipo_Cuenta`, `Crear_Cuenta`, `Iniciar_Sesion`, `Contestar_Encuesta`, `Ver_Datos`, `Descargar_Datos`, `Ver_Datos_Cliente`, `Descargar_Datos_Cliente`, `Administrar_Cuentas`) VALUES
(1, 'user', 0, 1, 1, 1, 1, 0, 0, 0),
(2, 'client', 0, 1, 0, 1, 1, 1, 1, 0),
(3, 'admin', 1, 1, 0, 1, 1, 1, 1, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cuenta`
--
ALTER TABLE `cuenta`
  ADD PRIMARY KEY (`idCuenta`),
  ADD KEY `fk_idTipo_De_Cuenta_idx` (`idTipo_De_Cuenta`);

--
-- Indices de la tabla `datos_personales`
--
ALTER TABLE `datos_personales`
  ADD PRIMARY KEY (`idDatos_Personales`),
  ADD KEY `fk_idCuenta_idx` (`idCuenta`);

--
-- Indices de la tabla `opciones`
--
ALTER TABLE `opciones`
  ADD PRIMARY KEY (`idOpciones`),
  ADD KEY `fk_idPreguntas_idx` (`idPreguntas`);

--
-- Indices de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  ADD PRIMARY KEY (`idPreguntas`);

--
-- Indices de la tabla `respuestas`
--
ALTER TABLE `respuestas`
  ADD PRIMARY KEY (`idRespuestas`),
  ADD KEY `fk_idCuenta_idx` (`fkCuenta`),
  ADD KEY `fk_idPregunta_idx` (`fkPreguntas`),
  ADD KEY `fk_idOpciones_idx` (`fkOpciones`);

--
-- Indices de la tabla `tipo_de_cuenta`
--
ALTER TABLE `tipo_de_cuenta`
  ADD PRIMARY KEY (`idTipo_De_Cuenta`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cuenta`
--
ALTER TABLE `cuenta`
  MODIFY `idCuenta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;

--
-- AUTO_INCREMENT de la tabla `datos_personales`
--
ALTER TABLE `datos_personales`
  MODIFY `idDatos_Personales` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `opciones`
--
ALTER TABLE `opciones`
  MODIFY `idOpciones` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1604;

--
-- AUTO_INCREMENT de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  MODIFY `idPreguntas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `respuestas`
--
ALTER TABLE `respuestas`
  MODIFY `idRespuestas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=329;

--
-- AUTO_INCREMENT de la tabla `tipo_de_cuenta`
--
ALTER TABLE `tipo_de_cuenta`
  MODIFY `idTipo_De_Cuenta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cuenta`
--
ALTER TABLE `cuenta`
  ADD CONSTRAINT `fk_idTipo_De_Cuenta` FOREIGN KEY (`idTipo_De_Cuenta`) REFERENCES `tipo_de_cuenta` (`idTipo_De_Cuenta`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `datos_personales`
--
ALTER TABLE `datos_personales`
  ADD CONSTRAINT `fk_idCuenta` FOREIGN KEY (`idCuenta`) REFERENCES `cuenta` (`idCuenta`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `opciones`
--
ALTER TABLE `opciones`
  ADD CONSTRAINT `fk_idPreguntas` FOREIGN KEY (`idPreguntas`) REFERENCES `preguntas` (`idPreguntas`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `respuestas`
--
ALTER TABLE `respuestas`
  ADD CONSTRAINT `fkCuenta` FOREIGN KEY (`fkCuenta`) REFERENCES `cuenta` (`idCuenta`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fkOpciones` FOREIGN KEY (`fkOpciones`) REFERENCES `opciones` (`idOpciones`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fkPregunta` FOREIGN KEY (`fkPreguntas`) REFERENCES `preguntas` (`idPreguntas`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
