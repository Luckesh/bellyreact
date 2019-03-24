<?php
include 'includes/header.php';
include 'includes/db.php';
   $db = new db();
   $db = $db->connect();
?>

<script src="./jquery/jquery-3.3.1.js"></script>

<div class="wrapper">
    <form action="./includes/addGame.php" method="post" enctype="multipart/form-data">
    <div class="addWrap">
    
        <div id="add">
            <h1>Nová hra</h1>  
            <label for="name">Názov</label>
            <input type="text" name="name">    
            <label for="number">Počet hráčov</label>
            <span id="number">
                <input type="text" name="minNumber" placeholder="min">   
                <input type="text" name="maxNumber" placeholder="max"> 
            </span>
            <label for="playtime">Hrací čas</label>
            <span id="time">
                <input type="text" name="playtime">
                <p>minút</p>
            </span>
         
        </div>
        <div id="photo">
            <h3>Fotka</h3>
            <div id="image-holder">
            <img src="./images/noImage.png" alt="">
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
            <textarea name="description" cols="30" rows="10" placeholder="Napíšte popis"></textarea>
        </div>


    </div>
 

    <button class="submit" type="submit">Vytvoriť</button>
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