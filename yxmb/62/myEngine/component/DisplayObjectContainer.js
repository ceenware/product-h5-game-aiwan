/**
 * text
 */
(function() {var DisplayObjectContainer = function(cfg) {/**
 * textcolumn text
 */
 this.__childs = [];

 DisplayObjectContainer.superclass.constructor.call(this, cfg);}
 my.inherit(DisplayObjectContainer, my.DisplayObject);

 /**
 * Initialize
 */
 DisplayObjectContainer.prototype.init = function() {var childs = this.__childs, child;

 for(var i = 0, len = childs.length; i < len; i++) {child = childs[i];
 if(!child.initialized) {child.init();}}
 DisplayObjectContainer.superclass.init.call(this);}
 /**
 * textcolumn text
 * @param {DisplayObject} child
 */
 DisplayObjectContainer.prototype.appendChild = function(child) {this.addChildAt(child, this.__childs.length);}
 /**
 * textcolumn text
 * @param {DisplayObject} child
 */
 DisplayObjectContainer.prototype.prependChild = function(child) {this.addChildAt(child, 0);}
 /**
 * textcolumn text
 * @param {DisplayObject} child
 * @param {Number} index
 */
 DisplayObjectContainer.prototype.addChildAt = function(child, index) {child.parent = this;
 this.__childs.splice(index, 0, child);}
 /**
 * fromtextcolumn textmiddletext
 * @param {DisplayObject} child
 */
 DisplayObjectContainer.prototype.removeChild = function(child) {var childs = this.__childs;

 for(var i = 0, len = childs.length; i < len; i++) {if(childs[i] == child) {this.removeChildAt(i);
 break;}}}
 /**
 * fromtextcolumn textmiddletext
 * @param {Number} index
 */
 DisplayObjectContainer.prototype.removeChildAt = function(index) {var child = this.__childs.splice(index, 1);

 if(child) {child.parent = null;}}
 /**
 * text
 * @param {Number} index
 */
 DisplayObjectContainer.prototype.removeAll = function() {this.__childs.length = 0;}
 /**
 * gettext
 * @param {Number} index
 */
 DisplayObjectContainer.prototype.getChildAt = function(index) {return this.__childs[index];}
 /**
 * gettext
 */
 DisplayObjectContainer.prototype.getChilds = function() {return this.__childs;}
 /**
 * text
 * @param {Number} deltaTime
 */
 DisplayObjectContainer.prototype.update = function(deltaTime) {var childs = this.__childs;

 for(var i = 0, len = childs.length; i < len; i++) {if(childs[i]) {childs[i].update(deltaTime);}}
 DisplayObjectContainer.superclass.update.call(this);}
 /**
 * Drawtext
 * @param {Context Object} context
 */
 DisplayObjectContainer.prototype.draw = function(context) {var childs = this.__childs;

 for(var i = 0, len = childs.length; i < len; i++) {childs[i].render(context);}
 DisplayObjectContainer.superclass.draw.call(this);}
 /**
 * text
 */
 DisplayObjectContainer.prototype.destoryChilds = function() {var childs = this.__childs;

 for(var i = 0, len = childs.length; i < len; i++) {childs[0].destory();}}
 /**
 * text
 */
 DisplayObjectContainer.prototype.destory = function() {this.destoryChilds();
 this.__childs = null;
 DisplayObjectContainer.superclass.destory.call(this);}

 my.DisplayObjectContainer = DisplayObjectContainer;})();
