(function(window){'use strict';
	function Board(gameInst){this.gameInst =gameInst; 
	this.blockSize = 30; //textlarge small
	this.rows = TetrisConfig.rows;			//textconfig.jstext
	this.cols = TetrisConfig.cols;
	this.canvas = new Canvas('c_game_main',this.cols*this.blockSize,this.rows*this.blockSize);
	this.context = this.canvas.context;
	this.boardList = [];
	this.shape = new window.Shape();

	this._init();
	var b = ResourceManager.getResource('blocks'); //text
	console.log(b);
	console.log("text");}

Board.prototype ={constructor: Board,
	_init:function(){this._buildGridData();
		this._initGrid();

		this.shape.draw(this.context); //Initializetext
		var self = this; //addtext, textrendertext
		setTimeout(function(){self._buildNextShape();			//calldown downtext})},
	_buildNextShape:function(){this.nextShape = new window.Shape(); //Notetext
		this.nextShape.setPosition(this.gameInst.nextshape.cols,this.gameInst.nextshape.rows); //text textobjecttext????????
		this.gameInst.nextshape.render(this.nextShape); //Drawtextrightuptext},
	_buildGridData(){//createtext
		var i,j;
		for(i=0;i<this.rows;i++){this.boardList[i] = [];
			for(j=0;j<this.cols;j++){this.boardList[i][j] = 0;}}
		// console.log(this.boardList); text},
	_initGrid(){//createtext
		var i;
		this.context.strokeStyle = 'green';
		this.context.lineWidth = 0.5;

		//Drawtext
		for(i=0;i<=this.rows;i++){//Drawtext
			this.context.moveTo(0,i*this.blockSize);
			this.context.lineTo(this.canvas.width,i*this.blockSize);}
		for(i=0;i<=this.cols;i++){//Drawtext
			this.context.moveTo(i*this.blockSize,0);
			this.context.lineTo(i*this.blockSize,this.canvas.height);}

		//text
		this.context.stroke();

		//text text, text
		this.gridImageData = this.context.getImageData(0,0,this.canvas.width,this.canvas.height);//textcoordinates},
	tick:function(){if(this.validMove(0,1)){//textdowntext
			this.shape.y+=1; //text, y+1}else{this.addShapeToBoardList();			//addtext
			if(this.gameInst._state ==='over'){this.gameInst.endGame();
				return; //false;}
			this.clearFullRows();				//addtext, text row text
			// this.shape = new window.Shape(); //textshape??????16text
			this.shape = this.nextShape; //??? Controlrightuptext
			this.shape.setPosition(this.cols,this.rows,true); //turetextyrow
			this._buildNextShape();}
		
		this.refresh(); //text
		this.shape.draw(this.context); //Continuetext (textdowntext)},
	refresh:function(){this.canvas.clear(); //Clear canvas (Drawtext) 
		this.context.putImageData(this.gridImageData,0,0)//textcanvas,
		//(text, textpoint)
		
		this.drawBlocks(); //text, text},
	validMove:function(moveX,moveY){//textControl??????????????????????
		//downtext
		var nextX = this.shape.x +moveX;
		var nextY = this.shape.y+moveY;
		for(var y = 0;y<this.shape.layout.length;y++){//Level text row
			for(var x=0;x<this.shape.layout[y].length;x++){if(this.shape.layout[y][x]){if(typeof this.boardList[nextY+y]==='undefined' //textrow
					|| typeof this.boardList[nextY+y][nextX+x]==='undefined' //textcolumn
					|| this.boardList[nextY+y][nextX+x] //text
					|| nextX+x <0	//textlefttext
					|| nextX+x>=this.cols	//textrighttext
					|| nextY+y>=this.rows	//textdowntext){return false;}}}}
		return true;},
	addShapeToBoardList:function(){//text
	 for (var y = 0; y < this.shape.layout.length; y++) {for (var x = 0; x < this.shape.layout[y].length; x++) {if (this.shape.layout[y][x]) {//
 var boardX = this.shape.x + x;		//
 var boardY = this.shape.y + y;
 if (this.boardList[boardY][boardX]) {//textup
 // todo Game over
 this.gameInst._state = 'over';
 return; //text}
 else {this.boardList[boardY][boardX] = this.shape.blockType;
 // this.boardList[boardY][boardX] = 1;}}}}},
	drawBlocks:function(){//Drawtext
	 for (var y = 0; y < this.rows; y++) {for (var x = 0; x < this.cols; x++) {if (this.boardList[y][x]) {//text????????
 // this.shape.block.draw(this.context, x, y);			//textdowntext
 this.shape.block.draw(this.context, x, y, this.boardList[y][x]);}}}},
	createEmptyRow(){//createrow
		var emptyArr = [];
		for(var i=0;i<this.cols;i++){emptyArr.push(0);}
		return emptyArr;},
	clearFullRows:function(){var self =this;
		var lines = 0;
		for(var y = this.rows-1;y>=0;y--){var filled = this.boardList[y].filter(function(item){return item>0;}).length ===this.cols;
			if(filled &&y){this.boardList.splice(y,1);			//boardListtext???, 
				this.boardList.unshift(this.createEmptyRow()); //textLevel text row
				lines++;
				y++; //}}
		//textScore
		var score = lines*10*lines; //textrow text*text rowScore*text
		var totalScore = this.gameInst.score.addScore(score);		//textScoretext
		this.gameInst.highscore.checkScore(totalScore); // text highscore
		var currentLeval = this.gameInst.leval.checkLeval(totalScore);
		if(currentLeval){window.TetrisConfig.speed = Math.floor(window.TetrisConfig.constSpeed * (1 - (currentLeval - 1) / 10)); 
			 //textLeveltextdowntextspeed
			 this.gameInst.pause();
			 setTimeout(function(){window.alert('textlevel text');
			 	self.gameInst.resume();})}}};
window.Board = Board; //text})(window);
