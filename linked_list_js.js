// add a method insert() to the linked list that adds a node to the specified index.

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array;
  }
  insert(index, value) {
    //Code here
    let previous = {};
    let currentIndex = 0;
    const newNode = {
      value: value,
      next: null
    }

    let currentNode = this.head;
    console.log(currentNode, currentIndex + "cI")
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    while (currentNode !== null) {
      if (currentIndex === index - 1) {
        let prevNode = currentNode;
        let nextNode = currentNode.next;
        newNode.next = nextNode;
        prevNode.next = newNode;
        console.log(currentIndex + "in if")
        break
      }
      //  if(currentIndex===value){
      //   // var nextNode = {
      //   //   value: currentNode.value,
      //   //   next: newNode
      //   // }
      //   newNode
      //   break;
      //  }
      currentIndex++;
      currentNode = currentNode.next;
      //  console.log(value+"end whhile")
      console.log(currentIndex, "currentIndex")
    }

    return this.printList();
  }

  remove(index){
      let leader=this.traverseTo(index-1)
      let nextleader=leader.next;
      let nextnextleader=nextleader.next;
      delete this.traverseTo(index);
      leader.next=nextnextleader;
      return this.printList();
  }
  traverseTo(index){
    let currentNode=this.head;
    let currentIndex=0;
    while(currentIndex <=index){
      if(currentIndex===index){
        return currentNode;
      }
      currentNode=currentNode.next
      currentIndex++;
    }
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1)
myLinkedList.insert(2, 99)
myLinkedList.printList()
// myLinkedList.remove(2)

// myLinkedList.insert(20, 88)



