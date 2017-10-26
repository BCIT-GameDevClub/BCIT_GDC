	//**Scroll to top with animation**
$(document).ready(function () {
	var amountScrolled = 300;
	$(window).scroll(function () {
		if ($(this).scrollTop() > amountScrolled) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
		$('#back-to-top').tooltip('hide');
	});
	   //Scroll body to 0px when clicked
	$('#back-to-top').click(function () {
		$('#back-to-top').tooltip('hide');
		$('html, body').animate({
			scrollTop: 0
		}, 700);
		return false;
	});
	$('#back-to-top').tooltip('show');
        
    //**Scrolling animation**
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
    
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
    
    //**Pop-over effect**
    $('.flipper').click(function(){
      $(this).toggleClass('flipped');
    });
    
});


    
    


