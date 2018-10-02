/*==================================================*/
/*================ SMOOTH SCROLLING ================*/

$(document).ready(function(){
	$(".navbar a, footer a, .arrow a").on('click', function(event) {	// Where put smooth scrolling
		if (this.hash !== "") {					// Make sure this.hash has a value before overriding default behavior
			event.preventDefault();				// Prevent default anchor click behavior
			var hash = this.hash;				// Store hash
			$('html, body').animate({			// Using jQuery's animate() method to add smooth page scroll
				scrollTop: $(hash).offset().top
			}, 900, function(){					// The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
				window.location.hash = hash;	// Add hash (#) to URL when done scrolling (default click behavior)
			});
		} 										// End if
	});
})

/*==================================================*/
/*================ SLIDEIN ANIMATION ===============*/

$(window).scroll(function() {
	$(".slideanim").each(function(){
		var pos = $(this).offset().top;
		var winTop = $(window).scrollTop();
		if (pos < winTop + 600) {
			$(this).addClass("slide");
		}
	});
});

/*==================================================*/
/*================== SCROLL TO TOP =================*/

$(window).scroll(function() {
	if ($(this).scrollTop() >= 1000) {      // If page is scrolled more than 1000px
		$('#return-to-top').fadeIn(200);    // Fade in the arrow
	} else {
		$('#return-to-top').fadeOut(200);   // Else fade out the arrow
	}
});
$('#return-to-top').click(function() {      // When arrow is clicked
	$('body,html').animate({
		scrollTop : 0                       // Scroll to top of body
	}, 500);
});

/*==================================================*/