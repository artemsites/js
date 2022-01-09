// const promise = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     resolve('Success async operation!');
//   }, 500);
// });

// promise.then( data => console.log(data) );

const delay = ms => new Promise((resolve, reject) => {
  setTimeout( () => { 
    resolve('Done! ' + ms) 
  }, ms );
});

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
Promise.race([
  delay(500),
  delay(1000),
  delay(1500),
]).then( data => console.log(data));