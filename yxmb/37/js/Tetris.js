(function(window){'use strict';

	// var intervalId; //Timerid
	// var speed = 400;


	function Tetris(){//Gameobject

		this.board = new Board(this); //textthis, text row text
		this.score =new Score(); //Draw score
		this.timer = new Timer(); //Drawtext
		this.leval = new Leval(); //Drawlevel text
		this.nextshape = new NextShape(); //Drawdowntext 
		this.highscore = new HighScore(); //Drawtext highscore
		this._sound;		//text
		this._state = 'playing';
		(new Keyboard()).init(this.board); //Initializekeytext, textkeyboard};

	Tetris.prototype={constructor:Tetris,
		_initAudio:function(){//text
			this._sound = new Howl({src:['audio/bg.wav'],
				loop:true,
				volume:0.3});
			// this._sound.play();
			this._playSound();},
		_playSound:function(){if(window.TetrisConfig.config.enableSound){this._sound.play();}},

		_startTick(){var self = this;
		window.TetrisConfig.intervalId = window.setInterval(function(){self.board.tick(); //text thistexttetristextthistext, textselftextcall},TetrisConfig.speed);},
		_stopTick:function(){clearInterval(window.TetrisConfig.intervalId);},
		startGame:function(){//Start Game
			// var self = this;
			this._initAudio();			//calltextfunction
			this._startTick();},
		endGame:function(){//textGame
			//text
			this._sound.stop();
			//texttick
			this._stopTick();
			//text
			this._stopTick();
			//text
			this.timer.stop();},
		pause:function(){//Pausetext
			//Pausetext 1,text, 2, text
			//Canceltick
			//PauseTimer
			if(this._state==='over'){//textContinuetext
				return;}
			this._sound.pause();
			this._state = 'pause';
			this._stopTick();
			this.timer.pause();},
		resume:function(){if(this._state==='over'){return;}
			this._playSound();;
			this._state = 'playing';
			this._startTick();
			this.timer.resume();}}
	window.Tetris = Tetris;})(window);