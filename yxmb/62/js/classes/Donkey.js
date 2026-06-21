/**
 * text
 */
(function() {var Donkey = function(cfg) {/**
 * Gameobject
 */
 this.game = null;

 /**
 * Direction @format left|front|right
 */
 this.direction = 'front';

 /**
 * text
 */
 this.animName = '';

 /**
 * @private
 * text person textheight
 */
 this.__superJumpHeight = 0;

 /**
 * @private
 * MJheight
 */
 this.__MJHeight = 0;

 /**
 * @private
 * text rowheight
 */
 this.__glidingHeight = 0;

 /**
 * @private
 * UFOheight
 */
 this.__UFOHeight = 0;

 /**
 * @private
 * text ballheight
 */
 this.__balloonHeight = 0;

 /**
 * texthighyaxis position
 */
 this.minTop = 0;

 /**
 * Update statefunction
 */
 this.stateUpdate = my.fn;

 /**
 * textheight
 */
 this.deadHeight = 1000;

 /**
 * text
 */
 this.deadViewportFixed = false;

 /**
 * text
 */
 this.inertia = 0;

 Donkey.superclass.constructor.call(this, cfg);}
 my.inherit(Donkey, my.Sprite);

 /**
 * @private
 * text
 */
 Donkey.prototype.__borderCheck = function() {if(this.direction == 'left' && this.x < -64) {this.x = 416;} else if(this.direction == 'right' && this.x > 416) {this.x = -64;}}
 /**
 * @private
 * textUpdate state
 */
 Donkey.prototype.__stateReady = function(deltaTime) {var game = this.game;
 if(game.ready(deltaTime)) {this.stateUpdate = this.superJump;
 return false;}

 if(game.keyDownLeft) {if(this.direction!= 'left') {this.setAnim('run');
 this.flipX = true;
 this.speedX = -0.2;
 this.direction = 'left';}
 this.__borderCheck();
 this.parent.change();} else if(game.keyDownRight) {if(this.direction!= 'right') {this.setAnim('run');
 this.flipX = false;
 this.speedX = 0.2;
 this.direction = 'right';}
 this.__borderCheck();
 this.parent.change();} else {if(this.direction!= 'front') {this.setAnim('daiji');
 this.flipX = false;
 this.speedX = 0;
 this.direction = 'front';
 this.parent.change();}}}
 /**
 * text person text
 */
 Donkey.prototype.superJump = function() {var game = this.game;

 if(this.__superJumpHeight > 1200) {this.__superJumpHeight = 0;
 this.stateUpdate = this.__jump;
 return false;} else {this.__superJumpHeight += (this.lastY - this.y);}

 if(this.animName!= 'superjump') {Audio.play('ogg_super');
 this.setAnim('superjump');
 this.speedY = -0.8;
 this.acceY = 0;}
 this.__keyControl(true);

 this.parent.change();
 game.viewportMove();}
 /**
 * @private
 * text
 */
 Donkey.prototype.__jump = function() {var game = this.game;

 if(this.animName!= 'jump') {Audio.play('ogg_jump');
 this.setAnim('jump');
 this.speedY = -1;
 this.acceY = 1 / 600;
 this.width = 128;
 this.height = 128;}
 this.__keyControl(true);

 this.parent.change();
 game.viewportMove();}
 /**
 * text
 */
 Donkey.prototype.jump = function() {if(this.speedY!= -1) {this.animName = '';
 this.__jump();}}
 /**
 * MJ
 */
 Donkey.prototype.MJ = function() {var game = this.game;

 if(this.__MJHeight > 1200) {this.__MJHeight = 0;
 this.stateUpdate = this.__jump;
 return false;} else {this.__MJHeight += (this.lastY - this.y);}

 if(this.animName!= 'MJ') {this.setAnim('MJ');
 this.speedY = -0.5;
 this.acceY = 0;
 this.flipX = false;}
 this.__keyControl();

 this.parent.change();
 game.viewportMove();}
 /**
 * text row
 */
 Donkey.prototype.gliding = function() {var game = this.game;

 if(this.__glidingHeight > 1200) {this.__glidingHeight = 0;
 this.stateUpdate = this.__jump;
 return false;} else {this.__glidingHeight += (this.lastY - this.y);}

 if(this.animName!= 'plan') {this.setAnim('plan');
 this.speedY = -0.5;
 this.acceY = 0;
 this.flipX = false;
 this.width = 256;
 this.height = 256;}
 this.__keyControl();

 this.parent.change();
 game.viewportMove();}
 /**
 * UFO
 */
 Donkey.prototype.UFO = function() {var game = this.game;

 if(this.__UFOHeight > 1200) {this.__UFOHeight = 0;
 this.stateUpdate = this.__jump;
 return false;} else {this.__UFOHeight += (this.lastY - this.y);}

 if(this.animName!= 'UFO') {this.setAnim('UFO');
 this.speedY = -0.5;
 this.acceY = 0;
 this.flipX = false;
 this.width = 256;
 this.height = 512;}
 this.__keyControl();

 this.parent.change();
 game.viewportMove();}
 /**
 * text ball
 */
 Donkey.prototype.balloon = function() {var game = this.game;

 if(this.__balloonHeight > 1200) {this.__balloonHeight = 0;
 this.stateUpdate = this.__jump;
 return false;} else {this.__balloonHeight += (this.lastY - this.y);}

 if(this.animName!= 'qiqiu') {this.setAnim('qiqiu');
 this.speedY = -0.5;
 this.acceY = 0;
 this.flipX = false;
 this.width = 128;
 this.height = 128;}
 this.__keyControl();

 this.parent.change();
 game.viewportMove();}
 /**
 * text
 */
 Donkey.prototype.dead = function() {Audio.pause('ogg_background');
 Audio.play('ogg_die');
 this.stateUpdate = this.__dead;
 this.setAnim('dead');
 this.speedX = 0;
 this.speedY = 0.15;
 this.acceX = 0;
 this.acceY = 1 / 1000;
 this.flipX = false;}
 /**
 * @private
 * textControl
 */
 Donkey.prototype.__dead = function() {var game = this.game;

 if(this.deadHeight > 0) {var diffY = this.y - this.lastY, viewport = game.viewport;

 if(this.deadViewportFixed) {//} else if(this.y >= viewport.y + 400) {viewport.move(0, diffY * 2);
 game.layerChnage();} else {this.deadViewportFixed = true;}

 this.deadHeight -= diffY;
 this.parent.change();} else {game.gameover();}}
 /**
 * @private
 * textkeyControl
 * @param {Boolean} flipX texthorizontaltext
 */
 Donkey.prototype.__keyControl = function(flipX) {var game = this.game;

 if(game.keyDownLeft) {if(this.direction!= 'left') {this.flipX =!!flipX;
 this.direction = 'left';}
 this.speedX = -0.25;
 this.inertia = this.speedX;
 this.__borderCheck();} else if(game.keyDownRight) {if(this.direction!= 'right') {this.flipX = false;
 this.direction = 'right';}
 this.speedX = 0.25;
 this.inertia = this.speedX;
 this.__borderCheck();} else {if(this.inertia < 0) {this.inertia += 0.005;} else if(this.inertia > 0) {this.inertia -= 0.005;}
 this.speedX = this.inertia;}}
 /**
 * Initialize
 */
 Donkey.prototype.init = function() {this.reset();
 Donkey.superclass.init.call(this);}
 /**
 * text
 */
 Donkey.prototype.reset = function() {// settextlarge small
 this.width = 128;
 this.height = 128;
 this.flipX = false;
 this.speedX = 0;
 this.speedY = 0;
 this.acceX = 0;
 this.acceY = 0;
 this.direction = 'front';
 // showtextanimation
 this.setAnim('daiji');
 // text
 this.stateUpdate = this.__stateReady;
 // heighttext
 this.__superJumpHeight = 0;
 this.__MJHeight = 0;
 this.__glidingHeight = 0;
 this.__UFOHeight = 0;
 this.__balloonHeight = 0;
 // text
 this.deadHeight = 1000;
 this.deadViewportFixed = false;}
 /**
 * text
 * @param {Number} deltaTime
 */
 Donkey.prototype.update = function(deltaTime) {Donkey.superclass.update.call(this, deltaTime);
 this.stateUpdate(deltaTime);}
 /**
 * setanimation
 * @param {String} animName
 * @param {Boolean} donplay
 */
 Donkey.prototype.setAnim = function(animName, donplay) {this.animName = animName;

 var anim = new my.Animation({image: my.ImageManager.get(animName),
 frames: getDonkeyFrames(animName)});

 var notLoopAnims = ['daiji', 'jump'];
 for(var i = 0, len = notLoopAnims.length; i < len; i++) {if(notLoopAnims[i] == animName) {anim.loop = false;
 break;}}

 anim.init();
 if(!donplay) {anim.play();}
 this.anim = anim;}

 window.Donkey = Donkey;})();
