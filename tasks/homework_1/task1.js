const arr = (twoDimArr) => { return [...twoDimArr[0],...twoDimArr[1],...twoDimArr[2],...twoDimArr[3]].sort( (a,b) => b - a ); }
console.log(arr([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));
