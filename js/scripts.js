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
/*============ SCROLL ON CLICK OF VIDEO ============*/

$('.vid-item').click(function() {			// When video is clicked
	$('body,html').animate({
		scrollTop : 210						// Scroll to top of body
	}, 500);
});

/*==================================================*/
/*================= FACT GENERATOR =================*/

var facts = [																	// Save each fact on a array
	"Her favorite color is Orange.",
	"She said in her book that the sound of typewriters feels like home.",
	"Her least favorite day of the year is December 26th, because all of the Christmas spirit is swept away.",
	"When Lindsey had her first violin lesson, she was handed a fake violin made out of a cereal box and a paper towel roll to practice learning how to hold it.",
	"Her cover of Radioactive ft. Pentatonix won Response of the Year in the first YouTube Music Awards.",
	"Crystallize was the 8th most watched video on YouTube in 2012.",
	"Lindsey said if she wasn't a violinist, she would be a therapist.",
	"Her favorite foods are cereal and peanut butter.",
	"Lindsey says the biggest compliments are the ones when her fans say they play the violin because of her.",
	"She was born in Santa Ana, California on Sep 21, 1986",
	"She met Michael Bublé backstage at DWTS in 2013",
	"She has two adopted siblings: Vladimir and Marina",
	"She doesn't have a middle name",
	"In April 2015, her YouTube Channel reached 7+ million subsribers and a billion views",
	"One of her favorite books is called 'Life with Ed'",
	"She designs her own tour costumes",
	"It took one week for Lindsey to film 'Shatter Me'",
	"Lindsey's Mom helped her make her wind costume for the 'Elements' video",
	"She doesn't drink alcohol or coffee",
	"It took 3 hours for Lindsey to write the lyrics from 'Something Wild'",
	"On August 2, 2013 Billboard announced that Lindsey's studio album 'Lindsey Stirling' sold more than 158,000 copies in the US",
	"She meditates before every show",
	"Her favorite track of 'Shatter Me' is 'Beyond The Veil'",
	"Almost every song on 'Warmer in the Winter' was recorded live",
	"She won a Billboard award for 'Shatter Me' in 2015",
	"'Take Flight' video got 2 million views in one day",
	"Lindsey was in the movie 'Breaking Trough' as Phelba",
	"Her least favorite song she made is 'Anti Gravity'",
	"Her parent's names are Diane Stirling and Stephen Stirling",
	"Lindsey said the hardest song to write was 'Gavi's song'. She said she kept rewriting it because it didn't feel special enough",
	"Lindsey said that her least favorite part of the album process is choosing the songs for the album because she has to leave so many behind",
	"Lindsey attended Greenfield Junior High in Gilbert, AZ",
	"She likes to think of a music video for the song she's writing while in the studio",
	"'Eclipse' was recorded with a 5-string electric violin",
	"Her favorite brand for electric violins is Yamaha",
	"She has 100% creative control when it comes to album artwork",
	"Her first job was at Target",
	"Lindsey attended Mesquite High School in Gilbert, AZ",
	"Her YouTube channel reached 1,000,000 subsribers in 2012",
	"Her favorite Disney's princess is Mulan",
	"Lindsey is a fan of Star Wars and Harry Potter",
	"She used to make her backtracks with 'Garage Band'",
	"Breakfast is her favorite meal of the day",
	"Lindsey originally hated the backtrack for Crystallize",
	"She doesn't like when other people edit her music videos for her",
	"Lindsey likes Paramore",
	"Lindsey creates the backtracks first",
	"She doesn't start dancing and playing until she was 18",
	"Lindsey recorded her vocals for 'Warmer in the Winter' in three different countries",
	"The orchestra on the 'Warmer in the Winter' album was recorded on Prague",
	"Lindsey makes holiday crafts with her family each year",
	"Lindsey listens to PVRIS",
	"'Forgotten City' was filmed on the island of Crete in Greece",
	"Lindsey once painted her Converse with silver nail polish for a show",
	"Her right arm is slightly double jointed",
	"Many couples have gotten engaged at Lindsey's shows/meet&greets",
	"Lindsey graduated BYU with a Bachelor of Science degree in recreation management",
	"Lindsey thinks there should be more female music producers",
	"Lindsey's first show sold out in one week",
	"Lindsey's father spent 2 years in Chile for the Mormon church, and that's why Chile is special to Lindsey",
	"She has a Hermione wand at home",
	"Her favorite dance on DWTS was the Argentine Tango",
	"She said one of the hardest music videos to make was 'Master of Tides' because of how slippery the fountain was",
	"Excalibur was the very first violin Lindsey bought to start her dancing violinist career",
	"The music video for 'Shatter Me' was planned and filmed in 1 week",
	"When she was buying her violin Excalibur, she spent 5 hours in a violin shop trying to find the right violin",
	"The first music video that Lindsey directed was 'Love's Just a Feeling'",
	"She learned the Suzuki method",
	"The 'Moon Trance' video was inspired by Michael Jackson's 'Thriller'"
	]
	
	function newFact() {															// Function for the button
		var randomNumber = Math.floor(Math.random() * (facts.length));				// Generate random number -> multiply by the array lenght -> convert to integer
		document.getElementById('factDisplay').innerHTML = facts[randomNumber];		// Put the selected index data on a <div>
	}
	
	/*==================================================*/
	/*==================================================*/