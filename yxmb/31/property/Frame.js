/**
 * text
 */
var Frame = function(cvWidth,cvHeight,allImgNum){// definetextlarge small
	this.cvWidth = cvWidth;
	this.cvHeight = cvHeight;
	this.canvas = document.getElementById('canvas');
	this.canvas.width = this.cvWidth;
	this.canvas.height = this.cvHeight;
	this.context = canvas.getContext('2d');
	// text (text, text) 
	this.progress_int = 0;
	// text
	this.allImgNum_int = allImgNum||0;}
Frame.prototype = {/**
	 * gettext
	 */
	getImg:function(src){var o = this;
		var img = new Image();
		img.onload = function(){o.progress_int++};
		img.onerror = function(){alert('textFailed: '+src)};
		img.src = src;
		return img;},
	/**
	 * gettext
	 * @param loop:textLoop playback; autoplay:text
	 */
	getAudio:function(src,loop,autoplay){loop = loop||false;
		autoplay = autoplay||false;
		var o = this;
		var audio = document.createElement('audio');
		audio.loop = loop;
		audio.autoplay = autoplay;
		audio.onloadedmetadata = function(){o.progress_int++};
		audio.onerror = function(){o.progress_int++,alert('textFailed: '+src)};
		audio.src = src;
		return audio;},
	/**
	 * text
	 * text: textobjecttextcalltextmethod
	 */
	playAudio:function(audio){if(audio.error!==null)return;
		var newAudio = document.createElement('audio');
		newAudio.loop = false;
		newAudio.autoplay = true;
		newAudio.onended=function(){newAudio=null};
		newAudio.src=audio.src;
		newAudio.play();},
	/**
	 * DrawInitialize-text
	 */
	_init:function(obj){var o = this;
		o.context.save();
		// textDrawtext
		animate();
		function animate() {o._draw();
		 if(o.progress_int<o.allImgNum_int)Tools.requestAnimFrame(animate);
		 else {o.context.restore();
		 	obj.showFrame();//textEnter Game}}},
	/**
	 * Drawtext
	 */
	_draw:function(){//textcoordinatestext large small
		var x = this.cvWidth*0.2;
		var y = this.cvHeight*0.40;
		var w = this.cvWidth*0.6;
		var h = 24;
		var pro= this.progress_int/this.allImgNum_int;
		var progress = parseInt(w*pro);
		var ctx = this.context;
		ctx.shadowBlur=40;
		ctx.shadowColor='#afa';
		//Drawtext
		ctx.beginPath();
		ctx.fillStyle="#000";
		ctx.fillRect(0,0,this.cvWidth,this.cvHeight);
		ctx.closePath();
		//Drawtext
		ctx.beginPath();
		ctx.lineJoin='round';
		var grd=ctx.createLinearGradient(0,y,0,y+h);
		grd.addColorStop(0,"#6f6");
		grd.addColorStop(0.4,"#afa");
		grd.addColorStop(1,"#6f6");
		ctx.fillStyle=grd;
		ctx.fillRect(x,y,progress,h);
		ctx.closePath();
		//Drawtext
		ctx.beginPath();
		ctx.strokeStyle="#6f6";
		ctx.lineWidth=3;
		ctx.lineJoin='round';
		ctx.strokeRect(x,y,w,h);
		ctx.closePath();
		//Drawtext
		ctx.beginPath();
		grd=ctx.createLinearGradient(0,y+h*2,0,y+h*3);
		grd.addColorStop(0,"#6f6");
		grd.addColorStop(0.4,"#afa");
		grd.addColorStop(1,"#6f6");
		ctx.fillStyle=grd;
		ctx.textAlign="center";
		ctx.font="35px Arial";
		ctx.fillText(parseInt(pro*100)+'%',this.cvWidth*0.5,y+h*3);
		ctx.closePath();}};