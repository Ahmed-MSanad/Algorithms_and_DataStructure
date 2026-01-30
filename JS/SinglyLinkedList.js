class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
    }
    preAppend(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    appendAt(index, data){
        if(index < 0 || index > this.getLength()){
            console.log(`invalid index!! please insert an index between: 0 : ${this.getLength() - 1}`);
        }
        if(index == 0){
            this.preAppend(data);
            return;
        }
        let currentIndex = 0, currentNode = this.head;
        while(currentNode && currentIndex < index - 1){
            currentNode = currentNode.next;
            currentIndex++;
        }
        let newNode = new Node(data);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
    }
    display() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
        console.log("--------------------------------");
    }
    getLength() {
        let length = 0,
            currentNode = this.head;
        while (currentNode) {
            length++;
            currentNode = currentNode.next;
        }
        return length;
    }
    clear() {
        this.head = null;
    }
    getFirst(){
        return this.head;
    }
    getLast() {
        let currentNode = this.head;
        while (currentNode && currentNode.next) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    removeLast(){
        if(!this.head){
            console.log("List is empty!!");
            return;
        }
        else if(!this.head.next){
            this.head = null;
            return;
        }
        let currentNode = this.head;
        while(currentNode.next.next){
            currentNode = currentNode.next;
        }
        currentNode.next = null;
    }
    removeFirst(){
        if(!this.head){
            console.log("List is empty!!");
            return;
        }
        this.head = this.head.next;
    }
}

const list = new SinglyLinkedList();
list.append(13);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.display();

list.preAppend(10);
list.display();

list.appendAt(2, 7);
list.display();
list.appendAt(0, 11);
list.display();
list.appendAt(list.getLength() - 1, 22);
list.display();
list.appendAt(list.getLength(), 33);
list.display();

list.removeLast();
list.display();

list.removeFirst()
list.display();

console.log(`List Length is ${list.getLength()}`);

console.log(`List First Element:`, list.getFirst());

console.log(`List Last Element:`, list.getLast());