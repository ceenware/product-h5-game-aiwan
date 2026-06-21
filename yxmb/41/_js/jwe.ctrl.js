/*!
 * keytextControltext
 */

//text: 
var _focusUni = null;
//var _focuseUni2 = null;



/**textBind events (large text. text) */
function BindEvents(){$(window).resize(function(){resizeContainer();});
	bindKeyboardEvent();
	bindTableUniEvent();
//	$("#scorePanel.uni").each(function(){bindScoreBarEvent(this);});
	$("#cartoonPanel").click(function(){$(this).hide();});
/*	$("#fuckA").click(function(){if(_sumScore>0)	HappyShoot();
		else	showGamingTit("What?!",0,1500);});
*/}

////////////////////////////////////////////////////////////////////////////

/**
*Gametextmiddletext
*/
function bindTableUniEvent(){$("#panelTb.uni").each(function(){uniEvt($(this));});}



/**************************************************/

/**
*textaddtext
*@param:Obj textobject
*/
function uniEvt(Obj){Obj.mousedown(function(){//		debug("down:"+_focusUni)
		//text: 
		if(_focusUni!=null){reform($(_focusUni));
			
			//++++++++++++++++++++++++++
			//text: 
			if(_focusUni!= this){var TD2 = $(this).parent();
				var TD = $(_focusUni).parent();
				//point text:
				switch2TDsUni_orgPlace(TD,TD2,true,true);
				moveToZero(TD,TD2,"fast");}
			//++++++++++++++++++++++++++
			_focusUni=null;}else{_focusUni = this; //textpointobject
			deform1A($(this));//text}});
	
/*.draggable({containment: "#panelTb", 
		scroll: false, 
		stack:"#panelTb td",
		
		start: function() {},
		drag: function() {},
		stop: function() {var TD =$(this).parent();
			var wi = parseInt(TD.css("width"));
			var hi = parseInt(TD.css("height"));
			
			var x= parseInt($(this).css("left"));
			var y =parseInt($(this).css("top"));
			
			var col = Math.round(x/wi);
			var row =Math.round(y/hi);
			
			//Move:
			if(col!=0 || row!=0){var id=TD.attr("id");
				var ss = id.split("_");
				var row2 = parseInt(ss[1])+row;
				var col2 = parseInt(ss[2])+col;
				var id2 = ss[0]+"_"+row2+"_"+col2;
				var TD2=$("#"+id2);
				switch2TDsUni_orgPlace(TD, TD2, true, false);
				moveToZero(TD,TD2,"fast");
				
				//gameTimeGoBy();//<<<<<<<----------------------------------Game Timetext}else{mZero(TD,"fast");}}});
*/}
/**************************************************/


/**textScoretextpoint text*/
function bindScoreBarEvent(o){/*	$(o).bind("mousedown",function(){//textdown
		var typeN = $(o).find("img:first").attr("lang");
		var b = addScore(typeN, _oneSexyMovieCost); //Note!
		if(b==true){showSexyCartoon2();}else{showGamingTit("text!",0,500);}});
*/}



/*text*/
function unbindAllEvents(){$(".uni").unbind().css({cursor:"default"});}


function bindKeyboardEvent(){$(window).keydown(function(event){//		debug("KEY:"+event.keyCode)
		
		if(_focusUni!= null){reform($(_focusUni)); //Movetext
			var b;
			switch(event.keyCode) {case 65: //'A' (lefttext)
					case 37: //left arrow
						b = moveUni2(_focusUni, "lf");
						break;
					case 87: //'W' (uptext)
					case 38: //up arrow
						b = moveUni2(_focusUni, "up");
						break;
					case 68: //'D' (righttext)
					case 39: //right arrow
						b = moveUni2(_focusUni, "rt");
						break;
					case 83: //'S' (downtext)
					case 40: //down arrow
						b = moveUni2(_focusUni, "dn");
						break;
					default:;//do nothing;}}});}


/**
*textmiddletext
*/
function bindEPEvts(){//textpoint text: 
/*	$("#endPanel #aWinner").click(function(){showWinner();});*/}



