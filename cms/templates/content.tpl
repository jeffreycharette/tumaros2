<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
<title>{title}</title>
<meta http-equiv="content-type" content="text/html; charset=iso-8859-1" />
{keywords}
{description}
<meta name="author" content="Hatchware.com" />
<link media="only screen and (max-device-width: 480px)" type= "text/css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="css/base.css" media="screen" />
<link rel="icon" href="favicon.ico" type="image/x-icon">
<link rel="stylesheet" type="text/css" href="css/skins/tango/skin.css" />
<style type="text/css">
	.ui-state-highlight { height: 1.5em; line-height: 2.6em; }
</style>
<!--<link rel="stylesheet" type="text/css" href="css/flexigrid/flexigrid.css">-->
<!--<script type="text/javascript" src="js/sitemapstyler.js"></script>-->
<script type="text/javascript" src="js/jquery-1.3.2.min.js"></script>
<script type="text/javascript" src="js/jquery.qtip.min.js"></script>
<script type="text/javascript" src="js/jquery-ui-1.7.2.custom.min.js"></script>
<script type="text/javascript" src="js/jquery.pngfix.js"></script>
<script type="text/javascript" src="js/mopBox/mopBox-2.5.js"></script>
<script type="text/javascript" src="js/tiny_mce/tiny_mce_gzip.js"></script>
<script type="text/javascript" src="js/jquery.tinyinit.js"></script>
<script type="text/javascript" src="js/tiny_mce/plugins/tinybrowser/tb_tinymce.js.php"></script>
<!--<script type="text/javascript" src="js/flexigrid.js"></script>-->
<script type="text/javascript" src="js/jquery.datepicker.js"></script>
<script type="text/javascript">
$(function() {
	//$('#'+this.title).tinymce().dialog('open');
	$('.wysiwig').each(function() {
		$('.wysiwig').tinymce();
		toogleEditorMode(this.id);
	});
	/*$('.grid').flexigrid({
		singleSelect: true,
		showToggleBtn: false,
		height:'auto',
		colModel : [{display: 'Web Address', name : 'Web Address', width : 160, align: 'left'},{display: 'Page Title', name : 'Page Title', width : 145, align: 'left'},{display: 'Description', name : 'Description', width : 612, align: 'left'}]
	});*/
	
	$('.date').DatePicker({
		format:'m/d/Y',
		date: $('.date').val(),
		current: $('.date').val(),
		starts: 0,
		calendars: 1,
		position: 'right',
		view: 'days',
		onBeforeShow: function(){$('.date').DatePickerSetDate($('.date').val(), true);},
		onChange: function(formated){
			$('.date').val(formated).removeClass('suggest');
		}
	});
	$('img.calicon').click(function() {$('#'+this.alt).focus();});
	$('.limit').each(function(i) {
		var el=$(this).attr("id");
		var limit_info=$('.limit_info:eq('+i+')').attr("id");
		var limit = $('.limit_info:eq('+i+')').find(':text').val();
		$(this).keyup(function() {
 			limitChars(el, limit_info,limit);
		});
 	});
	$('.url').each(function(i) {
		var el=$(this).attr("id");
		var info=$('.url_info:eq('+i+')').attr("id");
		var ptn=/[^a-z^0-9^_-]/i;
		$(this).keyup(function() {
 			changeChars(el,info,ptn);
		});
 	});
	$('.special').each(function(i) {
		var el=$(this).attr("id");
		var url_info=$('.special_info:eq('+i+')').attr("id");
		var ptn=/[^a-z^0-9^_ -]/i;
		$(this).keyup(function() {
 			changeChars(el,url_info,ptn);
		});
 	});
	
	$('span.tip').each(function (i) {
		var tipText=$(this).text();
		var inputArea=$(this).addClass('hidelabel').next(':text,textarea,:password');
		if (inputArea.val()=="") {inputArea.val(tipText).addClass('suggest');}
		inputArea.focus(function(){if (inputArea.val()==tipText) {inputArea.removeClass('suggest').val("");}}).blur(function(){if(!this.value.length){inputArea.addClass('suggest').val(tipText);}});
		$('form').submit(function() {if (inputArea.val()==tipText) {inputArea.val("");}});
	});
	function limitChars(textid, infodiv,limit) {
		var text = $('#'+textid).val();
		var textlength = text.length;
		if(isNaN(limit)) {limit=255;}
		if(textlength > limit) {
			$('#'+infodiv).html(limit+' character limit reached.');
			$('#'+textid).val(text.substr(0,limit));
			return false;
		}
		else {
			$('#'+infodiv).html('You have '+ (limit - textlength) +' characters left.');
			return true;
		}
	}
	function changeChars(textid, urldiv,ptn) {
		var t=$('#'+textid).val();
		var tlength = t.length-1;
		var found = t.match(ptn);
		if(found!=null) {
			if (found==" ") {
				$('#'+textid).val(t.replace(" ", "_"));
			}
			else {
				$('#'+textid).val(t.substr(0,tlength));
			}
			$('#'+urldiv).html('Invalid character!');
			return false;
		}
		else {
			$('#'+urldiv).html(' ');
			return true;
		}
	}
	iframeTimer = setTimeout(iframeLoad, 700);
function iframeLoad() {
	editor($('iframe#text_1_ifr'));
}

function editor(it) {
var itbody=$(it).contents().find('body');
$(itbody).find('.query').each(function() {
	var el=$(this);
	var eid=el.attr('id');
	var elm=el;
	var w = el.width();
	var h = el.height();
	var mostLeft = 100000;
	var mostTop = 100000;
	el.children().each(function(i){
		if ($(this).position().left < mostLeft) { mostLeft = $(this).position().left; elm=$(this);if (elm.height() > h) {h = elm.height();}if (elm.width() > w) {w = elm.width();}}
	});
	if (elm.is(':empty')) {
		elm.before('<div style="position:absolute;text-indent:0;"><img class="fold" style="border:none;padding:0;margin:0;" src="/img/fold.png" /></div>');
	}
	else {
		elm.prepend('<div style="position:absolute;text-indent:0;"><img class="fold" style="border:none;padding:0;margin:0;" src="/img/fold.png" /></div>');
	}
	//replace with creation of element not Qtip plugin, use hoverintent to keep from the hover issue you are having
 	elm.qtip({
	 content: '<span style="position:absolute;top:0;left:0;"><img style="border:none;padding:0;margin:0;" src="/img/fold.png" /></span><span style="text-align:right;margin-left:30px;float:right;color:#080000;background-color:#FCD721;padding:2px 6px 8px 12px;"><a class="editor" style="color:#080000;" href="#">Edit</a> <a class="remove" style="padding-left:10px;color:#080000;" href="#">Remove</a></span>', // Give it some content
	 position: {
		corner: {
			tooltip: 'center',
            target: 'center'
		},
		adjust: {
		   resize: true,
		   scroll: true,
		   screen: true
		}
	 },
	 hide: {
     	fixed: true // Make it fixed so it can be hovered over
     },
	 show: { when: { target: el }, effect: { length: 800 } },
	 style: {
		border: {
         width: 7,
		 color:'#FCD721'
     	},
		width: { min: 120, max: w },
		height: { min: 30, max: h-14 },
		background: 'transparent',
		padding:0
	 },
  api: {
	 onRender: function() {
	 	//do once maybe one
		var sw = $('#'+eid).width();
		var sh = $('#'+eid).height();
		$(".editor").mopBox({'target':'#'+eid,'w':sw,'h':sh,'speed':200,'step':1,'stepPx':10,'btnW':100});
		/*$(".remove").each(function() {
			$(this).mopBox({'target':'#remove','w':300,'h':200});
		});*/
	 }
  }
  });
});
$(itbody).wrapInner('<div style="padding:0 40px;"></div>');
}

$('<div id="blanket">').css({
         position: 'absolute',
         top: $(document).scrollTop(), // Use document scrollTop so it's on-screen even if the window is scrolled
         left: 40,
         opacity: 0.7, // Make it slightly transparent
         backgroundColor: 'black',
         overflow: 'hidden',
         zIndex: 8999  // Make sure the zIndex is below 99999 to keep it below MopBox!
      })
      .appendTo(document.body) // Append to the document body
      .hide(); // Hide it initially
$('<div id="remove">').appendTo(document.body).html('<h3>Remove</h3><p>Are you sure?</p>').hide();

function content_resize() {
	var w = $(window);
	var H = w.height(); 
	var W = w.width();
	var T = w.scrollTop();
	var L = w.scrollLeft()+40;
	$('#blanket').css({width: W-40, height: H, top: T, left: L}); 
};

var resizeTimer = null;
$(window).bind('resize scroll', function() {
    if (resizeTimer) clearTimeout(resizeTimer);
    resizeTimer = setTimeout(content_resize, 200);
});
content_resize();

});
</script>
</head>
<body>
<div id="admin_nav">
<ul><li class="bg_sitemap sel"><a href="pages.html">Pages</a></li><li class="bg_entries"><a href="entries.html">Entries</a></li><li class="bg_files"><a target="_blank" href="http://sjica.hatchware.com/js/tiny_mce/plugins/ajaxfilemanager/ajaxfilemanager.php">Files</a></li><li class="bg_logout"><a href="log_out.html">Log Out</a></li></ul>
</div>
<div id="wrapper" style="padding:0 40px;">
	<div id="header">
    	{menu}
        <h1 id="logo"><a title="San Jose Institute of Contemporary Art" href="pages.html">ICA</a></h1>
    </div>
	{content}
</div>

</body>
</html>
