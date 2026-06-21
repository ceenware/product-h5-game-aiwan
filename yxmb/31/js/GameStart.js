//import {Frame} form '../property/Frame';
//import {MyPlane} form './MyPlane';

/**
 * GameInitialize
 * text: Frame
 */
var GameStart = function(){//definetextlarge small
	var Ww = window.innerWidth;
	var Wh = window.innerHeight;
	
	Frame.call(this,Ww,Wh,33);
	
	/**************getGametext*************/
	// textairplanetext
	this.plane_img = this.getImg('./image/myplane1.png');
	// textbackground image
	this.bg_img = [this.getImg('./image/bg_01.jpg'),
		this.getImg('./image/bg_02.jpg'),
		this.getImg('./image/bg_03.jpg'),
		this.getImg('./image/bg_04.jpg'),
		this.getImg('./image/bg_05.jpg')];
	// text
	this.enemy_img = [this.getImg('./image/dj10.png'),
		this.getImg('./image/dj6.png'),
		this.getImg('./image/dj1.png')];
	// text
	this.bullet_img1 = this.getImg('./image/bullet1.png');
	// text
	this.bomb_img = [this.getImg('./image/b11.gif'),
		this.getImg('./image/b10.gif'),
		this.getImg('./image/b9.gif'),
		this.getImg('./image/b8.gif'),
		this.getImg('./image/b7.gif'),
		this.getImg('./image/b6.gif'),
		this.getImg('./image/b5.gif'),
		this.getImg('./image/b4.gif'),
		this.getImg('./image/b3.gif'),
		this.getImg('./image/b2.gif'),
		this.getImg('./image/b1.gif')];
	// textHPtext
	this.HP_img4 = this.getImg('./image/img_HP.png');
	// text
	this.num_img = [this.getImg('./image/0.png'),
		this.getImg('./image/1.png'),
		this.getImg('./image/2.png'),
		this.getImg('./image/3.png'),
		this.getImg('./image/4.png'),
		this.getImg('./image/5.png'),
		this.getImg('./image/6.png'),
		this.getImg('./image/7.png'),
		this.getImg('./image/8.png'),
		this.getImg('./image/9.png')];
		
	/**************getGametext*************/
	this.btToEp_audio = this.getAudio('./audio/zd.mp3');//text
	
 /**************text text text text*************/
	//text
	var thisTime = new Date().getTime();
	// text
	this.ep_set = new Set();
	// text
	this.bt_set = new Set();
	// text
	this.eb_set = new Set();
	// text
	this.st_set = new Set();
	// text
	this.fl_set1 = new Set();
	this.fl_set2 = new Set();
	this.fl_set3 = new Set();
	// textanimationtext
	this.bo_set = new Set();
	
	// defineScore
	this.score_int = 0;
	// definetextparameter
	this.pl_hp = 80;//HP
	var pl_w = 96;//width
	var pl_h = 64;//height
	var pl_x = (this.cvWidth-pl_w)/2;
	var pl_y = this.cvHeight-pl_h-50;
	var pl_v = 240;//speed
	this.myPlane = new MyPlane(this.plane_img,pl_x,pl_y,pl_w,pl_h,pl_v,this.pl_hp,this);
	// definetextparameter (3text) 
	this.ep_hp = [5,15,30];//HP
	this.ep_w = [74,106,130];//width
	this.ep_h = [53,81,98];//height
	this.ep_vy = [120,72,66];
	this.ep_hurt = [10,20,30];
	this.ep_score = [100,300,600];//textScore
	this.ep_intterval = [3000,10000,24000];
	this.ep_time = [thisTime,thisTime,thisTime];
	// definetextparameter
	this.bt_w = 15;
	this.bt_h = 30;
	this.bt_vx = 0;
	this.bt_vy = 600;
	this.bt_hurt = 5;
	this.bt_intterval = 150;
	this.bt_time = thisTime;
	
	
	// settext
	var bg_this = this.bg_img[parseInt(Math.random()*4.99)];
	this.bg1 = new BackGround(bg_this,0,0,this.cvWidth,this.cvHeight,42,this);
	this.bg2 = new BackGround(bg_this,0,0-this.cvHeight,this.cvWidth,this.cvHeight,42,this);
	
	this._init(this);}
