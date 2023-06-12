let turn = true; // TRUE = player, FALSE = enemy

let enemy = new Enemy('forest');

function battle() {
	if(turn) {
  	enemy.hp--;
    document.querySelector("#enemyhp").textContent = enemy.hp;
    turn = false;
  } else {
  	player.hp--;
    document.querySelector("#playerhp").textContent = player.hp;
  	turn = true;
  }
}

function setup() {
  
}
