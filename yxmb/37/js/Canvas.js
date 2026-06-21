(function(window){'use strict';
 /**
 *@param canvasId CanvaselementtextIDtext
 *@param width canvas width
 *@param height canvas height
 */
 function Canvas(canvasId,width,height){//textcanvasobject
 this.canvasId = canvasId;
 this.el = document.getElementById(canvasId);
 
 if(!this.el){throw new Error("Must provider a right canvas id");}
 this.context = this.el.getContext('2d'); //gettextcanvastext2Dtextobject
 this.width = width || window.innerWidth;
 this.height = height || window.innerHeight;
 this._init(); //downtextmethod}
 Canvas.prototype = {//constructor textBacktextcreatetextobjecttextfunctiontext
 constructor: Canvas, //textcanvasfunction 
 _init:function(){this.el.width = this.width; //this.el.width styletext,text
 this.el.height = this.height;},
 clear:function(fromX,fromY,toX,toY){//cleartext
 fromX = fromX ||0; //text0
 fromY = fromY ||0;
 toX = toX ||this.width;
 toY = toY || this.height;
 this.context.clearRect(fromX,fromY,toX,toY); //Startxy,textpointxy},
 drawText:function(text,x,y){//Drawtext
 this.clear(0,0);
 this.context.font = '25px Arial';
 this.context.fillStyle = '#CE670D';
 this.context.textAlign = 'center';
 this.context.fillText(text,x===undefined?(this.width/2):x,y===undefined?35:y);}};

 window.Canvas = Canvas;})(window);

	