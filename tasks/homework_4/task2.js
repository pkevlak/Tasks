class TopRated{

  constructor(num = 5, arr = []){
    this.num = num;
    this.arr = arr;
  }

  get list() {
    const arr2 = this.arr.sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(function(element) { return `${element[0]}: ${element[1]}`});

    while(arr2.length < this.num) {
      arr2.push('');
    }

    return arr2;
  }

  add( player ) {
    this.arr.sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    if(this.arr.length < this.num){
      this.arr.push(player);
    } else {
      let last = this.arr[this.arr.length-1];
      if(last[1] < player[1] ) {
          this.arr[this.arr.length-1] = player;
      } else {
        if(last[1] == player[1] && last[0] > player[0]) {
          this.arr[this.arr.length-1] = player;
        }
      }
    }

    return this;
  }

}

// const rating = new TopRated();
// rating.add(['Alex',4]).add(['Egor',3]).add(['Igor',1]);
// console.log(rating.list);
// rating.add(['Sveta',5]).add(['Tolya',7]);
// console.log(rating.list);
// rating.add(['Anton', 8])
// console.log(rating.list);
