const Warrior = function(name) {
  this.name = name;
  this.health = 100;
};

Warrior.prototype.strike = function(obj, damage) {
  obj.health -= damage * 10;
}

var orc = new Warrior('Ork');
var man = new Warrior('man');

man.strike(orc, 3);
console.log(orc.health);
