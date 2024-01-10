USE Co2;

CREATE TABLE IF NOT EXISTS user_inputs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  question_id VARCHAR(255),
  user_input VARCHAR(255), 
  kraftstoffausstoss VARCHAR(255),
  freizeitverbrauch VARCHAR(255),
  wasserverbrauch VARCHAR(255),
  stromverbrauch VARCHAR(255),
  haushaltverbrauch VARCHAR(255)
);
