DROP TABLE IF EXISTS vleague.team;
CREATE TABLE vleague.team (
    team_id VARCHAR(100) UNIQUE PRIMARY KEY,
    -- Name
    name VARCHAR(100) DEFAULT '',
    full_name VARCHAR(100) DEFAULT '',
    -- Place
    stadium VARCHAR(100) DEFAULT '',
    province VARCHAR(100) DEFAULT '',
    -- Leader
    chairman VARCHAR(100) DEFAULT '',
    manager VARCHAR(100) DEFAULT '',
    -- Info
    founded VARCHAR(100) DEFAULT '',
    active BOOLEAN DEFAULT false,
    -- Competition
    tier VARCHAR(100) DEFAULT ''
);
