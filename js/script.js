// execute after the page loads

// search

$(document).ready(function(){

	// chosen search module
	$(".chzn-select").chosen();
	$(".chzn-select-deselect").chosen({allow_single_deselect: true});

	$(".chzn-select").chosen().change(function(){
		//	console.log('I changed a chosen form!');
	});

	$('.search-box').bind('focus click', function(){
		// $(this).parents('.chzn-container').addClass('chzn-container-active');
		// $('.chzn-container-active').removeClass('chzn-container-active');
		// $('form.search').show();
		$('form.search').removeClass('blur');
	});

	var mouse_is_inside = false;

	$('form.search').hover(function(){ 
		mouse_is_inside = true; 
	}, function(){ 
		mouse_is_inside = false; 
	});
	$("body").mouseup(function(){ 
		if(! mouse_is_inside) $('form.search').addClass('blur');
	});
	
	$(document).click(function(e){
		if ( !$(e.target).hasClass('search') && !$(e.target).parents().hasClass('search') && !$('.search-choice-close') ) {
			// $('form.search').hide();
			$('form.search').addClass('blur');
		}
	});

	// after chosen has initialized, load this
	// fixes an issue where it looks weird until chosen plugin is loaded up
	$('form.search').removeClass('hide-fix');

	/* print button */
	$('.print-page').removeClass('hidden');
	$('.print-page').click(function(){
		window.print();
	});




	// attribute limiter
	// only if more than 4 attributes. for 4 or less, just show as they are
	function initAttributes () {
		$('ul.attributes').each(function(){
			// console.log($(this).children('li').size() );
			if ( $(this).children('li').size() > 4 ) {

				$('ul.attributes li').each(function(){
					if ( $(this).index() >= 3 && $(this).index() != $('ul.attributes li').size() ) {
						$(this).addClass('overflow'); // add this to each > 4 except last
						$(this).fadeOut();
					}
				});

				$('ul.attributes li.more').removeClass('hidden'); // the hidden is there in case js isn't available
				$('ul.attributes li.more').fadeIn();

				$('ul.attributes li.more').click(function(){
					console.log($(this).parents('.isotope-item').html());
					if ( $(this).parents('.isotope-item').html() ) {
						window.location = $(this).parents('.isotope-item').find('a.button').attr('href');
						// don't expand because not enough room in an isotope box
					} else {
						$('ul.attributes li.overflow').fadeIn();
						$(this).fadeOut();
					}
				});
			}
		});
	}
	initAttributes();


	// category results
	var $categoryResults = $('.category-results');
	$categoryResults.isotope({
		itemSelector : '.category',
		masonry : {
			columnWidth : 212
		}
	});

	// now that isotope has executed, hide the loader and show the product section
	$('.category-results').css('visibility','visible');
/*
	// change size of clicked element
	$categoryResults.delegate( '.category', 'click', function(e){
		// console.log(e);
		
		// make large one small
		$('.category-results .large').toggleClass('large');

		$(this).toggleClass('large');
		$categoryResults.isotope('reLayout');
	});
*/




	// product results
	var $productResults = $('.product-results');
	$productResults.isotope({
		itemSelector : '.product',
		masonry : {
			columnWidth : 162
		}
	});

	// now that isotope has executed, hide the loader and show the product section
	$('.product-results').css('visibility','visible');


	// change size of clicked element
	$productResults.delegate( '.product', 'click', function(e){
		// console.log(e);
		
		// make large one small
		$('.product-results .large').toggleClass('large');

		$(this).toggleClass('large');
		$productResults.isotope('reLayout');
		
		// initAttributes();

	});
	// if large box is clicked, send them to the button's location
	$productResults.delegate( '.product.large', 'click', function(e){
		window.location = $(this).find('.button').attr('href');
	});

	// auto truncate .isotope .description
	$(this).find('.description').each(function(){
		var desc = $(this).html();
		// console.log(desc);
		var shortDesc = $.trim(desc).substring(0, 90).split(" ").slice(0, -1).join(" ") + "...";
		if ( desc.length > 80 ) {
			$(this).html(shortDesc);
		}
	});

	$('.product-results a').bind('click', function(e){
		$(this).addClass('active');
		e.stopPropagation();
	});

	$('.more-info').click( function() {
		$(this).addClass('hidden');
		$('.ingredients').removeClass('hidden');
	});


	/* tooltip */
	$('.tooltip').append(function(){
		var a = '<div class="tooltip-box visuallyhidden">' + $(this).attr('title') + '<div class="tooltip-box-arrow"></div></div>';
		$(this).removeAttr('title');
		return a;
	});
	$('.tooltip').hover(function(){
		$(this).css('cursor','help');
		$(this).children('.tooltip-box').removeClass('visuallyhidden');
		$(this).children('.tooltip-box').css('top', -($(this).children('.tooltip-box').height()) - $(this).height() );
	}, function(){
		$(this).children('.tooltip-box').addClass('visuallyhidden');
	});
	$('.tooltip').bind('click', function(e){
		e.stopPropagation();
	})



// homepage slideshow
	$(function() {
		$(".paging").show();
		$(".paging a:first").addClass("active");
                                
		var imageWidth = $(".window").width();
		var imageSum = $(".image_reel img").size();
		var imageReelWidth = imageWidth * imageSum;
                                
		$(".image_reel").css({'width' : imageReelWidth});

		rotate = function() {
			var triggerID = $active.attr("rel") - 1; //Get number of times to slide
			var image_reelPosition = triggerID * imageWidth; //Determines the distance the image reel needs to slide

			$(".paging a").removeClass('active'); //Remove all active class
			$active.addClass('active'); //Add active class (the $active is declared in the rotateSwitch function)

			//Slider Animation
			$(".image_reel").animate({
				left: -image_reelPosition
			}, 500);
		};
		rotateSwitch = function() {
			play = setInterval(function() { //Set timer - this will repeat itself every 7 seconds
				$active = $('.paging a.active').next(); //Move to the next paging
				if ( $active.length === 0) { //If paging reaches the end...
					$active = $('.paging a:first'); //go back to first
				}
				rotate(); //Trigger the paging and slider function
			}, 7000); //Timer speed in milliseconds (7 seconds)
		};
		rotateSwitch(); 

		$(".image_reel a, .nav li a").hover(function() {
			clearInterval(play); //Stop the rotation
		}, function() {
            rotateSwitch(); //Resume rotation timer
        });

        $(".paging a").click(function() {
            $active = $(this); //Activate the clicked paging
            //Reset Timer
            clearInterval(play); //Stop the rotation
            rotate(); //Trigger rotation immediately
            rotateSwitch(); // Resume rotation timer
            return false; //Prevent browser jump to link anchor
        });

    });

	/* Add .bg class to body of the home page only */
	var file = window.location.pathname,
		n = file.lastIndexOf('/');
		
	if (n >= 0) {
	    file = file.substring(n + 1);
	}
	if ((file || 'index.php') == 'index.php') {
		$('body').addClass('bg');
	}
}); // end windowload