/**
 * textairplane
 */
var MyPlane = function(img,x,y,w,h,v,hp,gameStart){// airplanetext
 this.img = img;
 // coordinates
 this.x_int = x;
 this.y_int = y;
 // large small
 this.w_int = w;
 this.h_int = h;
 //definespeed
 this.v_float = v;
 // Livestext
 this.hp_int = hp;
 // text
 this.gs = gameStart;
 // Direction
 this.isUp_bool=false;
 this.isDown_bool=false;
 this.isLeft_bool=false;
 this.isRight_bool=false;
 // textairplanetext
 this.range = [0-w/3,0,this.gs.cvWidth-w*2/3,this.gs.cvHeight-h];};
MyPlane.prototype = {//Draw
	darw:function(fps){var img = this.img;
		var x = this.x_int;
		var y = this.y_int;
		var w = this.w_int;
		var h = this.h_int;
		if(this.hp_int>0){this.gs.context.drawImage(img,x,y,w,h);
			this.move(fps);}else{// text
			var bomb = new Bomb(this.gs.bomb_img,x,y,w,h,this.gs);
			this.gs.bo_set.add(bomb);}},
	// Move
	move:function(fps){var isUp=this.isUp_bool,isDown=this.isDown_bool,isLeft=this.isLeft_bool,isRight=this.isRight_bool;
		var v = this.v_float/fps;
		if(isUp &&!isDown &&!isLeft &&!isRight){//up
			if(this.y_int>this.range[1])this.y_int -= v;}else if(!isUp &&!isDown &&!isLeft && isRight){//right
			if(this.x_int<this.range[2])this.x_int += v;}else if(!isUp && isDown &&!isLeft &&!isRight){//down
			if(this.y_int<this.range[3])this.y_int += v;}else if(!isUp &&!isDown && isLeft &&!isRight){//left
			if(this.x_int>this.range[0])this.x_int -= v;}else if(isUp &&!isDown && isLeft &&!isRight){//upleft
			if(this.y_int>this.range[1])this.y_int -= v;
			if(this.x_int>this.range[0])this.x_int -= v;}else if(isUp &&!isDown &&!isLeft && isRight){//upright
			if(this.y_int>this.range[1])this.y_int -= v;
			if(this.x_int<this.range[2])this.x_int += v;}else if(!isUp && isDown && isLeft &&!isRight){//downleft
			if(this.y_int<this.range[3])this.y_int += v;
			if(this.x_int>this.range[0])this.x_int -= v;}else if(!isUp && isDown &&!isLeft && isRight){//downright
			if(this.y_int<this.range[3])this.y_int += v;
			if(this.x_int<this.range[2])this.x_int += v;}},
	// textMove
	mouseMove:function(mx,my){//Collision detection, checktextairplane
//		var isIntersects = Tools.checkIntersects(this.getRept(),[mx,my,0,0]);
//		if(isIntersects){this.y_int = my-this.h_int/2;
			this.x_int = mx-this.w_int/2;
//}},
	// textkeytext
	keyDown:function(keyCode){var o = this;
		switch(keyCode){case 37://left
				o.isLeft_bool=true;
				break;
			case 38://up
				o.isUp_bool=true;
				break;
			case 39://right
				o.isRight_bool=true;
				break;
			case 40://down
				o.isDown_bool=true;
				break;}},
	keyUp:function(keyCode){var o = this;
		switch(keyCode){case 37://left
				o.isLeft_bool=false;
				break;
			case 38://up
				o.isUp_bool=false;
				break;
			case 39://right
				o.isRight_bool=false;
				break;
			case 40://down
				o.isDown_bool=false;
				break;}},
	//textairplanetext
	getRept:function(){return [this.x_int,this.y_int+this.h_int*0.2,this.w_int,this.h_int*0.6];},
	//text
	checkToEpBump:function(){var o = this;
		this.gs.ep_set.forEach(function(item){if(Tools.checkIntersects(o.getRept(),item.getRept())&&item.hp_int>0&&o.hp_int>0){o.hp_int -= item.hurt_int;
				item.hp_int = 0;}});}};