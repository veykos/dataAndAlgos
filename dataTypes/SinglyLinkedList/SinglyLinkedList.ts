class LinkedListNode {
  val: any;
  next: LinkedListNode | null;
  constructor(val: any) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  head: LinkedListNode | null;
  tail: LinkedListNode | null;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val: any) {
    let newNode = new LinkedListNode(val);
    // case where length is 0;
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
      return this;
    }
    // case where length is !== 0;
    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
  }
  pop() {
    // case where length is 0;
    if (!this.head) {
      return undefined;
    }
    let pre = this.head;
    if (pre.next) {
      while (pre.next?.next !== null) {
        pre = pre.next!;
      }
      let temp = pre.next;
      this.tail = pre;
      this.length--;
      return temp;
    } else {
      this.head = null;
      this.tail = null;
      this.length--;
      return pre;
    }
  }
  shift() {
    // case where length is 0;
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    this.head = temp.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
  unshift(val: any) {
    const newNode = new LinkedListNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  get(index: number) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let counter = 0;
    let temp = this.head;
    while (counter < index) {
      temp = temp?.next!;
      counter++;
    }
    return temp;
  }
  set(index: number, val: any) {
    const temp = this.get(index);
    if (temp) {
      temp.val = val;
      return true;
    }
    return false;
  }

  insert(index: number, val: any) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === this.length) {
      // !! converts the value to a boolean depening on truthy/falsy
      !!this.push(val);
      return true;
    }
    if (index === 0) {
      !!this.unshift(val);
      return true;
    }
    const pre = this.get(index - 1);
    const newNode = new LinkedListNode(val);
    newNode.next = pre?.next!;
    pre!.next = newNode;
    this.length++;
    return true;
  }
  remove(index: number) {
    if (index < 0 || index >= this.length) {
      return false;
    }
    if (index === this.length - 1) {
      return !!this.pop();
    }
    if (index === 0) {
      return !!this.shift();
    }
    const pre = this.get(index-1)!;
    pre.next = pre.next!.next
    this.length--;
    return true;
  }
  reverse() {
    if (this.length === 0) {
          return this;
        }
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next = null;
    for (let i = 0; i < this.length; i++ ) {
      next = node!.next
      node!.next = prev;
      prev = node
      node = next;
    }
    return this
  }
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val)
      current = current.next;
    }
    console.log(arr)
  }
}

let list = new LinkedList();
for (let i = 0; i < 10; i++) {
  list.push(`Node ${i}`);
}
list.print();
list.reverse();
list.print()

export { LinkedListNode, LinkedList };
