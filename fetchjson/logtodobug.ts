/*
  call the fetch url that prints the one todo
*/
import axios from 'axios';
const URL = 'https://jsonplaceholder.typicode.com/todos/1';

// define the structure of object

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios
  .get(URL)
  .then((response) => {
    console.log(response.data);
    const todo = response.data as Todo; // your informing that response.data object will be like Todo
    const id = todo.id;
    const completed = todo.completed;
    const title = todo.title;
    logTodo(id, completed, title);
  })
  .catch((e) => {
    console.log(e);
  });

const logTodo = (id, title, completed) => {
  console.log(`
      The ID is ${id}
      TODO completed ${completed}
      TODO title is ${title}
    `);
};
