class Dictionary {
  constructor() {}
  newEntry(key, value) {
    this[key] = value;
  }

  look(key) {
    if(this[key] !== undefined){
      return this[key];
    } else {
      return `Can't find entry for ${key}`;
    }
  }
}

const dict = new Dictionary();
dict.newEntry('dog', 'animal with 4 legs and tail');
console.log(dict.look('dog'));
console.log(dict.look('someword'));
