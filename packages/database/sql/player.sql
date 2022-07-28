DROP TABLE IF EXISTS vleague.player;
CREATE TABLE IF NOT EXISTS vleague.player (
    player_id VARCHAR(100) UNIQUE PRIMARY KEY,
    -- Position
    shirt_number INTEGER DEFAULT 0,
    position VARCHAR(100) DEFAULT '',
    -- Info
    full_name VARCHAR(100) DEFAULT '',
    date_of_birth VARCHAR(100) DEFAULT '',
    -- Team
    team_id VARCHAR(100) DEFAULT '',
    team VARCHAR(100) DEFAULT ''
);
