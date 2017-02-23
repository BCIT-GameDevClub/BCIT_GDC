


var sliders;
var textHooks;
var hookFuncs = [showOnEqualTextHookVal];

// Everything after the document is loaded
$( window ).on( "load", function(){

	// Slider
	initSliders();

	//TextHooks
	initTextHooks();
});


function initSliders(){

	sliders = document.getElementsByClassName("slider");

	for(var i=0; i<sliders.length; i++){
		$('#' + sliders[i].id + '-label').text(sliders[i].value);

	    $('#' + sliders[i].id).on('input change', function () {
	        $('#' + this.id + '-label').text(this.value);
	    });
	}
}

function initTextHooks(){
	textHooks = document.getElementsByClassName("text-hook");

	for(var i=0; i<textHooks.length; i++){
		var hookId = textHooks[i].getAttribute("hook-target");
		var element = textHooks[i];

		var funcVal = parseInt(element.getAttribute("hook-func"));
	    hookFuncs[funcVal](element, $('#' + hookId)[0]);

		$('#' + hookId).on('DOMSubtreeModified', function () {
			funcVal = parseInt(element.getAttribute("hook-func"));
	        hookFuncs[funcVal](element, this);
	    });
	}
}


//hookfuncs must follow hookfunc(element)
//hook, desiredVal
function showOnEqualTextHookVal(element, hookTarget){
	if(parseInt(element.getAttribute("hook-val")) == parseInt(hookTarget.innerHTML)){
		element.style.display = "block";
	}
	else{
		element.style.display = "none";
	}
}
