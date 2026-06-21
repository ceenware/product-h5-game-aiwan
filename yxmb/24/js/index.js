var frame;

function initGame()
{frame = new GameFrame(16,12,38);
	frame.init();

 document.body.addEventListener("keydown",MoveOrChange)}

function changespeed(){frame.changespeed();}

function regame(){location.reload();}


function MoveOrChange()
{switch(event.keyCode)
	{case 38: //text (upArrow keys) 
			frame.Change();
			break;
		case 37: //leftMove
			frame.MoveLeft();
			break;
		case 39://rightMove
			frame.MoveRight();
			break;
		case 40: //textdown
			frame.MoveDown();
			break;}}

