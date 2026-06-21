/*!
 * textmethodtext
 */
 
var _ucArr = new Array(); //textmiddletext
////////////////////////////////////////////////////////////////////////////
/*text*/
function createAppCode(){while(_ucArr.length<_UniTypeNumber){var n = Math.floor(Math.random() * (_UniTypeNumberMax));
		var isNew = true;
		for(var k in _ucArr){if(_ucArr[k]==n){isNew=false;
				break;}}
		if(isNew) _ucArr.push(n);}}


/*text*/
function uniCode(n){var html = "<div class='uni' lang="+n+" ><img lang="+n+" src='_img/uni/"+_dir+"/"+n+"."+_extName+"' /></div>";
	return html;}
/*text*/
function bgImgCode(n){var html = "url(_img/bg/"+_dir+"/"+n+"."+_bgExtName+")";
	return html;}
/*textgitext1text*/
function giCode1(n){//	var html = "url(_img/sexy/heroPic1/"+n+".png)";
	var html = "<img src='_img/sexy/heroPic1/"+n+".png' />";
	return html;}

/**
*text
* (textwritten!) 
*/
function xPCode(n){var s = n.toString();
	while(s.length<3) s="0"+s;
	var pic = "E"+s+".JPG";
	var html = "<img src='_img/sexy/endPic/"+pic+"' />";
//	debug(html)
	return html;}


/*text*/
function aNewUni(n){if(n==null)	n = Math.floor(Math.random() * (_UniTypeNumber)); //Note: text!--0,1,2,3,4,5....
	var N = _ucArr[n]; //Notetext!!!!
	return uniCode(N);}


/*new
* textobjecttext
*update:2016-4-13
* textBack null text
*@return:TD(text)
*/
function getSwitcherTD(td, sign){var id=td.id;
	var ss = id.split("_");
	var r=parseInt(ss[1]);
	var c=parseInt(ss[2]);
	if(sign=="up"){r--;}
	else if(sign=="dn"){r++;}
	else if(sign=="lf"){c--;}
	else if(sign=="rt"){c++;}
	else{/**/}
	var id2 = ss[0]+"_"+r+"_"+c;
	return $("#"+id2);}


/**
* [text]texttdmiddletext
*@param TD1: Level 1texttdobject
*@param TD2: Level 2texttdobject
*/
function switch2TDsUni(TD1,TD2){var t1 = TD1.html();
	var t2 = TD2.html();
	
	TD1.html(t2);
	TD2.html(t1);
	var o1 = TD1.find(".uni:first");
	var o2 = TD2.find(".uni:first");
	//textBind events: 
	if(o1.length>0) uniEvt(o1);
	if(o2.length>0) uniEvt(o2);}



////////////////////////////////////////////////////////////

/**
* texttdmiddletext, text
*@param TD1: Level 1texttdobject
*@param TD2: Level 2texttdobject
*@param chgPos1: text1text (falsetext) 
*@param chgPos2: text2text (falsetext) 
*/
function switch2TDsUni_orgPlace(TD1,TD2,chgPos1,chgPos2){switch2TDsUni(TD1,TD2);
	var o1 = TD1.find(".uni:first");
	var o2 = TD2.find(".uni:first");
	
	reform(o1);
	reform(o2);
	
	var dW = parseInt(TD2.position().left) - parseInt(TD1.position().left);
	var dH = parseInt(TD2.position().top) - parseInt(TD1.position().top);
	
	if(chgPos1)	o1.css({left:dW, top:dH});
	else o1.css({left:0, top:0});
	if(chgPos2)	o2.css({left:-dW, top:-dH});
	else o2.css({left:0, top:0});}


/**
*texttdmiddlecreatetext (high text) text
*@param TD: texttdobject (text) 
*@param n: high text (0text) 
*/
function newSkyUniAtTD(TD, n){TD.html(aNewUni());
	var hi = parseInt(TD.css("height")) * n; //!
	var o = TD.find(".uni:first");
	o.css({top:-hi});
	//+Bind events: 
	uniEvt(o);}

/**
*fromtdtexttd2text
*(text)
*@param TD: text (text) 
*@param TD2: text (text) 
*/
function copyUniFromTD(TD, TD2){TD2.html(TD.html());
	var hi = parseInt(TD.position().top) - parseInt(TD2.position().top);
	var wi = parseInt(TD.position().left) - parseInt(TD2.position().left);
	var o = TD2.find(".uni:first");
	o.css({top:hi,left:wi});
	//+Bind events: 
	uniEvt(o);}

///////////////////////////////////////////////////////////////////

/*textscoretext*/
function scoCode(n){var html = "<span class='scBar' id='scBar_"+n+"' lang="+n+" >0</span>";
	return html;}


///////////////////////////////////////////////////////////////////

/**
*textobjecttextcoordinatesmiddletext
*/
function objPos(Obj, x, y){var wi = parseInt(Obj.css("width"));
	var hi = parseInt(Obj.css("height"));
	Obj.css({left: parseInt(x) - wi/2,
		top: parseInt(y) - hi/2});}
