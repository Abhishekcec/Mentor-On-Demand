-- MySQL dump 10.13  Distrib 5.7.12, for Win32 (AMD64)
--
-- Host: localhost    Database: testdb
-- ------------------------------------------------------
-- Server version	5.7.26-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `mentor`
--

DROP TABLE IF EXISTS `mentor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mentor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `active` bit(1) DEFAULT NULL,
  `confirmed_signup` bit(1) DEFAULT NULL,
  `contact_number` bigint(20) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `linkedin_url` varchar(255) DEFAULT NULL,
  `mentor_profile` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `reg_code` varchar(255) DEFAULT NULL,
  `reset_password` bit(1) DEFAULT NULL,
  `reset_password_date` datetime DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `time_zone` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `years_of_experience` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mentor`
--

LOCK TABLES `mentor` WRITE;
/*!40000 ALTER TABLE `mentor` DISABLE KEYS */;
INSERT INTO `mentor` VALUES (1,NULL,NULL,9849850688,'govind@gmail.com','govind','rana','gvd@linkedin.in','Mentor','1234',7,'01',NULL,NULL,'Mentor','9 to 6','govind',3),(2,NULL,NULL,9485784789,'nikhil@gmail.com','nikhil','misra','nkl@linkedin.in','Mentor','abcd',8,'02',NULL,NULL,'Mentor','10 to 5','nikhil',2),(3,NULL,NULL,9447585874,'Deepk@gmail.com','Deepak','singh','dpk2linkedin.in','Mentor','1234',7,'03',NULL,NULL,'Mentor','9 to 4','deepak',3),(4,NULL,NULL,9438473889,'swp@gmail.com','swapnil','mehta','swp@linkedin.in','Mentor','abcd',7,'04',NULL,NULL,'Mentor','10 to 6','swapnil',2),(5,NULL,NULL,9948934899,'chn@gmail.com','chinmay','rathod','chn@linkedin.in','Mentor','1234',8,'05',NULL,NULL,'Mentor','8 to 5','chinmay',2);
/*!40000 ALTER TABLE `mentor` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-10 17:08:50
