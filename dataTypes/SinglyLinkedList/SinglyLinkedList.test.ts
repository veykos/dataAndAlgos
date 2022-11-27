import { LinkedList, LinkedListNode } from "./SinglyLinkedList";

describe("Singly Linked List push should", () => {
  test("On first push head and tail should be the same", () => {
    const list = new LinkedList();
    list.push("First Node");
    expect(list.head?.val).toBe("First Node");
    expect(list.tail?.val).toBe("First Node");
  });
  test("On second push head should be first node, tail should be second node", () => {
    const list = new LinkedList();
    list.push("First Node");
    list.push("Second Node");
    expect(list.head?.val).toBe("First Node");
    expect(list.tail?.val).toBe("Second Node");
  });
  test("On second push head should be first node, and next should point to second node", () => {
    const list = new LinkedList();
    list.push("First Node");
    list.push("Second Node");
    expect(list.head?.val).toBe("First Node");
    expect(list.head?.next?.val).toBe("Second Node");
  });
  test("On second push length of the list should be 2", () => {
    const list = new LinkedList();
    list.push("First Node");
    list.push("Second Node");
    expect(list.length).toBe(2);
  });
  test("On third push length of the list should be 3", () => {
    const list = new LinkedList();
    list.push("First Node");
    list.push("Second Node");
    list.push(99);
    expect(list.length).toBe(3);
  });
  test("On third push head, tails should be properly assigned, middle node should point to tail", () => {
    const list = new LinkedList();
    list.push("First Node");
    list.push("Second Node");
    list.push(99);
    expect(list.head?.val).toBe("First Node");
    expect(list.tail?.val).toBe(99);
    expect(list.head?.next?.val).toBe("Second Node");
    expect(list.tail?.next).toBe(null);
  });
});
describe("Single linked list pop should", () => {
  test("If the list is empty should return undefined", () => {
    const list = new LinkedList();
    expect(list.pop()).toBe(undefined);
  });
  test("If the list is empty length should not go negative", () => {
    const list = new LinkedList();
    list.pop();
    expect(list.length).toBe(0);
  });
  test("If the list had one element length should not go negative after two pops", () => {
    const list = new LinkedList();
    list.pop();
    list.pop();
    expect(list.length).toBe(0);
  });
  test("If the list is not empty should return first node", () => {
    const list = new LinkedList();
    const popedNode = new LinkedListNode("First Node");
    list.push("First Node");
    expect(list.pop()).toStrictEqual(popedNode);
  });
  test("If the list is of length 2 should return second node", () => {
    const list = new LinkedList();
    const popedNode = new LinkedListNode("Second Node");
    list.push("First Node");
    list.push("Second Node");
    expect(list.pop()).toStrictEqual(popedNode);
  });
  test("If the list is of length 2, after popping should return proper length", () => {
    const list = new LinkedList();
    list.push("First Node");
    list.push("Second Node");
    list.pop();
    expect(list.length).toBe(1);
  });
  describe("Singly linked list shift method should", () => {
    test("If the list is empty should return undefined", () => {
      const list = new LinkedList();
      expect(list.shift()).toBe(undefined);
    });
    test("If the list has one item should return it", () => {
      const list = new LinkedList();
      const shiftedNode = new LinkedListNode("First Node");
      list.push("First Node");
      expect(list.shift()).toStrictEqual(shiftedNode);
    });
    test("If the list has one item should return it", () => {
      const list = new LinkedList();
      const shiftedNode = new LinkedListNode("First Node");
      list.push("First Node");
      expect(list.shift()).toStrictEqual(shiftedNode);
    });
    test("If the list had 2 items, after a shift, head and tail should be the second item", () => {
      const list = new LinkedList();
      const shiftedNode = new LinkedListNode("First node");
      const secondNode = new LinkedListNode("Second node");
      list.push("First Node");
      list.push("Second Node");
      list.shift();
      expect(list.head?.val).toBe("Second Node");
      expect(list.tail?.val).toBe("Second Node");
    });
  });
  describe('Singly linked list unshift should', () => {
    test('If the list is empty, head and tail should be the first item', () => {
      const list = new LinkedList();
      const newNode = new LinkedListNode('First Node')
      list.unshift('First Node')
      expect(list.head).toStrictEqual(newNode)
      expect(list.tail).toStrictEqual(newNode)
    })
    test('If the list has one item, the unshifted node should be the head and the other node the tail', () => {
      const list = new LinkedList();
      const newNode = new LinkedListNode('First Node')
      const anotherNode = new LinkedListNode('Second Node')
      list.push('Second Node')
      list.unshift('First Node')
      expect(list.head?.val).toStrictEqual('First Node')
      expect(list.tail?.val).toStrictEqual('Second Node')
    })
  })
  describe('Singly linked list GET should', () => {
    test('If the list is empty, return undefined', () => {
      const list = new LinkedList();
      expect(list.get(1)).toBeUndefined();
    })
    test('If the list is not empty, but index is negative number or >= than length', () => {
      const list = new LinkedList();
      list.push('One node')
      list.push('Second node')
      expect(list.get(3)).toBeUndefined();
      expect(list.get(-1)).toBeUndefined();
    })
    test('If the list has 2 items get(1) should return the second one', () => {
      const list = new LinkedList();
      const secondNode = new LinkedListNode('Second Node')
      list.push('One node')
      list.push('Second Node')
      expect(list.get(1)).toStrictEqual(secondNode)
    })
    test('If the list has 10 items get(5) should return the 5th one', () => {
      const list = new LinkedList();
      const fifthNode = new LinkedListNode('Node 5')
      for(let i = 0; i< 10; i++) {
      list.push(`Node ${i}`)
      }
      expect(list.get(5)?.val).toBe('Node 5')
    })
  })
  describe('Singly linked list SET should', () => {
    test('In a empty list should return false', () => {
      const list = new LinkedList();
      expect(list.set(1,'First node')).toBe(false)
    })
    test('In a non-empty list should return false if index is out of range', () => {
      const list = new LinkedList();
      for(let i = 0; i< 10; i++) {
        list.push(`Node ${i}`)
        }
      expect(list.set(11,'11th node')).toBe(false)
    })
    test('In a non-empty list should set the value and return true', () => {
      const list = new LinkedList();
      for(let i = 0; i< 10; i++) {
        list.push(`Node ${i}`)
        }
      expect(list.get(5)?.val).toBe('Node 5')
      expect(list.set(5,'Changed node')).toBe(true)
      expect(list.get(5)?.val).toBe('Changed node')
    })
  })
  describe('Insert into a list should', () => {
    test('If given index is smaller than 0 return false', () => {
      const list = new LinkedList();
      expect(list.insert(-1,'asd')).toBe(false);
    })
    test('If given index is bigger than the list length return false', () => {
      const list = new LinkedList();
      expect(list.insert(10,'asd')).toBe(false);
    })
    test("If given a proper index item is inserted and length is incremented", () => {
      const list = new LinkedList();
      list.push('First Node')
      list.push('Second Node')
      list.insert(1,'New Second Node')
      expect(list.length).toBe(3)
    })
    test("If given a proper index item is inserted and nodes point properly to each other", () => {
      const list = new LinkedList();
      list.push('First Node')
      list.push('Second Node')
      list.insert(1,'New Second Node')
      expect(list.get(1)?.val).toBe('New Second Node')
      expect(list.get(1)?.next?.val).toBe('Second Node')
      expect(list.get(0)?.val).toBe('First Node')
    })
    test("If given a proper index item is inserted and nodes point properly to each other", () => {
      const list = new LinkedList();
      list.push('First Node')
      list.push('Second Node')
      expect(list.insert(1,'New Second Node')).toBe(true);
    })
  })
  describe('Remove from a list should', () => {
    test("If given an index smaller than 0 returns false", () => {
      const list = new LinkedList();
      expect(list.remove(-1)).toBe(false);
    })
    test('If given an index >= than the length returns false', () => {
      const list = new LinkedList();
      expect(list.remove(10)).toBe(false);
    })
    test('If given a proper index length is decremented', () => {
      const list = new LinkedList();
      list.push('First Node')
      list.push('Second Node')
      list.remove(1)
      expect(list.length).toBe(1)
    })
    test("If given a proper index item is removed and nodes point correctly to each other", () => {
      const list = new LinkedList();
      list.push('First Node')
      list.push('Second Node')
      list.push('Third Node')
      list.remove(1);
      expect(list.head?.next!.val).toBe('Third Node')
    })
  })
});
