const urlApi = 'https://jsonplaceholder.typicode.com/users';

/**
 * 
 * @param {String} method 
 * @param {String} url 
 * @param {Object} body 
 * @returns {Array|Object} 
 */
function sendRequest(method, url, body = null) {
  let bodyRequest = null;
  if (method === 'POST') {
    bodyRequest = {
      method: method,
      body: (body) ? JSON.stringify(body) : '',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  }
  return fetch(url, bodyRequest)//fetch возвращает Promise
    .then(response => {
      if (response.ok) {
        return response.json();//.json() приводит "response.body: ReadableStream" в объект
        // return response.text();//.text() приводит "response.body: ReadableStream" в текстовые данные
      }
      // Если ошибка
      return response.json().then(error=>{
        const err = new Error('Запрос fetch закончился ошибкой!');
        err.data = error;
        throw err;//прокидываем ошибку
      });
    });
}

// sendRequest('GET', urlApi)
//   .then(responseData => { console.log(responseData) })
//   .catch(errorData => { console.error(errorData) });

const body = { name: 'Artem' };

sendRequest('POST', urlApi, body)
  .then(responseData => { console.log(responseData) })
  .catch(errorData => { console.error(errorData) });