/**
 * text2text
 * @param object1 text1
 * @param object2 text2
 * @param overlap textlarge small
 * @returns {Boolean} text, Backtrue
 */
function CheckIntersect(object1, object2, overlap)
{// x-text x-text
	// A1------>B1 C1 A2------>B2 C2
	// +--------+ ^ +--------+ ^
	// | object1| | y-text | object2| | y-text
	// | | | | | |
	// +--------+ D1 +--------+ D2
	//
	//overlaptext
	A1 = object1.x + overlap;
	B1 = object1.x + object1.size - overlap;
	C1 = object1.y + overlap;
	D1 = object1.y + object1.size - overlap;
 
	A2 = object2.x + overlap;
	B2 = object2.x + object2.size - overlap;
	C2 = object2.y + overlap;
	D2 = object2.y + object2.size - overlap;
 
	//textx-text
	if(A1 >= A2 && A1 <= B2
	 || B1 >= A2 && B1 <= B2)
	{//checky-text
		if(C1 >= C2 && C1 <= D2 || D1 >= C2 && D1 <= D2)
		{return true;}}
	return false;}

/**
 * text
 * @param tank textobject
 * @param mapobj textobject
 * @returns {Boolean} text, Backtrue
 */
function tankMapCollision(tank,mapobj){//Movetext, textMoveDirection, textDirectioncheck+-overlap,
	var tileNum = 0;//texttiletext
	var rowIndex = 0;//mapmiddletext row text
	var colIndex = 0;//mapmiddletext column text
	var overlap = 3;//textlarge small
	
	//texttanktextx, ytextmapmiddletextrowtextcol
	if(tank.dir == UP){rowIndex = parseInt((tank.tempY + overlap - mapobj.offsetY)/mapobj.tileSize);
		colIndex = parseInt((tank.tempX + overlap- mapobj.offsetX)/mapobj.tileSize);}else if(tank.dir == DOWN){//textdown, textdir==1text, row text+tank.Height
		rowIndex = parseInt((tank.tempY - overlap - mapobj.offsetY + tank.size)/mapobj.tileSize);
		colIndex = parseInt((tank.tempX + overlap- mapobj.offsetX)/mapobj.tileSize);}else if(tank.dir == LEFT){rowIndex = parseInt((tank.tempY + overlap- mapobj.offsetY)/mapobj.tileSize);
		colIndex = parseInt((tank.tempX + overlap - mapobj.offsetX)/mapobj.tileSize);}else if(tank.dir == RIGHT){rowIndex = parseInt((tank.tempY + overlap- mapobj.offsetY)/mapobj.tileSize);
		//textright, textdir==3text, column text+tank.Height
		colIndex = parseInt((tank.tempX - overlap - mapobj.offsetX + tank.size)/mapobj.tileSize);}
	if(rowIndex >= mapobj.HTileCount || rowIndex < 0 || colIndex >= mapobj.wTileCount || colIndex < 0){return true;}
	if(tank.dir == UP || tank.dir == DOWN){var tempWidth = parseInt(tank.tempX - map.offsetX - (colIndex)*mapobj.tileSize + tank.size - overlap);//textscore
		if(tempWidth % mapobj.tileSize == 0){tileNum = parseInt(tempWidth/mapobj.tileSize);}else{tileNum = parseInt(tempWidth/mapobj.tileSize) + 1;}
		for(var i=0;i<tileNum && colIndex+i < mapobj.wTileCount;i++){var mapContent = mapobj.mapLevel[rowIndex][colIndex+i];
			if(mapContent == WALL || mapContent == GRID || mapContent == WATER || mapContent == HOME || mapContent == ANOTHREHOME){if(tank.dir == UP){tank.y = mapobj.offsetY + rowIndex * mapobj.tileSize + mapobj.tileSize - overlap;}else if(tank.dir == DOWN){tank.y = mapobj.offsetY + rowIndex * mapobj.tileSize - tank.size + overlap;}
				return true;}}}else{var tempHeight = parseInt(tank.tempY - map.offsetY - (rowIndex)*mapobj.tileSize + tank.size - overlap);//textscore
		if(tempHeight % mapobj.tileSize == 0){tileNum = parseInt(tempHeight/mapobj.tileSize);}else{tileNum = parseInt(tempHeight/mapobj.tileSize) + 1;}
		for(var i=0;i<tileNum && rowIndex+i < mapobj.HTileCount;i++){var mapContent = mapobj.mapLevel[rowIndex+i][colIndex];
			if(mapContent == WALL || mapContent == GRID || mapContent == WATER || mapContent == HOME || mapContent == ANOTHREHOME){if(tank.dir == LEFT){tank.x = mapobj.offsetX + colIndex * mapobj.tileSize + mapobj.tileSize - overlap;}else if(tank.dir == RIGHT){tank.x = mapobj.offsetX + colIndex * mapobj.tileSize - tank.size + overlap;}
				return true;}}}
	return false;}

