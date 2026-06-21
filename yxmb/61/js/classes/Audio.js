/**
 * textControl
 */
(function() {var Audio = {/**
 * text
 */
 mute: false,
 /**
 * buzz groupobject
 */
 buzzGroup: null,
 /**
 * textcolumn text
 */
 list: {},
 /**
 * text
 * @param {Number} id
 * @param {Boolean} resumePlay
 */
 play: function(id, resumePlay) {if(this.list[id] &&!this.mute) {if(!resumePlay) {this.list[id].setTime(0);}
 this.list[id].play();}},
 /**
 * Pausetext
 * @param {Number} id
 */
 pause: function(id) {this.list[id].pause();},
 /**
 * Pausetext
 */
 pauseAll: function() {buzz.all().pause();}}

 window.Audio = Audio;})();
