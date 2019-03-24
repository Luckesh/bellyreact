<?php
   // include './includes/db.php';

    $sql = "SELECT * FROM genres;";

   // $db = new db();
   // $db = $db->connect();
    $stmt = $db->query($sql);
    
    //$genres = array();

    echo('<div>');
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        //$genres[$row['genre']]=0;    
        //echo $row['genre']   
        if(isset($genres[$row['genre']])){
            echo ("<div><input type='checkbox' name=\"".$row['genre'].
            "\" value=".$row['id']." checked>".$row['genre']."</div>");
        }else{
            echo ("<div><input type='checkbox' name=\"".$row['genre'].
            "\" value=".$row['id'].">".$row['genre']."</div>");
        }

    

    
    }
    echo('</div>');

    //echo('</select>');
    $db = null;
?>