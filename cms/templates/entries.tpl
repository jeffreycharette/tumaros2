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
<!--<link rel="stylesheet" type="text/css" href="css/flexigrid/flexigrid.css">-->
<link type="text/css" href="css/ui-lightness/jquery-ui-1.7.2.custom.css" rel="Stylesheet" />
<script type="text/javascript" src="js/jquery-1.3.2.min.js"></script>
<script type="text/javascript" src="js/tiny_mce/tiny_mce_gzip.js"></script>
<script type="text/javascript" src="js/jquery.tinyinit.js"></script>
<script type="text/javascript" src="js/tiny_mce/plugins/tinybrowser/tb_tinymce.js.php"></script>
<!--<script type="text/javascript" src="js/flexigrid.js"></script>-->
<script type="text/javascript" src="js/jquery.datepicker.js"></script>
<style type="text/css">
	.ui-state-highlight { height: 1.5em; line-height: 2.6em; }
</style>
<script type="text/javascript">

$(function() {
		$('.wysiwig').each(function() {
			$('.wysiwig').tinymce();
			toogleEditorMode(this.id);
		});
	/*$('.grid').flexigrid({
		singleSelect: true,
		showToggleBtn: false,
		height:'auto',
		colModel : [{display: 'Title', name : 'title', width : 227, align: 'left'},{display: 'Type', name : 'type', width : 227, align: 'left'},{display: 'Start Date', name : 'start_date', width : 226, align: 'left'},{display: 'End Date', name : 'end_date', width : 226, align: 'left'}]
	});*/
$('a.filter').click(function(){
    var val = $(this).attr('href').replace('#','');
	var txt = $(this).text();
	var pathname=window.location.pathname.replace('.html','.json');
	$.get(pathname,'filter='+val,function(data) {
		$(data).each(function(i) {
			$('.query:eq('+i+')').html(this.content);
			$('.pagination:eq('+i+')').html(this.pagination);
			$('.subtitle').html('> '+txt);
		});
	},"json");
});
	
	$('.date').each(function() {
		var id=$(this).attr('id');
		$("#"+id).DatePicker({
			format:'m/d/Y',
			date: $("#"+id).val(),
			current: $("#"+id).val(),
			starts: 0,
			calendars: 1,
			position: 'right',
			view: 'days',
			onBeforeShow: function(){$("#"+id).DatePickerSetDate($("#"+id).val(), true);},
			onChange: function(formated){
				$("#"+id).val(formated).removeClass('suggest');
				if (id=='date_1') {
					$("#date_2").val(formated).removeClass('suggest');
				}
			}
		});
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
});
</script>
</head>
<body>
<div id="admin_nav">
<ul><li class="bg_sitemap"><a href="pages.html">Pages</a></li><li class="bg_entries sel"><a href="entries.html">Entries</a></li><li class="bg_files"><a target="_blank" href="http://sjica.hatchware.com/js/tiny_mce/plugins/ajaxfilemanager/ajaxfilemanager.php">Files</a></li><li class="bg_logout"><a href="log_out.html">Log Out</a></li></ul>
</div>
<div id="wrapper" style="padding:0 40px;">
	<div id="header">
		{menu}
        <h1 id="logo"><a title="San Jose Institute of Contemporary Art" href="entries.html">ICA</a></h1>
    </div>
	{content}
</div>
</body>
</html>