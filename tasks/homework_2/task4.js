class Dictionary {
  constructor() {}
  newEntry(key, value) {
    Object.defineProperties(this, {
    [key]: {
      value: value,
      writable: true
    }
  });
}

  look(key) {
    if(this.hasOwnProperty(key)){
      return true;
    } else {
      return `Can't find entry for key`;
    }
  }
}

const dict = new Dictionary();
dict.newEntry('name', 'Paul');
console.log(dict.name);
console.log(dict.look('name'));
console.log(dict.look('notname'));
