(function(document){//documenttextparametertext, text
	var gameInst;
	function DomObject(dom){this.dom =dom;}
	DomObject.prototype.get = function(){return this.dom;}

	DomObject.prototype.on = function(eventName,eventHandler){//text
		this.get().addEventListener(eventName,eventHandler);}

	DomObject.prototype.css = function(styleKey,styleValue){this.get().style[styleKey] = styleValue;}

	function $(selector,context){//contexttext, textdocument
		return new DomObject((context || document).querySelector(selector));}

	//createmethod, textGame
	function startGame(){ResourceManager.onResourceLoaded = function(){// new Board(); textshowLevel text
			gameInst = new Tetris();
			gameInst.startGame(); //textGame}			
		ResourceManager.init(); //callinitmethod}
	function _init(){//Initialize
		$('.btn-start').on('click',function(ev){//Start Game
			$('.start-container').css('display','none');
			$('.game-container').css('display','block');
			startGame();});
		$('.btn-set').on('click',function(){//textset
			// alert("text")
			$('.modal-dialog ').css('display','block');});
		$('#btn-dialog-close').on('click',function(){//Closetext
			
			$('.modal-dialog ').css('display','none');
			gameInst && gameInst.resume(); //textContinue???????});
		$('#ck-sound').on('change',function(){//textchecktext
			var enable = $('#ck-sound').get().checked;
			window.TetrisConfig.config.enableSound = enable;});

		$('.btn-game-setting').on('click',function(){//setGame
			// alert("text")
			// $('.modal-dialog').css('display','block'); 
			// gameInst.pause(); //Pause Game});
		$('.btn-game-pause').on('click',function(evt){//Pause Game
			// alert("textPausetext");
			var el = evt.target;
			if(el.innerText ==='Pause'){el.innerText = 'Continue';
				gameInst.pause();}else{el.innerText = 'Pause';
				gameInst.resume();}});
		$('.btn-game-start').on('click',function(evt){// startGame();});}

	document.addEventListener('DOMContentLoaded',function(ev){_init();})})(document);