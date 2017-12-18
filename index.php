<?php
require_once 'vendor/autoload.php';

//hago la app

$app = new \Slim\Slim();

//ruta

$app->get('/', function(){
    echo("bienvenido a slim");
});
    
$app->run();