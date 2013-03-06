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
<!--<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/ui-lightness/jquery-ui.css" type="text/css" media="all" />-->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js" type="text/javascript"></script>
<!--<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/jquery-ui.min.js" type="text/javascript"></script>-->
<script type="text/javascript" src="js/jquery.selectboxes.js"></script>
<script type="text/javascript">
$(function() {
	$('a.replace').each(function() {
		var page=$(this);
		page.html('<div style="height:100px;text-align:center;"><br /><img src="img/ajax-loader.gif" width="31" height="31" /></div>');
		$.post(page.attr('href'),'',function(data) {
			page.replaceWith(data);
		});
	});
var currentValue;

$('.filter').change(function(){
	$('body').focus();
    var val = $(this).val();
	var tid = $(this).attr('id');
	var pathname=window.location.pathname.replace('.html','.json');
    if (currentValue != val) {
        currentValue = val;
        $.get(pathname,'type='+tid+'&range=end of year&date=01-01-'+currentValue,function(data) {
			$(data).each(function(i){
				$('.query:eq('+i+')').html(this.content);
				$('.subtitle').html('> '+currentValue);
			});
		},"json");
    }
});
$('a.filter').click(function(){
    var val = $(this).attr('href').replace('#','');
	var tid = $(this).attr('rel');
	var pathname=window.location.pathname.replace('.html','.json');
	$.get(pathname,'type=all&match='+val+'&on='+tid,function(data) {
		$(data).each(function(i) {
			$('.query:eq('+i+')').html(this.content);
			$('.pagination:eq('+i+')').html(this.pagination);
			$('.subtitle').html('> '+val);
		});
	},"json");
});

});
</script>
</head>
<body>
<div id="wrapper">
	<div id="header">
		{menu}
        <h1 id="logo"><a title="San Jose Institute of Contemporary Art" href="/">ICA</a></h1>
    </div>
	{content}
    <div id="footer">
		{footer}
    </div>
</div>
</body>
</html>
