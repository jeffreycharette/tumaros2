/**********************************************************************************
SlideMenu 2.0
*   Copyright (C) 2002 Thomas Brattli
*   This script was released at DHTMLCentral.com
*   Visit for more great scripts!
*   This may be used and changed freely as long as this msg is intact!
*   We will also appreciate any links you could give us.
*
*   Made by Thomas Brattli
*
*Script date: 08/05/2002 (keep this date to check versions)
*********************************************************************************/


/*********************************
The actual script file is inside the
slidemenu.js file - remember to link 
that to your HTML file.
**********************************/

//Creating the menu object -- You can call it whatever you want - just remember to
//have the same name as the argument.
slideMenu = new createSlideMenu("slideMenu")

//Variables to set:
slideMenu.menuy=0 //The top placement of the menu.
slideMenu.menux=0 //The left placement of the menu
slideMenu.useImages = 0 //Are you using images or not?
slideMenu.pxspeed=25 //The pixel speed of the animation
slideMenu.timspeed=25 //The timer speed of the animation
slideMenu.inset = 0 //How much the selected items should pop to the left
slideMenu.arrow = 0 //Set this to className that has font-family:webdings
										//if you want to use the arrow feature. Note:
										//This ONLY works on DOM capable browsers, and with
										//useImages set to 0 - It's basically just a test I did.
										//I hope to improve it later on.

//Needed dummy classes - leave in the stylesheet!
slideMenu.bgClass =	"slideMenuBG"
slideMenu.txtClass = "slideMenuText"

/*******************************************************************************
Level properties - ALL properties have to be specified in level 0
This works the same way as the CM4 script (if you have used it)

The level[0] values will be the default value. Any value not specified
in higher levels will be inherited from level[0]. If anything
is spesified in level[1], but not in level[2], level[2] (sub2 menus)
will get the property value from level[1] and so on.

The availble values to control the menu by level are:

left           - The left placement of all items in the current level ( px value )
width          - The width of all items in the current level  ( px value )
height         - The height of all items in the current level  ( px value )
between        - The number of pixels between each item in  the current level ( px value)
className      - A name of a class specified in the stylesheet to control the
	               look of all items in this level. 
	               NOTE: The class MUST be in a stylesheet, and it most have position:absolute.
classNameA     - A name of a class specified in the stylesheet that will control the 
 								 Look of the TEXT for all items in this level. (you can also specify 
								 a hover class for this className to get a mouseover effect on the 
								 text.
regImage 			 - If you choose to use image feature of the script you have to
                 spesify the default image here.
roundImg       - This is the image that will used when a item is selected.
roundImg2      - This is the image used for sub-levels on the last item in a list.
								 (that's how the last items in this example are rounded on the sub-levels)
subImg         - The image used when the item has sub-items. Only in use for sub-levels
subRound       - Same as roundImg2 - only for items that have sub-items.

To understand the image setup see the images supplied with this script.
NOTE: Always specify the full (relative) path to the images!

The slideMenu_makeLevel function provides a shortcut to making levels.
If you are more comfortable with setting the properties by name you can
also set them like this:

slideMenu.level[0] = new Array()
slideMenu.level[0].left = 0
slideMenu.level[0].width = 138
..... and so on.

NOTE: In level 0 below I have included the names of the variables just for
readability - feel free to remove left = , width = , height = et cetera...
********************************************************************************/
slideMenu.level[0] = new slideMenu_makeLevel(
	left = 0,
	width = 200,
	height = 17,
	between = 0,
	className = "clSlideMenu",
	classNameA = "clA0",
	regImage = "",
	roundImg = "",
	roundImg2 = "",
	subImg = "",
	subRound= "")
	
