
CREATE TABLE user_book (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(500) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telefono  VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    rol VARCHAR(255) DEFAULT 'user',
    isVerified BOOLEAN ,  
    deletedAt DATETIME,
    PRIMARY KEY (id),
    UNIQUE KEY email (email)
);

CREATE TABLE category_book  (
    id int NOT NULL AUTO_INCREMENT,
	name varchar(100) NOT NULL,
	description text NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY name (name)
);

CREATE TABLE stark_book  (
    id int NOT NULL AUTO_INCREMENT,
	name varchar(100) NOT NULL,
    categories VARCHAR(100) NOT NULL,
	description text NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    linkCompra VARCHAR(255),
    linkLeer VARCHAR(255),
    linkEscuchar VARCHAR(255),
    linkImagen VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY name (name)
);