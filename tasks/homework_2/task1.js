Object.create = function(prototype, properties) {
  if(typeof prototype !== 'object' && typeof prototype !== 'null' || arguments.length == 0){
    throw new TypeError;
  } else {
  let obj = {};

  obj.__proto__ = prototype;

  if(typeof properties !== 'undefined')
  {
  Object.defineProperties(obj, properties);
}

  return obj;
}
};

const citizen = {
  sleep: function(){ return "zzZ..."; },
  panic: function(){ return "AaAaAaAa!"; }
};

const veteran = Object.create(citizen, {panic: {
    value: function(){
        return "SNAFU";
    }
}});

console.log(veteran !== citizen); // true
console.log(veteran instanceof citizen.constructor); // true
console.log(veteran.sleep()); // zzZ...
console.log(veteran.panic()); //SNAFU
