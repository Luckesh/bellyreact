<?php
include 'db.php';

/*
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
*/

if(ISSET($_GET['q'])){
    $sql = "SELECT * FROM games WHERE name LIKE \"%".$_GET['q']."%\";";
}
else{
    $sql = "SELECT * FROM games;";
}
try{
    $db = new db();
    $db = $db->connect();
    $stmt = $db->query($sql);
    
   // $boardgames=$stmt->fetchAll(PDO::FETCH_OBJ);
   echo('<div class=games>');
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo ('
        <div class="gameWrapper">
        <div class="game">
        <img src="../slim/src/images/'.$row['id'].$row['imageExt'].'" alt="">
        <p>'.htmlspecialchars($row['name']).'</p>
        <p>'.$row['visits'].'x</p>
        <img src="./images/edit.png" class="edit" onClick="edit('.$row['id'].')" alt="">
         </div>
        </div>
        ');
    }
    echo('</div>');
    $db = null;
}
catch(PDOException $e){
    echo '{"error": {"text":'.$e->getMessage().'}}';
}
//echo $boardgames;
?>

<script>
    function edit(id){
        //console.log('yomama');
        window.location.assign("./edit.php?id="+id);
    }
</script>