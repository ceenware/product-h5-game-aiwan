/**
 * Mouse HitGametext
 */
(function() {var MouseHit = function(cfg) {/**
 * text
 */
 this.hammer = null;

 /**
 * text,text5text
 */
 this.mouse0=[];
		this.mouse1=[];
		this.mouse2=[];
		this.mouse3=[];
		this.mouse4=[];
 /**
 * textInitializexaxis position
 */
 this.mouseX = [[130,322,516],
					 [106,322,522],
					 [97,322,544]];
		/**
 * textInitializeyaxis position
 */
 this.mouseY = [170,262,362];
		this.mouseType=[106];
 	//text,text
		this.existMatrix=[[0,0,0],
						 [0,0,0],
						 [0,0,0]];
		/**
		 * text
		 */
		this.star = [];
 /**
 * Scoretext
 */
		this.scoreObject = [];

 /**
 * UIobject
 */
 this.ui = null;

 /**
 * text
 */
 this.readyTime = 0;

 /**
 * textStart
 */
 this.isGo = false;
 /**
 * canvasupdowntext
 */
	 this.canvas;
 this.context; 
 // text
 this.bg_hole;
 // text
 this.bg_holeHide;
		//Ready3,2,1text, Game over
		this.startNumber= my.ImageManager.get('icon');
		//text
		this.timeRoller = my.ImageManager.get('time_roller');
		//text, textsetIntervaltext 
		this.timeCaculator =0;
		//Level text, textLevel text
		this.dijiguan = 1; 
 //textScore,Level text2000		
		this.requireScore =2000; 
		this.readyInterval;
		this.drawMouseInterval;
		this.drawCanvasInterval;}

 
 /**
 * @private
 * createtext
 */
 MouseHit.prototype.__createHammer = function() {var hammer = new Hammer();
 this.hammer = hammer;}

 /**
 * @private
 * createScoreobject
 */
 MouseHit.prototype.__createScoreObject = function() {for(i=0;i<3;i++)
	 {var arr = [];
 for(j=0;j<3;j++)
			{var score = new Score();
			 arr[j] = score;}
			this.scoreObject[i] = arr;}}
	
 /**
 * @private
 * createtext 
 */
 MouseHit.prototype.__createMouse = function() {for(i=0;i<3;i++)
	 {var arr = [],arr1 = [],arr2 = [],arr3 = [],arr4 = [];
 for(j=0;j<3;j++)
			{var mouse0 = new Mouse(),mouse1=new Mouse(),mouse2=new Mouse(),mouse3=new Mouse(),mouse4=new Mouse();
			 mouse0.init('mouse1',this.mouseX[i][j],this.mouseY[i],106);
			 mouse1.init('mouse2',this.mouseX[i][j],this.mouseY[i],106);
			 mouse2.init('mouse3',this.mouseX[i][j],this.mouseY[i],106);	 
 mouse3.init('mouse4',this.mouseX[i][j],this.mouseY[i]-12,120);
			 mouse4.init('mouse5',this.mouseX[i][j],this.mouseY[i]-25,130);
 arr[j] = mouse0,arr1[j] = mouse1,arr2[j] = mouse2,arr3[j] = mouse3,arr4[j] = mouse4;}
			this.mouse0[i] = arr,this.mouse1[i] = arr1,this.mouse2[i] = arr2,this.mouse3[i] = arr3,this.mouse4[i] = arr4;}}
 /**
 * @private
 * createtext
 */
 MouseHit.prototype.__createStar = function() {for(i=0;i<3;i++)
	 {var arr = [];
 for(j=0;j<3;j++)
			{var star = new Star();
		 star.init(this.mouseX[i][j]+10,this.mouseY[i]); // ytext, text
			 arr[j] = star;}
			this.star[i] = arr;}}	
 /**
 * @private
 * createtext
 */
 MouseHit.prototype.__createScene = function() {// text
 this.bg_hole = new my.Bitmap({image: my.ImageManager.get('bg_hole'),
 width: 750,
 height: 550});
 
 // text
 this.bg_holeHide = new my.Bitmap({image: my.ImageManager.get('bg_holeHide'),
 width: 750,
 height: 550});}
 /**
 * createUIobject
 */
 MouseHit.prototype.__createUI = function() {var ui = new UI(), MouseHit = this;
 ui.init();

 ui.onretry = function() {//Audio.play('ogg_background');

 this.toBody();
 MouseHit.stateInit();}
 this.ui = ui;
 	this.ui.hammer=this.hammer;
		this.ui.mouse0=this.mouse0;
		this.ui.mouse1=this.mouse1;
		this.ui.mouse2=this.mouse2;
		this.ui.mouse3=this.mouse3;
		this.ui.mouse4=this.mouse4;
		this.ui.star=this.star;
		this.ui.scoreObject=this.scoreObject;
		this.ui.existMatrix=this.existMatrix;}
 /**
 * Initialize game
 */
 MouseHit.prototype.init = function() {this.__createScoreObject();
 this.__createHammer();
		this.__createMouse();
		this.__createStar();		
 this.__createScene();
 this.__createUI();
 this.canvas = my.DOM.get('maincanvas');
 this.context = this.canvas.getContext('2d');}

 
 /**
 * text
 * @return {Boolean} Backtext
 */
 MouseHit.prototype.ready = function(self,index) {self.__drawReadyScreen(self);
		switch(index){case 0:self.context.drawImage(self.startNumber,449,296,51,87,360,300,51,87);Audio.play('begin_music');break; //Draw3
			case 1:self.context.drawImage(self.startNumber,390,296,54,87,360,300,54,87);Audio.play('begin_music');break; //Draw2
			case 2:self.context.drawImage(self.startNumber,329,296,52,87,360,300,52,87);Audio.play('begin_music');break; //Draw1
			case 3:self.context.drawImage(self.startNumber,15,296,293,87,245,300,293,87);Audio.play('second_music');break; //Drawstart
			case 4:clearInterval(this.readyInterval); //textIntervaltext
			 self.ui.btnPauseVisible(true);
				 self.__setIntervalFunc(self); //textsetIntervaltext}}
	/**
	 *textdowntextDraw
	 */
	MouseHit.prototype.__drawReadyScreen = function(self){self.context.clearRect(0, 0, self.context.canvas.width, self.context.canvas.height); 
	 self.context.drawImage(self.bg_hole.image, 0, 0, self.bg_hole.width, self.bg_hole.height);}
	/**
	 *textDraw
	 *passPix text
	 */
	MouseHit.prototype.__drawTimeRoller = function(self,passPix){self.context.drawImage(self.timeRoller,0,80,373,68,183,149,220,40);
		self.context.drawImage(self.timeRoller,0,152,373-passPix,40,182+passPix,163,220-passPix,25);
	 self.context.drawImage(self.timeRoller,0,0,373,80,183,143,220,51);}
	/**
	 * Game bodytextsetsetIntervaltext
	 */
	MouseHit.prototype.__setIntervalFunc = function(self){this.drawCanvasInterval = setInterval(function(){self.drawScreen(self);
		 self.__checkIsPass(self); //Levelcheck, text, text}, 30);
	 this.drawMouseInterval = setInterval(function(){self.randomSelectMouse(self);}, 2000);}
 /**
	 * Levelcheck
	 */
	MouseHit.prototype.__checkIsPass = function(self){if(self.timeCaculator>2100){//Leveltext
		 clearInterval(self.drawCanvasInterval);//text
			clearInterval(self.drawMouseInterval);//text
		 self.timeCaculator=0;
		 if(self.ui.score>=self.requireScore){//text
			 self.requireScore+=400; //text200
				my.DOM.get('currentScore').innerHTML=~~self.ui.score;
				my.DOM.get('requireScore').innerHTML=~~self.requireScore;
				my.DOM.show(my.DOM.get('nextLoding')); //Next Leveltext
			 self.dijiguan++;
				self.ui.score=0;
				self.ui.setNumber(0);
				Audio.play('game_pass');
		 //textset}else{//text
				self.requireScore=2000;
				self.dijiguan=1;
				self.ui.toOver();//Failedtext
				my.DOM.get('score').innerHTML="textScore: "+~~self.ui.score;
				self.ui.score=0;
				Audio.play('over_music');}}else{self.__drawTimeRoller(self,self.timeCaculator/10); //Drawtext
		 self.timeCaculator++;}}
	/**
	 * text
	 */
	MouseHit.prototype.randomSelectMouse = function(self){var createNum = my.Math.random(1,2);
		 for(var i=1;i<=createNum;i++){var a = my.Math.random(0,2);
			 var b = my.Math.random(0,2);
			 if(self.existMatrix[a][b]==1){// text, text
			 i--;}else{self.existMatrix[a][b]=1; //settext
				var k = my.Math.random(0,4);
				if(k==0){self.mouse0[a][b].state='normal';}
				else if(k==1){self.mouse1[a][b].state='normal';}
				else if(k==2){self.mouse2[a][b].state='normal';}
				else if(k==3){self.mouse3[a][b].state='normal';}
				else {self.mouse4[a][b].state='normal';}}}}
	MouseHit.prototype.drawMouse = function(self,i,j){self.mouse0[i][j].draw(self.context,self.existMatrix,i,j);
		self.mouse1[i][j].draw(self.context,self.existMatrix,i,j);
		self.mouse2[i][j].draw(self.context,self.existMatrix,i,j);
		self.mouse3[i][j].draw(self.context,self.existMatrix,i,j);
		self.mouse4[i][j].draw(self.context,self.existMatrix,i,j);}
	MouseHit.prototype.drawScreen = function(self){self.context.clearRect(0, 0, self.context.canvas.width, self.context.canvas.height); //textcanvas
	 self.context.drawImage(self.bg_hole.image, 0, 0, self.bg_hole.width, self.bg_hole.height); //text, textcanvas, text
 for(j=0;j<3;j++)
		 self.drawMouse(self,0,j); //Level text row text
		for(j=0;j<3;j++) 
		 self.star[0][j].draw(self.context); //Level text row text
	 	self.context.drawImage(self.bg_holeHide.image,0,0,self.bg_holeHide.width,302, 0, 0, self.bg_holeHide.width,302); //Level text row text
 for(j=0;j<3;j++)
		 self.drawMouse(self,1,j); //Level text row text
		for(j=0;j<3;j++) 
		 self.star[1][j].draw(self.context); //Level text row text
 self.context.drawImage(self.bg_holeHide.image,0,302,self.bg_holeHide.width,100, 0, 302, self.bg_holeHide.width,100); //Level text row text 
 for(j=0;j<3;j++)
		 self.drawMouse(self,2,j); //Level text row text
		for(j=0;j<3;j++) 
		 self.star[2][j].draw(self.context); //Level text row text
		self.context.drawImage(self.bg_holeHide.image,0,400,self.bg_holeHide.width,100, 0, 400, self.bg_holeHide.width,100); //Level text row text 	
		for(i=0;i<3;i++) 
		 for(j=0;j<3;j++) 
		 self.scoreObject[i][j].draw(self.context); //Scoreobject
		self.hammer.draw(self.context,self.ui.mousePress);//text}
	
	
 /**
 * Initialize state
 */
 MouseHit.prototype.stateInit = function() {this.ui.setNumber(0);//InitializeScore
 this.__drawReadyScreen(this);
 // UI
 this.ui.btnPauseVisible(false);
 var self = this;
		var index= 0;
		this.readyInterval = setInterval(function(){//setIntervaltext, textControltextparametertext
	 self.ready(self,index);
			index++;},1000);}
	
 window.MouseHit = MouseHit;})();
