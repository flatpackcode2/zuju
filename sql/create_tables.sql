CREATE DATABASE local_db;
USE local_db;

CREATE TABLE team(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    logo TEXT,
    UNIQUE(name)
);

CREATE TABLE fixture(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    team_name TIMESTAMP NOT NULL,
    match_end TIMESTAMP NOT NULL,
    home_team_id INT NOT NULL,
    away_team_id INT NOT NULL,
    home_score INT NOT NULL DEFAULT 0,
    away_score INT NOT NULL DEFAULT 0,
    FOREIGN KEY (home_team_id) REFERENCES team(id),
    FOREIGN KEY (away_team_id) REFERENCES team(id)
);