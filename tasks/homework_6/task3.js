const getWave = (word) => {
    const arr = [];
    let letNum = 0;

    while(letNum < word.length) {
        let newWord2 = word.substring(0, letNum) + word[letNum].toUpperCase() + word.substring(letNum + 1);
        if (word[letNum] !== ' ') {
            arr.push(newWord2);
        }
        letNum = letNum + 1;
    }

    return arr;
}

//console.log(getWave('hello world'));