//this game will have only 1 state
var GameState = {
  init: function() {
    this.game.physics.startSystem(Phaser.Physics.ARKADE);
    this.cursors = this.game.input.keyboard.createCursorKeys();
  },

  //load the game assets before the game starts
  preload: function() {
    this.load.image('water', 'assets/images/water.jpg');
    this.load.image('ship_pl_2', 'assets/images/ship_pl_2.png');
    this.SWIMMING_SPEED = 0.5;
    this.rotation_SPEED = 0.1;
  },
  //executed after everything is loaded
  create: function() {    
    this.water = this.add.tileSprite(0, 0, this.game.world.width, this.game.world.height,'water');
	this.player = this.add.sprite(20, 250, 'ship_pl_2');
	this.player.anchor.setTo(0.5);
	this.game.physics.arcade.enable(this.player)
  },
  update: function() {
  	// this.player.body.rotation += 2
  	// console.log(this.player.body.rotation)
  	// this.player.body.velocity.y = 0
	if(this.cursors.up.isDown ){
		console.info(this.player.body.velocity.y)
	  this.player.body.velocity.y -= this.SWIMMING_SPEED*Math.cos(this.player.body.rotation/57.2958)
	  this.player.body.velocity.x += this.SWIMMING_SPEED*Math.sin(this.player.body.rotation/57.2958)

	} 
	if (!this.cursors.up.isDown && this.player.body.velocity.y < 0){
	 this.player.body.velocity.y += 5*this.SWIMMING_SPEED*Math.cos(this.player.body.rotation/57.2958)
	}
	if (!this.cursors.up.isDown && this.player.body.velocity.x!=0) {
	  this.player.body.velocity.x -= 5*this.SWIMMING_SPEED*Math.sin(this.player.body.rotation/57.2958)
	}

	// if(this.cursors.up.isDown && this.player.body.rotation<0){
	// 	console.info(this.player.body.velocity.y)
	//   this.player.body.velocity.y -= this.SWIMMING_SPEED*Math.cos(this.player.body.rotation/57,2958)
	//   this.player.body.velocity.x -= this.SWIMMING_SPEED*Math.sin(-this.player.body.rotation/57,2958)

	// } else if (!this.cursors.up.isDown && this.player.body.velocity.y < 0) {
	//  this.player.body.velocity.y += this.SWIMMING_SPEED*Math.cos(this.player.body.rotation/57,2958)
	//   this.player.body.velocity.x += this.SWIMMING_SPEED*Math.sin(this.player.body.rotation/57,2958)
	// }


	// if (this.cursors.down.isDown){
	// 	console.info(this.player.body.velocity.y)
	//   this.player.body.velocity.y += this.SWIMMING_SPEED
	// } else if (!this.cursors.up.isDown && this.player.body.velocity.y > 0) {
	// 	this.player.body.velocity.y -= this.SWIMMING_SPEED
	// }


	// if(this.cursors.left.isDown){
	// 	console.info(this.player.body.velocity.x)
	//   this.player.body.velocity.x -= this.SWIMMING_SPEED
	// } else if (!this.cursors.left.isDown && this.player.body.velocity.x < 0) {
	// 	this.player.body.velocity.x += this.SWIMMING_SPEED
	// }

	
	// if (this.cursors.right.isDown){
	// 	console.info(this.player.body.velocity.x)
	// 	console.log(this.player.body.rotation)
	//   // this.player.body.velocity.x += this.SWIMMING_SPEED
	// } else if (!this.cursors.right.isDown && this.player.body.velocity.x > 0) {
	// 	this.player.body.velocity.x -= this.SWIMMING_SPEED
	// }

	if(this.cursors.up.isDown && this.cursors.left.isDown){
		console.info(this.player.body.velocity.y)
	  // this.player.body.velocity.y -= this.SWIMMING_SPEED-0.75
	  // this.player.body.velocity.x -= this.SWIMMING_SPEED-0.5
	  	  this.player.body.rotation -= this.rotation_SPEED;
	} 
		if(this.cursors.up.isDown && this.cursors.right.isDown){
		console.info(this.player.body.velocity.y)
	  	  this.player.body.rotation += this.rotation_SPEED;
	} 

  },

};

//initiate the Phaser framework
var game = new Phaser.Game(900, 900, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');

