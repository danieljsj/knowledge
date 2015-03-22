#!/bin/bash
mysql -u knowledge -p284ssj0932 << EOF

	USE knowledge;
	CREATE TABLE units (
		id INT(9) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
		x INT(9) NOT NULL,
		y INT(9) NOT NULL
		);

EOF