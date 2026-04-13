-- 1. Crear la base de datos
CREATE SCHEMA IF NOT EXISTS bd_aqui;
USE bd_aqui;

-- 2. Crear la tabla person
CREATE TABLE person (
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    fechaNacimiento DATE,
    puesto VARCHAR(100),
    sueldo DECIMAL(10, 2),
    PRIMARY KEY (id)
) ENGINE=InnoDB;

-- 3. Crear el usuario y asignar permisos
CREATE USER 'conexion'@'localhost' IDENTIFIED BY '_______';

-- Otorgar todos los privilegios sobre la base de datos específica
GRANT ALL PRIVILEGES ON bd_aqui.* TO 'conexion'@'localhost';

-- Refrescar privilegios
FLUSH PRIVILEGES;
