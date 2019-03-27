function showAuthorsNames() {
  const urls = [];

  const getName = (id) => {
    return (
      fetch(`https://jsonplaceholder.typicode.com/posts/${arguments[id]}`)
      .then(response => response.json())
      .then(json => fetch((`https://jsonplaceholder.typicode.com/users/${json.userId}`)))
      .then(response => response.json())
      .then(json => json.name)
    )
  }

  for(let index = 0; index < arguments.length; index++){
    urls.push(getName(index));
    console.log(urls);
  }

  Promise.all( urls )
  .then(results => {
    const str = results.join(' ')
    console.log(str)
  })
  .catch(error => console.log(error))
}

showAuthorsNames(1,22,40);
