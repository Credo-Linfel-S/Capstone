-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 14, 2025 at 03:19 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `barangay3_capstone`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins_account`
--

CREATE TABLE `admins_account` (
  `admin_id` int(11) NOT NULL,
  `admins_password` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admins_account`
--

INSERT INTO `admins_account` (`admin_id`, `admins_password`) VALUES
(1, 'linfel');

-- --------------------------------------------------------

--
-- Table structure for table `barangay3_events`
--

CREATE TABLE `barangay3_events` (
  `eventid` int(11) NOT NULL,
  `eventname` varchar(10000) NOT NULL,
  `Date` date DEFAULT NULL,
  `eventmessage` varchar(1000) DEFAULT NULL,
  `eventimage` varchar(2000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `barangay3_events`
--

INSERT INTO `barangay3_events` (`eventid`, `eventname`, `Date`, `eventmessage`, `eventimage`) VALUES
(18, 'dsdsd', '2025-01-23', 'sdds', 'uploads/678436a41d4f5_img_6783a7950eb373.53422321.png'),
(19, 'assss', '2025-01-21', 'sasa', 'uploads/6784379b1c940_aalogo.png'),
(20, 'vvvf', '2025-01-07', 'vccvvcv', 'uploads/67855d43603db_code3.png');

-- --------------------------------------------------------

--
-- Table structure for table `customer_service`
--

CREATE TABLE `customer_service` (
  `Customer_service_id` int(11) NOT NULL,
  `Regid` int(11) DEFAULT NULL,
  `username` varchar(1000) NOT NULL,
  `email` varchar(1000) NOT NULL,
  `Phone_number` int(11) NOT NULL,
  `user_message` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customer_service`
--

INSERT INTO `customer_service` (`Customer_service_id`, `Regid`, `username`, `email`, `Phone_number`, `user_message`) VALUES
(2, 66, 'linelcredo', '4444444444444', 0, 'SDSDSS');

-- --------------------------------------------------------

--
-- Table structure for table `users_account`
--

CREATE TABLE `users_account` (
  `Regid` int(11) NOT NULL,
  `username` varchar(1000) NOT NULL,
  `age` int(11) NOT NULL,
  `user_Location` varchar(1000) NOT NULL,
  `Phone_number` int(11) NOT NULL,
  `loginEmail` varchar(255) NOT NULL,
  `loginPassword` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users_account`
--

INSERT INTO `users_account` (`Regid`, `username`, `age`, `user_Location`, `Phone_number`, `loginEmail`, `loginPassword`) VALUES
(66, 'linelcredo', 12222, 'eweewwe', 333333, 'cre@gmail.com', '$2y$10$PGXFONMqHgntfgu4ywkGZOHKhSXbmajIj9qLttj7HQ1793bFv9aXy');

-- --------------------------------------------------------

--
-- Table structure for table `user_request`
--

CREATE TABLE `user_request` (
  `Reqid` int(11) NOT NULL,
  `Regid` int(11) NOT NULL,
  `username` varchar(1000) NOT NULL,
  `Date` date NOT NULL,
  `Phone_number` int(11) NOT NULL,
  `request` varchar(3000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_request`
--

INSERT INTO `user_request` (`Reqid`, `Regid`, `username`, `Date`, `Phone_number`, `request`) VALUES
(100000006, 66, 'linelcredo', '2025-01-17', 333333, 'stage'),
(100000007, 66, 'linelcredo', '2025-01-17', 333333, 'stage'),
(100000008, 66, 'linelcredo', '2025-01-02', 333333, 'stage'),
(100000009, 66, 'linelcredo', '2025-01-16', 333333, 'basketball'),
(100000010, 66, 'linelcredo', '2025-01-01', 333333, 'basketball'),
(100000011, 66, 'linelcredo', '2025-01-02', 333333, 'basketball'),
(100000012, 66, 'linelcredo', '2025-01-16', 333333, 'volleyball'),
(100000013, 66, 'linelcredo', '2025-01-08', 333333, 'basketball'),
(100000014, 66, 'linelcredos', '2025-01-10', 333333, 'court'),
(100000015, 66, 'linelcredo', '2025-01-03', 955555, 'court'),
(100000016, 66, 'linelcredo', '2025-01-07', 9999999, 'stage');

-- --------------------------------------------------------

--
-- Table structure for table `user_service`
--

CREATE TABLE `user_service` (
  `Service_id` int(11) NOT NULL,
  `Regid` int(11) DEFAULT NULL,
  `service` varchar(1000) NOT NULL,
  `username` varchar(1000) NOT NULL,
  `age` int(11) NOT NULL,
  `Location` mediumtext NOT NULL,
  `Phone_number` int(11) NOT NULL,
  `email` varchar(1000) NOT NULL,
  `Date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_service`
--

INSERT INTO `user_service` (`Service_id`, `Regid`, `service`, `username`, `age`, `Location`, `Phone_number`, `email`, `Date`) VALUES
(3, 66, 'Barangay Certification for Livelihood Activities', 'linelcredo', 123, '111', 333333, 'credolinfel329@gmail.com', '2024-12-31'),
(4, 66, 'barangay clearance', 'linelcredo', 12222, 'sihayon tagoloan', 333333, 'credolinfel@gmail.com', '2025-01-22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins_account`
--
ALTER TABLE `admins_account`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `barangay3_events`
--
ALTER TABLE `barangay3_events`
  ADD PRIMARY KEY (`eventid`);

--
-- Indexes for table `customer_service`
--
ALTER TABLE `customer_service`
  ADD PRIMARY KEY (`Customer_service_id`),
  ADD KEY `fk_customer_service_Regid` (`Regid`);

--
-- Indexes for table `users_account`
--
ALTER TABLE `users_account`
  ADD PRIMARY KEY (`Regid`),
  ADD UNIQUE KEY `email` (`loginEmail`);

--
-- Indexes for table `user_request`
--
ALTER TABLE `user_request`
  ADD PRIMARY KEY (`Reqid`),
  ADD KEY `Regid` (`Regid`);

--
-- Indexes for table `user_service`
--
ALTER TABLE `user_service`
  ADD PRIMARY KEY (`Service_id`),
  ADD KEY `fk_Regid` (`Regid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins_account`
--
ALTER TABLE `admins_account`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `barangay3_events`
--
ALTER TABLE `barangay3_events`
  MODIFY `eventid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `customer_service`
--
ALTER TABLE `customer_service`
  MODIFY `Customer_service_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users_account`
--
ALTER TABLE `users_account`
  MODIFY `Regid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `user_request`
--
ALTER TABLE `user_request`
  MODIFY `Reqid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100000017;

--
-- AUTO_INCREMENT for table `user_service`
--
ALTER TABLE `user_service`
  MODIFY `Service_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `customer_service`
--
ALTER TABLE `customer_service`
  ADD CONSTRAINT `fk_customer_service_Regid` FOREIGN KEY (`Regid`) REFERENCES `users_account` (`Regid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_request`
--
ALTER TABLE `user_request`
  ADD CONSTRAINT `fk_Reg_id` FOREIGN KEY (`Regid`) REFERENCES `users_account` (`Regid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_service`
--
ALTER TABLE `user_service`
  ADD CONSTRAINT `fk_Regid` FOREIGN KEY (`Regid`) REFERENCES `users_account` (`Regid`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
