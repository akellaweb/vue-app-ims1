<?
define('NO_KEEP_STATISTIC', true);
define('NO_AGENT_CHECK', true);
define('PUBLIC_AJAX_MODE', true);
require($_SERVER['DOCUMENT_ROOT'].'/bitrix/modules/main/include/prolog_before.php');
use \Bitrix\Main\{
    Diag\Debug,
    Loader,
    Entity,
    Application,
    Context,
    Web\Json
};

$response = Context::getCurrent()->getResponse();

$response->addHeader('Content-Type', 'application/json');
$sent = CEvent::Send(
    'FEEDBACK_FORM',
    's2',
    [
        'AUTHOR' => $_REQUEST['name'],
        'AUTHOR_EMAIL' => '',
        'TEXT' => $_REQUEST['phone'],
        'EMAIL_TO' => 'info@imedsnab.ru'
    ]
);

\Bitrix\Main\Diag\Debug::dumpToFile(date('d-m-Y H:i:s'), $sent], '', 'logs/sent.log');
?>