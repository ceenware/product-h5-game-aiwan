
/**
 * textdeletetextelement
 * @param arg element
 * @returns
 */
Array.prototype.remove = function(arg){var i=0,n=0;
	var arrSize = this.length;
	for(i=0;i<arrSize;i++){if(this[i]!= arg){this[n++]=this[i];}}
	if(n<i){this.length = n;}};

/**
 * textdowntextdeleteelement
 * @param index elementdowntext
 * @returns
 */
Array.prototype.removeByIndex = function(index){var i=0,n=0;
	var arrSize = this.length;
	for(i=0;i<arrSize;i++){if(this[i]!= this[index]){this[n++]=this[i];}}
	if(n<i){this.length = n;}};

/**
 * textelement
 * @param arg element
 * @returns
 */
Array.prototype.contain = function(arg){var i=0;
	var arrSize = this.length;
	for(i=0;i<arrSize;i++){if(this[i] == arg){return true;}}
	return false;};










