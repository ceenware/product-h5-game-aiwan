/**
 * textairplane
 */
var EnemyPlane = function(img,x,y,w,h,v,hp,hurt,score,gameStart){// text
	this.img = img;
	// coordinates
 this.x_int = x;
 this.y_int = y;
 // large small
 this.w_int = w;
 this.h_int = h;
 // speed
 this.v_float = v;
 // text
 this.hp_int = hp
 // textdamagetext
 this.hurt_int = hurt;
 // textScore
 this.score = score;
 // text
 this.gs = gameStart;};
EnemyPlane.prototype = {//Move
	move:function(fps){this.y_int += this.v_float/fps;
		//checktextairplanetext
		if(this.y_int>this.gs.cvHeight+this.h_int){this.hp_int = 0;}},
	//Draw
	draw:function(fps){var img = this.img;
		var x = this.x_int;
		var y = this.y_int;
		var w = this.w_int;
		var h = this.h_int;
		// checkLivestext
		if (this.hp_int>0) {this.gs.context.drawImage(img,x,y,w,h);
			// callMovemethod
			this.move(fps);} else {this.gs.ep_set.delete(this);// textHPtextfalsetextfromtext
			this.gs.score_int+=this.score;// textScore
			// textanimation
			if(this.hp_int<=0&&y<this.gs.cvHeight){var bomb = new Bomb(this.gs.bomb_img,x,y,w,h,this.gs);
				this.gs.bo_set.add(bomb);}}},
	//textairplanetext
	getRept:function(){return [this.x_int,this.y_int+this.h_int*0.2,this.w_int,this.h_int*0.6];}};