/**
 * text
 * @param bullet textobject
 * @param mapobj textobject
 */
function bulletMapCollision(bullet,mapobj){var tileNum = 0;//texttiletext
	var rowIndex = 0;//mapmiddletext row text
	var colIndex = 0;//mapmiddletext column text
	var mapChangeIndex = [];//mapmiddletext
	var result = false;//text
	//textbullettextx, ytextmapmiddletextrowtextcol
	if(bullet.dir == UP){rowIndex = parseInt((bullet.y - mapobj.offsetY)/mapobj.tileSize);
		colIndex = parseInt((bullet.x - mapobj.offsetX)/mapobj.tileSize);}else if(bullet.dir == DOWN){//textdown, textdir==1text, row text+bullet.Height
		rowIndex = parseInt((bullet.y - mapobj.offsetY + bullet.size)/mapobj.tileSize);
		colIndex = parseInt((bullet.x - mapobj.offsetX)/mapobj.tileSize);}else if(bullet.dir == LEFT){rowIndex = parseInt((bullet.y - mapobj.offsetY)/mapobj.tileSize);
		colIndex = parseInt((bullet.x - mapobj.offsetX)/mapobj.tileSize);}else if(bullet.dir == RIGHT){rowIndex = parseInt((bullet.y - mapobj.offsetY)/mapobj.tileSize);
		//textright, textdir==3text, column text+bullet.Height
		colIndex = parseInt((bullet.x - mapobj.offsetX + bullet.size)/mapobj.tileSize);}
	if(rowIndex >= mapobj.HTileCount || rowIndex < 0 || colIndex >= mapobj.wTileCount || colIndex < 0){return true;}
	
	if(bullet.dir == UP || bullet.dir == DOWN){var tempWidth = parseInt(bullet.x - map.offsetX - (colIndex)*mapobj.tileSize + bullet.size);
		if(tempWidth % mapobj.tileSize == 0){tileNum = parseInt(tempWidth/mapobj.tileSize);}else{tileNum = parseInt(tempWidth/mapobj.tileSize) + 1;}
		for(var i=0;i<tileNum && colIndex+i < mapobj.wTileCount;i++){var mapContent = mapobj.mapLevel[rowIndex][colIndex+i];
			if(mapContent == WALL || mapContent == GRID || mapContent == HOME || mapContent == ANOTHREHOME){//bullet.distroy();
				result = true;
				if(mapContent == WALL){//text
					mapChangeIndex.push([rowIndex,colIndex+i]);}else if(mapContent == GRID){}else{isGameOver = true;
					break;}}}}else{var tempHeight = parseInt(bullet.y - map.offsetY - (rowIndex)*mapobj.tileSize + bullet.size);
		if(tempHeight % mapobj.tileSize == 0){tileNum = parseInt(tempHeight/mapobj.tileSize);}else{tileNum = parseInt(tempHeight/mapobj.tileSize) + 1;}
		for(var i=0;i<tileNum && rowIndex+i < mapobj.HTileCount;i++){var mapContent = mapobj.mapLevel[rowIndex+i][colIndex];
			if(mapContent == WALL || mapContent == GRID || mapContent == HOME || mapContent == ANOTHREHOME){//bullet.distroy();
				result = true;
				if(mapContent == WALL){//text
					mapChangeIndex.push([rowIndex+i,colIndex]);}else if(mapContent == GRID){}else{isGameOver = true;
					break;}}}}
	//text
	map.updateMap(mapChangeIndex,0);
	return result;}
