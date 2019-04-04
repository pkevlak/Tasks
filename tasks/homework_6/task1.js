const parse = (str) => {
    let num = 0;
    const arr = [];

    str.split('').forEach(function(letter) {
        switch (letter) {
            case 'i':
                num = num + 1;
                break;
            case 'd':
                num = num - 1;
                break;
            case 's':
                num = num * num;
                break;
            case 'o':
                arr.push(num);
                break;
        }
    });

    return arr;
}

//console.log(parse('iiisxxxdoso'));