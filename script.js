function semak(){

var user = $("#username").val();
var pass = $("#password").val();

if(user == "" || pass == "")
{
alert("Sila isi username dan password");
return false;
}

alert("Login Berjaya");
return false;

}