<?php
$conexao = new PDO("mysql:host=localhost;dbname=projeto","root", "");

$obj = $conexao->query("select * from postagem");
$dados = $obj->fetchAll(PDO::FETCH_ASSOC);
$resultado = json_encode($dados);

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
echo($resultado);
?>