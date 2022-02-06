class Lodash {
  compact(array) {
    return array.filter(val => !!val);//оператор !! приводит значение к булевому типу
  }
  groupBy(array, prop) {
    return array.reduce((acc, it) => {
      // it[prop] - здесь prop это например 'length', то есть для создания такого: it.length; 
      // prop[it] === Math.floor(2.2)
      const key = (typeof prop === 'function') ? prop(it) : it[prop];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(it);
      return acc;
    }, {});
  }
}

module.exports = { Lodash };