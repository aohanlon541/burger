CREATE DATABASE burger_db;

CREATE TABLE burgers (
   id INTEGER(11) AUTO_INCREMENT NOT NULL,
   burger_name VARCHAR(30) NOT NULL,
   devoured BOOLEAN NOT NULL,
   date_time TIMESTAMP,
   PRIMARY KEY (id)
);
