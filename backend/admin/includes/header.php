<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" media="screen" href="./css/main.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">


<meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Admin</title>
</head>
<body>
        <header>
            <div class="topRow">
                <div></div>
                <a href="./index.php"><h1>Belly Admin</h1></a>
                <div>
                     <i id="menuIcon" class="fas fa-chevron-down"></i>
                </div>
            </div>
            


              <div id="menu">
                <a href="./add.php"><img src="./images/add.png" alt=""></a>
                <form action="./index.php" method="get">
                    
                    <input type="text" name="q">
                    <button type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>
        </header>

<script>
        menu=document.getElementById("menu");
        menuIcon=document.getElementById("menuIcon");
        menuIcon.addEventListener("click", toggleMenu);

        function toggleMenu(){
            menu.classList.toggle("active");
        }
        
    </script>