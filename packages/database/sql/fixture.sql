DROP TABLE IF EXISTS vleague.fixture;
CREATE TABLE vleague.fixture (
    fixture_id VARCHAR(100) UNIQUE PRIMARY KEY,
    -- Competition
    competition VARCHAR(100) NOT NULL,
    competition_tier VARCHAR(100) NOT NULL,
    -- Info
    season INTEGER DEFAULT 0,
    round VARCHAR(100) DEFAULT '',
    status VARCHAR(100) DEFAULT '',
      -- Time and Place
    date VARCHAR(100) DEFAULT '',
    time VARCHAR(100) DEFAULT '',
    stadium VARCHAR(100) DEFAULT '',
    -- Home
    home_id VARCHAR(100) DEFAULT '',
    home_team VARCHAR(100) DEFAULT '',
    home_score INTEGER DEFAULT 0,
    -- Away
    away_id VARCHAR(100) DEFAULT '',
    away_team VARCHAR(100) DEFAULT '',
    away_score INTEGER DEFAULT 0,
    -- Note
    note VARCHAR(100) DEFAULT ''
);
