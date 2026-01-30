class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }
    preAppend(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = this.tail = newNode;
        }
        else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }
    removeLast(){
        if(!this.head){
            console.log("List is empty!");
        }
        else if(this.head == this.tail){
            this.head = this.tail = null;
        }
        else{
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
    }
    removeFirst(){
        if(!this.head){
            console.log("List is empty!");
        }
        else if(this.head == this.tail){
            this.head = this.tail = null;
        }
        else{
            this.head = this.head.next;
            this.head.prev = null;
        }
    }
    removeAt(index){
        if(index < 0){
            console.log("Out of bounds index!!");
        }
        else if(index == 0){
            this.removeFirst();
        }
        else{
            let currentIndex = 0, currentNode = this.head;
            while(currentNode && currentIndex != index){
                currentIndex++;
                currentNode = currentNode.next;
            }
            if(currentNode == this.tail){
                this.removeLast();
            }
            else if(currentNode){
                currentNode.prev.next = currentNode.next;
                currentNode.next.prev = currentNode.prev;
            }
            else{
                console.log("Out of bounds index!!");
            }
        }
    }
    removeByValue(value){
        let currentNode = this.head;
        while(currentNode && currentNode.data != value){
            currentNode = currentNode.next;
        }
        if(currentNode == this.head){
            this.removeFirst();
        }
        else if(currentNode == this.tail){
            this.removeLast();
        }
        else if(currentNode){
            currentNode.prev.next = currentNode.next;
            currentNode.next.prev = currentNode.prev;
        }
        else{
            console.log("Value Not Found!!");
        }
    }
    printForward(){
        let currentNode = this.head;
        while(currentNode){
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
        console.log("-----------------------------------");
    }
    printBackward(){
        let currentNode = this.tail;
        while(currentNode){
            console.log(currentNode.data);
            currentNode = currentNode.prev;
        }
        console.log("-----------------------------------");
    }
    reverse(){
        let headTemp = this.head, tailTemp = this.tail;
        while(headTemp != tailTemp && headTemp.prev != tailTemp){
            let temp = headTemp.data;
            headTemp.data = tailTemp.data;
            tailTemp.data = temp;
            headTemp = headTemp.next;
            tailTemp = tailTemp.prev;
        }
    }
    find(data){
        let currentNode = this.head, index = 0;
        while(currentNode && currentNode.data != data){
            currentNode = currentNode.next;
            index++;
        }
        return currentNode ? index : -1;
    }
}

const list = new DoublyLinkedList();
list.append(13);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.printForward();

list.preAppend(10);
list.preAppend(32);
list.printBackward();

list.removeLast();
list.printForward();

list.removeFirst()
list.printForward();

list.reverse();
list.printForward();

console.log(list.find(13));
console.log(list.find(33));

list.removeAt(1);
list.printForward();
list.removeAt(0);
list.printForward();

list.removeByValue(2);
list.printForward();
list.removeByValue(10);
list.printForward();