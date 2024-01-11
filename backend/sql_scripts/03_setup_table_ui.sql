USE Co2;

CREATE TABLE IF NOT EXISTS co2endberechnung (
  user_id INT, 
  id INT AUTO_INCREMENT PRIMARY KEY,
  verkehresmittel INT,
  ernaehrung INT, 
  freizeitverbrauch INT,
  wasserverbrauch INT,
  haushaltverbrauch INT,
  gesamtverbrauch INT,
  FOREIGN KEY (user_id) REFERENCES users(user_id) 
);
