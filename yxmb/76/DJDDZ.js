var DJDDZ={};
DJDDZ.Init=function(canvasID){JFunction.PreLoadData(GMain.URL).done(function () {JMain.JForm=new JControls.Form(GMain.Size,canvasID).setBGImage(ResourceData.Images.bg1);
 JMain.JForm.clearControls();
 GMain.BtnPanel=new JControls.Object({x:100,y:280},{width:600,height:50});//textshowGameControltext
 GMain.PokerPanel0=new GControls.PokerPanel({x:100,y:5},{width:600,height:120},0,0);//textshowtext card, showobjecttextGMain.Poker[0]
 GMain.PokerPanel1=new GControls.PokerPanel({x:200,y:355},{width:400,height:120},1,20);//textshowtextcard, showobjecttextGMain.Poker[1]
 GMain.PokerPanel2=new GControls.PokerPanel({x:695,y:60},{width:100,height:440},2,25);//textshowrighttextcard, showobjecttextGMain.Poker[2]
 GMain.PokerPanel3=new GControls.PokerPanel({x:5,y:60},{width:100,height:440},3,25);//textshowlefttextcard, showobjecttextGMain.Poker[3]
 GMain.PokerPanel4=new GControls.PokerPanel({x:200,y:150},{width:400,height:120},4,20);//textshowtextcard, showobjecttextGMain.Poker[4]
 var BeginButton=new JControls.Button({x:235,y:0},{width:130,height:50}).setText("").setBGImage(ResourceData.Images.kaishi);
 BeginButton.onClick=function(){GMain.BtnPanel.visible=false;
 DJDDZ.Dealing();}
 GMain.BtnPanel.addControlInLast([BeginButton]);
 JMain.JForm.addControlInLast([GMain.PokerPanel0,GMain.PokerPanel1,GMain.PokerPanel2,GMain.PokerPanel3,GMain.PokerPanel4,GMain.BtnPanel]);
 DJDDZ.InitGame();
 JMain.JForm.show();});}
