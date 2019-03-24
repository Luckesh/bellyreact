<?php

include './db.php';

$id=$_POST['id'];
$name=$_POST['name'];
$minNumber=$_POST['minNumber'];
$maxNumber=$_POST['maxNumber'];
$playtime=$_POST['playtime'];
$description=$_POST['description'];

$i=0;
$db = new db();
$db = $db->connect();



$sql = "UPDATE games SET name=?, min=?, max=?, playtime=?, description=? WHERE id=$id;
DELETE FROM boardgamegenre WHERE IDgame=$id;";
$db->prepare($sql)->execute([$name, $minNumber, $maxNumber, $playtime, $description]);

print_r($_POST);


$sql= "SELECT * from genres;";
$stmt = $db->query($sql);
//$last_id = $db->lastInsertId();
// $boardgames=$stmt->fetchAll(PDO::FETCH_OBJ);
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {

    $genre=str_replace(" ","_",$row['genre']);

    if(isset($_POST[$genre])){
        echo $genre."\n";

        echo $_POST[$genre];
           
        $sql="INSERT INTO boardgamegenre VALUES(".$id.",".$_POST[$genre].");";
    
        echo "\n".$sql."\n";
        $stmt2 = $db->query($sql);    
    } 
}



//echo $_POST['4'];


//echo substr($_FILES["fileToUpload"]["name"],-4);

$target_dir = "../../slim/src/images/";
$imageExt=substr($_FILES["fileToUpload"]["name"],-4);
$target_file = $target_dir . basename($id.$imageExt);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
}
// Check if file already exists
if (file_exists($target_file)) {
    echo "rewriting";
    //$uploadOk = 0;
}
// Check file size
if ($_FILES["fileToUpload"]["size"] > 500000) {
    echo "Sorry, your file is too large.";
    $uploadOk = 0;
}
// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
    echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
        $sql="UPDATE games SET imageExt=\"$imageExt\" WHERE id=$id;";
    
        //echo $sql;
        $stmt = $db->query($sql);   
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}

$db = null;
header("Location: ../edit.php?id=$id&msg=editSuccess");
?>