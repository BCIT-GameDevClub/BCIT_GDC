var imageGalleries;

$(document).ready(function() {
		//init galleries
		initGalleries();	
		setInterval(goThroughImages, 1000);
});

function initGalleries(){
	imageGalleries = document.getElementsByClassName("image-gallery");

	console.log(imageGalleries[0].children);
}

function goThroughImages(){
	for(var i=0; i < imageGalleries.length; i++){
		var currImage = parseInt(imageGalleries[i].getAttribute("image-index"));
		var images = imageGalleries[i].children;

		for(var k=0; k<images.length; k++){			
			if(currImage == k){
				images[k].style.display="inline";
			}else{
				images[k].style.display="none";
			}
		}

		var currImage = currImage + 1 < images.length ? currImage + 1 : 0;

		imageGalleries[i].setAttribute("image-index", currImage);
	}

}