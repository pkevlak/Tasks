const Warrior = function(name, health = 100) {
  this.name = name;
  this.health = health;
};

Warrior.prototype.strike = function(obj, damage) {
  obj.health -= damage * 10;
}

var orc = new Warrior('Ork');
var man = new Warrior('man');

man.strike(orc, 3);
console.log(orc.health);
