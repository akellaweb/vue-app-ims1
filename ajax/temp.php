<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <form action="/ajax/file.php" method="POST" enctype="multipart/form-data">
    <input type="file" name="file">
    <input type="text" name="name">
    <input type="submit" value="Send">
  </form>
</body>
</html>