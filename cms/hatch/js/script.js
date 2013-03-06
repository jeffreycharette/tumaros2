/* Author:

*/
$(function() {
	$(window).load(function(){
		$('#news, #left-feature, #home, #work, #right-feature, #portfolio').css({'visibility':'visible'});
	});
	$('.container-three').cycle({
		delay: 0,
		slideExpr: 'img'
	});
	$('.container-four').cycle({
		delay: 1000,
		slideExpr: 'img'
	});
	$('header nav ul li:not(".active")').each(function() {
		var $clone = $(this).find('a').clone().addClass('blue');
		$(this).append($clone);
		var height = '-21px';
		if ( $.browser.webkit ) {
			height = '-20px';
		}
		var duration = 150;
		$(this).hover(
		  function () {
		    $(this).stop().animate({ top: height }, duration );
		  }, 
		  function () {
		    $(this).stop().animate({ top: "0px" }, duration );
		  }
		);
	});
	$('ul.details li').each(function() {
		var $clone = $(this).find('a').clone().addClass('blue').css('float','left');
		$(this).append('<br />').append($clone).append('<span class="blue viewdetails" style="float:right;">view details</span>');
		var duration = 150;
		$(this).hover(
		  function () {
		    $(this).stop().animate({ top: "-13px" }, duration );
		  }, 
		  function () {
		    $(this).stop().animate({ top: "0px" }, duration );
		  }
		);
	});
	$('#left-feature dl dd').each(function() {
		var $clone = $(this).find('a').clone().addClass('active');
		if ($clone.hasClass('active')) {
			$(this).append('<br />').append($clone);
			var duration = 150;
			$(this).hover(
			  function () {
			    $(this).find('a').stop().animate({ top: "-21px" }, duration );
			  }, 
			  function () {
			    $(this).find('a').stop().animate({ top: "0px" }, duration );
			  }
			);
		}
	});
	$('footer dl dd').each(function() {
		var $clone = $(this).find('a').clone().addClass('active');
		if ($clone.hasClass('active')) {
			$(this).append($clone);
			var duration = 150;
			$(this).hover(
			  function () {
			    $(this).find('a').stop().animate({ top: "-14px" }, duration );
			  }, 
			  function () {
			    $(this).find('a').stop().animate({ top: "0px" }, duration );
			  }
			);
		}
	});
	$('.container-one img, .container-three img, .container-four img').bind({
	  mouseenter: function(e) {
	   $(e.target).parent().parent().find('a:first').trigger('mouseenter');
	  },
	  mouseleave: function(e) {
	   $(e.target).parent().parent().find('a:first').trigger('mouseleave');
	  },
	  click: function(e) {
	   var link = $(e.target).parent().parent().find('a:first').attr('href');
		 window.location = link;
	  }
	});
	$('#portfolio .box-white img').bind({
	  mouseenter: function(e) {
	   $(e.target).parent().find('a:first').trigger('mouseenter');
	  },
	  mouseleave: function(e) {
	   $(e.target).parent().find('a:first').trigger('mouseleave');
	  },
	  click: function(e) {
	   var link = $(e.target).parent().find('a:first').attr('href');
		 window.location = link;
	  }
	});
	
	//image gallery
	var slide=location.hash.replace(/^#/,'');
	if (slide<1) {slide=0;}
	$('#work dl').each( function(i) {
		$(this).find('dd').before('<dd class="alt-title"><dd class="menu"><ul>').cycle({ 
	    speed:  'fast', 
	    timeout: 0,
	    pager:  '#work dd.menu:eq('+i+') ul',
			next:   '#slideNav .next a', 
			prev:   '#slideNav .prev a',
			nowrap: true,
			before: function() {
				$("#work dl:eq("+i+") dd.alt-title").text(this.alt);
				$('.gallery-wrapper > dl > dt, .alt-title').hide();
			},
			after: function(slide, next, opt, forward) {
				$('#slideNav .prev').css({"visibility" : [opt.currSlide == 0 ? 'hidden' : 'visible'], cursor : [opt.currSlide == 0 ? 'none' : '']});
				$('#slideNav .next').css({"visibility" : [opt.currSlide == opt.slideCount - 1 ? 'hidden' : 'visible']});
				$('.gallery-wrapper > dl > dt, .alt-title').fadeIn('fast');
			},
			
	    // callback fn that creates a thumbnail to use as pager anchor 
	    pagerAnchorBuilder: function(idx, slide) {
	    	return '<li><a class="btnWrapper" href="#"><img src="' + slide.src.replace(".jpg","-tn.jpg") + '" width="45" height="30" /></a></li>'; 
	    },
			onPagerEvent: function(idx, slide) {
				$("#work dl:eq("+i+") dd.menu ul li a canvas").fadeIn();
				$("#work dl:eq("+i+") dd.menu ul li:eq("+idx+") a canvas").hide();
			},
			onPrevNextEvent: function(isNext, idx, slide) {
				$("#work dl:eq("+i+") dd.menu ul li a canvas").fadeIn();
				$("#work dl:eq("+i+") dd.menu ul li:eq("+idx+") a canvas").hide();
			}
		});
	});
	
	//bw thumbnails
	$("#work dd.menu ul li a").BlackAndWhite();
	$("#work dl dd.menu ul li.activeSlide a canvas").hide();
	
	//aside menu
	$('#work dt').each( function(i) {
		i=i+1;
		$('aside.work-menu nav ul').append('<li><a class="'+$(this).attr('class')+'" href="#'+i+'">'+$(this).text()+'</a></li>');
	});

	//stop click event on selected element
	//aside click event
	$('aside.work-menu nav ul li').click( function() {
		$('aside.work-menu nav ul li a').removeClass('active');
		var color = $(this).find('a').addClass('active').attr('class');
		var i = $(this).index('aside.work-menu nav ul li');
		$('#work dl').fadeOut();
		$('#work dl:eq('+i+')').fadeIn();
		$('.casestudy-title').animate({'top':'0px'}, 'fast',
			function() {
				$('h2[class*="gradient"]').removeClass().addClass('casestudy-title');
				$(this).addClass('gradient-'+color.replace('active', ''));
			}
		).delay(200).animate({'top':'-31px'}, 'fast');
		$('.gallery-wrapper > dl > dt, .alt-title').hide().delay(200).fadeIn();
	});
	
	//initialize gallery to show
	if (slide == 0) {
		var random = Math.floor(Math.random()*$('#work dl').length);
	}
	else {
		random = slide-1;
	}
	var gallery = $('#work dl').not(':eq('+random+')').hide();
	if (gallery.length) {
		var color = $('aside.work-menu nav ul li a:eq('+random+')').addClass('active').attr('class');
		setTimeout( function(){
			$('.casestudy-title').addClass('gradient-'+color.replace('active', '')).css({'top':'0px', 'display':'block'}).delay(200).animate({'top':'-31px'}, 'fast');
		},600);
	}
	
//content scroller
	var speedS = 0,
			move = 18,
			completeFlagS = true;
	
	$('.scrollcontainer').each( function(i) {
		var upScroller = $('.scroller:eq('+i+') li.up a'),
				downScroller = $('.scroller:eq('+i+') li.down a');
			
		upScroller.mousehold( function(){
			var scroll = $('.scrollcontent:eq('+i+')'),
					scrollHeight = scroll.height(),
					overflowHeight = $('.scrollcontainer:eq('+i+')').height();
			if (completeFlagS) {
				completeFlagS = false;
				var scrollTop = scroll.position().top;
				if (scrollTop < 0) {
					scroll.animate({'top':scrollTop+move+'px'}, speedS, function() {
					    completeFlagS = true;
					  });
					if (scrollTop+move >= 0) {
						$(this).parent().css({'visibility':'hidden'});
					}
				}
				downScroller.parent().css({'visibility':'visible'});
			}
		}).parent().css({'visibility':'hidden'});
		
		downScroller.mousehold( function() {
			var scroll = $('.scrollcontent:eq('+i+')'),
					scrollHeight = scroll.height(),
					overflowHeight = $('.scrollcontainer:eq('+i+')').height();
			if (completeFlagS) {
				completeFlagS = false;
				var scrollTop = scroll.position().top;
				if ((scrollHeight+scrollTop) > overflowHeight) {
					scroll.animate({'top':(scrollTop-move)+'px'}, speedS, function() {
					    completeFlagS = true;
					  });
					if ((scrollHeight+(scrollTop-move)) < overflowHeight) {
						$(this).parent().css({'visibility':'hidden'});
					}
				}
				upScroller.parent().css({'visibility':'visible'});
			}
		});
	
		downScroller.click( function(e) {
			e.preventDefault();
		});
		upScroller.click( function(e) {
			e.preventDefault();
		});
		downScroller.mouseover( function(e) {
			completeFlagS = true;
			multiplier = 1;
		});
		upScroller.mouseover( function(e) {
			completeFlagS = true;
			multiplier = 1;
		});
	});
	if ($('.scrollcontent:eq(0)').height() < $('.scrollcontainer:eq(0)').height()) {
		$('.scroller:eq(0) li.down').css({'visibility':'hidden'});
	}
	$('.scroller:eq(0)').fadeIn();
	
	$('.news-pager').delay(300).slideDown(800);
	
	//news menu pager
		var pager = $('.news-menu ul'),
				pagerHeight = pager.height(),
				num = 3,
				speed = 300,
				containerHeight = $('.news-menu ul li:first').outerHeight(true)*num,
				upPager = $('.news-pager ul li.up a'),
				downPager = $('.news-pager ul li.down a'),
				completeFlag = true;

		upPager.click(function(e){
			if (completeFlag) {
				completeFlag = false;
				var topPos = pager.position().top;
				if (topPos < 0) {
					pager.stop().animate({'top':topPos+containerHeight+'px'}, speed, function() {
					    completeFlag = true;
					  });
					if (topPos+containerHeight >= 0) {
						$(this).parent().css({'visibility':'hidden'});
					}
				}
				downPager.parent().css({'visibility':'visible'});
			}
			e.preventDefault();
		}).parent().css({'visibility':'hidden'});

		downPager.click(function(e){
			if (completeFlag) {
				completeFlag = false;
				var topPos = pager.position().top-containerHeight;
				if (pagerHeight+topPos > 0) {
					pager.stop().animate({'top':topPos+'px'}, speed, function() {
					    completeFlag = true;
					  });
					if (pagerHeight+topPos-containerHeight < 0) {
						$(this).parent().css({'visibility':'hidden'});
					}
				}
				upPager.parent().css({'visibility':'visible'});
			}
			e.preventDefault();
		});
	
//news menu
$('.news-menu li:not(".current")').live('click', function(){
	//get index of clicked
	var newsItem = $(this).index('.news-menu li');
	//make current menu item unclickable
	$('.news-menu li.current').removeClass('current');
	$(this).addClass('current');
	//hide current image and load image of clicked index
	$('.news-image .current').fadeOut( 600 , function() {
		$(this).removeClass('current');
	});
	$('.news-image img:eq('+newsItem+')').delay(900).fadeIn( 600 , function() {
		$(this).addClass('current');
	});
	//hide current article and load article of clicked index
	$('#news article div.current').fadeOut( 600 , function() {
		$(this).removeClass('current');
	});
	//hide scroller and fadeIn article load
	$('.scroller').fadeOut('fast');
	//article load
	$('#news article > div:eq('+newsItem+')').delay(900).fadeIn( 600 , function() {
		$(this).addClass('current');
		$('.scroller:eq('+newsItem+')').fadeIn('slow');
	});
});
	
//drop shadow
	$('.box-white, .gradient-blue').not(':first').wrap('<div class="shadow-wrapper">');
	$('.box-white:first').wrap('<div class="shadow-wrapper">');
});




