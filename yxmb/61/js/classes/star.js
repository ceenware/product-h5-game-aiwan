/**
 * text
 */
(function() {var Star = function() {this.x;
 this.y;
		 this.width=111;
		 this.height=72;
		 
 
		 this.state='hide';
		 this.anim;}
	Star.prototype.init = function(x,y){var anim = new my.Animation(); 
		 anim.init('star',getStarFrames,'star');	//Level textimagetextidtext, textstartext
		 this.anim = anim;
		 this.x = x;
		 this.y = y;}
	 

	
 Star.prototype.draw = function(context){if(this.state=='show'){this.anim.update();
		 this.anim.draw(context,this.x,this.y,this.width,this.height);
		 if(this.anim.currentFrameIndex==11){this.state='hide';
			 this.anim.currentFrameIndex=-1;}}}

 window.Star = Star;})();
