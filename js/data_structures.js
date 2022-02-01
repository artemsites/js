/*************************** Data structures ***************************/

// Array
// Object
// Set - похож на массив но не может содержать в себе одинаковые элементы
// Map - похож на объект в нём массивы со значениями [key, value]
// WeakSet, WeakMap



// Практика создания своего data structures:
// Linked List
// [value, next] -> [value, next] -> [value, next]

class LinkedList {
  constructor() {
    this.head = null;//первый элемент
    this.tail = null;//последний элемент
  }

  append(data) {
    const node = {data, next: null};

    if (this.tail) {
      this.tail.next = node;
    }

    if (!this.head) {
      this.head = node;
    }

    this.tail = node;
  }

  prepend(data) {
    const node = {
      data,
      next: this.head
    }

    this.head = node;

    if (!this.tail) {
      this.tail = node;
    }
  }
}

const list = new LinkedList();
list.append('Hi!');
list.append('And...');
list.prepend('Pre Hi!');

console.log(list);