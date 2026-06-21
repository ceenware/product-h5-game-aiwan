(function() {/**
 * UIControl
 */
 var UI = function() {// Ready screen
 this.gameCover = my.DOM.get('gameCover');
 // Game body
 this.gameBody = my.DOM.get('gameBody');
 // Game Over
 this.gameOver = my.DOM.get('gameOver');
 // Score
 this.number = my.DOM.get('number');
	 /**
 * Score
 */
 this.score = 0;
		//text,text
		this.existMatrix;
		this.hammer;
		this.mouse0;
		this.mouse1;
		this.mouse2;
		this.mouse3;
		this.mouse4;
		this.star;
		this.scoreObject;
		this.mousePress=false;}
 /**
 * UIEvent definitions
 */
 // Sound On
 UI.prototype.onsoundopen = my.fn;
 // Sound Off
 UI.prototype.onsoundclose = my.fn;
 // Start
 UI.prototype.onplay = my.fn;
	// text
	UI.prototype.onshowHelp=my.fn;
 // Pause
 UI.prototype.onpause = my.fn;
 // Continue Game
 UI.prototype.onresume = my.fn;
 // Ready
 UI.prototype.onretry = my.fn;

 /**
 * @private
 * InitializetextControltext
 */
 UI.prototype.__initBtnSound = function() {var btnSound = my.DOM.get('btnSound'), UI = this;
 btnSound.onclick = my.delegate(function() {if(my.DOM.hasClass(btnSound, 'disabled')) {my.DOM.removeClass(btnSound, 'disabled');
 this.onsoundopen();} else {my.DOM.addClass(btnSound, 'disabled');
 this.onsoundclose();}}, this, btnSound);}
	
 /**
 * @private
 * InitializeStart Gametext
 */
 UI.prototype.__initBtnPlay = function() {var btnPlay = my.DOM.get('btnPlay'), self = this;
 btnPlay.onclick = function() {self.onplay();}}
 /**
 * @private
 * InitializePausetext
 */
 UI.prototype.__initBtnPause = function() {var btnPause = my.DOM.get('btnPause'), UI = this;
 btnPause.onclick = my.delegate(function() {if(my.DOM.hasClass(btnPause, 'disabled')) {my.DOM.removeClass(btnPause, 'disabled');
 this.onreadystart();} else {my.DOM.addClass(btnPause, 'disabled');
 this.onpause();}}, this, btnPause);}
 /**
 * @private
 * InitializeReadytext
 */
 UI.prototype.__initBtnRetry = function() {var btnRetry = my.DOM.get('btnRetry'), self = this;
 btnRetry.onclick = function() {self.onretry();}}
 /**
 * @private
 * Initializetext
 */
 UI.prototype.__initBtnHelp = function() {var btnHelp = my.DOM.get('btnHelp'),self = this;
 btnHelp.onclick = function() {my.DOM.show(my.DOM.get('HelpDiv'));
			 my.DOM.hide(my.DOM.get('gameCover'));}
		var backMenu = my.DOM.get('btnBack'); //textBacktextMenu
		backMenu.onclick = function(){my.DOM.hide(my.DOM.get('HelpDiv'));
			 my.DOM.show(my.DOM.get('gameCover'));}
		var aboutme = my.DOM.get('btnAboutMe'); //text, Abouttext, text
		var str ="text=_=|||\ntextkeytext(textrz)\ntextkeytext. ~~~~(>_<)~~~~ \nlarge text, textblogtext, text\n(*^__^*) text……\nhttp:\/\/blog.sina.com.cn\/codingforme"
		aboutme.onclick = function(){alert(str);}}
 /**
 * @private
 * InitializeFailedtext
 */
 UI.prototype.__initBtnFail = function() {var btnRetry = my.DOM.get('btnRetry'),self = this;
 btnRetry.onclick = function() {self.onretry();}
		var btnBackToMenu = my.DOM.get('btnBackToMenu'); //FailedtextBacktextMenu
		btnBackToMenu.onclick = function(){self.toCover();}}
	/**
 * @private
 * Next Level
 */
 UI.prototype.__initBtnSuccess = function() {var nextLoding = my.DOM.get('nextLoding'),self = this;
 nextLoding.onclick = function() {my.DOM.hide(my.DOM.get('nextLoding')); 
			self.onresume();}}
 /**
	 * text
	 */
	 UI.prototype.__initMouseEventListener=function(){var canvas = my.DOM.get('gameBody'),self = this;
	 canvas.onmouseover = function(){this.style.cursor='none';}
		 canvas.onmouseout = function(){this.style.cursor='';}
	 canvas.onmousemove = function(e){if(self.hammer){var even = window.event || e; //textcompatibletext, text, text
		 self.hammer.x = even.clientX; self.hammer.x -=300; 
		 self.hammer.y = even.clientY; self.hammer.y -=40;}}
	 canvas.onmousedown = function(){self.mousePress = true;}	
	 canvas.onmouseup = function(e){self.mousePress = false;
			 var even = window.event || e; 
			 self.__pengzhuang(self,even.clientX-300, even.clientY-40);}}

 /**
 * textCollision detection
 */
	 UI.prototype.__pengzhuang = function(self,x,y){outerloop: 
 for(i=0;i<3;i++){for(j=0;j<3;j++){if(self.existMatrix[i][j]==1){var it0 = self.mouse0[i][j],it1 = self.mouse1[i][j],it2 = self.mouse2[i][j],it3 = self.mouse3[i][j],it4 = self.mouse4[i][j];
 if(self.__boundTest(self,it0,x,y,i,j)) {self.__caculateScore(self,"mouse0",x,y,i,j); break outerloop};
					if(self.__boundTest(self,it1,x,y,i,j)) {self.__caculateScore(self,"mouse1",x,y,i,j); break outerloop};
					if(self.__boundTest(self,it2,x,y,i,j)) {self.__caculateScore(self,"mouse2",x,y,i,j); break outerloop};
					if(self.__boundTest(self,it3,x,y,i,j)) {self.__caculateScore(self,"mouse3",x,y,i,j); break outerloop};
					if(self.__boundTest(self,it4,x,y,i,j)) {self.__caculateScore(self,"mouse4",x,y,i,j); break outerloop};}}}}
 /* 
	 *ittextobject
	 */
 
	 UI.prototype.__boundTest=function(self,it,x,y,i,j){if(it.state=='normal'){if(x>it.x && y>(it.y-50) && x<(it.x+it.width) && y<(it.y+it.height-50)){it.state = 'dead';
					 self.star[i][j].state = 'show';
				 self.star[i][j].y=it.y;//textyaxis position
					 Audio.play('no_hit');
					 return true;}}
		 return false;}
 /**
	 * Scoretext
	 */
	 UI.prototype.__caculateScore = function(self,type,x,y,i,j){switch(type)
 {case "mouse0":self.scoreObject[i][j].scoreType=4; this.score+=this.score*0.2; break; //+20%
 case "mouse1":self.scoreObject[i][j].scoreType=3; this.score+=100; break; //+100
 case "mouse2":self.scoreObject[i][j].scoreType=0; this.score+=500; break; //+500
 case "mouse3":self.scoreObject[i][j].scoreType=2; this.score-=100;if(this.score<0) this.score=0; break; //-100
 case "mouse4":self.scoreObject[i][j].scoreType=1; this.score/=2; break; //x/2}
		 self.scoreObject[i][j].x=x;self.scoreObject[i][j].y=y;
		 this.setNumber(~~this.score); //setScore}

 /**
 * Initializetext
 */
 UI.prototype.init = function() {this.__initBtnSound();
 this.__initBtnPlay();
 this.__initBtnPause();
 this.__initBtnFail();
		this.__initBtnSuccess();
 this.__initBtnRetry();
		this.__initBtnHelp();
		this.__initMouseEventListener();}
 /**
 * setScore
 * @param {Number} number
 */
 UI.prototype.setNumber = function(number) {var numberChar = number.toString().split('');
 for(var i = 0; i < numberChar.length; i++) {numberChar[i] = '<span class="number' + numberChar[i] + '"></span>';}
 this.number.innerHTML = numberChar.join('');}
 /**
 * showtexthidePausetext
 * @param {Boolean} state
 */
 UI.prototype.btnPauseVisible = function(state) {if(state) {my.DOM.show(my.DOM.get('btnPause'));} else {my.DOM.hide(my.DOM.get('btnPause'));}}

 /**
 * textReady screen
 */
 UI.prototype.toCover = function() {my.DOM.hide(this.gameBody);
 my.DOM.hide(this.gameOver);
 my.DOM.show(this.gameCover);}
 /**
 * textGame bodytext
 */
 UI.prototype.toBody = function() {my.DOM.hide(this.gameOver);
 my.DOM.hide(this.gameCover);
 my.DOM.show(this.gameBody);}
 /**
 * textGame Overtext
 */
 UI.prototype.toOver = function() {my.DOM.hide(this.gameCover);
 my.DOM.hide(this.gameBody);
 my.DOM.show(this.gameOver);}

	 
	 
	 
 window.UI = UI;})();
