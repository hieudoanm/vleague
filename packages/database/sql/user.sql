DROP TABLE IF EXISTS vleague.user;

CREATE TABLE vleague.user (
    email varchar(100) UNIQUE PRIMARY KEY,
    key varchar(100) NOT NULL
);
