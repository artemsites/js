/*************************** Data structures ***************************/

// Array
// Object
// Set - похож на массив но не может содержать в себе одинаковые элементы
// Map - похож на объект в нём массивы со значениями [key, value]
// WeakSet, WeakMap



// Практика создания своего data structures:
// Linked List
// [value, next] -> [value, next] -> [value, next]

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;//первый элемент
    this.tail = null;//последний элемент
  }

  append(data) {
    const node = new Node(data);

    if (this.tail) {
      this.tail.next = node;
    }

    if (!this.head) {
      this.head = node;
    }

    this.tail = node;
  }

  prepend(data) {
    const node = new Node(data, this.head);

    this.head = node;

    if (!this.tail) {
      this.tail = node;
    }
  }

  find(data) {
    if (!this.head) {
      console.error('ERROR: no data');
      return;
    }

    let current = this.head;
    while (current) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }
  }

  insertAfter(after, data) {
    const found = this.find(after);
    
    if (!found) {
      console.error('ERROR not found data');
      return;
    }
    
    found.next = new Node(data, found.next);
  }

  toArray() {
    const output = [];
    let current = this.head;

    while (current) {
      output.push(current);
      current = current.next;
    }

    return output;
  }

  remove(data) {
    if (!this.head) {
      return;
    }

    while (this.head && this.head.data === data) {
      this.head = this.head.next;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }

    if (this.tail === data) {
      this.tail = current;
    }
  }
}

const list = new LinkedList();
list.append('Hi!');
list.prepend('Pre Hi!');
list.append('my');
list.append('name');
// list.append('is');
list.append('Artem');

list.append(42);
list.prepend(84);

console.log(list);
console.log(list.toArray());
console.log(list.find('Artem'));
list.insertAfter('name', 'is');
console.log(list);

list.remove(42);
// list.remove(84);

console.log(list);