(function(window){'use strict';

	function HighScore(){//Notetext
		this.canvas = new Canvas('highscore',100,70); //canvasobject
		this.highScore = 0; //Scoretext

		this._init();}

	HighScore.prototype = {constructor:HighScore,

		_init:function(){this.highScore = this._getScore();
			this._render();},
		_render:function(){//ControlcontextDraw score
			this.canvas.drawText(this.highScore);},
		_getScore:function(){return window.localStorage.getItem('high-score') ||0;},
		_setScore:function(value){window.localStorage.setItem('high-score',value);},
		checkScore:function(score){if(score>this.highScore){this.highScore =score;
				this._setScore(score);
				this._render();}} 
		//texthighscore};
	window.HighScore = HighScore;})(window);