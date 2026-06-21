//Leveltext10textlarge text15
oS.Init({//textobjecttext
		PName:[oPeashooter,oSunFlower,oCherryBomb,oWallNut,oPotatoMine,oSnowPea,oChomper,oRepeater,oPuffShroom,oSunShroom],
		ZName:[oZombie,oConeheadZombie,oNewspaperZombie,oBucketheadZombie],
		PicArr:function(){var Pro=oFumeShroom.prototype,PicArr=Pro.PicArr;
			return ['images/interface/background2.jpg','images/interface/Tombstones.png','images/interface/Tombstone_mounds.png',
				PicArr[Pro.CardGif],PicArr[Pro.NormalGif]]}(),
		backgroundImage:'images/interface/background2.jpg',
		CanSelectCard:1,
		DKind:0,
		SunNum:50,
		LevelName:'Level 2-2',
		LargeWaveFlag:{10:$('imgFlag3'),20:$('imgFlag1')},
		Monitor:{f:AppearTombstones,ar:[7,9,4]}, //Initializetext7text9column text4text
		UserDefinedFlagFunc:function($T){//textfromtext
			oP.FlagNum==oP.FlagZombies&&oP.SetTimeoutTomZombie([oZombie,oConeheadZombie,oBucketheadZombie])},
		LoadMusic:function(){NewEle('oEmbed','embed','width:0;height:0',{src:'music/Look up at the.swf'},EDAll)},
		StartGameMusic:'Ultimate battle.swf'},{//textControlobjecttext
		ArZ:[oZombie,oZombie,oZombie,oZombie,oZombie,oZombie,oConeheadZombie,oConeheadZombie,oNewspaperZombie,oBucketheadZombie],
		FlagNum:20, //text
		SumToZombie:{1:6,2:9,3:10,'default':10},
		FlagToSumNum:{a1:[3,5,9,10,13,15,19],a2:[1,2,3,10,4,5,6,20]}, //textLevel 1-3text1, 4-5text2, 6-9text3, text10
		FlagToMonitor:{9:[ShowLargeWave,0],19:[ShowFinalWave,0]},
		FlagToEnd:function(){NewImg('imgSF','images/Card/Plants/FumeShroom.png','left:587px;top:270px',EDAll,{onclick:function(){SelectModal(0)}});
			NewImg('PointerUD','images/interface/PointerDown.gif','top:235px;left:596px',EDAll);}});
