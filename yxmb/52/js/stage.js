
var Stage = function(context,l){this.ctx = context;
	this.ctx.fillStyle = "#7f7f7f";
	this.drawHeigth = 15;
	this.level = l;
	this.temp = 0;
	this.dir = 1; //middletextDirection, 1: textup, 2: text
	this.isReady = false;//text
	this.levelNum = new Num(context);
	
	this.init = function(level){this.dir = 1;
		this.isReady = false;
		this.level = level;
		this.temp = 0;};
	
	this.draw = function(){if(this.dir == 1){//temp = 15*15 text
			if(this.temp == 225){//78,14textSTAGEtextmiddletext wide text high, 194,208textcanvasmiddletext
				this.ctx.drawImage(RESOURCE_IMAGE, POS["stageLevel"][0], POS["stageLevel"][1], 78, 14, 194, 208, 78, 14);
				//14textwide text high, 308, 208textcanvasmiddletext
				this.levelNum.draw(this.level,308, 208);
				//this.ctx.drawImage(RESOURCE_IMAGE,POS["num"][0]+this.level*14,POS["num"][1],14, 14,308, 208,14, 14);
				//Draw map,callmaintextmethod
				initMap();}else if(this.temp == 225 + 600){//600textcalltext600/15text, text
				this.temp = 225;
				this.dir = -1;
				START_AUDIO.play();}else{this.ctx.fillRect(0, this.temp, 512, this.drawHeigth);
				this.ctx.fillRect(0, 448 - this.temp - this.drawHeigth, 512, this.drawHeigth);}}else{if(this.temp >= 0){this.ctx.clearRect(0, this.temp, 512, this.drawHeigth);
				this.ctx.clearRect(0, 448 - this.temp - this.drawHeigth, 512, this.drawHeigth);}else{this.isReady = true;}}
		this.temp += this.drawHeigth * this.dir;};};