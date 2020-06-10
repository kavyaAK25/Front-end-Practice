window.addEventListener("load", function(){

	var canvas = document.getElementById("gradCanvas");
	var context = canvas.getContext("2d");
	context.rect(0,0,canvas.width,canvas.height);
	
	var grad = context.createLinearGradient(0, 0, 300, 200);	
	
	grad.addColorStop(0, "red");
	grad.addColorStop(0.25, "yellow");
	grad.addColorStop(0.50, "green");
	grad.addColorStop(0.75, "orange");
	grad.addColorStop(1, "blue");
	context.fillStyle = grad;
	context.fill();
	context.stroke();
});

function getDetails(){
	var name = document.getElementById("text-box");
	alert(`Hiii ${name.value}, Welcome!!!!!!!`)
}

