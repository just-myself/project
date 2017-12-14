SET NAMES UTF8;
DROP DATABASE IF EXISTS lb_pic;
CREATE DATABASE lb_pic;
USE lb_pic;
CREATE TABLE pic_detail(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    pic VARCHAR(100)
);
INSERT INTO pic_detail VALUES(NULL,"img/banner1.png");
INSERT INTO pic_detail VALUES(NULL,"img/banner2.png");
INSERT INTO pic_detail VALUES(NULL,"img/banner3.png");
INSERT INTO pic_detail VALUES(NULL,"img/banner4.png");