const Warrior = function(name){
  this.name = name;
  this.health = 100;
};

Warrior.prototype.strike = function(obj, damage){
  if(obj.health>damage *10){
    obj.health -= damage * 10;
  } else {
    obj.health = 0;
  }
}

var orc = new Warrior('Ork');
var man = new Warrior('man');

man.strike(orc, 5);
console.log(orc.health);
man.strike(orc, 6);
console.log(orc.health);
