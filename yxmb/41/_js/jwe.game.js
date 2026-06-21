/*!
 * Gametext
 */
 
var _onceKill =0; //textMovematchtext
var _sumScore =0; //Total Score
var _gameTime= 0;//Game Time
var _itv_gameTime = null;//Game TimeTimer (Note: text) 
var _bestUType = null; //text
var _maxPicContainterNum = 4;

var _itv_run=null;
var _itv_score =null;

var _heroTalking =new Array("text, text!", //text
	"text'text'text. textdowntext",//text
	"text, large text",//black text
	"text. ",//textlong
	"text, small text, text!",//text
	"text!",//green text
	"textEasy",//text
	"textsmall text",// text
	"text?text level text?text, text",//text
	"textlarge, textlarge. ",//text person
	"year text person, textperson text?text..." //text);



function gameStart(){clearContainer();
	initContainer();
	newStuff();
	BindEvents();
	showGameStartInfo();}

/*function gameReStart(){clearContainer();
	newStuff();
	bindTableUniEvent();}
*/
/**textGame Timetext, text*/
/*function gameRest1Day(){if(_gameTime>0){clearContainer();
		newStuff();
		bindTableUniEvent();
	//	gameTimeGoBy();}else{showGameOverInfo();}}*/

function gameOver(){clearInterval(_itv_gameTime);
	showGameOverInfo();
	//unbindAllEvents(); //text

	setTimeout(function(){showWinner();}, 2000);}


/**
* Gametextrow text
*/
function runGameRules(delay){if(_ani_thread_pool<=0){clearTimeout(_itv_run);
		if(delay==null)delay=0;
		_itv_run = setTimeout(function(){//textobjecttext: 
			var os = CheckAllLinkState();
			//objectmatchtextrow: 
			var dropingColArr = KillUnits(os);
			//objectdowntextrow: 
			DropDownUnits(dropingColArr);},delay);}}

/**
*textGame Timetext
*textMovetextGametext
* (textOOXX)
*/
function gameTimeGoBy(){/*	if(_gameTime>0) {_gameTime--;
		animGameTimeBar(_gameTime);}
	if(_gameTime<=0){gameOver();}
*/}


////////////////////////////////////////////////////////////////////////////////////////////////////

/**
*textscore(textscore. dvtext)
*return: Scoretext, Backtrue, textBackfalse
*/
function addScore(n,dv){var ret = true;
	if(dv==null || dv=="") dv=1;//text1score
	var sb = $("#scBar_"+n);
	var v0=parseInt(sb.text());
	var v1 = v0+dv;
	if(v1>=0){//textscore: 
		sb.text(v1);
		//textscoretextsort: 
		SortScorePanle();
		//textTotal Score: 
		AddSumScore(dv);}else{ret =false;}
	return ret;}


function AddSumScore(dv){_sumScore +=dv;
	if(_sumScore<0) _sumScore = 0;
	$("#sumScore").text(_sumScore);
	$("#finSumScore").text(_sumScore);}

////////////////////////////////////////////////////////////////////////////////////////////////////
/*text
* text, text
*/
function HappyShoot(n){/*	if(n==null || n>=_sexyMoviePicNum) n=0;
	
	var eP=$("#endPanel");
	var WI = parseInt($(window).width());
	var HI = parseInt($(window).height());
	eP.css("opacity",1);
	var v= _sumScore;
	
	var a= v % _maxPicContainterNum; //!Note: textobjecttext
	var id = "cpT"+a; //++
	var pCode = xPCode(n);
	var zIdx = 200 + n;
	var o = eP.find("#"+id);
	
	
	if(o.length>0){o.html(pCode);}else{var html = "<div class='cartoonPanel' id='"+id+"' >"+pCode+"</div>";
		eP.append(html);
		o = eP.find("#"+id);}
//debug(n)
	//=========================
	//textlarge small textuptextcolumn: 
	var hi = HI -20;
	var wi = hi *1280/960;
	var left,top;
	if(n%2!=0) left= -WI/2;
	else left=WI/2;
	if(n%4 <2) top= -HI/2;
	else top=HI/2;
	
	o.show().css({width: wi,	height: hi,
		left: left,
		top: top,
		opacity:0,
		zIndex: zIdx}).animate({left: (WI-wi)/2,	top: (HI-hi)/2,
		opacity:1},400);
	//=========================
	
	AddSumScore(_oneSexyMovieCost);	//textscore

	if(_sumScore>0){setTimeout(function(){HappyShoot(n+1);}, 500);}else{removePopImg(200);}*/}

/**
* textGameTimer
* text, Game Timetext
* @param interval: text (texts) 
*/
function StartCountTime(){//	_itv_gameTime = setInterval(function(){var time = _gameTime * 1000; //texts
	$("#gameTime").text("").animate({height:0},time,function(){_gameTime = 0;
		gameOver();})

//},interval);}
