/* Author: wearecharette.com
*/
$(function() {
	$.localScroll();
	
	/* preload some images */
	$.fn.preload = function() {
	    this.each(function(){
	        $('<img/>')[0].src = this;
	    });
	}
	$(['http://demo.wearecharette.com/css/arrows_updated/btn-prev.png',
		'http://demo.wearecharette.com/css/arrows_updated/btn-prev-hover.png',
		'http://demo.wearecharette.com/css/arrows_updated/btn-next.png',
		'http://demo.wearecharette.com/css/arrows_updated/btn-next-hover.png',
		'http://demo.wearecharette.com/css/arrows_updated/bg_bullets.png']).preload();
	
	/* homepage slideshow */
	if ($('.slideshow article').length >1) {
		$('.slideshow').cycle({
			fx: 'scrollHorz',
			speed:  '300', 
	    timeout: '9000',
			nowrap: 1,
	    pager:  '.pager',
			pause: 1,
			next:   '#gallery .next', 
			prev:   '#gallery .prev',
			after: function(slide, next, opt, forward) {
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
	}
	else {
		$('#gallery .next, #gallery .prev').css({ visibility : 'hidden' });
	}
	
});




