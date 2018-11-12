<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>henky</title>
    <link rel="stylesheet" href="bs.css">
  </head>
  <body>
    <div class="menu">
      <?php
        $phppath = $_SERVER['DOCUMENT_ROOT'] . "/portfolio/php/";
        include_once($phppath . "/menu.php");
        print($phppath);
      ?>
    </div>
    <br>
    <br>
    <div class="">
      <canvas id="canvas" width="400" height="5000"></canvas>
      <br/>
      <p id="text">coen</p>
    </div>
    <script src="bit.js" charset="utf-8"></script>
    <script src="bs.js" charset="utf-8"></script>
  </body>
</html>
