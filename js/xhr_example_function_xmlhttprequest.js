const urlApi = 'https://jsonplaceholder.typicode.com/users';

// const xhr = new XMLHttpRequest();//запускаем конструктор, создаём объект соединения
// xhr.open('GET', urlApi);

// // xhr.onload = () => {
// //   console.log(JSON.parse( xhr.response ));//JSON.parse() преобразует строку в объект
// // }
// // xhr.onload = function() {
// //   console.log(JSON.parse( xhr.response ));//JSON.parse() преобразует строку в объект
// // }

// xhr.responseType = 'json';//чтобы сразу получить объект
// // Обработка загруженного ответа
// xhr.onload = () => {
//   if (xhr.status >= 400) {//обработка ошибок
//     console.error('Ошибка: ');
//     console.error(xhr.response);
//   } else {
//     console.log(xhr.response);//сразу получим объект потому что выставили .responseType = 'json'
//   }
// }
// // Обработка ошибки
// xhr.onerror = () => {//на сетевые ошибки
//   console.log('Ошибка: ');
//   console.log(xhr.response);
// }

// xhr.send();



// Создадим асинхронную функцию через Promise
function sendRequest(method, url, body = null) {
  return new Promise((resolve, reject) => {//оборачиваем асинхронный код
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.responseType = 'json';
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    }

    xhr.onerror = () => {
      reject(xhr.response);
    }

    xhr.send(JSON.stringify(body));
  });
}

// sendRequest('GET', urlApi)
//   .then(responseData => { console.log(responseData) })
//   .catch(errorData => { console.error(errorData) });

const body = {name: 'Artem'};
sendRequest('POST', urlApi, body)
  .then(responseData => { console.log(responseData) })
  .catch(errorData => { console.error(errorData) });