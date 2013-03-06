/* Author:

*/
$(function() {
	$(window).load(function(){
		$('#news, #left-feature, #home, #work, #right-feature').css({'visibility':'visible'});
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
		$(this).append('<br />').append($clone);
		
		var duration = 150;
		$(this).hover(
		  function () {
		    $(this).stop().animate({ top: "-20px" }, duration );
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
			$(this).append('<br />').append($clone);
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
	   $(e.target).parent().parent().find('a:first').trigger('click');
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
				//$('#slideNav .prev').css({"visibility" : [opt.currSlide == 0 ? 'hidden' : 'visible']});
				//$('#slideNav .next').css({"visibility" : [opt.currSlide == opt.slideCount - 1 ? 'hidden' : 'visible']});
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
		$('aside.work-menu nav ul').append('<li><a href="#'+i+'">'+$(this).text()+'</a></li>');
	});

	//stop click event on selected element
	//aside click event
	$('aside.work-menu nav ul li').click( function() {
		$('aside.work-menu nav ul li a').removeClass('active');
		$(this).find('a').addClass('active');
		var i = $(this).index('aside.work-menu nav ul li');
		$('#work dl').fadeOut();
		$('#work dl:eq('+i+')').fadeIn();
		$('.casestudy-title').animate({'top':'0px'}, 'fast').delay(200).animate({'top':'-31px'}, 'fast');
	});
	
	//initialize gallery to show
	if (slide == 0) {
		var random = Math.floor(Math.random()*$('#work dl').length);
	}
	else {
		random = slide-1;
	}
	$('#work dl').not(':eq('+random+')').hide();
	$('aside.work-menu nav ul li a:eq('+random+')').addClass('active');
	setTimeout( function(){
		$('.casestudy-title').css({'top':'0px', 'display':'block'}).delay(200).animate({'top':'-31px'}, 'fast');
	},600);
	
	//content pager
	var pager = $('.news-menu ul'),
			pagerHeight = pager.height(),
			num = 3,
			speed = 300,
			containerHeight = $('.news-menu ul li:first').outerHeight(true)*num,
			upPager = $('.news-pager ul li.up a'),
			downPager = $('.news-pager ul li.down a');
			
	upPager.click(function(e){
		var topPos = pager.position().top;
		if (topPos < 0) {
			pager.animate({'top':topPos+containerHeight+'px'}, speed);
			if (topPos+containerHeight >= 0) {
				$(this).parent().css({'visibility':'hidden'});
			}
		}
		downPager.parent().css({'visibility':'visible'});
		e.preventDefault();
	}).parent().css({'visibility':'hidden'});

	downPager.click(function(e){
		var topPos = pager.position().top-containerHeight;
		if (pagerHeight+topPos > 0) {
			pager.animate({'top':topPos+'px'}, speed);
			if (pagerHeight+topPos-containerHeight < 0) {
				$(this).parent().css({'visibility':'hidden'});
			}
		}
		upPager.parent().css({'visibility':'visible'});
		e.preventDefault();
	});
	
	$('.news-pager').delay(300).slideDown(800);
	
	$('.box-white, .gradient-blue').not(':first').wrap('<div class="shadow-wrapper">');
});




