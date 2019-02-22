<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

//$app = new \Slim\App;

//get all
$app->get('/api/boardgames/number={number}&mintime={mintime}&maxtime={maxtime}&genres={genres}', function(Request $request, Response $response, array $args){
    //echo 'customeritos';
    /*
    $sql = 'SELECT name, gamelength, CONCAT(min, "-", max) AS "players" FROM boardgames
    JOIN playtime ON boardgames.id=playtime.id;';
    */

    $genres = json_decode($args['genres']);
    $number = json_decode($args['number']);
    $mintime = json_decode($args['mintime']);
    $maxtime = json_decode($args['maxtime']);

    //echo gettype($genres[2]);

    $genreString="";

    for($i=0; $i<sizeof($genres); $i++){
        //echo "\n".$genres[$i]."\n";
        if($genres[$i]==1){
            $genreString=$genreString."IDgenre=".($i+1)." OR ";
        }
    }
        $genreString=substr($genreString,0,(strlen($genreString)-4));

    //echo $genreString;

    $sql = "SELECT * FROM boardgames WHERE (min<=$number AND max>=$number)
    AND (playtime <= $maxtime AND playtime >= $mintime)
    AND ($genreString);";
    try{
        $db = new db();
        $db = $db->connect();
        $stmt = $db->query($sql);
        
        $boardgames=$stmt->fetchAll(PDO::FETCH_OBJ);
        //print_r($boardgames);
        //echo 'json';
        //echo json_encode(utf8_encode($boardgames));
        //echo '/json';
        $db = null;
        //$http_origin=$_SERVER['HTTP_ORIGIN'];

        //$response->withJson($customers);
        //$response = $response->withHeader('Content-type', 'application/json');
        //$response-> write(json_encode($customers));
        return($response
        ->withJson($boardgames)
        ->withHeader('Access-Control-Allow-Origin', $_SERVER['HTTP_ORIGIN'])//big security hole fix eventually
        ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
        ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
        );
    }
    catch(PDOException $e){
        echo '{"error": {"text":'.$e->getMessage().'}}';
    }
    
});