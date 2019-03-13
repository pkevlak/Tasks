const duplicateArgs = (...arg) => { return (new Set(arg)).size !== arg.length }
console.log(duplicateArgs(1, 2, 3));
console.log(duplicateArgs(35, 14, 40, 14));
console.log(duplicateArgs('18', '2', '77', '2'));
console.log(duplicateArgs('abc', 'sso', 'js', 'true', 'else', 'js'));
