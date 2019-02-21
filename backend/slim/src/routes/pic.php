<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

//$app = new \Slim\App;

//get all
$app->get('/api/pic/{id}', function(Request $request, Response $response, array $args){
    echo 'moj kokot';
    echo '../images/'.$args['id'].'.jpg';
    $picture=@file_get_contents("http://localhost/backend/slim/src/images/".$args['id'].".jpg");
    if($picture === FALSE) {
        $handler = $this->notFoundHandler;
        return $handler($request, $response);    
    }

    $response->write($picture);


    try{
       
        return($response
        ->withHeader('Content-Type', FILEINFO_MIME_TYPE)
        ->withHeader('Access-Control-Allow-Origin', $_SERVER['HTTP_ORIGIN'])
        ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
        ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
        );
    }
    catch(PDOException $e){
        echo '{"error": {"text":'.$e->getMessage().'}}';
    }
    
});