 /*!
* text
*/

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//textGametext: 
//text: textdowntext. 

var _rowNum= 7; //Gametext row text
var _colNum = 7;	//Gametext column text
var _sexyMoviePicNum = 459; //textanimationtext
_dir = "default";		//textimage directory (textbackground imagetext) 
_extName = "png"; 	//text
_bgExtName = "jpg"; //textbackground imagetext
_UniTypeNumberMax = 11; //textlarge text
_UniTypeNumber = 5; //text
_oneSexyMovieCost = -1; //textanimationtext
_fullGameTime = 100; //Gametext
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



var _gameTitle = "text level text";

//-------------------------------------------------------------------------------------
/**text*/
function debug(info){if(info==null || info.length==0) return;
	var txt0 = $("#debugPanel").html();
	var txt1 = txt0+"<br>"+info;
	if(txt1.length>400){txt1=txt1.substring(txt1.length-400);}
	$("#debugPanel").html(txt1);}
//-------------------------------------------------------------------------------------

/**textInitialize*/
function initContainer(){//text
	if(_UniTypeNumber > _UniTypeNumberMax) _UniTypeNumber = _UniTypeNumberMax;
	createAppCode(); 
	
	//text
	showBg(999);
	
	//Gametext
	var tb = $("#panelTb");
	var html="";
	for(var i=0;i<_rowNum;i++){html+="<tr>";
		for(var j=0;j<_colNum;j++){var id= "td_"+i+"_"+j; //Note: idtext!textrow textcolumn text, text
			html+="<td id='"+id+"'></td>";}
		html+="</tr>";}
	tb.append(html);
	
	//textscorecard
	html="";
	var scP = $("#scorePanel");
	for(var i=0;i<_UniTypeNumber;i++){var N = _ucArr[i]; //!!!
		html+="<div class='sDiv' id='sDiv"+N+"'>";
		html+=uniCode(N) + "x" + scoCode(N);
		html+="</div>";}
	scP.append(html);
	
	//Game Timetext: 
	_gameTime = _fullGameTime;
	animGameTimeBar(_gameTime);
	
	//----------------
	//textmethod: 
	resizeContainer();
	//----------------}


/*text*/
function resizeContainer(){var tb = $("#panelTb");
	var wi=-1,hi=-1;
	var o=null;
	var WI = $(window).width();
	var HI = $(window).height();
	var minBD = Math.min(WI,HI);
	var hi_top= parseInt($("#topH").css("height"));
	var hi_btm= parseInt($("#btmH").css("height"));
	
	//text
	var tdHi = Math.round((minBD - hi_top - hi_btm*2) / _rowNum);
	var tdWi = tdHi;
	var os = tb.find("td");
	os.each(function(){$(this).css({width: tdWi,	height: tdHi});});
	//textscoretext: 
	o= $("#scorePanel");
	o.css({height: tb.css("height"),
		fontSize: tdHi /4});
	o.find(".uni").css({width: tdWi *2/3,
		height: tdHi *2/3});
	
	//text
	$("#bgTmp1").css({width: WI,	height: HI});
	$("#bgTmp2").css({width: WI,	height: HI});
	
	//gitext: 
	o = $("#uGirl1");
	hi = HI * 0.75;
	wi = hi * 497 / 400;
	o.css({width: wi,
		height: hi,
		left: WI -wi,
		top: HI -hi});
	
	//animationtext1
	o = $("#cartoonPanel");
	hi = HI -20;
	wi = hi *1280/960;
	o.css({width: wi,
		height: hi,
		left: (WI-wi)/2,
		top: (HI-hi)/2});
	//text: 
	var minB = Math.min(WI, HI);
	var fSz = minB/5;
	var fSz2=minB/15;
	var pTop = (HI-fSz)/3;
	var pTop2 = (HI-fSz)/2;
	$(".warn1").css({paddingTop:pTop, fontSize:fSz});
	$(".warn2").css({top:pTop2, fontSize:fSz2});
	
	//Game Timetext:
	o = $("#gameTimeBar");
	hi = tdHi * _rowNum;
	wi = tdWi/3;
	o.css({width: wi,	height:hi,
		left: parseInt((WI-parseInt(tb.css("width")))/2) - wi -10,
		top: parseInt(tb.position().top)+5});

	//text: 
	$("#endPanel").css({height: HI,	fontSize: minBD/20});
	$("#endPanel #btnReset2").css({fontSize: minBD/20});
	//text:
//	$("#endPanel #fuckA").css({fontSize: minBD/40});}



/**
* text
*/
function clearContainer(){clearTimeout(_itv_run);
	clearTimeout(_itv_score);
	clearTimeout(_itv_animate);
	$("#panelTb.uni").remove(); //textsmall text
	$("#debugPanel").html("");
	_sumScore = 0;
	_ani_thread_pool =0;
	_focusUni =null;
	$("#cartoonPanel").hide(0);
	$("#gameTimeText").text(_fullGameTime);}


/*text
* @param evt: text. 
*/
function newStuff(){var os = $("#panelTb td");
	os.each(function(){createUni(this);});}



/**
*matchtext
*@param os textdeletetextobjectcolumn text
* return Array: textdownMovetextcolumn text
*/
function KillUnits(os){if(os==null || os.length<=0) return null;
	
	var str = ""; //textdownMovetext column text
	for(var i=0;i<os.length;i++){id = $(os[i]).parent()[0].id; //textmatchtextid
		//~~~~~~~~~~~~~
		//textcolumn text: 
		var ss = id.split("_");
		str += ss[2]+",";
		//~~~~~~~~~~~~~
		killUni(os[i]);}
	var arr = str.split(",");
	//text
	var arr2 = arr.unique4(); 
//	debug(arr2)
	return arr2;}



/**textdowntext
*@param dropingColArr: textdownMovetextcolumn text
*/
function DropDownUnits(dropingColArr){if(dropingColArr==null || dropingColArr=="") return;
	
	var idsArr=new Array();
	
	//TODO gettextdowntext columnmiddletext
	for(var i=0;i<dropingColArr.length;i++){var c = dropingColArr[i];
		if(c=="")continue;
		
		var rNArr = new Array(); //textlowSpacetextuptextrow text
		var deepEm = -1; //textdowntextrow text (Notetextsmall text!) 
		var emptyNum = 0; //textcolumn textSpacetext
		
		//Level 1text: fromdowntextuptext
		for(var r=_rowNum-1; r>=0;r--){var id = "td_"+r+"_"+c;
			var TD = $("#"+id);
			var o = TD.find(".uni");
			if(o.length>0){//text
				if(deepEm>=0) rNArr.push(r); //textrow text (textuptext)}else{if(deepEm<0) deepEm = r;
				emptyNum ++;}}
		//Level 2text: textcolumn textdowntext, text
		var rowN = deepEm;
		for(var k=0; k<rNArr.length; k++){var id = "td_"+ rNArr[k] +"_"+c;
			var id2 = "td_"+ rowN +"_"+c;
			var TD = $("#"+id); //text
			var TD2 = $("#"+id2); //text
			
			copyUniFromTD(TD, TD2); //-------text
			rowN--;

			idsArr.push(id2);//+}
		//Level 3text: textuptextfromtext, text
		for(var k=0;k<emptyNum;k++){var id = "td_"+k+"_"+c;
			var TD = $("#"+id); //text
			newSkyUniAtTD(TD, emptyNum); //--------text

			idsArr.push(id);//+}}

	idsArr.sort();
	moveToZeroPlace(idsArr); //animationtext}


/**
*textscoretextScoresort
*/
function SortScorePanle(){clearTimeout(_itv_score);
	_itv_score = setTimeout(function(){var o, o1;
		var sbs =$("#scorePanel.scBar");
		//------------------------
		//sort
		var arr=new Array(sbs.length);
		for(var i=0; i<sbs.length;i++){var id = sbs[i].lang;
			var v = parseInt($(sbs[i]).text());
			arr[i] = new Array(id,v);}
//		debug(arr)
		arr.bubbleSort_Array();
//		debug(arr)
		//------------------------
		//texthigh text:
		if(_bestUType!=null){o = $("#sDiv"+_bestUType); //text
			o.removeClass("hiScore");//textCancelhigh text}
		var base = $("#cLine");
		for(var i=0; i<arr.length; i++){o1 = $("#sDiv"+arr[i][0]); 
			o1.insertAfter(base);}
		o1.addClass("hiScore");//texthigh text
	
		var newT = arr[arr.length-1][0]; //text
		if(_bestUType!= newT){_bestUType = newT; //text
			showBg(_bestUType);//texthighscoregirltext
			showGi1(_bestUType);//highscoregirltext1}},500);}


/**Gametext*/
function GameDataStatisic(){//text: 
	var eP = $("#endPanel");
	var o2 = eP.find("#finUni");
	
	var html="textlevel text:";
	if(_bestUType!=null){html+= "<a id='aWinner'>"+ uniCode(_bestUType) +"</a>";
		html+= "<b>text!</b>";}else{html +="text...text?<br>textdowntext...";}
	o2.html(html);
	
//	if(_sumScore>0){//		eP.find("#fuckA").show();
//}}

