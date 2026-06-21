
function Block(dom){this.dom = dom; //dom
	this.parentW = this.dom.parentNode.clientWidth;
	this.parentH = this.dom.parentNode.clientHeight;
	this.scale = 1.5; //black text wide high text
	this.h = parseInt(this.parentW/3*this.scale);
	this.top = -this.h;
	this.speed = 2; //speed
	this.maxSpeed = 26; //text largespeed
	this.timer = null; //text
	this.state = true; //Gamecheck
	this.sum = 0; //Score}

Block.prototype.init = function(){var _t = this;

	_t.zsy();
	_t.mark();

	var clickEvent = "ontouchstart" in document.documentElement? "touchstart": "click";

	_t.dom.addEventListener(clickEvent,function(e){if(!_t.state){return false;}
		e = e || window.event;
		var target = e.target ||e.srcElement;
		if(target.className.indexOf('block')!=-1){//textpoint textred packets
			_t.sum++;
			_t.getEleByClassName("mark")[0].innerHTML = _t.sum;
			var s = Math.floor(Math.random()*2+1);
			
			target.className = 'cell block_click'+s;
			log(target)}else{//textpoint textred packets-text
			_t.state = false;
			clearInterval(_t.timer);
			_t.end();
			return false;}});}

//createtext row,,, 
Block.prototype.addRow = function(){var oRow = document.createElement('div');
	oRow.className = 'row';
	oRow.style.height = this.h + 'px';

	var cells = ['cell','cell','cell','cell'];
	var s = Math.floor(Math.random()*4);
	cells[s] = "cell block";
	var oCell = null;

	for (var i=0; i<4; i++) {oCell = document.createElement('div');
		oCell.className = cells[i];
		oRow.appendChild(oCell);}

	var fChild = this.dom.firstChild;
	if(fChild == null){this.dom.appendChild(oRow);}else{this.dom.insertBefore(oRow, fChild);}}

function log(obj){console.log(obj);}
//deletetext row,,, 
Block.prototype.delRow = function(){log(1);
	this.dom.removeChild(this.dom.childNodes[this.dom.childNodes.length-1]);}


//checktexttop textspeed,,, text
Block.prototype.judge = function(){var _t = this;

	if(_t.top >= 0){_t.top = -this.h;
		_t.dom.style.top = _t.top +'px';
		_t.addRow();}

	var rows = _t.getEleByClassName('row','div',_t.dom);
	for (var i=0; i<rows.length; i++) {if (rows[i].offsetTop >= _t.parentH +_t.h) {_t.delRow();}}

	_t.speed = (parseInt(_t.sum/5)+1)*2; //textpoint text white textspeed
	if(_t.speed >=_t.maxSpeed){_t.speed = _t.maxSpeed;} //text largespeed 

	var blocks = _t.getEleByClassName('block','div',_t.dom);
	for (var j=0; j<blocks.length; j++){if (blocks[j].offsetTop >= _t.parentH){_t.state = false;
			clearInterval(_t.timer);
			_t.end();}}}

Block.prototype.getEleByClassName = function(className,tagName,context){context = context || document;
	tagName = tagName || '*';
	if(document.getElementsByClassName) {return context.getElementsByClassName(className);} else {var el = new Array();
		var aEle = context.getElementsByTagName(tagName);
		var re=new RegExp('\\b'+className+'\\b', 'i');
 		var i=0;
 		for(i=0;i<aEle.length;i++)
		{if(re.test(aEle[i].className))
			{aResult.push(aEle[i]);}}
		return aResult;}}

//Move
Block.prototype.move = function(){this.top += this.speed;
	this.dom.style.top = this.top +'px';}

//Score
Block.prototype.mark = function(){var oMark = document.createElement("div");
	oMark.className = "mark";
	oMark.innerHTML = this.sum;
	this.dom.parentNode.appendChild(oMark);}

//responsive element
Block.prototype.zsy = function(){var _t = this;
	if("ontouchstart" in document.documentElement){_t.dom.parentNode.className = "ph-main";}}

//game start
Block.prototype.start = function(){var _t = this;

	for(var i=0; i<4; i++){_t.addRow();}

	_t.timer = setInterval(function(){_t.move();
		_t.judge();},30);}




//Game Over 
Block.prototype.end = function(){var _t = this;

	if(!document.getElementById("againMask")){var againMask = document.createElement('div');
		againMask.className = 'again-mask';
		againMask.id = 'againMask';
		
	 // againMask.innerHTML =
		'<div id="gove" ><h2 id="againSum">Wow!you only caught '+_t.sum+'red packets</h2><h1>Need better luck next time!</h1><span id="againStart"><img src="img/e1.png"></span><span id="againStart_two"><img src="img/e2.png"></span><div>';
		
		_t.dom.parentNode.appendChild(againMask);}else{var againMask = document.getElementById("againMask");
		againMask.style.display = "block";
		var againSum = document.getElementById("againSum");
		//againSum.innerHTML = "Score 2: "+_t.sum;}
	
	/***************check****************/

if(0<_t.sum<=4){againMask.innerHTML =
		'<div id="gove" ><h2 id="againSum">Wow!you only caught '+_t.sum+'red packets</h2><h1>Need better luck next time!</h1><span id="againStart"><img src="img/e1.png"></span><span id="againStart_two"><img src="img/e2.png"></span><div>';}


if(_t.sum>=5){againMask.innerHTML =
		'<div id="gove" ><h2 id="againSum">Wow, caught '+_t.sum+'red packets</h2><h1>Great job!</h1><span id="againStart"><img src="img/e1.png"></span><span id="againStart_two"><img src="img/e2.png"></span><div>';}

	/***************check****************/
	
	var againStart = document.getElementById("againStart");
	againStart.onclick = function(){_t.again();
		againMask.style.display = "none";
		
		return false;}}

//restart game
Block.prototype.again = function(){this.parentW = this.dom.parentNode.clientWidth;
	this.parentH = this.dom.parentNode.clientHeight;
	this.scale = 1.5; //black text wide high text
	this.h = parseInt(this.parentW/3*this.scale);
	this.top = -this.h;
	this.speed = 2; //speed
	this.timer = null; //text
	this.state = true; //Gamecheck
	this.sum = 0; //Score


	var _t = this;
	_t.dom.innerHTML = "";
	_t.getEleByClassName('mark','div')[0].innerHTML = _t.sum;
	_t.start();}