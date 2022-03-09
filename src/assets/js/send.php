<?php 
function show_form() 
{ 
?> 

<? 
} 
function complete_mail() {  

    $leadDataName = $_POST['name'];
	$leadDataPhone = $_POST['phone'];
    // Получаем данные из форм и сохраняем в массив
    $postData = array(
        'Имя:' => $leadDataName,
        'Телефон' => $leadDataPhone,
    );
        $strPostData = '';
        foreach ($postData as $key => $value)
            $strPostData .= ($strPostData == '' ? '' : ' ').$key.' '.($value)."<br>";
        	$str .= "<p><strong>Заказ обратного звонка:</strong> <br/><br/> ".($strPostData)."</p>\r\n";
		require 'class.phpmailer.php'; //Дополнительный скрипт для отправки файла, можете не открывать, просто положите рядом с index.html и этим файлом.
		$mail = new PHPMailer(); 
        $mail->From = 'robot@i-ms.ru';      // от кого 
        $mail->FromName = 'ИМС перевозки';   // от кого Имя
        $mail->AddAddress('robot@imedsnab.ru', 'ООО ИМС'); // кому Ваша почта, Имя 
        $mail->IsHTML(true);        // формат письма HTML 
        $mail->Subject = "Заказ обратного звонка";  // тема письма 
        // если есть файл, то прикрепляем его к письму 
        if(isset($_FILES['upl'])) { 
                 if($_FILES['upl']['error'] == 0){ 
                    $mail->AddAttachment($_FILES['upl']['tmp_name'], $_FILES['upl']['name']); 
                 } 
        } 
        $mail->Body = $str; 
        // отправляем наше письмо 
        if (!$mail->Send()) die ('Mailer Error: '.$mail->ErrorInfo);     
} 

if (!empty($_POST['submit']) && empty($_POST['email']) ) complete_mail(); 
else show_form(); 
?>