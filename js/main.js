let turn = true; // TRUE = player, FALSE = enemy

let player = {
	hp: 10,
  maxHp: 10
}

let enemy = {
	hp: 10,
  maxHp: 10
}

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
	document.querySelector("#enemyhp").textContent = enemy.maxHp;
  document.querySelector("#playerhp").textContent = player.maxHP;
  
  //setInterval(battle, 1000);
}
