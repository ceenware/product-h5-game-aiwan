/**
 * Created by Administrator on 2015/6/27.
 */

(function () {window.onload = function() {//textrow
 Game.setup();};
 var ctx = null;
 //Game body
 var Game = {canvas: document.getElementById('canvas'),//getcanvastext
 setup: function() {if (this.canvas.getContext) {ctx = this.canvas.getContext('2d');//getctx
 this.width = this.canvas.width;
 this.height = this.canvas.height;
 Screen.welcome();
 this.canvas.addEventListener('click', this.runGame, false);//textcanvastextaddpoint text
 Ctrl.init();//textkeytext, textrowInitialize}},
 animate: function() {Game.play = requestAnimFrame(Game.animate);//callrequestAnimFramemethod, text row textstextcall
 Game.draw();},
 init: function() {Background.init();
 Hud.init();
 Bricks.init();
 Ball.init();
 Paddle.init();
 //this.animate();},
 draw: function() {ctx.clearRect(0, 0, this.width, this.height);//textcanvastextrow text
 Background.draw();
 Bricks.draw();
 Paddle.draw();
 Hud.draw();
 Ball.draw();},
 levelUp: function() {Hud.lv += 1;
 Bricks.init();
 Ball.init();
 Paddle.init();},
 levelLimit: function(lv) {if(lv<=10){return lv;}
 else{return 10;}},
 runGame: function() {Game.canvas.removeEventListener('click', Game.runGame, false);//textcanvastext point text, textrunGamemethodtextcall
 Game.init();
 Game.animate();},
 restartGame: function() {Game.canvas.removeEventListener('click', Game.restartGame, false);//textcanvastext point text, textrestartGamemethodtextcall
 Game.init();}};

 //ScoretextLeveltext
 var Hud = {init: function() {this.lv =1;
 this.score = 0;},
 draw: function() {ctx.font = '12px helvetica, arial';
 ctx.fillStyle = 'white';
 ctx.textAlign = 'left';
 ctx.fillText('Score: ' + this.score, 5, Game.height - 5);
 ctx.textAlign = 'right';
 ctx.fillText('Lv: ' + this.lv, Game.width - 5, Game.height - 5);}};
 //creategame starttext
 var Screen = {welcome: function() {this.text = '****';
 this.textSub = 'blog.96xy.cn';
 this.textColor = 'white';
 this.create();//calltextDrawmethod},
 create: function() {//textDrawtextmethod
 ctx.fillStyle = 'black';
 ctx.fillRect(0, 0, Game.width, Game.height);
 ctx.fillStyle = this.textColor;
 ctx.textAlign = 'center';
 ctx.font = '40px helvetica, arial';
 ctx.fillText(this.text, Game.width / 2, Game.height / 2);
 ctx.fillStyle = '#999999';
 ctx.font = '20px helvetica, arial';
 ctx.fillText(this.textSub, Game.width / 2, Game.height / 2 + 30);},
 gameover: function() {//Game Overtextset
 this.text = 'Game Over';
 this.textSub = 'Click To Retry';
 this.textColor = 'red';
 this.create();//calltextDrawmethod}};

 //Level 3text: showtext
 var Background = {init: function() {this.ready = false;
 this.img = new Image();
 this.img.src = 'images/background.jpg';
 this.img.onload = function() {Background.ready = true;};},
 draw: function() {if (this.ready) {ctx.drawImage(this.img, 0, 0);}}};

 //Level 4text: textwidthtextheight
 var Bricks = {gap: 4,
 col: 5,
 w: 188,
 h: 30,
 r:15,
 init: function() {//this.row = 3;
 //this.row = 2 + Hud.lv;
 this.row = 2 + Game.levelLimit(Hud.lv);//settextrow text, calllimitmethod
 this.total = 0;
 //textcounttextrow text
 this.count = [this.row];
 for (var i = this.row; i--;) {this.count[i] = [this.col];}},
 draw: function() {//textDrawtextmethod
 //textsmall ball textmiddletext
 var i, j;
 for (i = this.row; i--;) {for (j = this.col; j--;) {if (this.count[i][j]!== false) {//text, checksmall ball text
 if (Ball.x >= this.x(j) &&//text small ball textrowcheck
 Ball.x <= (this.x(j) + this.w) &&
 Ball.y >= this.y(i) &&
 Ball.y <= (this.y(i) + this.h)) {//checktext, text rowdowntext row text
 this.collide(i, j);//textsettextfalse
 continue;}
 ctx.fillStyle=this.gradient(i),
 //ctx.fillRect(this.x(j), this.y(i), this.w, this.h);
 //textDrawtext
 ctx.beginPath();
 ctx.moveTo(this.x(j)+15, this.y(i));
 ctx.lineTo(this.x(j)+188-15, this.y(i));
 ctx.arcTo(this.x(j)+188, this.y(i), this.x(j)+188, this.y(i)+15, this.r);
 ctx.arcTo(this.x(j)+188, this.y(i)+30, this.x(j), this.y(i)+30, this.r);
 ctx.lineTo(this.x(j)+15, this.y(i)+30);
 ctx.arcTo(this.x(j), this.y(i)+30, this.x(j), this.y(i), this.r);
 ctx.arcTo(this.x(j), this.y(i),
 this.x(j)+188, this.y(i), this.r);
 ctx.closePath();
 //ctx.stroke();
 ctx.fill();}}}
 if (this.total === (this.row * this.col)) {//textcurrent leveltext
 Game.levelUp();//callGametextlevelUptextmethod(text levelLevel)}},
 collide: function(i, j) {Hud.score += 1;//textchecktext, textscore+1
 this.total += 1;//text+1
 //text, textfalse, textsmall ball textycoordinatestext
 this.count[i][j] = false;
 Ball.sy = -Ball.sy;},
 x: function(row) {//BacktextXtext
 return (row * this.w) + (row * this.gap);},
 y: function(col) {//BacktextYtext
 return (col * this.h) + (col * this.gap);},

 //Level 5text: text
 gradient: function(row) {for(;row>3;){//text row text
 row=row-4;}
 switch(row) {//textrow text row text
 case 0:
 return this.gradientPurple?
 this.gradientPurple:
 this.gradientPurple =
 this.makeGradient(row, '#bd06f9', '#9604c7');
 case 1:
 return this.gradientRed?
 this.gradientRed:
 this.gradientRed =
 this.makeGradient(row, '#F9064A', '#c7043b');
 case 2:
 return this.gradientGreen?
 this.gradientGreen:
 this.gradientGreen =
 this.makeGradient(row, '#05fa15', '#04c711');
 case 3:
 return this.gradientOrange?
 this.gradientOrange:
 this.gradientOrange =
 this.makeGradient(row, '#faa105', '#c77f04');}},
 makeGradient: function(row, color1, color2) {var y = this.y(row);
 var grad = ctx.createLinearGradient(0, y, 0, y + this.h);
 //textcolor1, textcolor2
 grad.addColorStop(0, color1);
 grad.addColorStop(1, color2);
 return grad;}};

 //Level 6text: createsmall ball
 var Ball = {r: 15,//small ball text
 init: function() {this.x = 480;
 this.y = 480;
 //this.sx = 2;
 //this.sy = -2;
 this.sx = 1 + (0.4 * Hud.lv);
 this.sy = 6 + (0.8 * Hud.lv);},
 draw: function() {//small ball textDrawmethod
 this.edges();
 this.collide();
 this.move();
 ctx.beginPath();
 ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
 ctx.closePath();
 ctx.fillStyle = '#eee';
 ctx.fill();},
 edges: function() {//text small ball textGametext
 //Gametextuptext
 if (this.y < 1) {//text small ballYtextcoordinatessmall text1text(text small ball textuptext)
 this.y = 1;//text small ball textYcoordinatestext1
 this.sy = -this.sy;//text small ballYDirectionuptextspeedtext row text}
 //Gametextdowntext
 else if (this.y > Game.height) {//text small ball textYcoordinateslarge textGametextheighttext(text small ball textGametextdowntext)
 this.sy = this.sx = 0;//text small ballX,YDirectionuptextspeedtext0
 this.y = this.x = 1000;//text small ballX,Ycoordinatestext1000(textGametext)
 Screen.gameover();//callScreenmethodtextDrawtextmethod
 canvas.addEventListener('click', Game.restartGame, false);//textcanvastextaddtextpoint text, text point textcallGametextrestartGamemethod(textStart Game)
 //this.sx=-5-this.sx;
 //this.sy=-this.sy;
 return;}
 //Gametextlefttext
 if (this.x < 1) {//text small ball textXtextcoordinatessmall text1text(text small ball textGametextlefttext)
 this.x = 1;//text small ballXtextcoordinatestext1
 this.sx = -this.sx;//text small ballXDirectionuptextspeedtext row text}
 //Gametextrighttext
 else if (this.x > Game.width)//text small ball textXcoordinateslarge textGametextwidthtext(text small ball textGametextrighttext)
 {this.x = Game.width - 1;//text small ball textXtextcoordinatestext Gametextwidth-1
 this.sx = -this.sx;//text small ballXDirectionuptextspeedtext row text}},

 //text, Gametextball textsmall ball text. 
 collide: function() {//text small ball text ball textcheckmethod
 if (this.x >= Paddle.x &&//text row textdowntext row textchecksmall ball textXcoordinatestextball textXcoordinatestext
 this.x <= (Paddle.x + Paddle.w) &&
 this.y >= Paddle.y &&//text row textdowntext row textchecksmall ball textball textrow text
 this.y <= (Paddle.y + Paddle.h)) {this.sx = 14 * ((this.x - (Paddle.x + Paddle.w / 2)) / Paddle.w);//text small ball textXDirectionuptextspeedtext row text
 this.sy = -this.sy;}},

 //text small ball text
 move: function() {//textmethodtexttransformsmall ballX,Ytextcoordinatestext
 this.x += this.sx;
 this.y += this.sy;}};

 //Level 7text: createball text
 var Paddle = {w: 180,
 h: 25,
 r: 12,
 init: function() {this.x = 390;
 this.y = 480;
 this.speed = 8;},
 draw: function() {//ball textDrawmethod
 this.move();
 ctx.beginPath();
 ctx.moveTo(this.x, this.y);
 ctx.arcTo(this.x + this.w, this.y,
 this.x + this.w, this.y + this.r, this.r);
 ctx.lineTo(this.x + this.w, this.y + this.h - this.r);
 ctx.arcTo(this.x + this.w, this.y + this.h,
 this.x + this.w - this.r, this.y + this.h, this.r);
 ctx.lineTo(this.x + this.r, this.y + this.h);
 ctx.arcTo(this.x, this.y + this.h,
 this.x, this.y + this.h - this.r, this.r);
 ctx.lineTo(this.x, this.y + this.r);
 ctx.arcTo(this.x, this.y, this.x + this.r, this.y, this.r);
 ctx.closePath();
 ctx.fillStyle = this.gradient();
 ctx.fill();},


 gradient: function() {//setball textstyle
 if (this.gradientCache) {return this.gradientCache;}
 this.gradientCache = ctx.createLinearGradient(this.x, this.y, this.x, this.y + 20);
 this.gradientCache.addColorStop(0, '#eee');
 this.gradientCache.addColorStop(1, '#999');
 return this.gradientCache;},
 //text ball texthorizontalMove
 move: function() {//if (this.x > -(this.w / 2) &&this.x < Game.width - (this.w / 2))
 // this.x += this.speed;

 //text ball textrow text, textmiddleCtrl.lefttextCtrl.righttextArrow keystext
 if (Ctrl.left && (this.x < Game.width - (this.w / 2))) {this.x += this.speed;} else if (Ctrl.right && this.x > -this.w / 2) {this.x += -this.speed;}}};
 //textkeytext, textControl
 var Ctrl = {init: function() {//createkeytext
 window.addEventListener('keydown', this.keyDown, true);
 window.addEventListener('keyup', this.keyUp, true);

 //addtextControl
 window.addEventListener('mousemove', this. movePaddle, true);


 //addtextControl
 Game.canvas.addEventListener('touchstart', this.movePaddle, false);
 Game.canvas.addEventListener('touchmove', this.movePaddle, false);
 Game.canvas.addEventListener('touchmove', this.stopTouchScroll, false);},
 keyDown: function(event) {//keytextdown, StartMove
 switch(event.keyCode) {case 39:
 Ctrl.left = true;
 break;
 case 37:
 Ctrl.right = true;
 break;
 default:
 break;}},
 keyUp: function(event) {//textkeytext, text
 switch(event.keyCode) {case 39:
 Ctrl.left = false;
 break;
 case 37:
 Ctrl.right = false;
 break;
 default:
 break;}},
 movePaddle: function(event) {var mouseX = event.pageX;//gettextuptextXcoordinates
 var canvasX = Game.canvas.offsetLeft;//gettextlefttextXcoordinates
 var paddleMid = Paddle.w / 2;
 if (mouseX > canvasX && mouseX < canvasX + Game.width) {//text
 var newX = mouseX - canvasX;
 newX -= paddleMid;
 Paddle.x = newX;}},
 stopTouchScroll: function(event) {event.preventDefault();}};}());


//Level 2text: createtextHTML5textanimation
//CanvastextJavaScriptTimer, textanimationtext. 
// textcreateanimation, textTimertextDrawtext. 
//textJavaScriptfunctionrquestAnimationFrame(), 
// textshowtextup. 
window.requestAnimFrame = (function() {return window.requestAnimationFrame ||
 window.webkitRequestAnimationFrame ||
 window.mozRequestAnimationFrame ||
 window.oRequestAnimationFrame ||
 window.msRequestAnimationFrame ||
 function(callback) {window.setTimeout(callback, 1000 / 60);//textstext, textstextfunctiontext};})();