var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randomColor");

var color1.value = randomColor();
var color2.value = randomColor();

function setGradient(){
	body.style.background = 
	"linear-gradient(to right, "
	 + color1.value
	 + ", "
	 + color2.value 
	 + ")";

	 css.textContent = body.style.background + ";";

}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function randomColor(){
    var hue = '#'+Math.random().toString(16).substr(-6);
    return hue;
}

button.addEventListener("click", function(){
	body.style.background = 
	"linear-gradient(to right, "
	+ color1.random.value
	+", "
	+ color2.random.value
	+ ")";

}