(function(window){'use strict';

	var levalArr = (function(){//textcallfunction
		var arr = [];
		for(var i =0;i<10;i++){//textLevel
			arr.push(Math.pow(2,i)*100); //LevelScoretext}
		return arr;})();

	function Leval(){this.canvas = new Canvas('leval',100,70);
		this.leval = 0;

		this._init();}

	Leval.prototype = {constructor:Leval,

		_init:function(){this._render();},
		_render:function(){//ControlcontextDraw score
			this.canvas.drawText('Leval '+this.leval);},
		checkLeval:function(score){if(score>=levalArr[this.leval]){this.leval++;
				this._render(); //callDraw
				return this.leval;}
			return 0; //??????????}};
	window.Leval = Leval; //textTetristext})(window);