/* Author: wearecharette.com
*/
$(function() {
	
/* Latest Work Layout */
/* Expertise Layout */
	$('.grid').isotope({
	  itemSelector : 'img',
	  masonry: {
		    columnWidth: 167
		  }
	});
	
	$('#industries').isotope({
	  itemSelector : 'img',
	  masonry: {
		    columnWidth: 328
		  }
	});

/* Work Layout */
	$('#work').isotope({
	  itemSelector : 'article',
		itemPositionDataEnabled: true
	})
	// log position of each item
	.find('.medium').each(function(){
	  var position = $(this).data('isotope-item-position');
		if (position.x == 0) {
			$(this).css({'margin' : 0});
		}
	});

/* Work Custom Select */
$('#industry').SelectCustomizer();

/* Homepage Slideshow */
	$('.slideshow').cycle({
		fx: 'uncover',
		speed:  '300', 
    timeout: '9000',
		nowrap: 1,
    pager:  '.pager',
		next:   '#gallery .next', 
		prev:   '#gallery .prev',
		before: function(slide, next, opt, forward) {
			$(next).find('.description').css({ opacity:0, top:70, right:100, height:270 });
			$(next).find('.description > *').css({ opacity:0 });
		},
		after: function(slide, next, opt, forward) {
			$(next).find('.description').animate({ opacity:1, top:55, right:0, height:300 }, 100).animate({ opacity:1, top:40, right:75, height:330 }, 100);
			$(next).find('.description > *').delay(400).animate({ opacity:1 }, 100);
			$('#gallery .prev').css({"visibility" : [opt.currSlide == 0 ? 'hidden' : 'visible']});
			$('#gallery .next').css({"visibility" : [opt.currSlide == opt.slideCount - 1 ? 'hidden' : 'visible']});
		},
		
    // callback fn that creates a thumbnail to use as pager anchor 
    pagerAnchorBuilder: function(idx, slide) {
    	return '<li><a href="#">.</a></li>'; 
    },
		onPagerEvent: function(idx, slide) {
		}
	});
	
});




