class Ajax {
  static echo(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => { 
        if (data) {
          resolve(data);
        } else {
          reject(new Error('Error echo data, class Ajax'));
        }
      }, 150);
    });
  }
}

module.exports = {Ajax};