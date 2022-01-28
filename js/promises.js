// const delay = ms => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, ms);
//   });
// }

// delay(1000).then(() => { console.log('Delay function'); });



// const promise = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     resolve('Success async operation!');
//   }, 500);
// });

// promise.then( data => console.log(data) );

// const delay = ms => new Promise((resolve, reject) => {
//   setTimeout( () => { 
//     resolve('Done! ' + ms) 
//   }, ms );
// });

// delay( 1000 )
//   .then( data => delay(1000) )
//   .then( data => delay(1000) )
//   .then( data => console.log(data) )
//   .catch( error => console.log(error) )
//   .finally( () => console.log('FINALLY BLOCK!') );



// async function asyncDelay() {
//   try {
//     const data = await delay(2000);//ждём promise delay
//     console.log(data);    
//   } catch (error) {
//     console.log('Error: ', error);
//   } finally {
//     console.log('Finally block!');
//   }
// }

// asyncDelay(); 



// .all() выполняет все промисы
// Promise.all([
//   delay(500),
//   delay(1000),
//   delay(1500),
// ]).then( data => console.log(data));



// .race() выполняет наибыстрейший промис
// Promise.race([
//   delay(500),
//   delay(1000),
//   delay(1500),
// ]).then( data => console.log(data));



// console.log('Request data...');

// const p = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log('Preparing data...');

//     const serverData = {
//       a: 1,
//       b: 2,
//       c: 3,
//     }

//     resolve(serverData);
//     //Or:
//     // reject(serverData);
//   }, 2000);
// });

// p.then((serverData) => {
//   console.log('Promise resolved! ', serverData);
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       serverData.modified = true;
//       resolve(serverData);
//       //Or:
//       // reject(serverData);
//     }, 1000);
//   });
// })
//   .then((serverDataModified) => {
//     console.log('Data received: ', serverDataModified);
//     serverDataModified.isSuper = true;
//     return serverDataModified;
//   })
//   .then((serverDataModified) => {
//     console.log(serverDataModified);
//   })
//   .catch((err) => {
//     console.error(`Error: `, err);
//   })
//   .finally(() => {
//     console.log('Finally!!!');
//   });



const timeout = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

// timeout(1000).then(()=>console.log('After 1 sec'));
// timeout(2000).then(()=>console.log('After 2 sec'));

//Метод .all() выполняет все асинхронные промисы и только потом срабатывает .then()
//Это хорошо когда из сети из разных мест ожидаются данные чтобы их скомбинировать затем разом.
Promise.all([timeout(1000), timeout(2000)])
  .then(() => {
    console.log('All promises complited!');
  });

//.race() срабатывает когда отработает первый промис (самый быстрый)
Promise.race([timeout(1000), timeout(2000)])
  .then(() => {
    console.log('Race promises.');
  });