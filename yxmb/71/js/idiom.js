/*
 author:helang
 email:helang.love@qq.com
 jQuerytext:http://www.jq22.com/mem395541
 CSDNtext:https://blog.csdn.net/u013350495
 WeChat account:web-7258
*/;$.extend({HLidiom:function (params,data) {var helang={/* config */
 config:{},
 /* element */
 els:{},
 /* selected */
 selectedArr:[],
 /* available */
 selectArr:[],
 /* data source */
 listData:[],
 /* add selection */
 addSelect:function(){},
 /* remove selection */
 delSelect:function(){},
 /* shuffle */
 randomSort:function(){return Math.random()>.5? -1: 1; //text0text1text, textchecktextlarge text0.5fromtextsort, text.},
 /* set selection */
 setSelect:function(){var selectStr="";
 this.selectArr.forEach(function (v,i) {selectStr+='<div><div class="item" data-index="'+i+'">'+ v +'</div></div>';});

 this.els.select.html(selectStr);},
 /* set level */
 setPass:function(val){this.els.pass.html(val);},
 /* set coins */
 setGold:function(val){this.els.gold.html(val);},
 /* set selected */
 setSelected:function(){var selectedStr="";
 for(var i=0; i<4; i++){if(this.selectedArr[i] && this.selectedArr[i].txt){selectedStr+='<div><div class="item" data-index="'+i+'">'+ this.selectedArr[i].txt +'</div></div>';}else {selectedStr+='<div><div class="item"></div></div>';}}
 this.els.selected.html(selectedStr);},
 /* update selected data */
 setSelectedData:function(j,v){for(var i=0;i<4;i++){if(!this.selectedArr[i] ||!this.selectedArr[i].txt){this.selectedArr[i]={index:j,
 txt:v};
 break;}}
 this.setSelected();},
 /* Next Level */
 nextPass:function(){if(this.config.pass>=(this.listData.length-1)){alert('Congratulations, all levels cleared');
 return;}

 /* gettext */

 var db=this.listData[this.config.pass];
 db[1]=db[1].split("").sort(this.randomSort);
 this.selectArr=db[1];
 this.selectedArr=[];
 this.setSelect();
 this.setSelected();

 /* text 1 text 5 Coins */
 if(this.config.pass>0){this.config.gold=this.config.gold+5;}
 this.setGold(this.config.gold);

 this.setPass(this.config.pass+1);

 this.els.img.css("background-image","url(img/"+db[0]+")");},
 /* answer check */
 verify:function(){var str="";
 for(var i=0;i<4;i++){if(this.selectedArr[i] && this.selectedArr[i].txt){str+=this.selectedArr[i].txt}}
 if(str==this.listData[this.config.pass][2]){alert('Explanation: '+this.listData[this.config.pass][3]);
 this.config.pass++;
 this.nextPass();}},
 /* hint feature */
 reminder:function(){if(this.config.gold<10){alert("Not enough coins");
 return;}
 /* find the next empty slot */
 var sed=-1;
 for (var x=0;x<4;x++){if(!this.selectedArr[x] ||!this.selectedArr[x].txt){sed=x;
 break;}}
 /* find the answer position */
 var s=-1,st=this.listData[this.config.pass][2].charAt(sed);
 for (var y=0;y<this.selectArr.length;y++){if(this.selectArr[y]==st){s=y;
 break;}}

 this.setSelectedData(s,st);
 this.selectArr[s]='';
 this.setSelect();
 this.verify();

 this.config.gold=this.config.gold-10;
 this.setGold(this.config.gold);},
 /* Initialize */
 init:function () {this.config={pass:params.pass || 0,
 gold:params.gold || 10};

 this.listData=data;

 this.els={pass:$("#hl-pass"),
 gold:$("#hl-gold"),
 select:$("#hl-select"),
 selected:$("#hl-selected"),
 img:$("#hl-img"),
 reminder:$("#hl-reminder"),
 about:$("#hl-about")};

 this.nextPass();

 /* Event listener */
 this.els.select.on("click",".item",function () {var i=$(this).data("index"),t=$(this).html();
 helang.setSelectedData(i,t);
 helang.selectArr[i]='';
 helang.setSelect();
 helang.verify();});

 this.els.selected.on("click",".item",function () {var i=$(this).data("index"),t=$(this).html();

 helang.selectArr[helang.selectedArr[i].index]=t;
 helang.selectedArr[i]={};
 helang.setSelect();
 helang.setSelected();
 helang.verify();});

 this.els.reminder.click(function () {helang.reminder();});

 this.els.about.click(function () {helang.about();});},
 /* About */
 about:function () {alert('Xingyi Blog: blog.96xy.cn');}};

 helang.init();}});