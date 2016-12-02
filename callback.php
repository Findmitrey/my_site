<?php
if($_GET)
{
    
    require_once "database.php";

    define('MYSQL_TABLE', 'call_back');

    $conn = db_connect();
    insertRequest($conn, $_GET['fname'], $_GET['ftele'], MYSQL_TABLE,'dima','wew');

   

   echo('Скрипт сработал');
}
?>