/**
 * text
 */
(function() {var Component = function(cfg) {/**
 * Initialize state
 */
 this.initialized = false;

 /**
 * read only
 * text
 */
 this.parent = null;

 // text
 my.extend(this, cfg);}
 /**
 * Event definitions
 * oninit Initialize
 * ondestory text
 */
 Component.prototype.oninit = my.fn;
 Component.prototype.ondestory = my.fn;

 /**
 * textInitialize
 */
 Component.prototype.init = function() {this.initialized = true;
 this.oninit();}
 /**
 * text
 */
 Component.prototype.destory = function() {if(this.parent) {this.parent.removeChild(this);
 this.parent = null;}
 
 this.ondestory();
 this.oninit = this.ondestory = null;}

 my.Component = Component;})();
