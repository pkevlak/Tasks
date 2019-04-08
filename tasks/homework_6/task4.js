function getUsers() {
    const arr = [];
    for (let i = 0; i < arguments.length; i++) {
        arr[i] = arguments[i];
    }
    console.log(arr);
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(json => json.filter(user => (arr.includes(user.id)===false)))
    .then(result => console.log(result))
}

getUsers(2, 3, 4, 5, 6, 7, 8, 9);