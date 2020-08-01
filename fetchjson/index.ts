/*
  call the fetch url that prints the one todo
*/
import axios from 'axios';
const URL = 'https://jsonplaceholder.typicode.com/todos/1';

axios
  .get(URL)
  .then((response) => {
    console.log(response.data);
    const todo = response.data;
    const Id = todo.Id;
    const completed = todo.completed;
    const title = todo.title;
    console.log(`
      The ID is ${Id}
      TODO completed ${completed}
      TODO title is ${title}
    `);
  })
  .catch((e) => {
    console.log(e);
  });
