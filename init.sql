-- 1. Crear la base de datos
CREATE SCHEMA IF NOT EXISTS bd_aqui;
USE bd_aqui;

-- 2. Crear la tabla person
CREATE TABLE IF NOT EXISTS person (
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    fechaNacimiento DATE,
    puesto VARCHAR(100),
    sueldo DECIMAL(10, 2),
    PRIMARY KEY (id)
) ENGINE=InnoDB;

-- 3. Crear el usuario y asignar permisos
CREATE USER IF NOT EXISTS 'conexion'@'%' IDENTIFIED BY 'Conexion123';
GRANT ALL PRIVILEGES ON bd_aqui.* TO 'conexion'@'%';

-- Refrescar privilegios
FLUSH PRIVILEGES;