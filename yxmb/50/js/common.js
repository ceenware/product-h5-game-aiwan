// textconfig
var btGame;;~function(bt){// text, text, textscoreGame
	// text, textfunctionBacktext~, text~
	
	bt.URL = {root: "http://www.baidu.com",getMoreGame: function(){// point text
			bt.dc("more");
			
			return "http://www.baidu.com";},getConcern: function(){return "http://mp.weixin.qq.com/s?__biz=MzA4NTk2MzgxNg==&mid=200512824&idx=1&sn=fb2c29f97e981c8eb672d9e733750b96#rd";},appId: "wxf91bab01569cc168" // gh_f1ed7b95f79e};
	
	// text, text~
	bt.getGameId = function(){var href = location.href;
		href = href.slice(href.indexOf("://") + 3);
		var id = href.split("/")[2];
		return id;}
	
	// text, text~
	bt.getGamePath = function(){var href = location.href;
		href = href.slice(0, href.lastIndexOf("/") + 1);
		return href;}
	
	// calldctext
	bt.dc = function(button){window.Dc_SetButtonClickData && Dc_SetButtonClickData(bt.getGameId(), button);}}(btGame || (btGame = {}));

// textdefine
var btGame;;~function(bt){function popupBox(id, hideClass){this.elemId = id;
		this.hideClass = hideClass || "bt-hide";};
	popupBox.prototype = {beforeShow: function(){// textperson text, text},show: function(){this.beforeShow();
			// textanimationtext, texttimer
			var that = this;
			setTimeout(function(){$("#" + that.elemId).removeClass(that.hideClass);}, 1);},hide: function(){$("#" + this.elemId).addClass(this.hideClass);}};
	
	bt.popupBox = popupBox;}(btGame || (btGame = {}));

// textfunction
var btGame;;~function(bt){bt.proxy = function(func, define){return function(){func.apply(define, arguments);}}}(btGame || (btGame = {}));

// text
var btGame;;~function(bt){var publisher = function(obj){this.__publisher__ = obj;};
	publisher.prototype = {on: function(ev, func){this.__publisher__.on(ev, bt.proxy(func, this));},
		fire: function(ev){this.__publisher__.trigger(ev, [].slice.call(arguments, 1));},
		off: function(ev, func){if(func){this.__publisher__.off(ev, bt.proxy(func, this));}else{this.__publisher__.off(ev);}}};
	
	bt.makePublisher = function(obj){var type = typeof obj;
		var p = new publisher($("<div></div>"));
		if(type == "function"){obj.prototype.__publisher__ = p.__publisher__;
			$.extend(obj.prototype, publisher.prototype);}else if(type == "object"){obj.__publisher__ = p.__publisher__;
			$.extend(obj, publisher.prototype);}}}(btGame || (btGame = {}));

// get body element
var btGame;;~function(bt){// text, large textscoretextbased on body elementtext
	// textget body objecttextmethod
	
	var body;
	function getB(){if(!body){body = document.body || document.getElementsByTagName("body")[0];}
		return body;}
	bt.getDomBody = getB;
	
	function craeteDiv(){return document.createElement("div");}
	bt.getNewDiv = craeteDiv;}(btGame || (btGame = {}));

// text
var btGame;;~function(bt){// textlocktextid, text, textcalltext
	// textcallshowtext, text, text, textcreate
	// textadd, text class:bt-hide, text rowshowtexthidetext
	// textanimation, text class:bt-animation text
	
	var defaultLockId = "bt-lock-screen";
	var createLock = function(id){var div = bt.getNewDiv();
		div.id = id;
		
		var body = bt.getDomBody();
		body.appendChild(div);
		return $(div);};
	var lock = function(lockId){bt.popupBox.call(this, lockId || defaultLockId);};
	lock.__super__ = bt.popupBox;
	lock.prototype = $.extend({}, bt.popupBox.prototype, {beforeShow: function(){var elem = this.getElem();
			if(elem.size() <= 0){elem = createLock(this.elemId);
				elem.addClass("bt-lock-screen bt-animation bt-hide");}},remove: function(){var elem = this.getElem();
			if(elem.size() > 0){elem.addClass("bt-hide");
				// textanimation, textdowntext
				setTimeout(function(){elem.remove();}, 200);}},getElem: function(){return $("#" + this.elemId);}});
	
	bt.lockScreen = function(id){return new lock(id);}}(btGame || (btGame = {}));

// text
var btGame;;~function(bt){// text
	// parameter: 
	// id: textdivtextidtextclassName
	// html: text
	// time: textstext, small text0, textelement
	
	var defaultOptions = {id: "bt-advertisement", html: "text", time: 1500};
	var flash = function(options){var newOptions = $.extend({}, defaultOptions, options || {});
		var $elem = $("#" + newOptions.id);
		var lock = new bt.lockScreen(newOptions.lockId);
		
		if($elem.size() <= 0){var $div = $(bt.getNewDiv()).attr({id: newOptions.id}).addClass(newOptions.id);
			
			var html = newOptions.html;
			$div.html(html);
			bt.getDomBody().appendChild($div[0]);
			
			$elem = $div;}
		
		this.event = newOptions.id + "_timeup";
		var that = this;
		if(newOptions.time > 0){// text, text~
			// text, text
			var event = this.event;
			this.off(event);
			$elem.data("timer", setTimeout(function(){$elem.remove(), lock.hide();
					that.fire(event);
					newOptions = null;
					this.elem = this.lock = that.show = that.hide = null;}, newOptions.time <= 0? 1500: newOptions.time));}
		
		// textmethod
		this.elem = $elem;
		this.lock = lock;
		this.show = function(html){html && this.elem.html(html);
			this.elem.removeClass("bt-hide");
			this.lock.show();}
		this.hide = function(){this.elem.addClass("bt-hide");
			this.lock.hide();}
		this.remove = function(){this.lock.remove();
			this.elem.remove();}}
	bt.makePublisher(flash);
	
	bt.advertisement = function(options){return new flash(options);};}(btGame || (btGame = {}));

// textmiddletextloading
var btGame;;~function(bt){var loadingDiv = null;
	var loadingText = null;
	var loading = function(rate, error){if(rate > 0 &&!loadingDiv){loadingDiv = $(btGame.getNewDiv());
			loadingDiv.addClass("bt-game-loading");
			loadingDiv.html('<table><tr><td><img class="bt-img" src="img/preloadImage.png" /><div class="bt-text"></div></td></tr></table>');
			bt.getDomBody().appendChild(loadingDiv[0]);
			loadingText = loadingDiv.find(".bt-text");}
		if(loadingDiv){if(error){loadingText.html(error);}else{var r = Math.round(rate * 100);
				loadingText.html("text:" + r + "%");}}
		if(rate >= 1){loadingDiv && loadingDiv.remove();
			loadingDiv = null;}}
	
	bt.gameLoading = loading;}(btGame || (btGame = {}));

// Gametextlarge small text
// btGame.resizePlayArea($elem, width, height, top, left)
// $elem: jQueryelement
// width: textwidth
// height: textheight
// top: "top", "center", "bottom" text px
// left: "left", "center", "right" text px
var btGame;;~function(bt){// @width: canvastextwidth
	// @height: canvastextheight
	function rate(width, height){var wWidth = window.innerWidth,
			wHeight = window.innerHeight;
		var mid;
		if(width <= wWidth && height <= wHeight){// text, text}else if(width > wWidth && height > wHeight){// textlarge text
			var rateW = wWidth / width, rateH = wHeight / height;
			// textsmall, text
			if(rateW <= rateH){mid = width;
				width = wWidth;
				height = height * width / mid;}else{mid = height;
				height = wHeight;
				width = width * height / mid;}}else if(width > wWidth){// textwidthlarge text
			mid = width;
			width = wWidth;
			height = height * wWidth / mid;}else if(height > wHeight){// textheightlarge text
			mid = height;
			height = wHeight;
			width = width * wHeight / mid;}else{// text}
		
		var top = (wHeight - height) / 2, left = (wWidth - width) / 2;
		return {width: width,height: height,top: top,left: left};}
	
	function resize($elem, width, height, top, left){var result = rate(width, height);
		$elem.css({width: result.width,height: result.height,top: top == "center"? result.top: top == "left"? 0: top,left: left == "center"? result.left: left == "left"? 0: left});
		
		
		switch(top){case "top":
				$elem.css({top: 0});
				break;
			case "center":
				$elem.css({top: result.top});
				break;
			case "bottom":
				$elem.css({bottom: 0});
				break;
			default:
				$elem.css({top: top});}
		
		
		switch(left){case "left":
				$elem.css({left: 0});
				break;
			case "center":
				$elem.css({left: result.left});
				break;
			case "right":
				$elem.css({right: 0});
				break;
			default:
				$elem.css({left: left});}
		
		
		$elem.trigger("resizePlayArea", [result]);}
	
	function bindResize($elem, width, height, top, left){bt.checkHScreen(function(){setTimeout(function(){resize($elem, width, height, top, left);}, 500);});}

	bt.resizePlayArea = bindResize;}(btGame || (btGame = {}));

// text
var btGame;;~function(bt){function ask(cb){if(confirm('text"text ballGameLeaderboard"text, textGametext!')){cb? cb(): top.location.href = bt.URL.getConcern();}}
	
	bt.attentOurGame = ask;}(btGame || (btGame = {}));

// text
var btGame;;~function(bt){// text, text:true, text:false
	// textwindowtext wide high large small, textwidth > height, text, text~
	// btGame.checkHScreen(callback, once);
	// @param callback Callback callback(true) -> text
	// @param once text, textfalse, text
	
	var screenResize = function(cb) {// texttrue, textfalse
		cb && cb(window.innerWidth > window.innerHeight);};			
	function check(callback, once){if(!once){window.addEventListener("orientationchange", function() {screenResize(callback);});
			window.addEventListener("resize", function() {screenResize(callback);});}
		screenResize(callback);}
	
	bt.checkHScreen = check;}(btGame || (btGame = {}));

// text, text
var btGame;;~function(bt){var onlyH = function(once, callback){this.myCallback = callback;
		this.tipsCount = 0;
		bt.checkHScreen(bt.proxy(this.callback, this), false);
		if(once){this.once = once;}};
	onlyH.prototype = {hscreen: function(){// text
			// settext, text
			this.buildScreen();
			if(this.once && this.tipsCount <= 0){this.screen && this.screen.show();}else if(!this.once){this.screen && this.screen.show();}
			this.tipsCount++;},vscreen: function(){// text, text
			this.screen && this.screen.hide();
			this.myCallback && this.myCallback(this.tipsCount);},getScreenOption: function(){return {id: "bt-h-scrren",html: "<table><tr><td><img class='bt-h-screen-img' src='img/bt-play-h-screen.png' /></td></tr></table>",time: 0,lockId: 'bt-hide-lock'};}
		// downtext, text,buildScreen: function(){!this.screen && (this.screen = btGame.advertisement(this.getScreenOption()));},callback: function(isHScreen){isHScreen? this.vscreen(): this.hscreen();}};
	
	// text, text
	var onlyV = function(once, callback){onlyH.call(this, once, callback);}
	onlyV.__super__ = onlyH;
	onlyV.prototype = $.extend({}, onlyH.prototype, {hscreen: function(){onlyH.prototype.vscreen.call(this);},vscreen: function(){onlyH.prototype.hscreen.call(this);},getScreenOption: function(){return {id: "bt-v-scrren",html: "<table><tr><td><img class='bt-v-screen-img' src='img/bt-play-v-screen.png' /></td></tr></table>",time: 0,lockId: 'bt-hide-lock'};}});
	
	bt.onlyHScreen = function(once, callback){return new onlyH(once, callback);};
	
	bt.onlyVScreen = function(once, callback){return new onlyV(once, callback);}}(btGame || (btGame = {}));

// textGametextcard text
var btGame;;~function(bt){// texthigh text, 9000
	var id = "bt-play-logo-adv";
	function ad(cb){/*
		var a = bt.advertisement({id: id,html: "textlogotext",time: 3000,lockId: "bt-play-logo-adv-lock"});
		a.show();
		a.off(id + "_timeup");
		a.on(id + "_timeup", function(){cb && cb();
			a.remove();
			a = null;});
		*/}

	bt.playLogoAdv = ad;}(btGame || (bgGame = {}));

// textGametextscoretext
var btGame;;~function(bt){var id = "bt-play-share-tip";
	function tip(){var a = bt.advertisement({id: id,html: "<img class='bt-play-share-tip-img' src='img/bt-play-share-tip.png' />",time: 0});
		a.show();
		
		setTimeout(function(){a.elem.on("click touchstart", function(){a.remove();
				a = null;});}, 500);
		
		// point textscoretext
		bt.dc("share");}
	
	bt.playShareTip = tip;}(btGame || (btGame = {}));

// textGametext
var btGame;;~function(bt){/*
	var id = "bt-play-score-msg";
	function msg(html){var popup = bt.advertisement({id: id,html:});}
	*/
	// text
	function msg(text){if(confirm(text)){bt.playShareTip();}}
	
	bt.playScoreMsg = msg;}(btGame || (btGame = {}));

// setscoretext
var btGame;;~function(bt){var clickTime = 0;
	var dataForWeixin={// appId:bt.URL.appId,
	 width:"66",
	 src: "img/icon.png",
	 //src: "http://game.9g.com/sjm/icon.png",
	 url:"/",
	 title:document.title,
	 desc:document.title,
	 // fakeid:"",
	 callback:function(//textscoretext){if(clickTime <= 0){bt.attentOurGame();}
			clickTime++;
			bt.dc("realshare");	// textpoint textscoretext}};
	
	window.dataForWeixin = dataForWeixin;
	

 var onBridgeReady = function(){//if(!isOurShare){return;}	// textcalltextsetShare, text
	 //text
	 WeixinJSBridge.on('menu:share:appmessage', function(argv){WeixinJSBridge.invoke('sendAppMessage',{// "appid":dataForWeixin.appId,
			 "img_url":dataForWeixin.src,
			 "img_width":dataForWeixin.width,
			 "img_height":dataForWeixin.width,
			 "link":dataForWeixin.url,
			 "desc":dataForWeixin.desc,
			 "title":dataForWeixin.title}, function(res){(dataForWeixin.callback)();});});
	 //text
	 WeixinJSBridge.on('menu:share:timeline', function(argv){WeixinJSBridge.invoke('shareTimeline',{"img_url":dataForWeixin.src,
			 "img_width":dataForWeixin.width,
			 "img_height":dataForWeixin.width,
			 "link":dataForWeixin.url,
			 "desc":dataForWeixin.desc,
			 "title":dataForWeixin.title}, function(res){(dataForWeixin.callback)();});});
	 //scoretext
	 WeixinJSBridge.on('menu:share:weibo', function(argv){WeixinJSBridge.invoke('shareWeibo',{"content":dataForWeixin.title,
			 "url":dataForWeixin.url}, function(res){(dataForWeixin.callback)();});});
	 //scoretextfacebook
	 WeixinJSBridge.on('menu:share:facebook', function(argv){(dataForWeixin.callback)();
		 WeixinJSBridge.invoke('shareFB',{"img_url":dataForWeixin.src,
			 "img_width":dataForWeixin.width,
			 "img_height":dataForWeixin.width,
			 "link":dataForWeixin.url,
			 "desc":dataForWeixin.desc,
			 "title":dataForWeixin.title}, function(res){});});};
	if (typeof WeixinJSBridge == "undefined"){if(document.addEventListener){document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);}else if(document.attachEvent){document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
		 document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);}}else{onBridgeReady();}
	
	//var isOurShare = false;	// textcalltextbtSharetext, text~
	// textscoretext
	bt.setShare = function(option){$.extend(dataForWeixin, option || {});
		document.title = dataForWeixin.desc = dataForWeixin.title;
		//isOurShare = true;}}(btGame || (btGame = {}));