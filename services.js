function redirectToRegistration(){
	let dietType=document.getElementById("dietType").value;
	if(dietType==="meat"){
		 window.location.href = "meat.html";
	}else if(dietType=="veggies"){
		 window.location.href = "veggies.html";
	}else if(dietType==="drinks"){
		 window.location.href = "drinks.html";
	}
}