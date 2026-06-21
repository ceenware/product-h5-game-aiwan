(function() {var mousePress = false; 
	var imageResources = getImageRes();
 my.ImageManager.load(imageResources, loadImageResources);

 /**
 * Load image assets
 */
 function loadImageResources(number) {my.DOM.get('progressText').innerHTML = 'text...(' + ~~(number / imageResources.length * 100) + '%)';
 if(number < imageResources.length) {return false;}
		
 if(!buzz.isOGGSupported()) {my.DOM.remove(my.DOM.get('progressText'));
 init();} else {loadAudioResources();}}
	 /**
 * text
 */
 function loadAudioResources(number) {var res = getAudioRes(), len = res.length;
 var group = [], item, a;

 for(var i = 0; i < len; i++) {item = res[i];
 a = new buzz.sound(item.src, {formats: ['ogg'],
 preload: true,
 autoload: true,
 loop:!!item.loop});

 group.push(a);
 Audio.list[item.id] = a;}

 var buzzGroup = new buzz.group(group);
 var number = 1;

 buzzGroup.bind('loadeddata', function(e) {my.DOM.get('progressText').innerHTML = 'text...(' + ~~(number / len * 100) + '%)';

 if(number >= len) {my.DOM.remove(my.DOM.get('progressText'));
 init();} else {number++;}});}

	
 /**
 * Initialize
 */
 function init() {Audio.play('game_music');

 // createGameobject
 var mouseHit = new MouseHit();
 mouseHit.init();
 var ui = mouseHit.ui;

 // point textStarttext
 ui.onplay = function() {this.toBody();
 mouseHit.stateInit();}
 // Sound On
 ui.onsoundopen = function() {Audio.mute = false;
 Audio.play('game_music', true);}
 // Sound Off
 ui.onsoundclose = function() {Audio.mute = true;
 Audio.pauseAll();}
 // Pause
 ui.onpause = function() {clearInterval(mouseHit.drawCanvasInterval);
			clearInterval(mouseHit.drawMouseInterval);}
 // PauseRestart
 ui.onreadystart = function() {mouseHit.__setIntervalFunc(mouseHit);}
 // Continue Game
 ui.onresume = function() {mouseHit.__setIntervalFunc(mouseHit);}}})();
