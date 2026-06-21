//Leveltext10textlarge text15
oS.Init({//textobjecttext
		PName:[oPeashooter,oSunFlower,oCherryBomb,oWallNut,oPotatoMine,oSnowPea,oChomper,oRepeater,oPuffShroom],
		ZName:[oZombie,oNewspaperZombie],
		PicArr:function(){var Pro=oSunShroom.prototype,PicArr=Pro.PicArr;
			return ['images/interface/background2.jpg','images/interface/Tombstones.png','images/interface/Tombstone_mounds.png',
				PicArr[Pro.CardGif],PicArr[Pro.NormalGif]]}(),
		backgroundImage:'images/interface/background2.jpg',
		CanSelectCard:1,
		DKind:0,
		SunNum:50,
		LevelName:'Level 2-1',
		LargeWaveFlag:{10:$('imgFlag1')},
		Monitor:{f:AppearTombstones,ar:[7,9,4]}, //Initializetext7text9column text4text
		UserDefinedFlagFunc:function($T){//textfromtext
			oP.FlagNum==oP.FlagZombies&&oP.SetTimeoutTomZombie([oZombie])},
		LoadMusic:function(){NewEle('oEmbed','embed','width:0;height:0',{src:'music/Look up at the.swf'},EDAll)},
		StartGameMusic:'Ultimate battle.swf'},{//textControlobjecttext
		ArZ:[oZombie,oZombie,oZombie,oZombie,oZombie,oZombie,oZombie,oNewspaperZombie,oNewspaperZombie],
		FlagNum:10, //text
		SumToZombie:{1:7,2:9,'default':9}, //textoPtextControlobjecttext, a1text, a2textArZtext, a2texta1textelement, textdefault
		FlagToSumNum:{a1:[3,5,9],a2:[1,2,3,15]}, //textLevel 1-3text1, 4-5text2, 6-9text3, text10
		FlagToMonitor:{10:[ShowFinalWave,0]},
		FlagToEnd:function(){NewImg('imgSF','images/Card/Plants/SunShroom.png','left:667px;top:220px',EDAll,{onclick:function(){SelectModal(12)}});
			NewImg('PointerUD','images/interface/PointerDown.gif','top:185px;left:676px',EDAll);}});
