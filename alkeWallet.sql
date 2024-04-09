use alkeWallet;

create table USUARIO(
idUsuario varchar(10) not null,
nombre varchar(20),
email varchar(50),
contrasena varchar(10),
saldo int,
primary key (idUsuario)
);



create table MONEDA(
idMoneda varchar(10) not null,
nombre varchar(10),
simbolo varchar(4),
primary key (idMoneda)
);

create table TRANSACCION(
idTransaccion varchar(10) not null,
importe int,
fecha date,
FK_envia varchar(10),
FK_recibe varchar(10),
FK_moneda varchar(10),
primary key (idTransaccion),
foreign key (FK_envia) references usuario(idUsuario),
foreign key (FK_recibe) references usuario(idUsuario)
);

alter table transaccion
add foreign key (FK_moneda) references moneda(idMoneda);

insert into moneda (idMoneda, nombre, simbolo) values
('1', 'CLP', '$'),
('2', 'EURO', '€'),
('3', 'USD', '$'),
('4', 'GBP', '£');

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES ('1',' Juan Perez','jperez@gmail.com','psw1',100000),('10',' Isabel Castro','isabel@example.com','psw10',2800000),('2',' MarÂ¡a Lopez','maria.lopez@hotmail.com','psw2',25000),('3',' Pedro Gonzalez','p.gonzalez@gmail.com','psw3',500000),('4',' Ana Torres','atorres@hotmail.com','psw4',350000),('5',' Luis Ramirez','luis@example.com','psw5',200000),('6',' Laura Herrera','laura@gmail.com','psw6',1800000),('7',' Carlos Sanchez','carlos@example.com','psw7',420000),('8','SofÂ¡a Vargas','sofia.vargas@gmail.com','psw8',1500000),('9',' Javier Mendoza','javier@example.com','psw9',30000);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

LOCK TABLES `transaccion` WRITE;
/*!40000 ALTER TABLE `transaccion` DISABLE KEYS */;
INSERT INTO `transaccion` VALUES ('1',50000,'2024-03-01','2','1','1'),('10',60000,'2024-03-24','8','6','2'),('2',100000,'2024-03-03','3','5','2'),('3',20000,'2024-03-05','6','4','3'),('4',15000,'2024-03-07','9','7','4'),('5',80000,'2024-03-09','10','8','1'),('6',30000,'2024-03-12','1','3','2'),('7',12000,'2024-03-15','5','9','3'),('8',40000,'2024-03-18','7','2','4'),('9',10000,'2024-03-21','4','10','1');
/*!40000 ALTER TABLE `transaccion` ENABLE KEYS */;
UNLOCK TABLES;

select *
from moneda;

select *
from usuario;

select *
from transaccion;

select usuario.nombre, moneda.nombre
FROM moneda
JOIN usuario ON usuario.idUsuario = 2
WHERE usuario.idUsuario = moneda.idMoneda;

select *
from transaccion;

select *
from transaccion
where FK_envia=3 or FK_recibe=3;

select *
from transaccion
where transaccion.FK_envia= 9 or
transaccion.FK_recibe= 9;

update usuario
set email='p.gonzalez@gmail.com'
where usuario.idUsuario=3;

delete from transaccion
where transaccion.idTransaccion=10;



