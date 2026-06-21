/**
 * Gametext
 */
(function() {var Game = function(cfg) {/**
 * Gametextobject
 */
 this.viewport = null;
 /**
 * read only
 * text
 */
 this.FPS = 30;
 /**
 * read only
 * text row text
 */
 this.playing = false;
 /**
 * @private
 * text
 */
 this.__sleep = 1000 / this.FPS;
 /**
 * @private
 * uptextrow text
 */
 this.__lastTime = 0;
 /**
 * @private
 * text
 */
 this.__timeout = null;

 Game.superclass.constructor.call(this, cfg);}
 my.inherit(Game, my.DisplayObjectContainer);

 /**
 * Event definitions
 * onstart Start Game
 * onstop textGame
 */
 Game.prototype.onstart = my.fn;
 Game.prototype.onstop = my.fn;

 /**
 * settext
 * @param {Number} fps
 */
 Game.prototype.setFPS = function(fps) {this.FPS = fps;
 this.__sleep = 1000 / fps;}
 /**
 * Start Game
 */
 Game.prototype.start = function() {if(!this.playing) {this.playing = true;
 this.__lastTime = new Date().getTime();
 this.__run();
 this.onstart();}}
 /**
 * GamePause
 */
 Game.prototype.stop = function() {if(this.playing) {this.playing = false;
 clearTimeout(this.__timeout);
 this.onstop();}}
 /**
 * RenderGame
 */
 Game.prototype.render = function() {var childs = this.__childs, child;

 for(var i = 0, len = childs.length; i < len; i++) {childs[i].render();}
 this.onrender();}
 /**
 * Clear canvas
 */
 Game.prototype.clear = function() {var childs = this.__childs, child;

 for(var i = 0, len = childs.length; i < len; i++) {childs[i].clear();}}
 /**
 * @private
 * text row textmethod
 */
 Game.prototype.__run = function() {var now = 0;

 this.__timeout = setTimeout(my.delegate(this.__run, this), this.__sleep);
 now = new Date().getTime();

 this.update(now - this.__lastTime);
 this.clear();
 this.render();

 this.__lastTime = now;}
 /**
 * destory
 */
 Game.prototype.destory = function() {this.stop();
 Game.superclass.destory.call(this);}

 my.Game = Game;})();
