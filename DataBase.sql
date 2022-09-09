create TABLE setter (
    id SERIAL PRIMARY KEY,
    discordTag CHARACTER VARYING(30)
);
create TABLE test (
    Id SERIAL PRIMARY KEY,
    task text, 
    link character(256),
    deadline date,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES setter (id) 
);
create TABLE postOS (
    Id SERIAL PRIMARY KEY,
    task text, 
    link character(256),
    deadline date,
    discordTag CHARACTER VARYING(30)
    FOREIGN KEY (Id) REFERENCES setter (Id)
);