DJDDZ.InitGame=function(){GMain.Poker=[];
 for(var i=0;i<5;i++)GMain.Poker[i]=[];//initialize card storage
 for(var j=0;j<54;j++)GMain.Poker[0][j]=new GControls.Poker(j+1);//create card objects
 GMain.PokerPanel0.hidePoker=true;//hidePokertexttrue, showtext
 GMain.PokerPanel1.hidePoker=false;//hidePokertextfalse, showtext
 GMain.PokerPanel2.hidePoker=true;
 GMain.PokerPanel3.hidePoker=true;
 GMain.PokerPanel4.hidePoker=false;
 GMain.PokerPanel1.toSelectPoker=false;
 GMain.PokerPanel0.density=1;//settextcardshowtext
 GMain.ToPlay=false;
 GMain.LastHandPokerType=null;
 GMain.DealingNum=0;
 GMain.DealerNum=JFunction.Random(1,3);
 GMain.BeginNum=GMain.DealerNum;//Initializedeal cardstext}
DJDDZ.Dealing=function(){//deal cards
 if(GMain.DealingHandle)clearTimeout(GMain.DealingHandle);
 if(GMain.DealingNum>=51) {//dealing finished
 GMain.MaxScore=0;
 GMain.GrabTime=0;
 GMain.PokerPanel0.density=105;
 DJDDZ.GrabTheLandlord();//bid for landlord}else{if(GMain.DealerNum>3) GMain.DealerNum=1;
 var r=JFunction.Random(0,GMain.Poker[0].length-1);
 GMain.Poker[GMain.DealerNum].splice(GMain.Poker[GMain.DealerNum].length,0,GMain.Poker[0][r]);
 GMain.Poker[0].splice(r,1);
 GMain.DealingNum++;
 GMain.DealerNum++;
 GMain.DealingHandle=setTimeout(DJDDZ.Dealing, 40);//40textstextcard
 JMain.JForm.show();}}
DJDDZ.GrabTheLandlord=function(){//bid for landlord
 if(GMain.GrabTime==3&&GMain.MaxScore==0){//no one bid for landlord
 DJDDZ.GameOver();
 return;}
 if(GMain.MaxScore==3||(GMain.MaxScore>0&&GMain.GrabTime==3)){//landlord selected
 GMain.DealerNum=GMain.LandlordNum;
 GMain.LastHandNum=0;
 GMain.PokerPanel0.hidePoker=false;
 GMain.Poker[GMain.LandlordNum].splice(GMain.Poker[GMain.LandlordNum].length,0,GMain.Poker[0][2]);
 GMain.Poker[GMain.LandlordNum].splice(GMain.Poker[GMain.LandlordNum].length,0,GMain.Poker[0][1]);
 GMain.Poker[GMain.LandlordNum].splice(GMain.Poker[GMain.LandlordNum].length,0,GMain.Poker[0][0]);
 GMain.ToPlay=true;
 DJDDZ.ToPlay();
 return;}
 if(GMain.DealerNum>3) GMain.DealerNum=1;
 if(GMain.DealerNum==1){//player bids for landlord
 GMain.BtnPanel.clearControls();
 var Button1=new GControls.GrabButton({x:10,y:0},{width:130,height:50},1).setText("").setBGImage(ResourceData.Images.yf);
 var Button2=new GControls.GrabButton({x:160,y:0},{width:130,height:50},2).setText("").setBGImage(ResourceData.Images.ef);
 var Button3=new GControls.GrabButton({x:310,y:0},{width:130,height:50},3).setText("").setBGImage(ResourceData.Images.sf);
 var Button4=new GControls.GrabButton({x:460,y:0},{width:130,height:50}).setText("").setBGImage(ResourceData.Images.buqiang);
 GMain.BtnPanel.addControlInLast([Button1,Button2,Button3,Button4]);
 GMain.BtnPanel.visible=true;
 JMain.JForm.show();}else{//computer bids for landlord
 var r=JFunction.Random(0,3);
 if(r>GMain.MaxScore){GMain.MaxScore=r;
 GMain.LandlordNum=GMain.DealerNum;}
 GMain.DealerNum++;
 GMain.GrabTime++;
 JMain.JForm.show();
 DJDDZ.GrabTheLandlord();}}
DJDDZ.GameOver=function(){DJDDZ.Init("canvas1");}
DJDDZ.ToPlay=function(){//Play Cards
 JMain.JForm.show();
 if(GMain.DealerNum>3) GMain.DealerNum=1;
 if(GMain.LastHandNum==GMain.DealerNum){GMain.LastHandNum=0;}
 if(GMain.DealerNum==1){//player turn
 GMain.BtnPanel.clearControls();
 if(GMain.LastHandNum==2||GMain.LastHandNum==3){//not first play this round; pass is allowed
 var Button1=new JControls.Button({x:50,y:0},{width:100,height:50},1).setText("").setBGImage(ResourceData.Images.buchu);
 Button1.onClick=function(){for(var i=GMain.Poker[GMain.DealerNum].length-1;i>=0;i--)
 GMain.Poker[GMain.DealerNum][i].isSelected=false;
 GMain.DealerNum++;
 GMain.BtnPanel.visible=false;
 DJDDZ.ToPlay();}}
 var Button2=new JControls.Button({x:250,y:0},{width:100,height:50}).setText("").setBGImage(ResourceData.Images.chupai);
 Button2.onClick=function(){var _pokerNumbers=[];
 for(var i=GMain.Poker[GMain.DealerNum].length-1;i>=0;i--){if(GMain.Poker[GMain.DealerNum][i].isSelected){_pokerNumbers[_pokerNumbers.length]=GMain.Poker[GMain.DealerNum][i].pokerNumber;}}
 if(DJDDZ.CheckPlayPoker(_pokerNumbers)){//check whether selected cards are valid
 DJDDZ.PlayPoker();//play selected cards
 GMain.BtnPanel.visible=false;
 GMain.DealerNum++;
 DJDDZ.ToPlay();//next player}else{alert("Invalid play; please choose again!");}}
 var Button3=new JControls.Button({x:450,y:0},{width:100,height:50}).setText("").setBGImage(ResourceData.Images.tishi);
 Button3.onClick=function(){DJDDZ.AISelectPoker();
 JMain.JForm.show();}
 GMain.BtnPanel.addControlInLast([Button1,Button2,Button3]);
 GMain.BtnPanel.visible=true;
 GMain.PokerPanel1.toSelectPoker=true;
 JMain.JForm.show();}else{//computer turn
 if(DJDDZ.AISelectPoker()){//computer AI selects cards
 DJDDZ.PlayPoker();//play selected cards}
 GMain.DealerNum++;
 setTimeout(DJDDZ.ToPlay, 1500);//Pause1500texts, next player}}
DJDDZ.CheckPlayPoker=function(_pokerNumbers){//check play rules,pokerNumbersascendingsort
 var pokerType=DJDDZ.GetPokerType(_pokerNumbers);
 if(pokerType==null)return false;//textgettext card text
 if(GMain.LastHandNum==0)return true;//any card type is allowed as the first play
 else{//compare with the last play
 if(GMain.PokerTypes[pokerType.type].weight>GMain.PokerTypes[GMain.LastHandPokerType.type].weight)return true;//current card type can beat the previous one
 else if (GMain.PokerTypes[pokerType.type].weight==GMain.PokerTypes[GMain.LastHandPokerType.type].weight){//current card type cannot beat the previous one
 if(pokerType.type==GMain.LastHandPokerType.type&&pokerType.length==GMain.LastHandPokerType.length){//same card type and card count
 if(pokerType.num>GMain.LastHandPokerType.num)return true;//higher value beats lower value
 else return false;}else return false;}else return false;}};
DJDDZ.SplitPoker=function(__pokerNumbers, chaiNum){//__pokerNumberstextsort, ascending
 var splitPoker={};
 for(var type in GMain.PokerTypes) splitPoker[type]=[];
 if(chaiNum==null)chaiNum=3;
 if(__pokerNumbers!=null&&__pokerNumbers.length>0){var _pokerNumbers=[];
 var i,j;
 for(i=0;i<__pokerNumbers.length;i++) _pokerNumbers[i]=__pokerNumbers[i];//_pokerNumbersascending
 if(_pokerNumbers[_pokerNumbers.length-1]==18&&_pokerNumbers[_pokerNumbers.length-2]==17){splitPoker["12"].splice(0,0,17);
 _pokerNumbers.length=_pokerNumbers.length-2;}
 for(i=chaiNum;i>=0;i--){var str="1";
 for(var i1=1;i1<=i;i1++)str=str+String(1);
 for(j=_pokerNumbers.length-1;j>=i;j--){if(_pokerNumbers[j]==_pokerNumbers[j-i]){splitPoker[str].splice(0,0,_pokerNumbers[j]);// splitPoker[str]ascending
 for(var k=j;k>=j-i;k--){_pokerNumbers.splice(k,1);}}}}}
 return splitPoker;};
DJDDZ.IsStraight=function(numbers){//numberstextsort, ascending
 for(var i=1;i<numbers.length;i++){if(numbers[i]-numbers[i-1]!=1)return false;}
 return true;}
DJDDZ.GetPokerType=function(__pokerNumbers,chaiNum){//get__pokerNumberstext card text, __pokerNumberstextsort, ascending
 if(chaiNum==null)chaiNum=3;
 var splitPoker=DJDDZ.SplitPoker(__pokerNumbers,chaiNum);//split cards into base types
 var pokerType={type:"",num:0,length:__pokerNumbers.length};
 if(splitPoker["12"].length>0){if(pokerType.length==2)pokerType.type="12";//joker bomb
 else pokerType= null;}else if(splitPoker["1111"].length>0){if(splitPoker["1111"].length==1){pokerType.num=splitPoker["1111"][0];
 if(pokerType.length==4) pokerType.type="1111";//bomb
 else if(pokerType.length==6&&(splitPoker["1"].length==1||splitPoker["1"].length==2))pokerType.type="111123";//4text2
 else if(pokerType.length==8&&splitPoker["11"].length==2)pokerType.type="11112233";//4text2text
 else pokerType= null;}else pokerType= null;}else if(splitPoker["111"].length>0){var l=splitPoker["111"].length;
 if(l==1||DJDDZ.IsStraight(splitPoker["111"])){//l=1textGMain.SplitPoker["111"]text
 pokerType.num=splitPoker["111"][0];
 if(pokerType.length==3*l)pokerType.type="111";//3text, l>=2textairplane
 else if(pokerType.length==4*l&&splitPoker["1"].length==l) pokerType.type="1112";//3text1, l>=2textairplane
 else if(pokerType.length==5*l&&splitPoker["11"].length==l)pokerType.type="11122";//3text1text, l>=2textairplane
 else pokerType= null;}else pokerType= null;}else if(splitPoker["11"].length>0){var l=splitPoker["11"].length;
 if(l==1|| (l>=3&&DJDDZ.IsStraight(splitPoker["11"]))){pokerType.num=splitPoker["11"][0];
 if(pokerType.length==2*l)pokerType.type="11";//l=1textpair, l>=3textconsecutive pairs
 else pokerType= null;}else pokerType= null;}else if(splitPoker["1"].length>0){var l=splitPoker["1"].length;
 if(l==1||(l>=5&&DJDDZ.IsStraight(splitPoker["1"]))){pokerType.num=splitPoker["1"][0];
 pokerType.type="1";}else pokerType= null;} else pokerType=null;
 if(pokerType==null&&chaiNum>0)pokerType=DJDDZ.GetPokerType(__pokerNumbers,chaiNum-1);
 return pokerType;}
DJDDZ.GetPokerByType=function(__pokerNumbers,type){//from__pokerNumbersmiddlegettypetextcard
 var _pokerNumbers=[];
 var SPN=[];
 if(__pokerNumbers.length>=type.length){for(var i=0;i<__pokerNumbers.length;i++) _pokerNumbers[i]=__pokerNumbers[i];//_pokerNumbersascending
 if(type.type=="12"){//text
 if(_pokerNumbers[_pokerNumbers.length-1]==18&&_pokerNumbers[_pokerNumbers.length-2]==17){SPN.splice(0,0,18);
 SPN.splice(0,0,17);}}else if(type.type=="1"||type.type=="11"||type.type=="111"||type.type=="1111"){//text
 var c=GMain.PokerTypes[type.type].allNum-1;
 for(var j=c;j<_pokerNumbers.length;j++){//ascendingtext
 while(j<_pokerNumbers.length&&_pokerNumbers[j]>type.num&&_pokerNumbers[j]==_pokerNumbers[j-c]){if(SPN.length>0){if(_pokerNumbers[j]==SPN[0])break;
 else if(_pokerNumbers[j]>SPN[0]+1)SPN=[];//textcleartext}
 for(var k=j;k>=j-c;k--) {SPN.splice(0,0,_pokerNumbers[k]);//text
 _pokerNumbers.splice(j,1);//deletetext}
 if(SPN.length==type.length)break;//text}
 if(SPN.length==type.length)break;}}else if(type.type=="1112"||type.type=="11122"||type.type=="111123"||type.type=="11112233"){//text
 var zcy=GMain.PokerTypes[type.type].zcy;
 var fcy=GMain.PokerTypes[type.type].fcy;
 var fcyNum=GMain.PokerTypes[type.type].fcyNum;
 var l=type.length/GMain.PokerTypes[type.type].allNum;
 SPN=DJDDZ.GetPokerByType(_pokerNumbers,{type:zcy,num:type.num,length:l*GMain.PokerTypes[zcy].allNum});//text
 if(SPN.length>0){for(var i=0;i<SPN.length;i++){for(var j=0;j<_pokerNumbers.length;j++){if(SPN[i]==_pokerNumbers[j]){_pokerNumbers.splice(j,1);//deletetext
 break;}}}
 while(fcyNum>0){var spn1=DJDDZ.GetPokerByType(_pokerNumbers,{type:fcy,num:0,length:GMain.PokerTypes[fcy].allNum});
 for(var i=0;i<spn1.length;i++) SPN[SPN.length]=spn1[i];
 fcyNum--;}}}}
 if(SPN.length!=type.length)SPN=[];//text, textcleartext
 return SPN;}
DJDDZ.AISelectPoker=function(){//AIselect cards
 var _pokerNumbers=[];
 for(var i=GMain.Poker[GMain.DealerNum].length-1;i>=0;i--){_pokerNumbers[_pokerNumbers.length]=GMain.Poker[GMain.DealerNum][i].pokerNumber;}
 var SPN=[];
 if(DJDDZ.CheckPlayPoker(_pokerNumbers)){//textcard, text
 SPN=_pokerNumbers;}else{if(GMain.LastHandNum==0){//textLevel textcard
 var splitPoker=DJDDZ.SplitPoker(_pokerNumbers);
 if(splitPoker["111"].length>0){//text3textairplane, textairplane
 if(splitPoker["111"][0]<7||(splitPoker["1"].length==0&&splitPoker["11"].length==0)){if(splitPoker["11"].length>0&&(splitPoker["11"][0]<7||splitPoker["1"].length==0)){for(var i=GMain.PokerTypes["11122"].maxL;i>0;i--){SPN=DJDDZ.GetPokerByType(_pokerNumbers,{type:"11122",num:0,length:5*i});
 if(SPN.length>0)break;}}
 if(SPN.length==0&&splitPoker["1"].length>0&&splitPoker["1"][0]<15){for(var i=GMain.PokerTypes["1112"].maxL;i>0;i--){SPN=DJDDZ.GetPokerByType(_pokerNumbers,{type:"1112",num:0,length:4*i});
 if(SPN.length>0)break;}}
 if(SPN.length==0){for(var i=GMain.PokerTypes["111"].maxL;i>0;i--){SPN=DJDDZ.GetPokerByType(_pokerNumbers,{type:"111",num:0,length:3*i});
 if(SPN.length>0)break;}}}}
 if(SPN.length==0){var nn=[];
 for(var x=1;x<=3;x++){if(GMain.Poker[x].length==1||GMain.Poker[x].length==2){if(GMain.DealerNum==GMain.LandlordNum){if(GMain.DealerNum!=x)nn[GMain.Poker[x].length]=true;}else{if(GMain.LandlordNum==x)nn[GMain.Poker[x].length]=true;}}}
 if((splitPoker["11"].length>0&&splitPoker["1"].length>0&&(splitPoker["11"][0]<splitPoker["1"][0]||nn[1]))
 ||(splitPoker["11"].length>0&&splitPoker["1"].length==0)){//textconsecutive pairs
 for(var i=GMain.PokerTypes["11"].maxL;i>2;i--){SPN=DJDDZ.GetPokerByType(_pokerNumbers,{type:"11",num:0,length:2*i});
 if(SPN.length>0)break;}
 if(SPN.length==0) SPN=DJDDZ.GetPokerByType(_pokerNumbers,{type:"11",num:0,length:2});//textpair}else{if(splitPoker["1"].length>0) SPN[SPN.length]=splitPoker["1"][0];//textcard}}
 if(SPN.length==0)SPN=DJDDZ.GetPokerByType(_pokerNumbers,{type:"1111",num:0,length:4});//textbomb
 if(SPN.length==0)SPN=DJDDZ.GetPokerByType(_pokerNumbers,{type:"12",num:0,length:2});//text}else{if(GMain.LastHandPokerType.type!="12"){if(GMain.LandlordNum==GMain.DealerNum||GMain.LastHandNum==GMain.LandlordNum){//textAItextcard
 SPN=DJDDZ.GetPokerByType(_pokerNumbers,GMain.LastHandPokerType);
 if(SPN.length==0&&GMain.LastHandPokerType.type!="1111")SPN=DJDDZ.GetPokerByType(_pokerNumbers,{type:"1111",num:0,length:4});
 if(SPN.length==0)SPN=DJDDZ.GetPokerByType(_pokerNumbers,{type:"12",num:0,length:2});}else{//textcard
 if(GMain.Poker[GMain.LastHandNum].length>5){if((GMain.LastHandPokerType.type=="1"&&GMain.LastHandPokerType.length==1)
 ||(GMain.LastHandPokerType.type=="11"&&GMain.LastHandPokerType.length==2)){SPN=DJDDZ.GetPokerByType(_pokerNumbers,GMain.LastHandPokerType);
 if(SPN.length>0&&SPN[0]>10)SPN=[];}}}}}}
 if(SPN.length>0){for(var i=0;i<SPN.length;i++){for(var j=GMain.Poker[GMain.DealerNum].length-1;j>=0;j--){if(!GMain.Poker[GMain.DealerNum][j].isSelected&&GMain.Poker[GMain.DealerNum][j].pokerNumber==SPN[i]){GMain.Poker[GMain.DealerNum][j].isSelected=true;//select cards
 break;}}}
 return true;}else return false}
DJDDZ.PlayPoker=function(){//play selected cards
 GMain.Poker[4]=[];//clear played-card storage
 var _pokerNumbers=[];
 for(var i=GMain.Poker[GMain.DealerNum].length-1;i>=0;i--){if(GMain.Poker[GMain.DealerNum][i].isSelected){_pokerNumbers[_pokerNumbers.length]=GMain.Poker[GMain.DealerNum][i].pokerNumber;
 GMain.Poker[4].splice(GMain.Poker[4].length,0,GMain.Poker[GMain.DealerNum][i]);
 GMain.Poker[GMain.DealerNum].splice(i,1);}}
 GMain.LastHandNum=GMain.DealerNum;//last play marker for this round
 GMain.LastHandPokerType=DJDDZ.GetPokerType(_pokerNumbers);//set last card type
 if(GMain.Poker[GMain.DealerNum].length==0){DJDDZ.GameOver();return;};//all cards played, Game Over}
var GMain={Size:{width:800, height:480}//screen size,URL:"",Poker:null,LandlordNum:null//landlord index,BeginNum:null//dealing start index,DealerNum:null//current actor index,MaxScore:null//highest bid score,GrabTime:null//bid count,DealingHandle:null//dealing handle,DealingNum:null//cards dealt,PokerSize:{width:100,height:120}//card size,LastHandNum:null//mark who made the last play,LastHandPokerType:null//last card type,ToPlay:null//landlord bidding done, playing cards,PokerTypes:{//card types
 "1":{weight:1,allNum:1,minL:5,maxL:12},"11":{weight:1,allNum:2,minL:3,maxL:10},"111":{weight:1,allNum:3,minL:1,maxL:6},"1111":{weight:2,allNum:4,minL:1,maxL:1},"1112":{weight:1,zcy:"111",fcy:"1",fcyNum:1,allNum:4,minL:1,maxL:5},"11122":{weight:1,zcy:"111",fcy:"11",fcyNum:1,allNum:5,minL:1,maxL:4},"111123":{weight:1,zcy:"1111",fcy:"1",fcyNum:2,allNum:6,minL:1,maxL:1},"11112233":{weight:1,zcy:"1111",fcy:"11",fcyNum:2,allNum:8,minL:1,maxL:1},"12":{weight:3,allNum:2,minL:1,maxL:1}}}
var GControls={};
GControls.Poker=Class.create(JControls.Object,{pokerNumber:null,seNumber:null,imageData:null,isHidePoker:true,isSelected:null,initialize:function ($super,imageName){$super();
 this.setSize(GMain.PokerSize);
 this.imageData=ResourceData.Images[imageName];
 this.pokerNumber=this.imageData.num;
 this.seNumber=this.imageData.se;
 this.isSelected=false;},beginShow:function($super){$super();
 if(this.isHidePoker)this.setBGImage(ResourceData.Images.BeiMian);
 else this.setBGImage(this.imageData);},onClick:function(){if(this.parent.toSelectPoker){this.isSelected=!this.isSelected;
 JMain.JForm.show();
 return true;}
 return false;}});
GControls.GrabButton=Class.create(JControls.Button,{score:null,initialize:function ($super, argP, argWH,score) {$super(argP, argWH);
 this.score=score;
 if(this.score&&this.score<=GMain.MaxScore)this.visible=false;},onClick:function(){if(this.score){GMain.MaxScore=this.score;
 GMain.LandlordNum=GMain.DealerNum;}
 GMain.DealerNum++;
 GMain.GrabTime++;
 GMain.BtnPanel.visible=false;
 DJDDZ.GrabTheLandlord();
 return true;}});
GControls.PokerPanel=Class.create(JControls.Object,{pokerPanelNum:null,hidePoker:null,density:null,toSelectPoker:null,initialize:function ($super,argP, argWH,num,density){$super(argP, argWH);
 this.pokerPanelNum=num;
 //this.hidePoker=hidePoker;
 if(density!=null)this.density=density;
 else this.density=20;},beginShow:function($super){GMain.Poker[this.pokerPanelNum].sort(sortNumber);
 var l=GMain.Poker[this.pokerPanelNum].length;
 for(var i=0;i<l;i++){var x= 0,y= 0;
 if(this.pokerPanelNum==2||this.pokerPanelNum==3){//vertical
 var h=GMain.PokerSize.height+(l-1)*this.density;
 y=(this.size.height-h)/2.0+i*this.density;}else{//horizontal
 var w=GMain.PokerSize.width+(l-1)*this.density;
 x=(this.size.width-w)/2.0+i*this.density;
 if(this.toSelectPoker&&GMain.Poker[this.pokerPanelNum][i].isSelected) y=-20;}
 GMain.Poker[this.pokerPanelNum][i].setRelativePosition({x:x,y:y});
 if(this.hidePoker)GMain.Poker[this.pokerPanelNum][i].isHidePoker=true;
 else GMain.Poker[this.pokerPanelNum][i].isHidePoker=false;}
 this.clearControls();
 this.addControlInLast(GMain.Poker[this.pokerPanelNum]);
 if(GMain.ToPlay){var label1=new JControls.Button({x:450,y:0},{width:30,height:30});
 var label2=new JControls.Label().setFontType("bold").setFontSize(20).setTextAlign("left").setTextBaseline("bottom").setFontColor(JColor.white);
 if(this.pokerPanelNum==GMain.LandlordNum)label1.setBGImage(ResourceData.Images.dz)
 else label1.setBGImage(ResourceData.Images.nm)
 if(this.pokerPanelNum==GMain.LastHandNum)label2.setText("Play Cards")
 else label2.setText("")
 if(this.pokerPanelNum==1){label1.setRelativePosition({x:80,y:-30});
 label2.setRelativePosition({x:200,y:-30});
 this.addControlInLast([label1,label2]);}else if(this.pokerPanelNum==2){label1.setRelativePosition({x:-30,y:50});
 label2.setRelativePosition({x:-30,y:150});
 this.addControlInLast([label1,label2]);}else if(this.pokerPanelNum==3){label1.setRelativePosition({x:105,y:50});
 label2.setRelativePosition({x:105,y:150});
 this.addControlInLast([label1,label2]);}}
 $super();
 function sortNumber(a, b){if(b.pokerNumber==a.pokerNumber)return b.seNumber- a.seNumber;
 else return b.pokerNumber-a.pokerNumber;}}});