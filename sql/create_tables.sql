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
    match_start DATETIME, 
    match_end DATETIME,
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

-- insert team names
INSERT INTO team (team_name,logo) VALUES
	 ('Crystal Palace','https://res.cloudinary.com/dalyllfn0/image/upload/w_1024,h_1024,c_lpad/v1669089650/zuju/crystal_palace_j32gnn.png'),
	 ('Wolverhampton Wanderers','https://res.cloudinary.com/dalyllfn0/image/upload/h_1024,w_1024,c_lpad/v1669089699/zuju/Wolverhampton_Wanderers_ljippk.png'),
	 ('Manchester United','https://res.cloudinary.com/dalyllfn0/image/upload/w_1024,h_1024,c_lpad/v1669138791/zuju/Manchester_United_FC_crest_rmddze.pngg'),
	 ('Chelsea','https://res.cloudinary.com/dalyllfn0/image/upload/w_1024,h_1024,c_lpad/v1669138791/zuju/Chelsea_FC_vx1as4.png'),
	 ('Arsenal','https://res.cloudinary.com/dalyllfn0/image/upload/w_1024,h_1024,c_lpad/v1669138791/zuju/Arsenal_FC_qiccna.png'),
	 ('Tottenham','https://res.cloudinary.com/dalyllfn0/image/upload/w_1024,h_1024,c_lpad/v1669138791/zuju/Tottenham_Hotspur_zxpubn.png');

INSERT INTO fixture (match_start,match_end,home_team_id,away_team_id) VALUES
	 ('2022-12-01 12:00:00','2022-12-01 14:30:00',1,2),
	 ('2022-12-01 15:00:00','2022-12-01 17:30:00',2,3),
	 ('2022-12-02 12:00:00','2022-12-02 14:30:00',3,4),
	 ('2022-12-02 15:00:00','2022-12-02 17:30:00',4,5),
	 ('2022-12-03 12:00:00','2022-12-01 14:30:00',5,6),
	 ('2022-12-04 12:00:00','2022-12-04 14:30:00',1,3),
	 ('2022-12-04 15:00:00','2022-12-04 17:30:00',2,4),
	 ('2022-12-05 12:00:00','2022-12-05 14:30:00',3,5),
	 ('2022-12-05 15:00:00','2022-12-05 17:30:00',4,6),
	 ('2022-12-06 12:00:00','2022-12-06 14:30:00',5,1),
	 ('2022-12-06 15:00:00','2022-12-06 17:30:00',6,2),
	 ('2022-12-07 12:00:00','2022-12-07 14:30:00',1,4),
	 ('2022-12-07 15:00:00','2022-12-07 17:30:00',2,5),
	 ('2022-12-08 12:00:00','2022-12-08 14:30:00',3,6),
	 ('2022-12-08 15:00:00','2022-12-08 17:30:00',4,1),
	 ('2022-12-09 12:00:00','2022-12-09 14:30:00',5,3),
	 ('2022-12-09 13:00:00','2022-12-09 17:30:00',6,3);