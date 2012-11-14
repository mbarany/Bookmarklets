(function(){
	var photos = document.getElementsByTagName("img");
	for(var i in photos){
		photos[i].style.transform = "rotate(90deg)";
	}
})();