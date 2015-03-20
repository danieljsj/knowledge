#!/bin/bash

mysql -u root -p << EOF

CREATE DATABASE knowledge;
CREATE USER knowledge@localhost IDENTIFIED BY '284ssj0932';
GRANT ALL PRIVILEGES ON knowledge.* TO knowledge@localhost;

EOF