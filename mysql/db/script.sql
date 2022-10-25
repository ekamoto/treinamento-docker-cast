-- scripts para criar o banco de dados
USE sisaud-db;

CREATE TABLE Usuario (
    id int,
    nome varchar(255),
    email varchar(255)
);

INSERT INTO Usuario
(id, nome, email)
values
(1, 'leandro', 'ekamoto.leandro@gmail.com'),
(2, 'Jovem', 'jovem@gmail.com'),
(3, 'Cide', 'cide@htomail.com');
