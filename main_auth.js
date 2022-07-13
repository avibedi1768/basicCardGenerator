var db = firebase.database();
if(window.localStorage.getItem("order") == undefined){
	window.localStorage.setItem("order", 0);
}
if(window.localStorage.getItem("order") == 0){
	document.getElementById("register").style.display = "flex";
	document.getElementById("login").style.display = "none";
	document.getElementById("fir").style.backgroundColor = "rgba(255, 255, 255, 0.5)";
	document.getElementById("sec").style.backgroundColor = "rgba(255, 255, 255, 0.2)";
}
if(window.localStorage.getItem("order") == 1){
	document.getElementById("register").style.display = "none";
	document.getElementById("login").style.display = "flex";
	document.getElementById("fir").style.backgroundColor = "rgba(255, 255, 255, 0.2)";
	document.getElementById("sec").style.backgroundColor = "rgba(255, 255, 255, 0.5)";
}
if(window.localStorage.getItem("order") == 2){
	location.href = "index_card.html";
}
document.querySelector("#sec").addEventListener("click", () =>{
	document.getElementById("register").style.display = "none";
	document.getElementById("login").style.display = "flex";
	document.getElementById("fir").style.backgroundColor = "rgba(255, 255, 255, 0.2)";
	document.getElementById("sec").style.backgroundColor = "rgba(255, 255, 255, 0.5)";
})
document.querySelector("#fir").addEventListener("click", () => {
	document.getElementById("register").style.display = "flex";
	document.getElementById("login").style.display = "none";
	document.getElementById("fir").style.backgroundColor = "rgba(255, 255, 255, 0.5)";
	document.getElementById("sec").style.backgroundColor = "rgba(255, 255, 255, 0.2)";
})

function send() {
	var user = document.getElementById("user").value;
	var pass = document.getElementById("pass").value;
	if(user=="" || pass==""){
		myFunction1();
	}
	else{
		db.ref(user).set({
			Password : pass
		})
		window.localStorage.setItem("order", 1);
		document.getElementById("register").style.display = "none";
		document.getElementById("login").style.display = "flex";
		document.getElementById("fir").style.backgroundColor = "rgba(255, 255, 255, 0.2)";
		document.getElementById("sec").style.backgroundColor = "rgba(255, 255, 255, 0.5)";
	}
}

function match(){
	var user = document.getElementById("User").value;
	var pass = document.getElementById("Pass").value;
	var password;
	db.ref(user).once("value", (value) => {
		password = value.val().Password;
		console.log(password, pass);
	
		if(pass == password){
			location.href = "index_card.html";
			window.localStorage.setItem("order", 2);

		}
		else{
			myFunction2();
			document.getElementById("Pass").value = "";
		}
	})
}
function myFunction1() {
  var x = document.getElementById("snackbar1");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
function myFunction2() {
  var x = document.getElementById("snackbar2");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}