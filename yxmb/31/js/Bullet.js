/**
 * text
 */
var Bullet = function(img,x,y,w,h,vx,vy,hurt,isLife,gameStart){// background image
	this.img = img;
	// coordinates
 this.x_int = x;
 this.y_int = y;
 // large small
 this.w_int = w;
 this.h_int = h;
 // speed
 this.vx_float = vx;
 this.vy_float = vy;
 // textdamagetext
 this.hurt_int = hurt;
 // Livestext
 this.isLife_bool = isLife;
 // text
 this.gs = gameStart;}
Bullet.prototype = {// Move
	move:function(fps){this.y_int -= this.vy_float/fps;
		this.x_int -= this.vx_float/fps;
		//checktext
		if(this.y_int<0-this.h_int){this.isLife_bool = false;}},
	// Draw
	draw:function(fps){var img = this.img;
		var x = this.x_int;
		var y = this.y_int;
		var w = this.w_int;
		var h = this.h_int;
		// checkLivestext
		if (this.isLife_bool) {this.gs.context.drawImage(img,x,y,w,h);
			// callMovemethod
			this.move(fps);} else {this.gs.bt_set.delete(this);// textHPtextfalsetextfromtext}},
	//text
	getRept:function(){return [this.x_int,this.y_int+this.h_int*0.2,this.w_int,this.h_int*0.6];},
	//text
	checkToEpBump:function(){var o = this;
		this.gs.ep_set.forEach(function(item){if(Tools.checkIntersects(o.getRept(),item.getRept())&&item.hp_int>0&&o.isLife_bool){o.isLife_bool = false;
				item.hp_int -= o.hurt_int;
				o.gs.playAudio(o.gs.btToEp_audio);//text}});}};