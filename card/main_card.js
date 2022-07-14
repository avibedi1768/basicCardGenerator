if(window.localStorage.getItem("id") == undefined){
	window.localStorage.setItem("id","1");
}
function loadwala() {
	compo("Your Name", "Designation", "example@gmail.com", "https://www.instagram.com/", "https://github.com/", "https://www.linkedin.com/feed/", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
	for(i=1; i<window.localStorage.getItem("id"); i++){
		if(window.localStorage.getItem("name"+i) == "" || window.localStorage.getItem("name"+i) == undefined){
			continue;
		}
		var name = window.localStorage.getItem("name"+i);
		var desig = window.localStorage.getItem("desig"+i);
		var email = window.localStorage.getItem("email"+i);
		var ig = window.localStorage.getItem("ig"+i);
		var gith = window.localStorage.getItem("gith"+i);
		var li = window.localStorage.getItem("li"+i);
		var about = window.localStorage.getItem("about"+i);			
		compo(name, desig, email, ig, gith, li, about);	
	}
}
function accept(){
	var name = document.getElementById("name").value;
	var desig = document.getElementById("desig").value;
	var email = document.getElementById("email").value;
	var ig = document.getElementById("ig").value;
	var gith = document.getElementById("gith").value;
	var li = document.getElementById("li").value;
	var about = document.getElementById("about").value;
	var id = window.localStorage.getItem("id");
	if (name=="" || desig=="" || email=="" || ig=="" || gith=="" || li=="" || about==""){
		myFunction();
	}
	else{
		window.localStorage.setItem("name"+id, name);
		window.localStorage.setItem("desig"+id, desig);
		window.localStorage.setItem("email"+id, email);
		window.localStorage.setItem("ig"+id, ig);
		window.localStorage.setItem("gith"+id, gith);
		window.localStorage.setItem("li"+id, li);
		window.localStorage.setItem("about"+id, about);
		id++;
		window.localStorage.setItem("id",id);
		compo(name, desig, email, ig, gith, li, about);	
		document.getElementById("name").value = "";
		document.getElementById("desig").value = "";
		document.getElementById("email").value = "";
		document.getElementById("ig").value = "";
		document.getElementById("gith").value = "";
		document.getElementById("li").value = "";
		document.getElementById("about").value = "";
		var db = firebase.database();
		db.ref(name + desig).set({
			name: name,
			designation: desig,
			email: email,
			instagram: ig,
			github: gith,
			linkedin: li,
			about: about

		})
	}
}

function compo(name, desig, email, ig, gith, li, about){	
	var div = document.createElement("div");
	div.className = "card";
	var h1 = document.createElement("h1");
	h1.innerHTML = name;
	var h2 = document.createElement("h2");
	h2.innerHTML = desig;

	var socials = document.createElement("div");
	socials.className = "social";
	var a1 = document.createElement("a");
	var a2 = document.createElement("a");
	var a3 = document.createElement("a");
	var a4 = document.createElement("a");
	a1.href = ig;
	a2.href = gith;
	a3.href = li;
	a4.href = "mailto: " + email;
	a1.target = "blank";
	a2.target = "blank";
	a3.target = "blank";
	a4.target = "blank";
	var img1 = document.createElement("i");
	var img2 = document.createElement("i");
	var img3 = document.createElement("i");
	var img4 = document.createElement("i");
	img1.className = "fa-brands fa-instagram";
	img2.className = "fa-brands fa-github";
	img3.className = "fa-brands fa-linkedin";
	img4.className = "fa fa-envelope";
	a1.append(img1);
	a2.append(img2);
	a3.append(img3);
	a4.append(img4);
	socials.append(a1, a2, a3, a4);

	var hr = document.createElement("hr");
	var p = document.createElement("p");
	p.innerHTML = about;
	div.className = "card";
	div.append(h1, h2, socials, hr, p);
	document.getElementById("root").appendChild(div);
}
function myFunction() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}