
CREATE TABLE user_book (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(500) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    rol VARCHAR(255) DEFAULT 'user',
    isVerified BOOLEAN ,  
    deletedAt DATETIME,
    PRIMARY KEY (id),
    UNIQUE KEY email (email)
);