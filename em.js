var users = "priti";
var pass = "12345";

function getInfo() {

  event.preventDefault();
  //console.log(true);
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === users && password === pass) {
    sessionStorage.setItem('flag','true');
    window.location.assign('Admin.html');
  }
  else {
    alert('user or pass is invalid');
  }


}

