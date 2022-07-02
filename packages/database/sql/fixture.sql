DROP TABLE IF EXISTS vleague.fixture;

CREATE TABLE vleague.fixture (
    fixture_id varchar(100) UNIQUE PRIMARY KEY,
    -- Competition
    competition varchar(100) NOT NULL,
    competition_tier varchar(100) NOT NULL,
    -- Info
    season int DEFAULT 0,
    round varchar(100) DEFAULT '',
    status varchar(100) DEFAULT '',
      -- Time and Place
    date varchar(100) DEFAULT '',
    time varchar(100) DEFAULT '',
    stadium varchar(100) DEFAULT '',
    -- Home
    home_id varchar(100) DEFAULT '',
    home_team varchar(100) DEFAULT '',
    home_score int DEFAULT 0,
    -- Away
    away_id varchar(100) DEFAULT '',
    away_team varchar(100) DEFAULT '',
    away_score int DEFAULT 0,
    -- Note
    note varchar(100) DEFAULT ''
);
