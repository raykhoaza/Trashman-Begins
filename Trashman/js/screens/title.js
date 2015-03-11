game.TitleScreen = me.ScreenObject.extend({
  /**    
   *  action to perform on state change
   */
  
  onResetEvent : function() {       
    // title screen
  	me.game.world.addChild(new me.Sprite(0, 0, me.loader.getImage('title_screen')), 1);
	me.game.world.addChild(new game.startButton(100, 250));
	me.game.world.addChild(new game.credit(180, 250));
	
	/*if(me.audio.getCurrentTrack() == "title"){
	  return;
	 }
 	me.audio.stopTrack();
 	me.audio.playTrack("title", true);*/

  },
 
  /**    
   *  action to perform when leaving this screen (state change)
   */
  onDestroyEvent : function() {
  	//me.audio.fade("title", 1, 0, 1000);
   }
});

game.startButton = me.GUI_Object.extend({
	init:function (x, y){
    	var settings = {};
      	settings.image = me.loader.getImage('beginGame');
      	settings.spritewidth = 75;
      	settings.spriteheight = 20;
      	// super constructor
	    this._super(me.GUI_Object, "init", [x, y, settings]);
      	// define the object z order
      	this.z = Infinity;
   	},
	
    onClick:function (event){
      	me.state.change(me.state.PLAY);
    }
});

game.credit = me.GUI_Object.extend({
	init:function (x, y){
    	var settings = {};
      	settings.image = me.loader.getImage('creditScreen');
      	settings.spritewidth = 75;
      	settings.spriteheight = 20;
      	// super constructor
	    this._super(me.GUI_Object, "init", [x, y, settings]);
      	// define the object z order
      	this.z = Infinity;
   	},
	
    onClick:function (event){
 		me.state.change(me.state.CREDITS);
    }
});