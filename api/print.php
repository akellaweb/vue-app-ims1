<?
require $_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/include/prolog_before.php';
use \Bitrix\Main\{
  Context
};

$request = Context::getCurrent()->getRequest();
$response = Context::getCurrent()->getResponse();
// var_dump($response);
$origin = $request->getHeader('Origin');
if ($origin)
{
  $response->addHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
  @media print {
    body {
      font-size: 20px;
      text-align: center;
    }
    .order-number {
      font-weight: bold;
      font-size: 72px;
    }
    .client-name {
      font-weight: 300;
      font-size: 30px;
      word-wrap: break-word;
      word-break: break-all;
    }
    .pack-size {
      font-weight: bold;
      font-size: 56px;
    }
    td {
      text-align: center;
    }
  }
  </style>
</head>
<body>
  <table width="100%" cellspacing="5">
    <tr>
    <td class="order-number"><?=$request->get('orderid')?></td>
    </tr>
    <tr>
    <td class="client-name"><?=$request->get('client')?>
    </td>
    </tr>
    <tr>
    <td class="pack-size"><?=$request->get('packs')?>
    </td>
    </tr>
  </table>

  <script>
  // window.print()
  </script>
</body>
</html>
<?
require $_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/include/epilog_after.php';
?>