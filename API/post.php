<?php
$conexao = new PDO("mysql:host=localhost;dbname=projeto","root", "");

$obj = $conexao->prepare("INSERT INTO postagem (descricao) values (?)");
$valor=$_GET["valor"];
$obj->execute([$valor]);

$codigo=$conexao->lastInsertId();
echo($codigo);
header("Access-Control-Allow-Origin: *");
?>