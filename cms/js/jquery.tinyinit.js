// tiny MCE - 
//    jQuery plugin for accessible, unobtrusive WYSIWYG HTML editing
// v .1
// by Alton Crossley
// http://www.nogahidebootstrap.com/jtinymce/
// This is a crazy mess

// This is where the compressor will load all components, include all components used on the page here
tinyMCE_GZ.init({
	plugins : 'safari,advlink,style,inlinepopups,save,cancel',
	themes : 'advanced',
	languages : 'en',
	disk_cache : true,
	debug : false
});

$.fn.tinymce = function(options) {
}

// this is where we decide the toggle of 'on' (true) or 'off' (false)
// init an array to keep each id's state seperate
var tinyMCEmode = new Array();
// this is called by the click method
function toogleEditorMode(sEditorID) {
    if(tinyMCEmode[sEditorID]) {
        try {
			tinyMCE.execCommand('mceCancel', false, sEditorID);
            tinyMCE.get(sEditorID).remove();
            tinyMCEmode[sEditorID] = false;
        } 
        catch(e) {
            //alert( "ERROR REMOVE:" + sEditorID + ':' + e.message);
        }
    } 
    else {
        try {
			tinyMCE.execCommand('mceAddControl', true, sEditorID);
            tinyMCEmode[sEditorID] = true;
        } 
        catch(e) {
            //alert( "ERROR ADD:" + sEditorID + ':' + e.message);
        }
    }    
}

function removeAllMCE() {
	$('.jqHTML_link').remove();
    for (var i in tinyMCEmode) {
        if(tinyMCEmode[i]) {
			tinyMCE.execCommand('mceCancel', false, i);
            tinyMCE.get(i).remove();
            tinyMCEmode[i] = false;
        }
    }
    //initMCE();
}

function jSave() {
    for (var i in tinyMCEmode) {
        if(tinyMCEmode[i]) {
			var ed = tinyMCE.get(i);
			ed.setProgressState(1);
			$.post("admin_inventory_list.html",'element_id='+i+'&update_value='+encodeURIComponent(ed.getContent()),function(data){});
			ed.setProgressState(0);
            ed.remove();
            tinyMCEmode[i] = false;
			$("#"+i).dialog('close');
        }
    }
	//initMCE();
}

function initMCE() {
	tinyMCE.init({ mode : "none",
		theme : "advanced",
		skin : "thebigreason",
		file_browser_callback : "tinyBrowser",
		plugins : "safari,advlink,style,inlinepopups,fullscreen,advcode,spellchecker,paste",
		width : "98%",
		theme_advanced_toolbar_location : "top",
		theme_advanced_toolbar_align : "left",
		theme_advanced_resizing : false,
		theme_advanced_statusbar_location : "bottom",
		extended_valid_elements : "+hr[class|width|size|noshade|style],+ul[id|class|style],+li[id|class|style],+div[id|class|style],+script[language|type]",
		force_br_newlines: false,
		paste_remove_styles: true,
		paste_remove_spans: true,
		paste_strip_class_attributes: "all",
		theme_advanced_buttons1: "fullscreen,separator,undo,redo,separator,pastetext,pasteword,separator,bold,italic,underline,strikethrough,charmap,formatselect,styleselect,separator,link,unlink,anchor,image,separator,advcode,separator,spellchecker",
		theme_advanced_buttons2: "",
		theme_advanced_buttons3: "",
		content_css : "css/editor.css",
		template_external_list_url : "templates/template_list.js",
		spellchecker_languages : "+English=en",
		strict_loading_mode: tinymce.isWebKit
	});
}

initMCE();
