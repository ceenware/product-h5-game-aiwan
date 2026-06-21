(function() {var imageResources = getImageRes();
 my.ImageManager.load(imageResources, loadImageResources);

 /**
 * Load image assets
 */
 function loadImageResources(number) {my.DOM.get('progressText').innerHTML = '[text...(' + ~~(number / imageResources.length * 100) + '%)';
 if(number < imageResources.length) {return false;}

 if(!buzz.isOGGSupported() &&!buzz.isMP3Supported()) {my.DOM.remove(my.DOM.get('progressText'));
 init();} else {loadAudioResources();}}

 /**
 * text
 */
 function loadAudioResources(number) {var res = getAudioRes(), len = res.length;
 var group = [], item, a;

 for(var i = 0; i < len; i++) {item = res[i];
 a = new buzz.sound(item.src, {formats: ['wav', 'mp3'],
 preload: true,
 autoload: true,
 loop:!!item.loop});

 group.push(a);
 Audio.list[item.id] = a;}

 var buzzGroup = new buzz.group(group);
 var number = 1;

 buzzGroup.bind('loadeddata', function(e) {my.DOM.get('progressText').innerHTML = '[text...(' + ~~(number / len * 100) + '%)';

 if(number >= len) {my.DOM.remove(my.DOM.get('progressText'));
 init();} else {number++;}});}

 /**
 * Initialize
 */
 function init() {Audio.play('ogg_background');

 // createGameobject
 var donkeyJump = new DonkeyJump();
 donkeyJump.setFPS(60);
 donkeyJump.init();
 var ui = donkeyJump.ui;

 // Start Gametext
 donkeyJump.onstart = function() {my.KeyEvent.addListener();}
 // GameUpdate state
 donkeyJump.onupdate = function() {if(my.KeyEvent.check('VK_LEFT') || my.KeyEvent.check('A')) {donkeyJump.keyDownLeft = true;} else {donkeyJump.keyDownLeft = false;}

 if(my.KeyEvent.check('VK_RIGHT') || my.KeyEvent.check('D')) {donkeyJump.keyDownRight = true;} else {donkeyJump.keyDownRight = false;}}
 // textGametext
 donkeyJump.onstop = function() {my.KeyEvent.removeListener();}
 // point textStarttext
 ui.onplay = function() {this.toBody();
 donkeyJump.stateInit();
 donkeyJump.start();}
 // Sound On
 ui.onsoundopen = function() {Audio.mute = false;
 Audio.play('ogg_background', true);}
 // Sound Off
 ui.onsoundclose = function() {Audio.mute = true;
 Audio.pauseAll();}
 // Pause
 ui.onpause = function() {donkeyJump.pause();
 ui.panelResumeVisible(true);
 ui.btnPauseVisible(false);}
 // Backcolumn text
 ui.onresumeexit = function() {ui.toCover();
 ui.panelResumeVisible(false);
 Audio.play('ogg_background');}
 // Continue Game
 ui.onresume = function() {ui.panelResumeVisible(false);
 ui.btnPauseVisible(true);
 donkeyJump.start();
 Audio.play('ogg_background', true);}
 // text
 ui.onshowcup = ui.onshowcore = ui.onshowmore = ui.onshare = function() {alert('textmini gametext\nGameauthor: <text> [source codedowntext: blog.96xy.cn]');}}})();
