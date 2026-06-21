function a_init() {updateShare(0);}

function goHome() {window.location.href ='http://blog.96xy.cn';}

function a_submitScore(score) {updateShareScore(score);
	setTimeout(function() {show_share();}, 1500)}

function updateShare(bestScore) {imgUrl = 'http://www.96xy.cn/img/logo.png';
	lineLink = 'http://blog.96xy.cn';
	descContent = "text3Dtext!";
	updateShareScore(bestScore);
	appid = '';}

function updateShareScore(bestScore) {if(bestScore > 0) {shareTitle = "text"3Dtext"textLevel " + bestScore + ", text!";}
	else{shareTitle = "textGame"3Dtext"text!";}}