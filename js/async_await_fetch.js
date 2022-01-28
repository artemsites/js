const apiUrl = 'https://jsonplaceholder.typicode.com/todos/';



// function fetchTodo() {
//   console.log('Fetch todo started...');

//   return delay(2000)
//     .then(() => fetch(apiUrl))
//     .then(response => response.json());
// }



// fetchTodo()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.error(err);
//   });



// То же что и fetchTodo() только через async await вместо .then()
// Равносильно обработке Promise
async function fetchTodoAsync(url) {
  console.log('Fetch todo started...');
  
  try {

    await delay(1000);//await оператор асинхронной функции для того чтобы не переходить к следующей строке пока не будет выполнена строка с оператором await...
    const response = await fetch(url);  
    const data = response.json();
    return data;

  } catch (err) {
    
    console.error(err);

  } finally {}
}

fetchTodoAsync(apiUrl).then(data=>{
  console.log(data);
});
