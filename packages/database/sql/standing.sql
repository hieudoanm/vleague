DROP TABLE IF EXISTS vleague.standing;

CREATE TABLE vleague.standing (
    standing_id VARCHAR(100) UNIQUE PRIMARY KEY,
    -- Competion
    competition VARCHAR(100) DEFAULT '',
    competition_tier VARCHAR(100) DEFAULT '',
    -- Position
    season INT DEFAULT 0,
    position INT DEFAULT 0,
    -- Team
    team_id VARCHAR(100) DEFAULT '',
    team VARCHAR(100) DEFAULT '',
    -- Points
    played INT DEFAULT 0,
    points INT DEFAULT 0,
    -- Results
    won INT DEFAULT 0,
    drawn INT DEFAULT 0,
    lost INT DEFAULT 0,
    -- Goals
    goals INT DEFAULT 0,
    goals_against INT DEFAULT 0,
    goals_difference INT DEFAULT 0,
    -- Cards
    yellow_cards INT DEFAULT 0,
    red_cards INT DEFAULT 0,
    -- Note
    note VARCHAR(100) DEFAULT ''
);
