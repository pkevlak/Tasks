const deleteDuplicate = (sequence) => {
    const arr = [];
    let prev;

    [...sequence].forEach(function(letter) {
        if(letter !== prev) {
            arr.push(letter);
        }
        prev = letter;
    })
    
    return arr;
}

//console.log(deleteDuplicate('AAAABBBCCDAABBB'));
//console.log(deleteDuplicate([2,4,4,5,2,2,8]) );