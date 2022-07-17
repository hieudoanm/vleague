DROP TABLE IF EXISTS vleague.standing;
CREATE TABLE vleague.standing (
    standing_id VARCHAR(100) UNIQUE PRIMARY KEY,
    -- Competion
    competition VARCHAR(100) DEFAULT '',
    competition_tier VARCHAR(100) DEFAULT '',
    -- Position
    season INTEGER DEFAULT 0,
    position INTEGER DEFAULT 0,
    -- Team
    team_id VARCHAR(100) DEFAULT '',
    team VARCHAR(100) DEFAULT '',
    -- Points
    played INTEGER DEFAULT 0,
    points INTEGER DEFAULT 0,
    -- Results
    won INTEGER DEFAULT 0,
    drawn INTEGER DEFAULT 0,
    lost INTEGER DEFAULT 0,
    -- Goals
    goals INTEGER DEFAULT 0,
    goals_against INTEGER DEFAULT 0,
    goals_difference INTEGER DEFAULT 0,
    -- Cards
    yellow_cards INTEGER DEFAULT 0,
    red_cards INTEGER DEFAULT 0,
    -- Note
    note VARCHAR(100) DEFAULT ''
);
