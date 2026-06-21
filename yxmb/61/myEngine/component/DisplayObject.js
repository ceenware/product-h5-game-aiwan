/**
 * text
 */
(function() {var DisplayObject = function(cfg) {/**
 * Drawtextxaxis position
 */
 this.x = 0;
 /**
 * Drawtextyaxis position
 */
 this.y = 0;
 /**
 * width
 */
 this.width = 0;
 /**
 * height
 */
 this.height = 0;
 /**
 * opacity
 */
 this.alpha = 1;
 /**
 * text
 */
 this.rotation = 0;
 /**
 * horizontaltext
 */
 this.flipX = false;
 /**
 * text
 */
 this.flipY = false;
 /**
 * horizontaltext
 */
 this.scaleX = 1;
 /**
 * text
 */
 this.scaleY = 1;
 /**
 * read only
 * showtext
 */
 this.visible = true;

 DisplayObject.superclass.constructor.call(this, cfg);}
 /**
 * textComponenttext
 */
 my.inherit(DisplayObject, my.Component);

 /**
 * Event definitions
 * onshow show
 * onhide hide
 * onupdate Update state
 * onrender Render
 * ondraw textupDraw
 */
 DisplayObject.prototype.onshow = my.fn;
 DisplayObject.prototype.onhide = my.fn;
 DisplayObject.prototype.onupdate = my.fn;
 DisplayObject.prototype.onrender = my.fn;
 DisplayObject.prototype.ondraw = my.fn;

 /**
 * showtext
 */
 DisplayObject.prototype.show = function() {this.visible = true;
 this.onshow();}
 /**
 * hidetext
 */
 DisplayObject.prototype.hide = function() {this.visible = false;
 this.onhide();}
 /**
 * text
 * @param {Number} deltaTime
 */
 DisplayObject.prototype.update = function(deltaTime) {if(this.onupdate) {this.onupdate();}}
 /**
 * @private
 * text
 */
 DisplayObject.prototype.__transform = function(context) {context.translate(this.x, this.y);

 // opacity
 if(this.alpha < 1) {context.globalAlpha = this.alpha;}

 // text
 if(this.rotation % 360 > 0) {var offset = [this.width / 2, this.height / 2];
 context.translate(offset[0], offset[1]);
 context.rotate(this.rotation % 360 / 180 * Math.PI);
 context.translate(-offset[0], -offset[1]);}

 // text
 if(this.flipX || this.flipY) {context.translate(this.flipX? this.width: 0, this.flipY? this.height: 0);
 context.scale(this.flipX? -1: 1, this.flipY? -1: 1);}

 // text
 if(this.scaleX!= 1 || this.scaleY!= 1) {context.scale(this.scaleX, this.scaleY);}}
 /**
 * Rendertext
 * @param {Context Object} context
 */
 DisplayObject.prototype.render = function(context) {if(!this.visible || this.alpha <= 0) {return false;}

 // text
 context.save();
 // textRendertext
 this.__transform(context);
 this.draw(context);
 // text
 context.restore();

 this.onrender();}
 /**
 * textupDrawtext
 * @param {Context Object} context
 */
 DisplayObject.prototype.draw = function(context) {this.ondraw();}
 /**
 * textmethod
 */
 DisplayObject.prototype.destory = function() {this.onshow = this.onhide = this.onupdate = this.onrender = this.ondraw = null;
 DisplayObject.superclass.destory.call(this);}

 my.DisplayObject = DisplayObject;})();
