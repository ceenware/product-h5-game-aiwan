 /**
 * textanimationtext
 */
(function() {var Animation = function(cfg) {/**
 * animationtext
 */
 this.img = null;
 /**
 * text column text
 * @format {* x: 0,
 * y: 0,
 * duration: 0,
 * collRect: [[left, top, width, height]]
 *}
 */
 this.frames = [];
 /**
 * Loop playback
 */
 this.loop = true;
 /**
 * text
 */
 this.speed = 1;
 /**
 * @read only
 * text
 */
 this.playing = false;
 /**
 * @read only
 * text(Level textfrom0Start)
 */
 this.currentFrameIndex = 0;
 /**
 * @read only
 * textobject
 */
 this.currentFrame = null;
 /**
 * @private
 * text
 */
 this.currentPlayeTimes = 0; //textAnimationtextdefinetext, textobjecttextControltexttransform, textcanvastext
		/**
		 * text
		 */
		this.maxPlayTimes = 4;}
 


 /**
 * Initialize
 */
 Animation.prototype.init=function(imageName,getFrameMethod,framesName){this.img = my.ImageManager.get(imageName);
		 this.frames = getFrameMethod(framesName); 
		 this.currentFrameIndex = 0;
		 this.currentFrame= this.frames[this.currentFrameIndex];
		 this.currentFramePlayed = 0;}

 /**
 * normalUpdate state
 */
	 Animation.prototype.update=function(){if(this.currentPlayeTimes>=this.maxPlayTimes){if(this.currentFrameIndex>= this.frames.length-2){this.currentFrameIndex=0;}else{this.currentFrameIndex++;}
		 this.currentFrame=this.frames[this.currentFrameIndex];
			 this.currentPlayeTimes=0;}else{this.currentPlayeTimes++;}}
	 
 Animation.prototype.draw=function(ct,x,y,w,h){var f = this.currentFrame;
		 ct.drawImage(this.img,f.x,f.y,w,h,x,y,w,h);}

 my.Animation = Animation;})();
