(function() {/**
 * UIControl
 */
 var UI = function() {// Ready screen
 this.gameCover = my.DOM.get('gameCover');
 // Game body
 this.gameBody = my.DOM.get('gameBody');
 // Game Over
 this.gameOver = my.DOM.get('gameOver');
 // Score
 this.number = my.DOM.get('number');}
 /**
 * UIEvent definitions
 */
 // Sound On
 UI.prototype.onsoundopen = my.fn;
 // Sound Off
 UI.prototype.onsoundclose = my.fn;
 // Achievements
 UI.prototype.onshowcup = my.fn;
 // Leaderboard
 UI.prototype.onshowcore = my.fn;
 // Start
 UI.prototype.onplay = my.fn;
 // text
 UI.prototype.onshowmore = my.fn;
 // scoretext
 UI.prototype.onshare = my.fn;
 // Pause
 UI.prototype.onpause = my.fn;
 // Backcolumn text
 UI.prototype.onresumeexit = my.fn;
 // Continue Game
 UI.prototype.onresume = my.fn;
 // Ready
 UI.prototype.onretry = my.fn;

 /**
 * @private
 * InitializetextControltext
 */
 UI.prototype.__initBtnSound = function() {var btnSound = my.DOM.get('btnSound'), UI = this;
 btnSound.onclick = my.delegate(function() {if(my.DOM.hasClass(btnSound, 'disabled')) {my.DOM.removeClass(btnSound, 'disabled');
 this.onsoundopen();} else {my.DOM.addClass(btnSound, 'disabled');
 this.onsoundclose();}}, this, btnSound);}
 /**
 * @private
 * InitializeStart Gametext
 */
 UI.prototype.__initBtnPlay = function() {var btnPlay = my.DOM.get('btnPlay'), self = this;
 btnPlay.onclick = function() {self.onplay();}}
 /**
 * @private
 * InitializePausetext
 */
 UI.prototype.__initBtnPause = function() {var btnPause = my.DOM.get('btnPause'), self = this;
 btnPause.onclick = function() {self.onpause();}}
 /**
 * @private
 * InitializeBackcolumn text
 */
 UI.prototype.__initBtnResumeExit = function() {var btnResumeExit = my.DOM.get('btnResumeExit'), self = this;
 btnResumeExit.onclick = function() {self.onresumeexit();}}
 /**
 * @private
 * InitializeContinue Gametext
 */
 UI.prototype.__initBtnResume = function() {var btnResume = my.DOM.get('btnResume'), self = this;
 btnResume.onclick = function() {self.onresume();}}
 /**
 * @private
 * InitializeReadytext
 */
 UI.prototype.__initBtnRetry = function() {var btnRetry = my.DOM.get('btnRetry'), self = this;
 btnRetry.onclick = function() {self.onretry();}}
 /**
 * @private
 * InitializeAchievementstext
 */
 UI.prototype.__initBtnCup = function() {var btnCup = my.DOM.get('btnCup'), btnCup2 = my.DOM.get('btnCup2'), self = this;
 btnCup.onclick = btnCup2.onclick = function() {self.onshowcup();}}
 /**
 * @private
 * InitializeLeaderboardtext
 */
 UI.prototype.__initBtnCore = function() {var btnScore = my.DOM.get('btnScore'), btnScore2 = my.DOM.get('btnScore2'), self = this;
 btnScore.onclick = btnScore2.onclick = function() {self.onshowcore();}}
 /**
 * @private
 * Initializetext
 */
 UI.prototype.__initBtnMore = function() {var btnMore = my.DOM.get('btnMore'), btnMore2 = my.DOM.get('btnMore2'), self = this;
 btnMore.onclick = btnMore2.onclick = function() {self.onshowmore();}}
 /**
 * @private
 * Initializetext
 */
 UI.prototype.__initBtnShare = function() {var btnShare = my.DOM.get('btnShare'), btnShare2 = my.DOM.get('btnShare2'), self = this;
 btnShare.onclick = btnShare2.onclick = function() {self.onshare();}}
 /**
 * Initializetext
 */
 UI.prototype.init = function() {this.__initBtnSound();
 this.__initBtnPlay();
 this.__initBtnPause();
 this.__initBtnResumeExit();
 this.__initBtnResume();
 this.__initBtnRetry();
 this.__initBtnCup();
 this.__initBtnCore();
 this.__initBtnMore();
 this.__initBtnShare();}
 /**
 * setScore
 * @param {Number} number
 */
 UI.prototype.setNumber = function(number) {var numberChar = number.toString().split('');
 for(var i = 0; i < numberChar.length; i++) {numberChar[i] = '<span class="number' + numberChar[i] + '"></span>';}
 this.number.innerHTML = numberChar.join('');}
 /**
 * showtexthidePausetext
 * @param {Boolean} state
 */
 UI.prototype.btnPauseVisible = function(state) {if(state) {my.DOM.show(my.DOM.get('btnPause'));} else {my.DOM.hide(my.DOM.get('btnPause'));}}
 /**
 * showtexthidePausetext
 * @param {Boolean} state
 */
 UI.prototype.panelResumeVisible = function(state) {if(state) {my.DOM.show(my.DOM.get('panelResume'));} else {my.DOM.hide(my.DOM.get('panelResume'));}}
 /**
 * showtexthidetext
 * @param {Boolean} state
 */
 UI.prototype.beingReadyVisible = function(state) {if(state) {my.DOM.show(my.DOM.get('beingReady'));} else {my.DOM.hide(my.DOM.get('beingReady'));}}
 /**
 * showtexthideStarttext
 * @param {Boolean} state
 */
 UI.prototype.beingGoVisible = function(state) {if(state) {my.DOM.show(my.DOM.get('beingGo'));} else {my.DOM.hide(my.DOM.get('beingGo'));}}
 /**
 * textGametext
 * @param {String} name
 * @param {Number} score
 */
 UI.prototype.updateResult = function(name, score) {my.DOM.get('name').innerHTML = name || 'Tap here to';
 my.DOM.get('score').innerHTML = score || 0;}
 /**
 * textReady screen
 */
 UI.prototype.toCover = function() {my.DOM.hide(this.gameBody);
 my.DOM.hide(this.gameOver);
 my.DOM.show(this.gameCover);}
 /**
 * textGame bodytext
 */
 UI.prototype.toBody = function() {my.DOM.hide(this.gameOver);
 my.DOM.hide(this.gameCover);
 my.DOM.show(this.gameBody);}
 /**
 * textGame Overtext
 */
 UI.prototype.toOver = function() {my.DOM.hide(this.gameCover);
 my.DOM.hide(this.gameBody);
 my.DOM.show(this.gameOver);}

 window.UI = UI;})();
