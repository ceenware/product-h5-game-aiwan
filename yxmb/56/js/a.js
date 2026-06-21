function a_init() {updateShare(0);}

function goHome() {window.location.href ='http://game.024qianzheng.cn';}

function a_submitScore(score) {updateShareScore(score);
	//show_share();}

function updateShare(bestScore) {imgUrl = 'http://game.024qianzheng.cn/3dbear/3dbearicon.png';
	lineLink = 'http://game.024qianzheng.cn/3dbear/3dbear.htm';
	descContent = "text?text!";
	updateShareScore(bestScore);
	appid = '';}

function updateShareScore(bestScore) {if(bestScore > 0) {shareTitle = "text"3D Bear Adventure"text" + bestScore + "text, text?!";}
	else{shareTitle = "text"3D Bear Adventure", text?";}}