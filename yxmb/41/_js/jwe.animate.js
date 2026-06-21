/*!
 * animationtext
 */

var _ani_thread_pool = 0; //animationtext. textanimationtextmethodtext, text0textStarttext row
var _itv_animate=null;
		
var _bgColors =new Array("3b93ce","905ba0","e24c3b","4cbce1","f1e482","248f51","3c404a","603a70","ffc51b","297eb3","eeeeee");


/**
* textobjectmiddlecreatetext
* @param evt: text. 
*/
function createUni(td){var TD= $(td);
	var wi= parseInt(TD.css("width"));
	var hi= parseInt(TD.css("height"));
	
	var html = uniCode(999); //<<<upd:2016-4-13
	TD.append(html);
	var o = TD.find(".uni:first");

	o.css({left:wi/2, top:hi /_rowNum, width:0, height:0, opacity:0});
	o.animate({left:0,top:0,width:"100%",height:"100%",opacity:100},"normal");}

/////////////////////////////////////////////////////////////////////

/*matchtext*/
function killUni(e){var Obj = $(e);
	var TD = Obj.parent();
	var wi = parseInt(Obj.css("width"));
	var hi = parseInt(Obj.css("height"));
	var uHtml = TD.html(); //text
	var typeN = Obj.find("img:first").attr("lang"); //textdeletetext
	Obj.remove(); //textdeletetextobject
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	//downtext: 
	//textmatchtextobjectuptextdowntext, textdeletetextobject, text. textdeletetext, text
	//text (text), textmatchtextanimationtext. text, animationtext. 
	var p = TD.position();
	var tmpId = "_sh"+Math.round(Math.random()*100000);
	var html = "<div id='"+tmpId+"' class='tmpFlo'>"+uHtml+"</div>";
	$("body").append(html);
	var tmpO = $("#"+tmpId);
	Obj = tmpO.find(".uni:first");
	tmpO.css({left:p.left, top:p.top, width:TD.css("width"), height:TD.css("height")});
	Obj.animate({left:wi/2,
		top:hi/2,
		width:0,
		height:0},function(){tmpO.remove();
		addScore(typeN);});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~}

/////////////////////////////////////////////////////////////////////


