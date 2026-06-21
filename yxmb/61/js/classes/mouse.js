/**
 * text
 */
(function() {var Mouse = function() {this.x;
 this.y;
		 this.width=130;
		 this.height;
		 
		 /**
		 * textytext,textuptext
		 */
		 this.finalY;
		 this.finalHeight;
		 /**
		 * text, showtexthide, showtextnormaltextdead
		 */
 this.state='hide';
		 this.up=1; //textuptext
		 this.duration=3;//textuptext
		 this.disppearDuration=56;//'dead'textdowntext
		 this.anim;}
	Mouse.prototype.init = function(mouseName,x,y,finalHeight){var anim = new my.Animation(); 
		 anim.init('mouse',getMouseFrames,mouseName);	
		 this.anim = anim;
		 this.x = x;
		 this.finalY = y;
		 this.finalHeight=finalHeight;
		 this.y=this.finalY+this.finalHeight;
		 this.height=0;}
	 
	Mouse.prototype.reprepare = function(self,existMatrix,i,j){//texti,jtext, text
	 self.state = 'hide';
		 self.up=1;
		 self.height=0;
		 self.y=this.finalY+this.finalHeight;
		 self.disppearDuration=56;
		 existMatrix[i][j]=0;}

	
 Mouse.prototype.draw = function(context,existMatrix,i,j){var self = this;
 if(this.state == 'normal'){if(this.up==1&&this.y>this.finalY){this.y-=this.duration; 
					 this.height+=this.duration;}else{this.up=0;
					 this.y+=this.duration;
					 this.height-=this.duration;}
				 if(this.height<0){this.reprepare(this,existMatrix,i,j);}else{self.anim.update();
				 self.anim.draw(context,this.x,this.y,this.width,this.height);}}
			 else if(this.state == 'dead'){self.anim.currentFrame=self.anim.frames[3];
				 self.anim.draw(context,this.x,this.y,this.width,this.height);
				 self.disppearDuration--;
				 if(self.disppearDuration==0){self.reprepare(self,existMatrix,i,j);}}}

 window.Mouse = Mouse;})();
