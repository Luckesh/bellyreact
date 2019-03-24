<?php
include 'includes/header.php';
include 'includes/db.php';

$db = new db();
$db = $db->connect();
$sql="SELECT * FROM games WHERE id=".$_GET['id'].";";
$stmt = $db->query($sql);

//echo('<div>');
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    $id=$row['id'];
    $name=$row['name'];
    $minNumber=$row['min'];
    $maxNumber=$row['max'];
    $playtime=$row['playtime'];
    $description=$row['description'];
    $imageExt=$row['imageExt'];
    //echo $description;
}

$genres=array();

$sql="SELECT genre FROM boardgamegenre JOIN genres ON boardgamegenre.IDgenre=genres.id
WHERE IDgame=$id;";
$stmt = $db->query($sql);
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    //echo $row['genre'];
    $genres[$row['genre']]=1;
}
//print_r($genres);

//echo('</div>');

?>

<script src="./jquery/jquery-3.3.1.js"></script>

<div class="wrapper">
    <form action="./includes/editGame.php" method="post" enctype="multipart/form-data">
    <div class="addWrap">
    
        <div id="add">
            <h1><?php echo htmlspecialchars($name)?></h1>  
            <label for="name">Názov</label>
            <input type="text" name="name" value=<?php echo "'".$name."'"?>>    
            <label for="number">Počet hráčov</label>
            <span id="number">
                <input type="text" name="minNumber" value=<?php echo $minNumber?>>   
                <input type="text" name="maxNumber" value=<?php echo $maxNumber?>> 
            </span>
            <label for="playtime">Hrací čas</label>
            <span id="time">
                <input type="text" name="playtime" value=<?php echo $playtime?>>
                <p>minút</p>
            </span>
         
        </div>
        <div id="photo">
            <h3>Fotka</h3>
            <div id="image-holder">
            <img src="../slim/src/images/<?php echo $id.$imageExt?>" alt=""> <!-- this sucks if its not jpg-->
            </div>
            <input type="file" name="fileToUpload" id="fileToUpload">
            <label for="fileToUpload">Vyberte súbor</label>
        </div>
        <div id="zaner">
             <label>Žáner</label>

            <?php include 'includes/genreSelect.php';?>
        </div>
        <div id="Popis">
            <label>Popis</label>   
            <textarea name="description" cols="30" rows="10" placeholder="Napíšte popis"><?php echo $description?>
            </textarea>
        </div>

 
    </div>
    <?php
        if(isset($_GET['msg'])){
            if($_GET['msg']=="editSuccess")
                echo '<p class="successText" >Hra bola úspešne zmenená.</p>';
            else if($_GET['msg']=="addSuccess")
                echo '<p class="successText" >Hra bola úspešne pridaná.</p>';
        }
        ?>
    <input type="hidden" name="id" value=<?php echo $id?>>
    <button class="submit" type="submit">Upraviť</button>
    </form>

</div>

<?php
include 'includes/footer.php';
?>

<script>
$("#fileToUpload").on('change', function () {

    var imgPath = $(this)[0].value;
    var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();

    if (extn == "gif" || extn == "png" || extn == "jpg" || extn == "jpeg") {
        if (typeof (FileReader) != "undefined") {

            var image_holder = $("#image-holder");
            image_holder.empty();

            var reader = new FileReader();
            reader.onload = function (e) {
                $("<img />", {
                    "src": e.target.result,
                        "class": "thumb-image"
                }).appendTo(image_holder);

            }
            
            image_holder.show();
            reader.readAsDataURL($(this)[0].files[0]);
            
        } else {
            alert("This browser does not support FileReader.");
        }
    } else {
        alert("Pls select only images");
    }
});
</script>