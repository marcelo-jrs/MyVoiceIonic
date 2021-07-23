<?php
$conexao = new PDO("mysql:host=localhost;dbname=projeto","root", "");

$obj = $conexao->prepare("INSERT INTO usuarios (login, senha, nome) values (?,?,?)");
$login=$_GET["login"];
$senha=$_GET["senha"];
$nome=$_GET["nome"];
$obj->execute([$login,$senha,$nome]);

echo($login+$senha+$nome);

header("Access-Control-Allow-Origin: *");
?>