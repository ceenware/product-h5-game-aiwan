function GameFrame(unit,row,col)
{//text
	this.unit = unit;
	//text(column),,(text row text)
	this.row = row;
	//text(row),, (text column text)
	this.col =col;
	//textcreatedivtext
	this.Content;
	//small text
	this.samlldiv;
	//textid
	this.intervalid;
	//speed
	this.speed =document.getElementById("level").value;
	//speedtext
	this.ChangeSped=0;
	//textdiv
	this.datas=[];
	//textmatchrow textScore
	this.score=[0,100,300,600,1000]
	//textdowntext
	this.now;
	//textdowntextdowntext
	this.next;
	//text
	this.nowcolor;
	//textdowntext
	this.nextcolor;
	//text7textcoordinatestext
	this.arr = "0,1,0,2,1,2,2,2;0,1,1,1,1,2,2,2;0,1,0,2,1,1,2,1;0,2,1,1,1,2,2,1;1,0,1,1,1,2,1,3;1,1,1,2,2,1,2,2;1,1,2,0,2,1,2,2".split(";");
	//textsmall text
	this.color=["red","blue","green","yellow","#00FFFF","#930093","#F80000","#984B4B"];
	
	//Initializetextdiv
	this.init = function()
	{//creatediv
		var div = document.createElement("div");
		//setdivtextwidth
		div.style.width = (this.unit*this.row)+"px";
		//setdivtextheight
		div.style.height=(this.unit*this.col)+"px";
		//setdivtextstyle
		div.className="MainFrame";
		div.id="MainFrame";
		//textbodymiddle
		document.getElementById("TFrime").appendChild(div);
		this.Content =div; //textdivtext
		//Initializetext
		for(var i=0;i<this.col;i++)	//itext row
		{for(var j=0;j<this.row;j++){//jtext column
			var sdiv = document.createElement("div");
			sdiv.className="MainFramediv";
			sdiv.style.width = (this.unit - 2) + "px";
			sdiv.style.height = (this.unit - 2) + "px";
			sdiv.style.left=(j*this.unit)+"px";
			sdiv.style.top=(i*this.unit)+"px";
			this.Content.appendChild(sdiv);
			this.datas.push(0);}}
		this.next=Math.floor(Math.random() * this.arr.length);
		this.nextcolor=this.color[Math.floor(Math.random() * this.color.length)];
		Start();}
	
	this.MoveLeft = function()
	{this.samlldiv.moveleft();}
	
	this.MoveRight = function(){this.samlldiv.moveright();}
	
	this.Change = function(){this.samlldiv.change();}
	
	this.MoveDown = function(){if(this.samlldiv.movedown())
		{//			for(var i=0;i<this.samlldiv.divs.length;i++)
//			{//				this.Content.removeChild(this.samlldiv.divs[i]);
//}
			this.samlldiv.rescore();
			Start();}}
	
	function Start()
	{//textnexttextnow
		this.frame.now=this.frame.next;
		this.frame.nowcolor=this.frame.nextcolor;
		//createsmalldiv
		this.frame.samlldiv=new Graph(this.frame);
 	this.frame.samlldiv.init(this.frame.now,this.frame.nowcolor);
 	//textdowntext
 	this.frame.next=Math.floor(Math.random() * this.frame.arr.length);
 	this.frame.nextcolor=this.frame.color[Math.floor(Math.random() * this.frame.color.length)];
 	draw();
 	
 	//calltextdowntext
 	this.frame.intervalid = setInterval(autoMoveDown,this.frame.speed);
 	//checkGametext
 	if (this.frame.samlldiv.movedown()){clearInterval(this.frame.intervalid);
				alert("Game Over!");}}
	
	function autoMoveDown()
	{if(this.frame.samlldiv.movedown())
		{this.frame.samlldiv.rescore();
			Start();}
		
		//textspeed
		if(this.frame.ChangeSped){clearInterval(this.frame.intervalid);
			this.frame.intervalid = setInterval(autoMoveDown,this.frame.speed);
			this.frame.ChangeSped=0;}}
	
	//speedtext, textChangeSpedtext1
	this.changespeed=function(){this.speed=document.getElementById("level").value;
		this.ChangeSped=1;
//		alert(this.ChangeSped);}
	
	//Drawdowntext
	function draw(){//text
		var cleardiv=document.getElementsByClassName("drawdiv");
		for(;;){if(cleardiv.length){document.getElementById("nextfigure").removeChild(cleardiv[0]);}else{break;}}
		//Drawtext
		var smallarr = this.frame.arr[this.frame.next].split(",");
		for (var i = 0; i < 8; i += 2) {var drawdiv = document.createElement("div");
		drawdiv.className = "drawdiv";
		drawdiv.style.backgroundColor=this.frame.nextcolor;
		drawdiv.style.width = (this.frame.unit - 2) + "px";
		drawdiv.style.height = (this.frame.unit - 2) + "px";
		drawdiv.style.top = (((smallarr[i] - 0) * this.frame.unit)+18) + "px";
		drawdiv.style.left = (((smallarr[i + 1] - 0) * this.frame.unit)+18) + "px";
		document.getElementById("nextfigure").appendChild(drawdiv);}}}
