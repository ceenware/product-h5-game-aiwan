var arr = []; //textdowntext; 
function getId(id) {return document.getElementById(id);} //textID
function C(cls) {return document.getElementsByClassName(cls);} //text

var obj = {//createtextGameobject
 ROW: 4, //Gamerow text
 CELL: 4, //Gamecolumn text
 r: 0, //textrow
 c: 0, //textcolumn
 f: 0, //textdowntext
 keyCd: 0, //textkey
 score: 0, //Score
 createEle: 0, //textcreateelement
 eleFragment: "", //text
 //Enter Game
 gameStart: function() {obj.init();
 obj.musicplay(1)
 document.onkeydown = function(e) {//textobject
 switch (e.keyCode) {//checktextkeytext
 case 37:
 obj.keyCd = 1;
 obj.moveLeft();
 obj.musicplay(3);
 break;
 case 38:
 obj.keyCd = 2;
 obj.moveUp();
 obj.musicplay(3);
 break;
 case 39:
 obj.keyCd = 1;
 obj.moveRight();
 obj.musicplay(3);
 break;
 case 40:
 obj.keyCd = 2;
 obj.moveDown();
 obj.musicplay(3);
 break;}
 getId("score").innerHTML = obj.score; //textScore}},
 musicplay: function(num) {var a1024 = getId("a1024");
 var a512 = getId("a512");
 var loser = getId("lose");
 var a2 = getId("a2");
 var winner = getId("winner");
 switch (num) {case 0:
 a1024.play();
 break;
 case 1:
 a512.play();
 break;
 case 2:
 loser.play();
 break;
 case 3:
 a2.play();
 break;
 case 4:
 winner.play();
 break;}},
 buttonsclick: function(event) {var but1 = getId("buton1");
 var but2 = getId("buton2");
 var but3 = getId("buton3");
 var but4 = getId("buton4");
 but1.onclick = function() {obj.keyCd = 2;
 obj.moveUp();
 obj.musicplay(3);
 getId("score").innerHTML = obj.score;}
 but2.onclick = function() {obj.keyCd = 1;
 obj.moveLeft();
 obj.musicplay(3);
 getId("score").innerHTML = obj.score;}
 but3.onclick = function() {obj.keyCd = 2;
 obj.moveDown();
 obj.musicplay(3);
 getId("score").innerHTML = obj.score;}
 but4.onclick = function() {obj.keyCd = 1;
 obj.moveRight();
 obj.musicplay(3);
 getId("score").innerHTML = obj.score;}},
 //text, textcreate
 init: function() {obj.eleFragment = document.createDocumentFragment(); //createulelement
 for (r = 0; r < obj.ROW; r++) {arr.push([]);
 for (c = 0; c < obj.CELL; c++) {arr[r][c] = 0;
 if (obj.createEle == 1) {obj.create(r, c);}}}
 if (obj.createEle == 1) {obj.createEle = 0;
 getId("gridPanel").innerHTML = ""; //cleartextelement
 getId("gridPanel").appendChild(obj.eleFragment); //addelement}
 obj.score = 0;
 getId("score").innerHTML = obj.score;
 getId("game").style.display = "none";
 getId("gameover").style.display = "none";
 obj.random(); //Start Gametext
 obj.random();
 obj.updateView();},
 create: function(r, c) {var grid, cell;
 var increment = 14,
 grWidth, grHeight, grMarginTop, grMarginLeft, ceWidth, ceHight;
 grid = document.createElement("div");
 cell = document.createElement("div");
 grid.id = "g" + r + c;
 grid.className = "grid";
 cell.id = "c" + r + c;
 cell.className = "cell";

 if (obj.ROW == 3) {increment = 24;} else if (obj.ROW == 4) {increment = 18;}
 grWidth = grHeight = ceWidth = ceHight = 66 + (6 - obj.ROW) * increment; //text
 grMarginTop = grMarginLeft = (480 - grWidth * obj.ROW) / (obj.ROW + 1);
 grid.style.width = grWidth + "px";
 grid.style.height = grHeight + "px";
 grid.style.marginTop = grMarginTop + "px";
 grid.style.marginLeft = grMarginLeft + "px";
 cell.style.width = ceWidth + "px";
 cell.style.height = ceHight + "px";
 cell.style.top = grMarginTop + r * (grMarginTop + ceWidth) + "px";
 cell.style.left = grMarginLeft + c * (grMarginLeft + ceHight) + "px";
 cell.style.lineHeight = ceHight + "px";
 cell.style.fontSize = 15 + (6 - obj.ROW) * 10 + "px";
 cell.style.transition = 1 + "s";

 obj.eleFragment.appendChild(grid);
 obj.eleFragment.appendChild(cell);},
 random: function() {while (1) {var row = Math.floor(Math.random() * obj.ROW);
 var cell = Math.floor(Math.random() * obj.CELL);
 if (arr[row][cell] == 0) {//checktext0text2text4
 arr[row][cell] = (Math.random() > 0.5)? 4: 2;
 break;}}},
 //text
 updateView: function() {var win = 0;
 for (r = 0; r < obj.ROW; r++) {for (c = 0; c < obj.CELL; c++) {if (arr[r][c] == 0) {//text0textshow
 getId("c" + r + c).innerHTML = ""; //0textshow
 getId("c" + r + c).className = "cell" //textstyle} else {getId("c" + r + c).innerHTML = arr[r][c];
 getId("c" + r + c).className = "cell n" + arr[r][c]; //addtext
 if (obj.ROW == 3 && arr[r][c] == 1024) {win = 1;} else if (obj.ROW == 4 && arr[r][c] == 2048) {win = 1;} else if (obj.ROW == 5 && arr[r][c] == 4096) {win = 1;} else if (obj.ROW == 6 && arr[r][c] == 8192) {win = 1;}}}}
 if (win == 1) {//text
 obj.musicplay(4)
 getId("game").style.display = "block";
 getId("gameover").style.display = "block";
 getId("Score").innerHTML = "You win!<br>Score:" + obj.score;}
 if (obj.isGameOver()) {//GameFailed
 obj.musicplay(2)
 getId("game").style.display = "block";
 getId("gameover").style.display = "block";
 getId("Score").innerHTML = "GAME OVER!<br>Score:" + obj.score;}},
 //GameFailed
 isGameOver: function() {for (r = 0; r < obj.ROW; r++) {for (c = 0; c < obj.CELL; c++) {if (arr[r][c] == 0) {//text0textgameover
 return false;} else if (c!= obj.CELL - 1 && arr[r][c] == arr[r][c + 1]) {//lefttextright textdowntext
 obj.musicplay(3);} else if (r!= obj.ROW - 1 && arr[r][c] == arr[r + 1][c]) {//uptextdown uptextdowntext
 return false;}}}

 return true;},
 //textdowntext0text
 find: function(r, c, start, condition, direction) {if (obj.keyCd == 2) {//updowntextkey
 if (direction == 1) {//textuptextkey f++
 for (var f = start; f < condition; f += direction) {if (arr[f][c]!= 0) {return f;}}} else {//textdowntextkey f--
 for (var f = start; f >= condition; f += direction) {if (arr[f][c]!= 0) {return f;}}}} else {//leftrighttextkey
 if (direction == 1) {//lefttextkey f++
 for (var f = start; f < condition; f += direction) {if (arr[r][f]!= 0) {return f;}}} else {//righttextkey f--
 for (var f = start; f >= condition; f += direction) {if (arr[r][f]!= 0) {return f;}}}}
 return null; //text!=0text, Backnull},
 dealToLeft: function(r) {var next;
 for (c = 0; c < obj.ROW; c++) {next = obj.find(r, c, c + 1, obj.CELL, 1); //textLevel text0text
 if (next == null) break; //textBack
 //text0
 if (arr[r][c] == 0) {arr[r][c] = arr[r][next]; //text0text
 arr[r][next] = 0; //text0
 c--; //text, text,} else if (arr[r][c] == arr[r][next]) {//text, text
 arr[r][c] *= 2;
 arr[r][next] = 0;
 obj.score += arr[r][c];}}},
 move: function(itertor) {var before, //text
 after; //aftertext
 before = arr.toString();
 itertor(); //text rowforfunction
 after = arr.toString();
 if (before!= after) {//text, textupdate
 obj.random();
 obj.updateView();}},
 moveLeft: function() {obj.move(function() {for (r = 0; r < obj.ROW; r++) {obj.dealToLeft(r);}})
 // if text text
 // fromtext, downtextStart, text, 
 // text, text, 
 // text, text, settext
 // text text text
 // fromtextdowntextStarttext
 // text Level text
 // textsettext, textsettext 0},
 //righttextkeytext
 dealToRight: function(r) {var next;
 for (c = obj.CELL - 1; c >= 0; c--) {next = obj.find(r, c, c - 1, 0, -1); //textLevel text0text
 if (next == null) break; //textBack
 //text0
 if (arr[r][c] == 0) {arr[r][c] = arr[r][next]; //text0text
 arr[r][next] = 0; //text0
 c++; //text, text,} else if (arr[r][c] == arr[r][next]) {//text, text
 arr[r][c] *= 2;
 arr[r][next] = 0;
 obj.score += arr[r][c];}}},
 moveRight: function() {obj.move(function() {for (r = 0; r < obj.ROW; r++) {obj.dealToRight(r);}})},
 //uptextkeytext
 dealToUp: function(c) {var next;
 for (r = 0; r < obj.ROW; r++) {next = obj.find(r, c, r + 1, obj.ROW, 1); //textLevel text0text
 if (next == null) break;
 //text0
 if (arr[r][c] == 0) {arr[r][c] = arr[next][c]; //text0text
 arr[next][c] = 0; //text0
 r--; //text, text} else if (arr[r][c] == arr[next][c]) {//text, text
 arr[r][c] *= 2;
 arr[next][c] = 0;
 obj.score += arr[r][c];}}},
 moveUp: function() {obj.move(function() {for (c = 0; c < obj.CELL; c++) {obj.dealToUp(c);}})},
 //downtextkeytext
 dealToDown: function(c) {var next;
 for (r = obj.ROW - 1; r >= 0; r--) {next = obj.find(r, c, r - 1, 0, -1); //textLevel text0text
 if (next == null) {break;}
 //text0
 if (arr[r][c] == 0) {arr[r][c] = arr[next][c]; //text0text
 arr[next][c] = 0; //text0
 r++; //text, text} else if (arr[r][c] == arr[next][c]) {//text, text
 arr[r][c] *= 2;
 arr[next][c] = 0;
 obj.score += arr[r][c];}}},
 moveDown: function() {//textmethod
 obj.move(function() {for (c = 0; c < obj.CELL; c++) {obj.dealToDown(c);}})}}
window.onload = function() {obj.createEle = 1;
 obj.gameStart();
 obj.buttonsclick();}

function getModel(e) {//textgetaelement
 var a = e.target,
 modelValue = 4;
 if (a.nodeName == "A") {if (a.innerHTML == "3X3") {modelValue = 3;} else if (a.innerHTML == "4X4") {modelValue = 4;} else if (a.innerHTML == "5X5") {modelValue = 5;} else if (a.innerHTML == "6X6") {modelValue = 6;}
 obj.ROW = obj.CELL = modelValue;
 obj.createEle = 1; //textcreatetextdivelementtext
 obj.gameStart();}}