/**
 * textanimationtext
 */
(function() {var Animation = function(cfg) {/**
 * animationtext
 */
 this.image = null;
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
 * text(ms)
 */
 this.__framePlayedDuration = 0;

 Animation.superclass.constructor.call(this, cfg);}
 my.inherit(Animation, my.Component);

 /**
 * Event definitions
 * onplay Starttextanimation
 * onstop textanimation
 * onend animationtext
 */
 Animation.prototype.onplay = my.fn;
 Animation.prototype.onstop = my.fn;
 Animation.prototype.onend = my.fn;

 /**
 * @private
 * text
 * @param {Number} index
 */
 Animation.prototype.__gotoFrame = function(index) {if(this.frames[index]) {this.currentFrameIndex = index;
 this.currentFrame = this.frames[index];
 this.__framePlayedDuration = 0;}}
 /**
 * @private
 * textdowntext
 */
 Animation.prototype.__nextFrame = function() {if(this.currentFrameIndex < this.frames.length - 1) {this.__gotoFrame(this.currentFrameIndex + 1);} else if(this.loop) {this.__gotoFrame(0);} else {this.stop();
 this.onend();}}
 /**
 * Initialize
 */
 Animation.prototype.init = function() {this.__gotoFrame(0);
 Animation.superclass.init.call(this);}
 /**
 * textanimation
 */
 Animation.prototype.play = function() {this.playing = true;
 this.onplay();}
 /**
 * text
 */
 Animation.prototype.stop = function() {this.playing = false;
 this.onstop();}
 /**
 * textStarttext
 * @param {Number} index
 */
 Animation.prototype.gotoAndPlay = function(index) {this.__gotoFrame(index);
 this.play();}
 /**
 * text
 * @param {Number} index
 */
 Animation.prototype.gotoAndStop = function(index) {this.__gotoFrame(index);
 this.stop();}
 /**
 * textanimationtext
 * @param {Number} deltaTime
 */
 Animation.prototype.update = function(deltaTime) {if(!this.playing) {} else if(this.__framePlayedDuration >= this.currentFrame.duration) {this.__nextFrame();} else {this.__framePlayedDuration += deltaTime * this.speed;}}
 /**
 * textobject
 */
 Animation.prototype.destory = function() {this.image = this.frames = this.currentFrame = this.onplay = this.onstop = this.onend = null;
 Animation.superclass.destory.call(this);}

 my.Animation = Animation;})();
