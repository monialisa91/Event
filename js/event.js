var list = document.getElementById("list");
var add = document.getElementById("addElem");
add.addEventListener("click", function(e) {
	var element = document.createElement("li") ;
	var allLi = document.getElementsByTagName("li");
	var numberOfElements = allLi.length;
	element.innerHTML = "item " + numberOfElements;
	list.appendChild(element);
});
	