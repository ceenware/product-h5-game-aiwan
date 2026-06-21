/**
 * text
 * text, text
 */
(function() {var Hammer = function() {//textposition
 this.x=150;
		this.y=150;
	 // settextlarge small
 this.width = 98;
 this.height = 77;
	 this.image = my.ImageManager.get('hammer');}
 Hammer.prototype.draw = function(context,isPress){if(isPress){context.save(); 
 context.translate(this.x-30, this.y+44);
 context.rotate(Math.PI/180*330);
 context.drawImage(this.image, 0, 0, this.width, this.height); 
 context.restore();}else{context.drawImage(this.image, this.x, this.y, this.width, this.height);}}

 window.Hammer = Hammer;})();
