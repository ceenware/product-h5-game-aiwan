var hg = null;
function addClass(element, new_name) {if (!element ||!new_name) return false;
 if (element.className) {var old_class_name = element.className;
 element.className = old_class_name + " " + new_name;} else{element.className = new_name;}
 return true;}
 function removeClass(element, class_name) {if(!element ||!class_name) return false;
 if (!element.className) return false;
 var all_names = element.className.split(" ");
 for (var i = 0; i < all_names.length; i++) {if (all_names[i] === class_name) {all_names.splice(i, 1);
 element.className = "";
 for (var j = 0; j < all_names.length; j++) {element.className += " ";
 element.className += all_names[j];}
 return true;}}}
var orderId = null;
$(function() {$(".close").on("click",function(){if (window.isH5) {window.history.go(-1);}else{wx.miniProgram.navigateBack();}})
 document.getElementById("levelSwitchBox").addEventListener("webkitAnimationEnd", function() {$("#levelSwitchBox").css("display","none")
 $("#levelSwitchBoxMain").attr("src","img/level_2_mains.jpg?v=1.0.0")
 $("#levelSwitchBox").removeClass("hidden")})
 $("#levelSwitchBox").addClass("hidden")
 if(!hg){createHg(false)}});
function playAudioInWechat(obj){if (window.WeixinJSBridge) {WeixinJSBridge.invoke('getNetworkType', {}, function (e) {obj.currentTime=0;
 obj.play();
 console.log(22,obj);}, false);} else {document.addEventListener("WeixinJSBridgeReady", function () {WeixinJSBridge.invoke('getNetworkType', {}, function (e) {obj.currentTime=0;
 obj.play();});
 console.log(22,obj);}, false);}
 console.log(22,obj);}
function createHg(GAMEMODE){//Initialize game, textparameterscoretext"Gametextcanvastextelement"text"Levelset, text(textset)"
 hg = new HardestGame(document.getElementById("gameStage"),GAMEMODE);
 //Gametext
 hg.levelSuccessHandle = function (){if(hg.level<4){// playAudioInWechat($("#success_audio").get(0));
 document.getElementById("currentLevel").getElementsByTagName("span")[0].innerHTML = hg.level;
 var time = 4;
 var interval = setInterval(function (){time--;
 if(time <= 0){clearInterval(interval);
 hg.gameContinue(true);}},1000);}else{var level=hg.level-1
 // var audio = document.getElementById('back_music');
 // audio.pause();
 // playAudioInWechat($("#gameSuccess_audio").get(0));
 $("#app").addClass("blur")
 $("#gameSuccessBox").css("display","block")
 $("#gameSuccessBoxBtn").on("click",function(){if (window.isH5) {window.history.go(-1);}else{wx.miniProgram.getEnv(function (res) {if (res.miniprogram) {var info = {game_id: game_id,//parametertext
 openid: openid,//second parameter
 orderId:orderId,
 level: level,//second parameter
 results: 2,//second parameter};
 var json = JSON.stringify(info);
 wx.miniProgram.postMessage({data: json});}});
 setTimeout(function(){// wx.miniProgram.navigateBack();
 wx.miniProgram.redirectTo({url: '../my/my?address='+0+'&orderId='+orderId});},1000)}})}}
 //GameFailedtext
 hg.gameOverHandle = function (){clearInterval(timeboxInterval);
 hg=null;
 if(hg){delete hg;}
 // var audio = document.getElementById('back_music');
 // audio.pause();
 // playAudioInWechat($("#gameFail_audio").get(0));
 $("#gameOverBox").css("display","block");
 $("#app").addClass("blur");
 var level=this.level;
 // console.log(111,this.level);
		// hg.gameStart();
 $("#gameOverBoxBtn").on("click",function(){window.location.href="play.html";
// if (window.isH5) {// window.history.go(-1);
//}else{// 
// wx.miniProgram.getEnv(function (res) {// if (res.miniprogram) {// var info = {// game_id: game_id,//parametertext
// openid: openid,//second parameter
// orderId:orderId,
// level: level,//second parameter
// results: 1,//second parameter
//};
// var json = JSON.stringify(info);
// wx.miniProgram.postMessage({data: json});
//}
//});
// setTimeout(function() {// wx.miniProgram.navigateBack();
// 
//},1000)
//}})}
 //Initialize game
 hg.init();
 hg.canvas.parentNode.style.width = hg.canvas.width + "px";
 hg.canvas.parentNode.style.height = hg.canvas.height + "px";
 //game start
 hg.gameStart();
 document.getElementById("currentLevel").getElementsByTagName("span")[0].innerHTML = hg.level;
 return true;}
