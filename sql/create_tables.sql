CREATE DATABASE local_db;
USE local_db;

CREATE TABLE team(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    team_name VARCHAR(255) NOT NULL,
    logo TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME,
    deleted_at DATETIME,
    UNIQUE(team_name)
);

CREATE TABLE fixture(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    match_end DATETIME,
    match_start DATETIME, 
    home_team_id INT NOT NULL,
    away_team_id INT NOT NULL,
    home_score INT NOT NULL DEFAULT 0,
    away_score INT NOT NULL DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME,
    deleted_at DATETIME,
    FOREIGN KEY (home_team_id) REFERENCES team(id),
    FOREIGN KEY (away_team_id) REFERENCES team(id)
);