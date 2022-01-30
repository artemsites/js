// const myNumber = 10;
// localStorage.removeItem('test');
// console.log(localStorage.getItem('test'));
// localStorage.setItem('test', myNumber);//myNumber будет записан в localStorage как строка
// console.log(localStorage.getItem('test'));//'10'
// localStorage.clear();//очиощает весь localStorage

const art = {
  name: 'Artem',
  age: 32
};
localStorage.setItem('artem', JSON.stringify(art));

const jsonResp = localStorage.getItem('artem');
console.log(JSON.parse(jsonResp));



// storage event для отслеживания событий с localStorage НА ДРУГИХ ВКЛАДКАХ ТОГО ЖЕ РЕСУРСА, чтобы как то реагировать на изменения localStorage глобально в рамках одного ресурса
window.addEventListener('storage', event => {
  console.log(event);
});