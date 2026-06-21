/**
 * Gametext
 */
(function() {var Viewport = function(cfg) {/**
 * textxaxis position
 */
 this.x = 0;
 /**
 * textyaxis position
 */
 this.y = 0;
 /**
 * textwidth
 */
 this.width = 0;
 /**
 * textheight
 */
 this.height = 0;
 /**
 * @private
 * textuptextxaxis position
 */
 this.__lastX = 0;
 /**
 * @private
 * textuptextyaxis position
 */
 this.__lastY = 0;

 Viewport.superclass.constructor.call(this, cfg);}
 my.inherit(Viewport, my.Component);
 /**
 * Movetext
 * @param {Number} x
 * @param {Number} y
 * @param {Boolean} absolute text
 */
 Viewport.prototype.move = function(x, y, absolute) {this.__lastX = this.x;
 this.__lastY = this.y;

 if(absolute) {this.x = x;
 this.y = y;} else {this.x += x;
 this.y += y;}}

 my.Viewport = Viewport;})();
