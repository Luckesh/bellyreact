<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';
require '../src/config/db.php';

$app = new \Slim\App;
$app->get('/hello/{name}', function (Request $request, Response $response, array $args) {
    $name = $args['name'];
    $response->getBody()->write("Hello, $name");

    return $response;
});

require '../src/routes/randomBoardgame.php';
require '../src/routes/boardgames.php';
require '../src/routes/foundBoardgames.php';
require '../src/routes/pic.php';
require '../src/routes/specificGame.php';



$app->run();

