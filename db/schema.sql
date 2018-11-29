CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT(5) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(100) NOT NULL, 
    devoured BOOLEAN NOT NULL DEFAULT false,
    primary key (id)
);