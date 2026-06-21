function Graph(frame) {//text7textcoordinatestext
//	var arr = "0,1,0,2,1,2,2,2;0,1,1,1,1,2,2,2;0,1,0,2,1,1,2,1;0,2,1,1,1,2,2,1;1,0,1,1,1,2,1,3;1,1,1,2,2,1,2,2;1,1,2,0,2,1,2,2".split(";");
	//text4small text
	this.divs = [];
	//textdivtext
	this.parentFrame = frame;
	//text
	this.x = 0;
	this.y = 0;
	//textcoordinatestext
	this.zb = [];
	//textmatchtext row text
	this.line=0;
	
	

	//Initializesmall textmethod
	this.init = function(rand,color) {//textcoordinatestext
			var startleft = (this.parentFrame.row - 4) / 2;
			this.x = startleft;
			//textdowntext
//			var rand = Math.floor(Math.random() * arr.length);
			//scoretextcoordinates
			var smallarr = this.parentFrame.arr[rand].split(",");
			this.zb = smallarr;
			//textsetsmalldivtext lefttexttop
			for (var i = 0; i < 8; i += 2) {//createsmalldiv
				var smalldiv = document.createElement("div");
				//setstyle
				smalldiv.className = "smallDiv";
				//settext
				smalldiv.style.backgroundColor=color;
				//definehigh wide
				smalldiv.style.width = (this.parentFrame.unit - 2) + "px";
				smalldiv.style.height = (this.parentFrame.unit - 2) + "px";
				//setsmalldivtexttop
				smalldiv.style.top = ((smallarr[i] - 0) * this.parentFrame.unit) + "px";
				//setsmalldivtextleft
				smalldiv.style.left = (((smallarr[i + 1] - 0) + startleft) * this.parentFrame.unit) + "px";
				//textsmalldivtext
				this.divs.push(smalldiv);				
				//text
				document.getElementById("MainFrame").appendChild(smalldiv);}
			//text row textdownMove
			//this.parentFrame.intervalid = setInterval(autoMoveDown, this.parentFrame.speed);}
		//leftMove
	this.moveleft = function() {//		var canmove = true;
			//		//checktextleftMove
			//		
			//		for(var i=0;i<this.divs.length;i++)
			//		{//				var left=parseInt(this.divs[i].style.left); //divtextleft
			//				if(left - this.parentFrame.unit <0) //textsmall text0
			//				{//					canmove = false; //textleftMovetext
			//					break;
			//}
			//}

			if (canMove(this.zb, this.x, this.y, this.parentFrame, 2)) //textMove
			{this.x -= 1;
				for (var i = 0; i < this.divs.length; i++) //textsmalldiv, textdivtextlefttext
				{var left = parseInt(this.divs[i].style.left);
					this.divs[i].style.left = (left - this.parentFrame.unit) + "px";}}}
		//rightMove
	this.moveright = function() {//		var canmove = true;
		//			//checktextrightMove
		//		for(var i=0;i<this.divs.length;i++)
		//		{//			var left=parseInt(this.divs[i].style.left);
		//			if(left + this.parentFrame.unit >=parseInt(this.parentFrame.Content.style.width))
		//			{//				canmove = false;
		//				break;
		//}
		//}
		var temp = canMove(this.zb, this.x, this.y, this.parentFrame, 1);
//		alert(temp);
		console.log(temp);
		if (canMove(this.zb, this.x, this.y, this.parentFrame, 1)) {this.x += 1;
			for (var i = 0; i < this.divs.length; i++) {var left = parseInt(this.divs[i].style.left);
				this.divs[i].style.left = (left + this.parentFrame.unit) + "px";}}}

	//text
	this.change = function() {//text
		//smalldivtext2textcoordinatespoint text x = y; y= 3-x; text (0, 1) text text x=1, y=3-0 -> (1,3)
		//text4smalldiv
		if (!canMove(this.zb, this.x, this.y, this.parentFrame, 4)) {if (this.x < 0) {this.x += 1;} else {this.x -= 1;}}
		for (var i = 0; i < this.divs.length; i++) {//textdivtext, 2text
			var temp = this.zb[i * 2]
			this.zb[i * 2] = this.zb[i * 2 + 1];
			this.zb[i * 2 + 1] = 3 - temp;
			//textlefttexttop
			this.divs[i].style.top = ((this.y + parseInt(this.zb[i * 2])) * this.parentFrame.unit) + "px";
			this.divs[i].style.left = ((this.x + parseInt(this.zb[i * 2 + 1])) * this.parentFrame.unit) + "px";}}

	this.movedown = function() {var $this = this =="window"? this.frame.samlldiv: this;
		

		if (canMove($this.zb, $this.x, $this.y, $this.parentFrame, 3)) {$this.y += 1;
			for (var i = 0; i < $this.divs.length; i++) {var top = parseInt($this.divs[i].style.top);
				$this.divs[i].style.top = (top + $this.parentFrame.unit) + "px";}
			return false;} else {clearInterval($this.parentFrame.intervalid);
//			var temp = $this.parentFrame.Content.getElementsByTagName("div");
			for (var i=0;i<$this.divs.length;i++) {//divtext
				//$this.divs[i].className ="smallDivblack";
				var $y = $this.y + parseInt($this.zb[i*2]);
				var $x = $this.x+parseInt($this.zb[i*2+1]);
//				debugger;
				$this.parentFrame.datas[$y*$this.parentFrame.row+ $x] =1;
				$this.divs[i].dataset.row=$y;	//textdivtextrow
				$this.divs[i].dataset.col=$x;	//textdivtextcolumn
				$this.divs[i].className="smallDivblack";
				$this.divs[i].style.backgroundColor="black";
				//$this.parentFrame.datas[]}
				
				
				//text row textscore
				for (var i= 0;i<$this.parentFrame.col;i++) {//itext row
					//checktextrow text
					for (var j=0;j<$this.parentFrame.row;j++) {//jtext column
						if($this.parentFrame.datas[i*$this.parentFrame.row+ j]!=1){break;}}
					//text row, textrowuptextdivdowntextrow
					if(j==$this.parentFrame.row){var x;		//textdivtextcolumn
						var y;		//textdivtextrow
						var getsmalldiv=document.getElementById("TFrime").getElementsByClassName("smallDivblack");//textsmalldiv
						for (var a=0;a<getsmalldiv.length;a++){y=parseInt(getsmalldiv[a].dataset.row);
							x=parseInt(getsmalldiv[a].dataset.col);
							if(y==i){//matchtext row
								debugger;
								$this.parentFrame.datas[y*$this.parentFrame.row+ x]=0;
								getsmalldiv[a].remove();
								a--;}}
						
						for (var a=i-1;a>0;a--) {for (var b=0;b<getsmalldiv.length;b++) {y=parseInt(getsmalldiv[b].dataset.row);
								x=parseInt(getsmalldiv[b].dataset.col);
								if(y==a){//textuptextdivdowntextrow
//								debugger;
								var divtop=parseInt(getsmalldiv[b].style.top);
								getsmalldiv[b].style.top=(divtop+$this.parentFrame.unit)+"px";
								getsmalldiv[b].dataset.row++;
								$this.parentFrame.datas[y*$this.parentFrame.row+ x]=0;
								$this.parentFrame.datas[(y+1)*$this.parentFrame.row+ x]=1;}}}
						$this.line++;
						
//						for (var a=0;a<getsmalldiv.length;a++) {//							y=parseInt(getsmalldiv[a].dataset.row);
//							x=parseInt(getsmalldiv[a].dataset.col);
////							alert(getsmalldiv[a].dataset.row);
//							if(y<i){//textuptextdivdowntextrow
////								debugger;
//								var divtop=parseInt(getsmalldiv[a].style.top);
////								alert(getsmalldiv[a].style.top);
//								getsmalldiv[a].style.top=(divtop+$this.parentFrame.unit)+"px";
//								getsmalldiv[a].dataset.row++;
//								debugger;
//								$this.parentFrame.datas[y*$this.parentFrame.row+ x]=0;
//								$this.parentFrame.datas[(y+1)*$this.parentFrame.row+ x]=1;
//}
////}else if(y==i){//matchtext row
////								debugger;
////								$this.parentFrame.datas[y*$this.parentFrame.row+ x]=0;
////								getsmalldiv[a].className="MainFramediv";
////}
//}}}
					
			return true;}}

//	function autoMoveDown() {//		
//		var small = this.frame.samlldiv;
//		var f = this.frame;
//		
//		if (canMove(small.zb, small.x, small.y, 0, f.col, 3)) {//			small.y += 1;
//			for (var i = 0; i < small.divs.length; i++) {//				var top = parseInt(small.divs[i].style.top);
//				small.divs[i].style.top = (top + f.unit) + "px";
//}
//} else {//			clearInterval(f.intervalid);
//}
//
//}

	//textMovetext, action:1.righttext, 2.lefttext, 3.downtext, 4.text
	//zbtext4small text, xtextlefttext, ytexttoptext,ftextframe
	function canMove(zb, x, y, f, action) {//datas[parseInt(zb[i + 1]) + x + 1)+(this.y-1)*row]!=0
		
		switch (action) {case 1:
//				debugger;
				for (var i = 0; i < zb.length; i += 2) {if (parseInt(zb[i + 1]) + x + 1 >= f.row)
					{return false;}else if(f.datas[(parseInt(zb[i + 1]) + x + 1)+(y+parseInt(zb[i]))*f.row]!=0)
					{return false;}}
				break;
			case 2:
				for (var i = 0; i < zb.length; i += 2) {if (parseInt(zb[i + 1]) + x - 1 < 0) {return false;}else if(f.datas[(parseInt(zb[i + 1]) + x - 1)+(y+parseInt(zb[i]))*f.row]!=0)
					{return false;}}
				break;
			case 3:
				for (var i = 0; i < zb.length; i += 2) {if (parseInt(zb[i]) + y + 1 >= f.col ||
					f.datas[(parseInt(zb[i + 1]) + x)+(parseInt(zb[i]) + y+1)*f.row]!=0) {return false;}}
				break;
			case 4:
				for (var i = 0; i < zb.length; i += 2) {var temp = 3 - zb[i];
					if (temp + x < 0 || temp + x >= f.row) {return false;}}
				break;}
		return true;}
	
	this.rescore=function(){var gamescore=document.getElementById("score");
		gamescore.innerHTML=parseInt(gamescore.innerHTML)+this.parentFrame.score[this.line];}}