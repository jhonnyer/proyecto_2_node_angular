CREATE DATABASE ng_games_db;

use ng_games_db;

CREATE TABLE game(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    descripcion VARCHAR (255),
    image VARCHAR(200),
    create_ad TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Renombrar tabla 
-- RENAME TABLE game to games;

-- Ver como luce la tabla 
DESCRIBE game;