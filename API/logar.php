<?php
$conexao = new PDO("mysql:host=localhost;dbname=projeto","root", "");

$obj = $conexao->prepare("select * from usuarios where login=? and senha =?");
$login=$_GET["login"];
$senha=$_GET["senha"];
$obj->execute([$login,$senha]);

$dados = $obj->fetchAll(PDO::FETCH_ASSOC);
$resultado = json_encode($dados);
//header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
echo($resultado);
?>