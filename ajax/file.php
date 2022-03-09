<?
define("NO_KEEP_STATISTIC", true);
define("NO_AGENT_STATISTIC", true);
define("NOT_CHECK_PERMISSIONS", true);

require_once($_SERVER['DOCUMENT_ROOT']. "/bitrix/modules/main/include/prolog_before.php");

use PhpOffice\PhpSpreadsheet\IOFactory;
?>
<?
use \Bitrix\Main\{
  Diag\Debug,
  Context,
  Web\Json
};

Debug::dumpToFile($_POST, '', 'logs/_postData.log');
$ctx = Context::getCurrent();
$request = $ctx->getRequest();
$response = $ctx->getResponse();
$response->addHeader('Content-Type', 'application/json');
// $post = $request->post();
$file = $request->getFile('file');
\Bitrix\Main\Diag\Debug::dumpToFile($file['tmp_name'], '', 'logs/_fserver.log');
// $inputFile = $_SERVER['DOCUMENT_ROOT'] . '/data.xlsx';
$spreadsheet  =IOFactory::load($file['tmp_name']);
$sheetData = $spreadsheet->getActiveSheet()->toArray(null, true, true, true);
foreach ($sheetData as $k => $row)
{
  if (is_numeric($row["F"]))
  {
    $sheetData[$k]["F"] = intval($row["F"]) . '';
  }
}
$data = ['ok' => true, 'items' => $sheetData, 'file' => $file];
$json = Json::encode($data);

// Json::encode($data);
$response->flush($json);
// Json::send();
// die();
// $request = Context::getCurrent()->getRequest();
// die();
// $file = $request->get('file');
// $result = [];
// $result['ok'] = true;
// ob_start();
// var_dump($result);
// $result['content'] = ob_get_clean();
// echo $result;
// // echo new Json($result);
?>
<?
require_once($_SERVER['DOCUMENT_ROOT']. "/bitrix/modules/main/include/epilog_after.php");
?>