slideMenu.level[1] = new slideMenu_makeLevel(10,127,20,2,"clSlideMenu","clA1","level1_regular.gif","level1_round2.gif","level1_round.gif","level1_sub.gif", "level1_sub_round.gif")
slideMenu.level[2] = new slideMenu_makeLevel(21,118,18,2,"clSlideMenu","clA2","level2_regular.gif","level2_round2.gif","level2_round.gif", "level2_sub.gif", "level2_sub_round.gif")
slideMenu.level[3] = new slideMenu_makeLevel(33,108,20,2,"clSlideMenu","clA3","level3_regular.gif","level3_round2.gif","level3_round.gif","level3_sub.gif","level3_sub_round.gif")
slideMenu.level[4] = new slideMenu_makeLevel(40,107,19,2,"clSlideMenu","clA4","level4_regular.gif", "level4_round2.gif","level4_round.gif","level4_sub.gif", "level4_sub_round.gif")

//Image preload --- leave this
for(var i=0;i<slideMenu.level;i++){
	var l = slideMenu.level[i]
	new preLoadBackgrounds(l.regImage,l.roundImg,l.roundImg2,l.subImg,l.subRound)
}

/**********************************************************************
Making the menus is the same as in SlideMenu 1 only that now
you can make as many levels as you want.

NOTE: If you are converting from SlideMenu1 remember to add: theNameOfYourMenu.
in front of all menu creation calls.

The arguments to the makeMenu function are:

TYPE - top for top item, sub for sub item, sub2 for sub2 item, sub3 
       for sub3 item and so on (I've done it like that to keep it the same way as version 1)

TEXT - The link text for the item

TARGET - The target frame to open the links in. You do not have to spesify this if you
are not in a frame enviroment. (see below for more info)
------------------------------------------------------------
NOTE: I get mail about this all the time so I will try and explain more:
If you where to make a regular link that would open a link in another
frame you would probably do like this:
<a href="mylink.html" target="myOtherFrameName">Link</a>

To do the same for a slideMenu link you do like this:

slideMenu.makeMenu('top','My link','mylink.html','myOtherFrameName')
------------------------------------------------------------

mySlideMenu.makeMenu('TYPE','TEXT','LINK','TARGET')
************************************************************************/

//Variables to set:
base.address=base.address+''

//Menu Item 1 -----------------------
slideMenu.makeMenu('top','Home', base.address+'index.html')

//Menu Item 2 -----------------------
slideMenu.makeMenu('top','Exhibitions')
	slideMenu.makeMenu('sub','Current', base.address+'pages/exhibitions/current/current.html')
	slideMenu.makeMenu('sub','Future', base.address+'pages/exhibitions/future/future.html')
  	slideMenu.makeMenu('sub','Past', base.address+'pages/exhibitions/past/past.html')
		
//Menu Item 3 -----------------------
slideMenu.makeMenu('top','Programs & Events')
	slideMenu.makeMenu('sub','Talking Art',base.address+'pages/prog-events/talkingart/talking2006.html')
	
//Menu Item 4 -----------------------
slideMenu.makeMenu('top','About the ICA')
	slideMenu.makeMenu('sub',"Director's Message",base.address+'pages/about/message.html')
	slideMenu.makeMenu('sub','About the ICA',base.address+'pages/about/about.html')
	
//Menu Item 5 -----------------------
slideMenu.makeMenu('top','Support')
	slideMenu.makeMenu('sub','Membership', base.address+'pages/support/membership.html')
	slideMenu.makeMenu('sub','Giving to the ICA', base.address+'pages/support/giving.html')
	slideMenu.makeMenu('sub','Capital Campaign', base.address+'pages/capital/about_campaign.html')
//Menu Item 6 -----------------------
slideMenu.makeMenu('top','Capital Campaign')
	slideMenu.makeMenu('sub','About the Campaign',base.address+'pages/capital/about_campaign.html')
	slideMenu.makeMenu('sub','Our new building',base.address+'pages/capital/about_building.html')
	slideMenu.makeMenu('sub','How to Contribute',base.address+'pages/capital/contribute.html')
	
//Menu Item 7 -----------------------
slideMenu.makeMenu('top','Facility Rental',base.address+'pages/facilityrental/rental.html')

//Initiating the menu !! 
slideMenu.init()