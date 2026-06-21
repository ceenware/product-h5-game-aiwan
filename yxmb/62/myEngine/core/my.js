/**
 * myEnginedefine
 */
(function() {var my = {/**
 * textfunction
 */
 fn: new Function(),
 /**
 * text
 * @param {Function} childClass
 * @param {Function} parentClass
 */
 inherit: function(childClass, parentClass) {var Constructor = new Function();
 Constructor.prototype = parentClass.prototype;
 childClass.prototype = new Constructor();
 childClass.prototype.constructor = childClass;
 childClass.superclass = parentClass.prototype;

 if(childClass.prototype.constructor == Object.prototype.constructor) {childClass.prototype.constructor = parentClass;}},
 /**
 * textobjecttext
 * @param {Object} obj
 * @param {Object} newProperties
 */
 extend: function(obj, newProperties) {var key;

 for(key in newProperties) {if(newProperties.hasOwnProperty(key)) {obj[key] = newProperties[key];}}

 return obj;},
 /**
 * textobject
 * @param {Object} obj
 * @param {Function} targetClass
 * @param {Object} newProperties
 */
 copy: function(obj, targetClass, newProperties) {if(typeof obj!== 'object') {return obj;}

 var value = obj.valueOf();
 if(obj!= value) {return new obj.constructor(value);}

 var o;
 if(obj instanceof obj.constructor && obj.constructor!== Object) {if(targetClass) {o = new targetClass();} else {o = my.clone(obj.constructor.prototype);}

 for(var key in obj) {if(targetClass || obj.hasOwnProperty(key)) {o[key] = obj[key];}}} else {o = {};
 for(var key in obj) {o[key] = obj[key];}}

 if(newProperties) {for(var key in newProperties) {o[key] = newProperties[key];}}

 return o;},
 /**
 * textobject
 * @param {Object} obj
 */
 clone: function(obj) {my.__cloneFunc.prototype = obj;
 return new my.__cloneFunc();},
 /**
 * @private
 */
 __cloneFunc: function() {},
 /**
 * text
 * @param {Function} func
 * @param {Object} scope
 */
 delegate: function(func, scope) {scope = scope || window;

 if(arguments.length > 2) {var args = Array.prototype.slice.call(arguments, 2);

 return function() {return func.apply(scope, args);}} else {return function() {return func.call(scope);}}}}

 window.my = my;})();
