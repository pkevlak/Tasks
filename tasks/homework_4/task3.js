const getNameById = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then(response => response.json())
  .then(json => fetch((`https://jsonplaceholder.typicode.com/users/${json.userId}`)))
  .then(response => response.json())
  .then(json => console.log(json.name))
  .catch(error => console.log(error))
}

// getNameById(5);
