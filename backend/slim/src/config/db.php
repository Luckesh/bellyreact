<?php

class db{
    private $dbhost = 'localhost';
    private $dbuser = 'root';
    private $dbpass = 'luyi14';
    private $dbname = 'boardgames';

    public function connect(){
        $mysql_connect_str = "mysql:host=$this->dbhost;dbname=$this->dbname;charset=utf8";
        $dbConn = new PDO($mysql_connect_str, $this->dbuser,$this->dbpass);
        $dbConn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $dbConn;
    }
}