GameStart.prototype = extend(Frame.prototype,{// Initialize--showtext
	showFrame:function(){var o = this;
		var isPause = false;//textPause
		//textkeytext
		window.addEventListener('keydown',function(event){var e = event || window.event;
			o.myPlane.keyDown(e.keyCode);});
		window.addEventListener('keyup',function(event){var e = event || window.event;
			if(e.keyCode==32){//Space key-textGamePause
				if(isPause){isPause = false;
					Tools.fps_lastTime = 0;
					animate(new Date().getTime(),1000/60);}else{isPause = true;}}else{o.myPlane.keyUp(e.keyCode);}});
		//textMove
		o.canvas.addEventListener('mousemove',function(event){var e = event || window.event;
			o.myPlane.mouseMove(e.offsetX,e.offsetY);});
		//textMove
		o.canvas.addEventListener('touchmove',function(event){var e = event || window.event;
			var ct = e.changedTouches[0];
			o.myPlane.mouseMove(ct.pageX,ct.pageY);});
		// textDrawtext
		animate(new Date().getTime(),1000/60);
		function animate(thisTime,fps) {if(!isPause){Tools.requestAnimFrame(animate,isPause);}
		 o.draw(thisTime,fps);}},
	// Drawtext
	draw:function(thisTime,fps){this.gaming(thisTime,fps);},
	//Enter Gametext
	start:function(){},
	//Gametext row text
	gaming:function(thisTime,fps){var o = this;
		//Drawtext
		this.bg1.darw(fps);
		this.bg2.darw(fps);
		//text
		if(thisTime-this.bt_time>this.bt_intterval){this.creatBullet();
			this.bt_time=thisTime;}
		//text
		if(thisTime-this.ep_time[2]>this.ep_intterval[2]){this.creatEnemyPlane(2);
			this.ep_time[2]=thisTime;}
		if(thisTime-this.ep_time[1]>this.ep_intterval[1]){this.creatEnemyPlane(1);
			this.ep_time[1]=thisTime;}
		if(thisTime-this.ep_time[0]>this.ep_intterval[0]){this.creatEnemyPlane(0);
			this.ep_time[0]=thisTime;}
		//Drawtext
		this.ep_set.forEach(function(item){item.draw(fps);});
		//Drawtextanimation
		this.bo_set.forEach(function(item){item.draw(fps);});
		//Drawtext
		this.bt_set.forEach(function(item){item.draw(fps);
			//Collision detection
			item.checkToEpBump();});
		//Drawtext
		this.myPlane.darw(fps);
		//Collision detection
		this.myPlane.checkToEpBump();
		//DrawScoretext
		this.showScore();
		this.showHp();},
	//Game Overtext
	over:function(){},
	//DrawScore
	showScore:function(){var o = this;
		var score_str = ''+o.score_int;
		var x = o.cvWidth-52-score_str.length*32,y = 15;
		score_str = score_str.split('');
		score_str.forEach(function(code_str){var code_int = parseInt(code_str);
			o.context.drawImage(o.num_img[code_int],x+=32,y,28,38);});},
	//Drawtext
	showHp:function(){var mp = this.myPlane;
		//Drawtext
		this.context.beginPath();
		this.context.fillStyle="red";
		this.context.fillRect(48,20,140*mp.hp_int/this.pl_hp,24);
		this.context.closePath();
		//Drawtext
		this.context.beginPath();
		this.context.strokeStyle="#bb3e00";
		this.context.lineWidth=3;
		this.context.strokeRect(48,20,140,24);
		this.context.closePath();
		//Drawtexthp
		var img = this.HP_img4;
		this.context.drawImage(img,10,14,57,34);},
	//text
	creatBullet:function(){var mp = this.myPlane;
		if(mp.hp_int<=0)return;//text, text
		var img = this.bullet_img1;
		var w = this.bt_w;
		var h = this.bt_h;
		var x = mp.x_int+(mp.w_int-w)/2;
		var y = mp.y_int-h;
		var vx = this.bt_vx;
		var vy = this.bt_vy;
		var hurt = this.bt_hurt;
		var bt = new Bullet(img,x,y,w,h,vx,vy,hurt,true,this);
		this.bt_set.add(bt);},
	//text
	creatEnemyPlane:function(index){var mp = this.myPlane;
		if(mp.hp_int<=0)return;//text, text
		var img = this.enemy_img[index];
		var w = this.ep_w[index];
		var h = this.ep_h[index];
		var x = parseInt(Math.random()*(this.cvWidth-w));
		var y = 0-h;
		var v = this.ep_vy[index];
		var hp = this.ep_hp[index];
		var hurt = this.ep_hurt[index];
		var score = this.ep_score[index];
		var ep = new EnemyPlane(img,x,y,w,h,v,hp,hurt,score,this);
		this.ep_set.add(ep);}});
