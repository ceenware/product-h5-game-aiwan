
/**
 * airplanetextanimation
 */
var Bomb = function(imgArr,x,y,w,h,gameStart){// text
	this.img_arry = imgArr;
	// coordinates
 this.x_int = x;
 this.y_int = y;
 // large small
 this.w_int = w;
 this.h_int = h;
 // text
 this.gs = gameStart;
 // text
 this.fps_num = 0;}
Bomb.prototype = {//Draw
	draw:function(){var img_arry = this.img_arry;
		var x = this.x_int;
		var y = this.y_int;
		var w = this.w_int;
		var h = this.h_int;
		// text
		this.gs.context.drawImage(img_arry[this.fps_num++],x,y,w,h);
		// animationtextfromtextdeletetextobject
		if (this.fps_num==img_arry.length) {this.gs.bo_set.delete(this);}}};