(function(window){'use strict';

	function NextShape(){this.canvas = new Canvas('nextshape',100,70);
		
		this._init();}

	NextShape.prototype = {constructor:NextShape,

		_init:function(){this.rows = 4;
			this.cols = 6;},
		render:function(shape){//textRender textparameter********
			this.canvas.clear();
			shape.draw(this.canvas.context,20); //textrightuptextlarge smallparameter
			//16*4~70.16~6~100
			//textshapetext}};
	window.NextShape = NextShape;})(window);