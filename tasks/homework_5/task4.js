function showAuthorsNames() {
  const urls = [];

  for(let index = 0; index < arguments.length; index++){
    urls.push(
      fetch(`https://jsonplaceholder.typicode.com/posts/${arguments[index]}`)
      .then(response => response.json())
      .then(json => fetch((`https://jsonplaceholder.typicode.com/users/${json.userId}`)))
      .then(response => response.json())
      .then(json => json.name)
    )
  }
  Promise.all( urls )
  .then(results => {
    const str = results.join(' ')
    console.log(str)
  })
  .catch(error => console.log(error))
}

showAuthorsNames(1,22,40);
