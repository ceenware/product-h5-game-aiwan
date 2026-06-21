function a_init() {updateShare(0);}

function goHome() {window.location.href ='http://game.024qianzheng.cn';}

function a_submitScore(score) {updateShareScore(score);
	//setTimeout(function() {show_share();}, 1000)}

function updateShare(bestScore) {imgUrl = 'http://game.024qianzheng.cn/3dboxing/3dboxingicon.png';
	lineLink = 'http://game.024qianzheng.cn/3dboxing/3dboxing.htm';
	descContent = "text!";
	updateShareScore(bestScore);
	appid = '';}

function updateShareScore(bestScore) {if(bestScore > 0) {shareTitle = "text"3Dtext"text" + bestScore + "score, text?";}
	else{shareTitle = "text3D!"3Dtext"textStart!";}}