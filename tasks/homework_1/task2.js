const duplicateArgs = (...arg) => {
  const dupValue = arg.filter((item, index) => arg.indexOf(item) != index);
  if(dupValue.length == 0){
    return false;
  } else {
    return true
  }
}
console.log(duplicateArgs(1, 2, 3)); //false
console.log(duplicateArgs(35, 14, 40, 14)); //true
console.log(duplicateArgs('18', '2', '77', '2')); //true
console.log(duplicateArgs('abc', 'sso', 'js', 'true', 'else', 'js')); //true
