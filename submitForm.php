<?php

$upload_file = $_FILES["file"]["name"];
$position = $_POST["position"];
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["url"];

$titulo = date("Ymd-His") . "_" . $_FILES["file"]["name"]; 

$allowedExts = array("pdf", "doc", "docx");
$extension = end(explode(".", $upload_file));
if (($_FILES["file"]["type"] == "application/pdf") || ($_FILES["file"]["type"] == "application/msword") || ($_FILES["file"]["type"] == "application/vnd.openxmlformats-officedocument.wordprocessingml.document") && ($_FILES["file"]["size"] < 20000000) && in_array($extension, $allowedExts))
{
	if ($_FILES["file"]["error"] > 0)
    {
    	echo "Return Code: " . $_FILES["file"]["error"] . "<br>";
    }
   	else
    {
    	echo "Success";
		move_uploaded_file($_FILES["file"]["tmp_name"],"assets/files/cvs/". $titulo);

		$con = mysql_connect("db460647960.db.1and1.com","dbo460647960","messias88");
		if (!$con)
		{
		die('Could not connect: ' . mysql_error());
		}

		mysql_select_db("db460647960", $con);

		if ($_SERVER['HTTP_CLIENT_IP'])
				$ip = $_SERVER['HTTP_CLIENT_IP'];
		 	else if($_SERVER['HTTP_X_FORWARDED_FOR'])
		        $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
		    else if($_SERVER['HTTP_X_FORWARDED'])
		        $ip = $_SERVER['HTTP_X_FORWARDED'];
		    else if($_SERVER['HTTP_FORWARDED_FOR'])
		        $ip = $_SERVER['HTTP_FORWARDED_FOR'];
		    else if($_SERVER['HTTP_FORWARDED'])
		        $ip = $_SERVER['HTTP_FORWARDED'];
		    else if($_SERVER['REMOTE_ADDR'])
		        $ip = $_SERVER['REMOTE_ADDR'];
		    else
		        $ip = 'UNKNOWN';

		//$ip = $_SERVER["REMOTE_ADDR"];

		$time = date("D, d M Y H:i:s O", time());

		mysql_query("INSERT INTO CVS (IP, NAME, EMAIL, POSITION, MESSAGE, CV, TIME) VALUES ('$ip', '$name', '$email', '$position', '$message', '$titulo', '$time');");

		mysql_close($con);

		echo '1';
	}
}
else
{
    echo '1';
    //  or:
    //die(json_encode(array('message' => 'ERROR', code => 1337)));}
}
?>