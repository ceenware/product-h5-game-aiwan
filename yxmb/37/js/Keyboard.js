
/*keytextControl*/
(function(window){'use strict';
	var keys = {38:'top',
		39:'right',
		40:'down',
		37:'left'}
	function Keyboard(){//textparameter, textkeytext??????????????
		this.board;};
	Keyboard.prototype={constructor:Keyboard,
		init:function(board){//text
			var self = this;
			self.board = board;
			document.addEventListener('keydown',function(evt){//keypresstextkey
				self.processKeyDown(evt);});},
		processKeyDown:function(evt){//text
			if(this.board.gameInst._state!= 'playing'){return;};
			// console.log(evt.keyCode); //textkeytext
			if(keys[evt.keyCode]){//textkeytext
				this.press(keys[evt.keyCode]); //text???????????};},
		press:function(key){//keytextControl
			// console.log('right'); textrow
			var refresh = false;			//text???????
			switch(key){case 'top':

				if(this.board.validMove(0,0)){this.board.shape.rotate();
					refresh = true;}
				//text
				break;
				case 'right':
				if(this.board.validMove(1,0)){//checktext
					this.board.shape.x+=1; //keytextControltextMove
					refresh = true;}				
				break;
				case 'down':
				if(this.board.validMove(0,1)){this.board.shape.y+=1;
					refresh = true;}
				//textdowntext
				break;
				case 'left':
				if(this.board.validMove(-1,0)){this.board.shape.x-=1;
					refresh = true;}
				break;};
			if(refresh){this.board.refresh();
				this.board.shape.draw(this.board.context);
				if(key ==='down'){var self = this;
					window.clearInterval(window.TetrisConfig.intervalId);
					window.TetrisConfig.intervalId = window.setInterval(function(){self.board.tick();},TetrisConfig.speed);
					/*
					setInterval(function(){//textdowntextspeedtext
						self.board.tick();},TetrisConfig.speed);*/}}}};

	window.Keyboard = Keyboard;})(window);