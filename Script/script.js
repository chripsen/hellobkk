var sofaTag, color, size;

function init() {
	sofaTag = document.getElementById("sofa");
	color = "blue";	// Initiera dem med värden för den soffa som visas först
	size = 2;		// dvs den soffbild som finns i img-taggen
}
window.onload = init;

function newColor(selectedColor) {
	color = selectedColor;
	updateSofa();
} // End newColor

function newSize(selectedSize) {
	size = selectedSize;
	updateSofa();
} // End newSize

function updateSofa() {
	sofaTag.src = "pics/sofas/"+color+size+".jpg";
} // End updateSofa
