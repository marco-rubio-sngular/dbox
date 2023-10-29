DROP DATABASE IF EXISTS `dbox`;
CREATE DATABASE `dbox` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;

GRANT ALL PRIVILEGES ON `dbox`.* TO `dbox`@localhost IDENTIFIED BY  'dbox' WITH GRANT OPTION;
GRANT ALL PRIVILEGES ON `dbox`.* TO `dbox`@'%' IDENTIFIED BY  'dbox' WITH GRANT OPTION;
FLUSH PRIVILEGES;

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

use `dbox`;
SET FOREIGN_KEY_CHECKS=0;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

-- phpMyAdmin SQL Dump
-- version 4.6.6deb1+deb.cihar.com~xenial.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 09-08-2018 a las 14:22:11
-- Versión del servidor: 5.7.23-0ubuntu0.16.04.1
-- Versión de PHP: 7.1.18-1+ubuntu16.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de datos: `dbox`
--
DROP TABLE IF EXISTS `faqs`;


CREATE TABLE
  `faqs` (
    `id` varchar(36) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Primary Key',
    `createdAt` datetime DEFAULT NULL COMMENT 'Create Time',
    `title` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Faq short title',
    `solution` text COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Faq long Solution',
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_unicode_ci COMMENT = 'faqs';
--
--
--
SET FOREIGN_KEY_CHECKS=1;
