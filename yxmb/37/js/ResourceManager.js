	/*text*/

(function(window){'use strict';

	var cacheMap = new Map(); //textmapobject
	var resourceTotalCount =1; //text
	var currentLoaded = 0; 	//text

	var isAddLoaded = function(){//Callback, text
		currentLoaded +=1; 
		/*a++: atextcreatetext, textatext1, textBacktext
		a+=1: textuptext++a
		a=a+1: textpoint texta+=1, textrighttextatext1text, texta, text
		++a:textatext1textBacka*/ 
		if(currentLoaded === resourceTotalCount && typeof window.ResourceManager.onResourceLoaded ==='function') {window.ResourceManager.onResourceLoaded();}}

	var init = function(){var image = new Image(); //createimageobject
		image.onload = function(){cacheMap.set('blocks',image);
			isAddLoaded();};
		image.src = 'images/blocks.png'; //text???};

	var getResource = function(key){//textkeygettext
		return cacheMap.get(key);};

	window.ResourceManager = {getResource:getResource,
		init:init,
		onResourceLoaded:null		//text}})(window);