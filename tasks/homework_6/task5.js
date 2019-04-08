const showUsers = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then(response => response.json())
        .then(todos => {
            return todos.filter(todo => todo.completed === true);
        })
        .then(result => getUsersWith10MoreTodos(result))
        .then(users => {
            const urls = [];
            users.forEach(user => urls.push(getUsers(user)));
            Promise.all(urls)
            .then(results => results.filter(result => result !== undefined))
            .then(users => console.log(users));
        });

    const getUsers = (userId) => {
        return (
            fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
                .then(response => response.json())
                .then(json => json.filter(post => post.title.length < 15))
                .then(result => {
                    if(result.length !== 0) {
                        return ( fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
                                    .then(response => response.json())
                        )
                    }
                }
            )
        );
    }

    const getUsersWith10MoreTodos = (arrObj) => {
        const arr = [];
        let counter = 1;

        for(let index = 1; index < arrObj.length; index++) {
            if(arrObj[index].userId === arrObj[index-1].userId) {
                counter++;
                if(index === arrObj.length-1 && counter > 10) {
                    arr.push(arrObj[index].userId);
                }
            } else {
                if(counter > 10 && arr.includes(arrObj[index-1].userId)===false) {
                    arr.push(arrObj[index-1].userId);
                }
                counter = 1;
            }
        }

        return arr;
    }
}

showUsers();
