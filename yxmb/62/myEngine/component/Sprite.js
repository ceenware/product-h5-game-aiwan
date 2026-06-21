/**
 * text
 */
(function() {var Sprite = function(cfg) {/**
 * textanimation
 */
 this.anim = null;
 /**
 * horizontalMovespeed
 */
 this.speedX = 0;
 /**
 * textMovespeed
 */
 this.speedY = 0;
 /**
 * horizontaltextspeed
 */
 this.acceX = 0;
 /**
 * textspeed
 */
 this.acceY = 0;
 /**
 * read only
 * uptexthorizontalcoordinates
 */
 this.lastX = 0;
 /**
 * read only
 * uptextcoordinates
 */
 this.lastY = 0;
 /**
 * read only
 * uptexthorizontalMovespeed
 */
 this.lastSpeedX = 0;
 /**
 * read only
 * uptextMovespeed
 */
 this.lastSpeedY = 0;

 Sprite.superclass.constructor.call(this, cfg);}
 my.inherit(Sprite, my.DisplayObject);

 /**
 * @private
 * gettext
 */
 Sprite.prototype.__getCollRect = function() {if(this.anim && this.anim.currentFrame) {return this.anim.currentFrame.collRect;}}
 /**
 * Collision detection
 * @param {Sprite Object} sprite2
 */
 Sprite.prototype.hitTest = function(sprite2) {var collRect1 = this.__getCollRect(), collRect2 = sprite2.__getCollRect(), coll1, coll2, result = false;

 if(collRect1 && collRect2) {var i1, len1 = collRect1.length, i2, len2 = collRect2.length;

 for(i1 = 0; i1 < len1; i1++) {coll1 = collRect1[i1];

 for(i2 = 0; i2 < len2; i2++) {coll2 = collRect2[i2];

 if(Math.abs((this.x + coll1[0] + coll1[2] / 2) - (sprite2.x + coll2[0] + coll2[2] / 2)) < (coll1[2] + coll2[2]) / 2 && Math.abs((this.y + coll1[1] + coll1[3] / 2) - (sprite2.y + coll2[1] + coll2[3] / 2)) < (coll1[3] + coll2[3]) / 2) {result = true;
 break;}}}}
 sprite2 = collRect1 = collRect2 = coll1 = coll2 = null;
 return result;}
 /**
 * text
 * @param {Number} deltaTime
 */
 Sprite.prototype.update = function(deltaTime) {this.lastSpeedX = this.speedX;
 this.lastSpeedY = this.speedY;
 this.lastX = this.x;
 this.lastY = this.y;

 // textMovespeed
 this.speedX = this.lastSpeedX + this.acceX * deltaTime;
 this.speedY = this.lastSpeedY + this.acceY * deltaTime;

 // text
 this.x += Math.round((this.lastSpeedX + this.speedX) * deltaTime / 2);
 this.y += Math.round((this.lastSpeedY + this.speedY) * deltaTime / 2);

 // textanimationtext
 if(this.anim) {this.anim.update(deltaTime);}
 Sprite.superclass.update.call(this);}
 /**
 * Drawtext
 * @param {Context Object} context
 */
 Sprite.prototype.draw = function(context) {var anim = this.anim;
 if(anim && anim.currentFrame) {var frame = anim.currentFrame;
 context.drawImage(anim.image, frame.x, frame.y, this.width, this.height, 0, 0, this.width, this.height);
 Sprite.superclass.draw.call(this);

 // test
 /*
 if(frame.collRect) {var collRect = frame.collRect, coll;

 context.fillStyle = '#ff0000';
 context.globalAlpha = 0.5;

 for(var i = 0, len = collRect.length; i < len; i++) {coll = collRect[i];
 context.fillRect(coll[0], coll[1], coll[2], coll[3]);}}
 */}}
 /**
 * text
 */
 Sprite.prototype.destory = function() {if(this.anim) {this.anim.destory();
 this.anim = null;}
 Sprite.superclass.destory.call(this);}

 my.Sprite = Sprite;})();
