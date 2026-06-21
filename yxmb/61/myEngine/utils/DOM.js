/**
 * DOMtext
 */
(function() {my.DOM = {/**
 * textidgetelement
 * @param {String} id
 */
 get: function(id) {return document.getElementById(id);},
 /**
 * getelementtextCSSstyletext
 * @param {DOM Object} element
 * @param {String} name
 */
 getStyleValue: function(element, name) {if(element.currentStyle) {return element.currentStyle[name];} else {var style = document.defaultView.getComputedStyle(element, null);
 return style[name];}},
 /**
 * hideelement
 * @param {DOM Object} element
 */
 hide: function(element) {element.style.display = 'none';},
 /**
 * showelement
 * @param {DOM Object} element
 */
 show: function(element) {element.style.display = 'block';},
 /**
 * deleteelement
 * @param {DOM Object} element
 */
 remove: function(element) {element.parentNode.removeChild(element);},
 /**
 * textelementtextclassstyle
 * @param {DOM Object} element
 * @param {String} className
 */
 hasClass: function(element, className) {var names = element.className.split(/\s+/);
 for(var i = 0; i < names.length; i++) {if(names[i] == className) {return true;}}
 return false;},
 /**
 * textelementaddclassstyle
 * @param {DOM Object} element
 * @param {String} className
 */
 addClass: function(element, className) {if(!this.hasClass(element, className)) {element.className += ' ' + className;}},
 /**
 * fromelementuptextclassstyle
 * @param {DOM Object} element
 * @param {String} className
 */
 removeClass: function(element, className) {if(this.hasClass(element, className)) {var names = element.className.split(/\s+/), newClassName = [];
 for(var i = 0; i < names.length; i++) {if(names[i]!= className) {newClassName.push(names[i]);}}
 element.className = newClassName.join(' ');}}}})();
