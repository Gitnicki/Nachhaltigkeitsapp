USE Co2;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    benutzername VARCHAR(255) NOT NULL,
    passwort VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);

-- CREATE TABLE IF NOT EXISTS abdruck (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     user_id INT,
--     kraftstoffausstoß INT,
--     freizeitverbrauch INT,  
--     wasserverbrauch INT,
--     stromverbrauch INT,
--     haushaltverbrauch INT,
--     FOREIGN KEY (user_id) REFERENCES users(id) 
-- );