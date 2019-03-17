const arr = (twoDimArr) => { return [].concat(...twoDimArr).sort( (a,b) => b - a ); }
console.log(arr([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));
