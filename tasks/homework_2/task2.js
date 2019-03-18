Array.prototype.map = function(func) {
  let arr = [];
  for(let index = 0; index < this.length; index++){
    arr.push(func(this[index]));
  }
  return arr;
};

console.log([1,2,3].map(x => x ** 2));  //[1,4,9]
console.log([1,2,3].map(x => 2 * x));  // [2,4,6]
console.log([1,2,3].map(x => 2 ** x));  // [2,4,8]
console.log([1,2,3].map(x => x.toString()));  // ["1","2","3"])
console.log(["1","2","3"].map(x => parseInt(x)));  //[1,2,3])
