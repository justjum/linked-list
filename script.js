class linkedList {
    constructor() {
        this.first = null;
        this.entries = 0;
    }

    append(value) {
        const newNode = new node(value);
        if (this.entries === 0) {
            this.first = newNode;
        }
        else {
            let current = this.first;
            while (current.nextNode) {
                current = current.nextNode;
            }
            current.nextNode = newNode;
        }
        this.entries++;
        console.log(newNode);
    }

    prepend(value) {
        if (this.size === 0) {
            const newNode = new node(value);
            this.first = newNode;
            console.log(newNode);
        }
        else {
            const newNode = new node(value, this.first);
            this.first = newNode;
            console.log(newNode);
        }
        this.entries++;
        
    }

    size() {
        console.log(this.entries);
    }

    head() {
        console.log(`Head is ${this.first.value}`);
    }

    tail() {
        let current = this.first;
        while(current.nextNode) {
            current = current.nextNode;
        }
        console.log(`Tail is ${current.value}`);
    }

    at(index) {
        let current = this.first;
        for (let x=0; x<index; x++) {
            current = current.nextNode;
        }
        console.log(`Index ${index} is ${current.value}`);
    }

    pop() {
        let current = this.first;
        for (let x=0; x<this.entries-2; x++) {
            current = current.nextNode;
            console.log(current.value);
        }
        console.log(`Pop! ${current.nextNode.value}`);
        current.nextNode = null;
        this.entries--;
    }

    contains(value) {
        let current = this.first;
        for (let x=0; x<this.entries; x++) {
            console.log(current.value);
            current.value === value ? console.log(true): console.log(false);
        }
    }


}

class node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }

}

let list = new linkedList("Party");
list.append("tipple");
list.append("whittle");
list.append("trigger");
list.prepend("first");
list.size();
list.head();
list.tail();
list.at(1);
list.at(3);
console.table(list);
list.pop();
list.tail();
console.table(list);
list.contains('whittle');
