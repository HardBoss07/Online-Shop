CREATE DATABASE IF NOT EXISTS `online_shop` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `online_shop`;

-- Table structure for table `product`
DROP TABLE IF EXISTS `product`;

CREATE TABLE `product` (
                           `id` bigint NOT NULL AUTO_INCREMENT,
                           `name` varchar(255) NOT NULL,
                           `category` enum('Electronics','Smartphone','Audio','Laptop','Peripherals') NOT NULL,
                           `price` int DEFAULT NULL,
                           `stock` int NOT NULL,
                           `description` varchar(255) NOT NULL,
                           `image_url` varchar(255) NOT NULL,
                           PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table `product`
INSERT INTO `product` VALUES (1,'Samsung Galaxy S24+','Smartphone',830,200,'256 GB, Onyx Black, 6.70\", SIM + eSIM, 50 MP, 5G','/static/ProductImages/SamsungGalaxyS24+/'),
                             (2,'Apple iPhone 16 Pro Max','Smartphone',1170,300,'256 GB, Black Titanium, 6.90\", SIM + eSIM, 48 MP, 5G','/static/ProductImages/AppleiPhone16ProMax/'),
                             (3,'Bose QuietComfort Ultra','Audio',300,100,'ANC, 18 hours, Wireless, Wired','/static/ProductImages/BoseQuietComfortUltra/'),
                             (4,'Apple HomePod 2nd Gen.','Audio',290,50,'Apple Siri Integration','/static/ProductImages/AppleHomePod2ndGen/'),
                             (5,'Apple MacBook Pro 14 - 2024','Laptop',2280,150,'14.20\", M4 Pro, 24 GB, 1000 GB, CH','/static/ProductImages/AppleMacBookPro14-2024/'),
                             (6,'Lenovo ThinkPad E16 Gen 2','Laptop',1280,250,'16\", Intel Core Ultra 7 155H, 32 GB, 1000 GB, CH','/static/ProductImages/LenovoThinkPadE16Gen2/'),
                             (7,'Logitech Pro X 60','Peripherals',160,200,'CH, Wireless','/static/ProductImages/LogitechProX60/'),
                             (8,'Logitech G Pro X Superlight 2','Peripherals',130,200,'Wireless, Wired','/static/ProductImages/LogitechGProXSuperlight2/');