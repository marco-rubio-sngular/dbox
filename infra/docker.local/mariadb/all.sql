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


DROP TABLE IF EXISTS `modules`;
CREATE TABLE
  `modules` (
    `id` varchar(36) COLLATE utf8_unicode_ci NOT NULL UNIQUE COMMENT 'Primary Key',
    `createdAt` datetime DEFAULT NULL COMMENT 'Create Time',
    `title` varchar(100) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Module short title',
    `description` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Module long Solution',
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_unicode_ci COMMENT = 'modules';

DROP TABLE IF EXISTS `modules_files`;
CREATE TABLE
  `modules_files` (
    `id` varchar(36) COLLATE utf8_unicode_ci NOT NULL UNIQUE COMMENT 'Primary Key',
    `moduleId` varchar(36) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Relation Key',
    `createdAt` datetime DEFAULT NULL COMMENT 'Create Time',
    `title` varchar(100) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Module short title',
    `description` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Module long Solution',
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_unicode_ci COMMENT = 'modules_files';


DROP TABLE IF EXISTS `faqs`;
CREATE TABLE
  `faqs` (
    `id` varchar(36) COLLATE utf8_unicode_ci NOT NULL UNIQUE COMMENT 'Primary Key',
    `createdAt` datetime DEFAULT NULL COMMENT 'Create Time',
    `title` varchar(150) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Faq short title',
    `solution` text COLLATE utf8_unicode_ci NOT NULL COMMENT 'Faq long Solution',
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_unicode_ci COMMENT = 'faqs';


DROP TABLE IF EXISTS `tags`;
CREATE TABLE
  `tags` (
    `id` varchar(36) COLLATE utf8_unicode_ci NOT NULL UNIQUE COMMENT 'Primary Key',
    `createdAt` datetime DEFAULT NULL COMMENT 'Create Time',
    `title` varchar(25) COLLATE utf8_unicode_ci NOT NULL UNIQUE COMMENT 'Tag name',
    `value` VARCHAR(50) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Tag value meaning',
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_unicode_ci COMMENT = 'tags';



SET FOREIGN_KEY_CHECKS=1;
