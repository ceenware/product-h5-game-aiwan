/*
 * createtext
 */

var Myarr = ['fa-diamond','fa-diamond','fa-paper-plane-o','fa-paper-plane-o','fa-anchor','fa-anchor','fa-bolt','fa-bolt','fa-cube','fa-cube','fa-anchor','fa-anchor','fa-leaf','fa-leaf','fa-bicycle','fa-bicycle']
/*
 * showtextuptext
 * - textdowntext "shuffle" methodtextmiddletextrow text card
 * - text, createtext HTML
 * - text HTML addtext
 */

// text cardfunctiontext http://stackoverflow.com/a/2450976
function shuffle(array) {var currentIndex = array.length, temporaryValue, randomIndex;

 while (currentIndex!== 0) {randomIndex = Math.floor(Math.random() * currentIndex);
 currentIndex -= 1;
 temporaryValue = array[currentIndex];
 array[currentIndex] = array[randomIndex];
 array[randomIndex] = temporaryValue;}

 return array;}
//Initializefunction, textRestarttext
function run(){var Harr = shuffle(Myarr); //"shuffle" methodtextmiddletextrow text card
 var Vhtml='';//definetexthtml
 for(var i=0;i<Harr.length;i++){Vhtml = Vhtml+'<li class="card"> <i class="fa '+Harr[i]+'"></i> </li>'}
 //text, texthtml
 $("#deck").html(Vhtml);//text HTML addtext
 //console.log(Vhtml)
 fclick();//textpoint text
 sessionStorage.setItem("ss",0);//Initializepoint text
 sessionStorage.setItem("pp",0);//Initializetext
 sessionStorage.setItem("tt","xx");//textchecktext, xxtext
 $(".moves").html(0);//point textInitializetext}
function fclick(){$("#deck li").click(function(){if($(this).hasClass("open")||$(this).hasClass("match")){return false;//textpoint text}
 if(sessionStorage.getItem("tt")!="xx"){return false;//textpoint text, textpoint text}
 var ss = parseInt(sessionStorage.getItem("ss"))+1;//point text1
 var pp = parseInt(sessionStorage.getItem("pp"));
 sessionStorage.setItem("ss",ss);
 $(".moves").html(ss);
 if(parseInt(sessionStorage.getItem("ss"))%2==0){//textLevel textpoint text, text
 sessionStorage.setItem("tt","yy");
 $(this).addClass("open show open2");//Level textupopen2
 //console.log($(".open1").html());
 //console.log($(".open2").html());
 if($(".open1").html()==$(".open2").html()){//texthtmltext text
 setTimeout(function(){$(".open1,.open2").addClass("match");
 $(".open1").removeClass("show open1");
 $(".open2").removeClass("show open2");
 sessionStorage.setItem("tt","xx");
 sessionStorage.setItem("pp",pp+1);
 if(pp==1){//text8, text
 setTimeout(function(){alert("text"+ss+"text");},500)}},500)}else{setTimeout(function(){//text, Closetext
 $(".open1").removeClass("open show open1");
 $(".open2").removeClass("open show open2");
 sessionStorage.setItem("tt","xx");},500)}}else{//alert(1)
 $(this).addClass("open show open1");//Level textupopen1}})}
run()

/*
 * settextEvent listenertext. textpoint text: 
 * - showtext (textfromtextfunctionmiddlecalltextfunctionmiddle) 
 * - textaddtext "open" text *text* middle (textfromtextfunctionmiddlecalltextfunctionmiddle) 
 * - textmiddletext, text
 * + text, text "open" text (textfromtextfunctionmiddlecalltextfunctionmiddle) 
 * + text, textfromtextmiddletexthidetext (textfromtextfunctionmiddlecalltextfunctionmiddle) 
 * + textMovetextshowtextup (textfromtextfunctionmiddlecalltextfunctionmiddle) 
 * + text, textshowtextScoretext (textfromtextfunctionmiddlecalltextfunctionmiddle) 
 */