/**
* textobjecttextdownMovetext
*@param e: textobject
*@param n: text
*/
function moveUni2DownTD(e, n){var TD = $(e).parent();
	var id = TD.attr("id");
	var ss = id.split("_");
	var n2 = parseInt(ss[1])+n;
	var destID = ss[0]	+"_"+n2+"_"+ss[2];
//	debug(id + "<->"+destID)
	
	var TD2 = $("#"+destID);
	//text:
	switch2TDsUni(TD,TD2); 
	//animation: 
	var hi = parseInt(TD.css("height")) * n; //Note!
	TD2.find(".uni").css({top:-hi}).animate({top:0},"normal",function(){_ani_thread_pool--;
		runGameRules(0);});//(animation)Move
//	debug("MV")}



/**
*Move (text) 
*@param e textobject
*@param type: Directiontext. up/dn/lf/rt
*@return: textMove:true; textMove:false
*/
function moveUni2(e, type){var TD = $(e).parent();
	var TD2 = getSwitcherTD(TD[0],type);	//text
	if(TD2.length<=0) return false;
	//---------------------
	switch2TDsUni_orgPlace(TD,TD2,true,true);//text
	moveToZero(TD,TD2,"fast");
	_focusUni = null; //+++
	return true;}


////////////////////////////////////////////////////////////////////////
//textpointanimation: 
//text1A
function deform1A(Obj){Obj.animate({opacity:0.5},"fast",function(){deform1B(Obj);});}
//text1B
function deform1B(Obj){Obj.animate({opacity:1},"fast",function(){deform1A(Obj);});}
//text:
function reform(Obj){Obj.stop().css({opacity:1});}

////////////////////////////////////////////////////////////////////////

/**
*textmiddletextMovetext
*/
function moveToZeroPlace(idsArr){//text: 
	_ani_thread_pool = idsArr.length;
	
	for(var i=0;i<idsArr.length;i++){var id=idsArr[i];
		if(id==null || id==""){_ani_thread_pool--;}else{var TD = $("#"+id);
			var o = TD.find(".uni:first");
			o.animate({left:0,top:0},"slow",function(){_ani_thread_pool--;
				runGameRules(0);});}}}

/**
*textspeedtext
*@param TD1,TD2 textobject
*@param speed: speed
*/
function moveToZero(TD1, TD2, speed){var Obj1=TD1.find(".uni:first");
	var Obj2=TD2.find(".uni:first");

	if(Obj1.length<=0 && Obj2.length<=0)return;
	if(speed==null || speed=="") speed="normal";
	//text: 
	_ani_thread_pool = 2;
	
	if(Obj1.length>0){Obj1.animate({left:0,top:0},speed,function(){_ani_thread_pool--;
			runGameRules(0);});}else{_ani_thread_pool--;}
	if(Obj2.length>0){Obj2.animate({left:0,top:0},speed,function(){_ani_thread_pool--;
			runGameRules(0);});}else{_ani_thread_pool--;}}


/**textobjecttext*/
function mZero(TD1, speed){var Obj1=TD1.find(".uni:first");
	if(Obj1.length<=0)return;
	if(speed==null || speed=="") speed="normal";
	Obj1.animate({left:0,top:0},speed);}


/**showtext*/
function showBg(typeN){$("#bgTmp1").hide().css({backgroundColor:"#"+_bgColors[typeN]}).fadeIn("normal",function(){$("body").css({backgroundColor:"#"+_bgColors[typeN]});});}

/**textgirltext*/
function showGi1(typeN){var o=$("#uGirl1");
	o.stop().hide(0);
	var code = giCode1(typeN);
//	o.css({backgroundImage:code}).fadeIn(500);
	o.html(code).fadeIn(500);}

/**
*text
* [Note]text, text!
*/
function showSexyCartoon2(n){clearTimeout(_itv_animate);
	var o = $("#cartoonPanel");
	//textanimation: 
	if(n==null) n = Math.floor(Math.random() * _sexyMoviePicNum); //Notetextlarge text!
	o.html(xPCode(n)).show("fast");}




/*text--game start*/
function showGameStartInfo(){$("#txtTit2").html(_gameTitle+"<br>text").fadeIn(1000).fadeOut(1000,function(){$("#txtTit").html("textStart").show(0).fadeOut(1000,function(){runGameRules(0);
				StartCountTime();});});}

/*text--Game Over*/
function showGameOverInfo(){$("#txtTit").html("text").fadeIn(500).fadeOut(1000,function(){GameDataStatisic();
		$("#endPanel").fadeIn(500,function(){bindEPEvts();});});}

/*text--GametextmiddletextHint*/
function showGamingTit(msg, inDelay, outDelay){if(inDelay==null) inDelay=1000;
	if(outDelay==null) outDelay=1000;
	$("#txtTit2").html(msg).fadeIn(inDelay).fadeOut(outDelay);}

/**Game Timetext*/
function animGameTimeBar(v){var v = Math.round(100 *_gameTime / _fullGameTime);
	var s = v+"%";
	$("#gameTime").animate({height:s},"fast").text(_gameTime);}

/**[text]
*textdowntextuptext
*/
function popImg(delay){if(delay!=null && delay>0){setTimeout(function(){var o1 =$("#endPanel.cartoonPanel:first");
			var o2 =$("#endPanel.cartoonPanel:last");
			o2.insertBefore(o1);
			popImg(delay); //text},delay);}}


/**[text]
*textdeleteuptext
*/
function removePopImg(delay, v){if(v==null) v=0;
	else if(v>_maxPicContainterNum) return; //!!text
	
	var id="cpT"+v;
	var o = document.getElementById(id);
	if(o!=null){$(o).slideUp(300,function(){$(this).remove();});}
	if(delay!=null && delay>0){setTimeout(function(){removePopImg(delay, v+1); //text},delay);}}


/*text*/
function showWinner(){$("#endPanel").append($("#uGirl1"));
	showSpeech(_bestUType);}

function showSpeech(n){var o = $("#uGirl1");
	var left = parseInt(o.css("left"));
	var top = parseInt(o.css("top"));
	var z = parseInt(o.css("zIndex"));
	$("#aSpeech").text(_heroTalking[n]).css({left: left,
		top: top-30,
		zIndex: z+1}).show();}
