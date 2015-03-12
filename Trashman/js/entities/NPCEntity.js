/*
 *	NPC Entities
 */

/* NPC Miku appears after Ice Level Puzzle 1
 * she collects penguins after Hero saves then
 * 1 penguin = 100 pts
 */
game.MikuEntity = me.Entity.extend({	

	init: function(x, y, settings){
		this._super(me.Entity, 'init', [x, y, settings]);
		this.renderable.addAnimation("idle", [0, 1, 2, 3, 4, 5],200);
		this.renderable.setCurrentAnimation("idle");
	},

	onCollision: function(response, other){
		//Rescue penguins and then give them to Miku to get points.
		game.data.talking = true;
		me.game.world.addChild(new game.chatbox(10, 80));
		var numPeng = game.data.penguin;
		game.data.penguin = 0;
		game.data.score +=  100 * numPeng;
		this.body.setCollisionMask(me.collision.types.NPC_OBJECT);
	}
});

game.chatbox = me.GUI_Object.extend({
	init:function (x, y){
		var settings = {};
			settings.image = me.loader.getImage('sampleChatBox');
      		settings.spritewidth = 160;
      		settings.spriteheight = 30;
      		// super constructor
	    this._super(me.GUI_Object, "init", [x, y, settings]);
      		// define the object z order
      		this.z = 10;
	},
	onClick:function (event){
 		me.game.world.removeChild(this);
 		game.data.talking = false;
    }
});


