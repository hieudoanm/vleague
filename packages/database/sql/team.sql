DROP TABLE IF EXISTS vleague.team;

CREATE TABLE vleague.team (
    team_id varchar(100) UNIQUE PRIMARY KEY,
    -- Name
    name varchar(100) DEFAULT '',
    full_name varchar(100) DEFAULT '',
    -- Place
    stadium varchar(100) DEFAULT '',
    province varchar(100) DEFAULT '',
    -- Leader
    chairman varchar(100) DEFAULT '',
    manager varchar(100) DEFAULT '',
    -- Info
    founded varchar(100) DEFAULT '',
    active boolean DEFAULT false,
    -- Competition
    tier varchar(100) DEFAULT ''
);
