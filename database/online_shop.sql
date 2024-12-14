CREATE DATABASE IF NOT EXISTS `online_shop` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `online_shop`;

-- Table structure for table `product`
DROP TABLE IF EXISTS `product`;

CREATE TABLE `product` (
                           `id` bigint NOT NULL AUTO_INCREMENT,
                           `name` varchar(255) NOT NULL,
                           `category` enum('Electronics','Clothing','Groceries','Books','Furniture') NOT NULL,
                           `price` int DEFAULT NULL,
                           `stock` int NOT NULL,
                           `image_url` varchar(255) DEFAULT NULL,
                           PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table `product`
INSERT INTO `product` VALUES
                          (1, 'Smartphone', 'Electronics', 700, 50, '/static/ProductImages/smartphone.png'),
                          (2, 'Laptop', 'Electronics', 1200, 30, '/static/ProductImages/laptop.png'),
                          (3, 'T-shirt', 'Clothing', 20, 150, '/static/ProductImages/tshirt.png'),
                          (4, 'Jeans', 'Clothing', 40, 100, '/static/ProductImages/jeans.png'),
                          (5, 'Apple', 'Groceries', 2, 500, '/static/ProductImages/apple.png'),
                          (6, 'Dining Table', 'Furniture', 300, 20, '/static/ProductImages/diningtable.png'),
                          (7, 'Bookshelf', 'Furniture', 150, 10, '/static/ProductImages/bookshelf.png'),
                          (8, 'Novel', 'Books', 15, 75, '/static/ProductImages/novel.png'),
                          (9, 'Headphones', 'Electronics', 100, 60, '/static/ProductImages/headphones.png'),
                          (10, 'Coffee Table', 'Furniture', 250, 15, '/static/ProductImages/coffeetable.png');
