# Gerchik-Co
Just a simple web app with PHP, MySQL, JQUERY, HTML, CSS, BOOTSTRAP, AJAX

ТЗ PHP

Форма добавления нового пользователя (users) with ajax
Форма добавления нового счета (accounts)

Вывод на странице всех пользователей и их счетов

Name Email Address accounts Date added

User 1 1@test.com USA 1 2016-08-01
User 2 2@test.com Europe 98 2016-08-01
User 3 3@test.biz Africa 2 2016-08-01

Желательно использовать php OOP MySQL jQuery

CREATE TABLE IF NOT EXISTS `users` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`usr_name` varchar(256) NOT NULL,
`usr_email` varchar(256) NOT NULL,
`usr_address` varchar(256) NOT NULL,
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

CREATE TABLE IF NOT EXISTS `accounts` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`account` int(11) NOT NULL,
`user_id` int(11) NOT NULL,
`added` datetime NOT NULL,
PRIMARY KEY (`id`),
FOREIGN KEY (user_id)
REFERENCES users(id)
) ENGINE=
