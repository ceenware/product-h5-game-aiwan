/*Drawtext
 Controltextlarge small

*/
(function(window){'use strict';
	function Block(blockType){this.blockType = blockType; //text
		this.size = 30;
		this.originalSize = 32; //textlarge small
		this.sprite = window.ResourceManager.getResource('blocks'); //gettext}

	Block.prototype ={constructor:Block,
		draw:function(context,x,y,blockType,size){//xcoordinates,ycoordinates row column???????
			size = size || this.size;
			context.drawImage(this.sprite,((blockType||this.blockType)-1)*this.originalSize,0,this.originalSize,this.originalSize,x*size,y*size,size,size);
			//textcoordinates, textwide high, textcoordinates, wide high, 
			//textControlrightuptextthis.size textsize,}};
	window.Block = Block;})(window);