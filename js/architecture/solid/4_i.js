/************************* Interface segregation principle *************************/
Создавать интерфейсы (классы) так чтобы не отменять свойства наследуемых сущностей (классов).

Object.assign(Dog.prototype, swimmer, walker);//Object.assign() объединяет класс с функциями (swimmer & walker) которые станут его методами