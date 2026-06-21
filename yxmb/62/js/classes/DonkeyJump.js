/**
 * Donkey JumpGametext
 */
(function() {var DonkeyJump = function(cfg) {/**
 * textobject
 */
 this.viewport = null;

 /**
 * text
 */
 this.skyLayer = null;

 /**
 * text
 */
 this.hillLayer = null;

 /**
 * text
 */
 this.hillNearLayer = null;

 /**
 * text
 */
 this.floorLayer = null;

 /**
 * white text
 */
 this.stairLayer = null;

 /**
 * text
 */
 this.donkeyLayer = null;

 /**
 * text
 */
 this.effectLayer = null;

 /**
 * text
 */
 this.donkey = null;

 /**
 * textInitializetext
 */
 this.viewportDefault = [0, 45440];

 /**
 * Score
 */
 this.score = 0;

 /**
 * UIobject
 */
 this.ui = null;

 /**
 * textkeytext
 */
 this.keyDownLeft = false;
 this.keyDownRight = false;

 /**
 * text
 */
 this.readyTime = 0;

 /**
 * textStart
 */
 this.isGo = false;

 /**
 * uptext
 */
 this.lastStairY = 0;

 DonkeyJump.superclass.constructor.call(this, cfg);}
 my.inherit(DonkeyJump, my.Game);

 /**
 * @private
 * createGamescoretext
 */
 DonkeyJump.prototype.__createLayers = function() {// createtextobject
 var viewport = new my.Viewport({width: 480,
 height: 800});

 // createGametext
 var skyLayer = new my.Layer({viewport: viewport,
 distance: 20});
 skyLayer.setCanvas('canvasSkyLayer');
 var hillLayer = new my.Layer({viewport: viewport,
 distance: 15});
 hillLayer.setCanvas('canvasHillLayer');
 var hillNearLayer = new my.Layer({viewport: viewport,
 distance: 5});
 hillNearLayer.setCanvas('canvasHillNearLayer');
 var floorLayer = new my.Layer({viewport: viewport});
 floorLayer.setCanvas('canvasFloorLayer');
 var stairLayer = new my.Layer({viewport: viewport});
 stairLayer.setCanvas('canvasStairLayer');
 var donkeyLayer = new my.Layer({viewport: viewport});
 donkeyLayer.setCanvas('canvasDonkeyLayer');
 var effectLayer = new my.Layer({viewport: viewport});
 effectLayer.setCanvas('canvasEffectLayer');

 this.appendChild(skyLayer);
 this.appendChild(hillLayer);
 this.appendChild(hillNearLayer);
 this.appendChild(floorLayer);
 this.appendChild(stairLayer);
 this.appendChild(donkeyLayer);
 this.appendChild(effectLayer);

 this.viewport = viewport;
 this.skyLayer = skyLayer;
 this.hillLayer = hillLayer;
 this.hillNearLayer = hillNearLayer;
 this.floorLayer = floorLayer;
 this.stairLayer = stairLayer;
 this.donkeyLayer = donkeyLayer;
 this.effectLayer = effectLayer;}
 /**
 * @private
 * createtext
 */
 DonkeyJump.prototype.__createDonkey = function() {var donkey = new Donkey();
 donkey.game = this;
 this.donkey = donkey;
 this.donkeyLayer.appendChild(donkey);}
 /**
 * @private
 * createtext
 */
 DonkeyJump.prototype.__createScene = function() {// text
 var sky = new my.Bitmap({image: my.ImageManager.get('sky'),
 width: 480,
 height: 3072});
 this.skyLayer.appendChild(sky);
 // text
 var hill = new my.Bitmap({image: my.ImageManager.get('hill'),
 width: 480,
 height: 603,
 y: this.viewportDefault[1] + (800 - 603) * this.hillLayer.distance});
 this.hillLayer.appendChild(hill);
 // text
 var hillnear = new my.Bitmap({image: my.ImageManager.get('hillnear'),
 width: 480,
 height: 613,
 y: this.viewportDefault[1] + (800 - 613) * this.hillNearLayer.distance});
 this.hillNearLayer.appendChild(hillnear);
 // text
 var floor = new my.Bitmap({image: my.ImageManager.get('floor'),
 width: 480,
 height: 584,
 y: this.viewportDefault[1] + (800 - 584) * this.floorLayer.distance});
 this.floorLayer.appendChild(floor);}
 /**
 * createUIobject
 */
 DonkeyJump.prototype.__createUI = function() {var ui = new UI(), donkeyJump = this;
 ui.init();

 ui.onretry = function() {Audio.play('ogg_background');

 this.toBody();
 donkeyJump.stateInit();
 donkeyJump.start();}
 this.ui = ui;}
 /**
 * Initialize game
 */
 DonkeyJump.prototype.init = function() {this.__createLayers();
 this.__createDonkey();
 this.__createScene();
 this.__createUI();

 DonkeyJump.superclass.init.call(this);}
 /**
 * Update state
 */
 DonkeyJump.prototype.update = function(deltaTime) {this.stairLayer.change();

 DonkeyJump.superclass.update.call(this, deltaTime);}
 /**
 * setScore
 * @param {Number} score
 */
 DonkeyJump.prototype.setScore = function(score) {this.score = score;
 this.ui.setNumber(score);}
 /**
 * @private
 * Initializetextcreatetext
 */
 DonkeyJump.prototype.__createDefaultStair = function() {this.stairLayer.destoryChilds();
 // Initializetext
 this.lastStairY = this.viewportDefault[1] + 100;
 var stair = new Stair({y: this.lastStairY});

 stair.init();
 this.stairLayer.appendChild(stair);
 this.__createProp(stair);}
 /**
 * @private
 * textupcreatetext
 * @param {Stair Object} stair
 */
 DonkeyJump.prototype.__createProp = function(stair) {if(my.Math.random(1, 6) == 1) {var prop = new Prop();
 prop.init();
 prop.x = my.Math.random(stair.x, stair.x + 150 - prop.width);
 prop.y = stair.y - prop.height;
 stair.prop = prop;
 this.stairLayer.appendChild(prop);}}
 /**
 * @private
 * Controltext
 */
 DonkeyJump.prototype.__stairControl = function() {var viewportY = this.viewport.y, lastStairY = this.lastStairY, space = my.Math.random(200, 300);
 if(lastStairY - viewportY > space) {var childs = this.stairLayer.getChilds(), child, viewportBottom = viewportY + 800;
 for(var i = 0, len = childs.length; i < len; i++) {child = childs[i];
 if(child && child.y > viewportBottom) {child.destory();
 i--;}}

 // heighttext500,text1heighttext
 this.lastStairY = lastStairY - (space + Math.max(~~(this.score / 500), 0));
 var stair = new Stair({y: this.lastStairY});
 stair.init();
 this.stairLayer.appendChild(stair);
 this.__createProp(stair);}}
 /**
 * text
 */
 DonkeyJump.prototype.layerChnage = function() {var y = this.viewport.y;

 this.skyLayer.change();
 if(y > 36300) {this.hillLayer.change();}
 if(y > 4230) {this.hillNearLayer.change();}
 if(y > 44800) {this.floorLayer.change();}}
 /**
 * textMovetextControltext
 */
 DonkeyJump.prototype.viewportMove = function() {var donkey = this.donkey, viewport = this.viewport;
 var donkeyY = donkey.y;

 if(donkeyY < donkey.lastY) {// textupMove
 if(donkeyY < donkey.minTop) {if(donkeyY < 45776) {viewport.move(0, donkeyY - 336, true);}

 this.setScore(45970 - donkeyY);
 this.layerChnage();

 donkey.minTop = donkeyY;
 this.__stairControl();}} else if(donkey.animName == 'jump') {// textdownMove
 if(donkey.y + donkey.height > viewport.y + 800) {// text
 donkey.dead();} else {var stairLayer = this.stairLayer;
 var stairs = stairLayer.getChilds();

 for(var i = 0, len = stairs.length; i < len; i++) {var stair = stairs[i];

 if(stair && donkey.hitTest(stair)) {// text
 if(stair instanceof Prop) {stair.stepon(donkey);} else {var cloud = new Cloud({x: donkey.x + (donkey.direction == 'left'? 45: 35),
 y: stair.y - 16,
 width: 64,
 height: 16});
 var self = this;

 cloud.onupdate = cloud.ondestory = function() {self.effectLayer.change();}
 this.effectLayer.appendChild(cloud);
 cloud.init();

 var name = stair.name;
 if(name == 'stair_friable') {// text
 Audio.play('ogg_step_broken');
 stair.anim.play();} else if(name == 'stair_moveable') {// textMovetext
 stair.anim.gotoAndPlay(1);}

 donkey.jump();}}}}}}
 /**
 * text
 * @return {Boolean} Backtext
 */
 DonkeyJump.prototype.ready = function(deltaTime) {var go = false;

 if(deltaTime <= 0) {return false;}

 if(this.readyTime == 0) {this.ui.beingReadyVisible(true);
 Audio.play('ogg_321');} else if(this.readyTime > 3000) {this.ui.beingGoVisible(false);
 go = true;
 Audio.play('ogg_go');
 this.ui.btnPauseVisible(true);} else if(this.readyTime > 2000) {if(!this.isGo) {this.ui.beingReadyVisible(false);
 this.ui.beingGoVisible(true);
 this.isGo = true;
 Audio.play('ogg_321');}} else if(this.readyTime > 1000) {if(this.readyTime + deltaTime > 2000) {Audio.play('ogg_321');}} else {if(this.readyTime + deltaTime > 1000) {Audio.play('ogg_321');}}
 this.readyTime += deltaTime;

 return go;}
 /**
 * Initialize state
 */
 DonkeyJump.prototype.stateInit = function() {// Movetext
 this.viewport.move(this.viewportDefault[0], this.viewportDefault[1], true);
 // Initializetext
 this.donkey.x = 176;
 this.donkey.y = this.viewportDefault[1] + 530;
 this.donkey.minTop = this.donkey.y;
 this.donkey.reset();
 // text
 this.readyTime = 0;
 this.isGo = false;
 // textscoretext
 this.setScore(0);
 // createtext
 this.__createDefaultStair();
 // text
 this.skyLayer.change();
 this.hillLayer.change();
 this.hillNearLayer.change();
 this.floorLayer.change();
 this.stairLayer.change();
 this.effectLayer.change();
 this.donkeyLayer.change();
 // UI
 this.ui.btnPauseVisible(false);}
 /**
 * Pause Game
 */
 DonkeyJump.prototype.pause = function() {this.stop();
 Audio.pauseAll();}
 /**
 * Game Over
 */
 DonkeyJump.prototype.gameover = function() {var ui = this.ui;

 this.stop();
 ui.updateResult(null, this.score);
 ui.toOver();}

 window.DonkeyJump = DonkeyJump;})();
