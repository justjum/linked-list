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
        while (current.value) {
            console.log(current.value);
            if (current.value === value) {
                return console.log(true);
            }
            else if (current.nextNode === null) {
                return console.log(false);

            }
            current = current.nextNode;
            
        }  
        
    }

    find(value) {
        let current = this.first;
        let index = 0;
        while (current.value) {
            if (current.value === value) {
                return console.log(`Index ${index}`);
            }
            else if (current.nextNode === null) {
                return console.log(null);
            }
            current = current.nextNode;
            index++;
        }
    }

    toString() {
        let current = this.first;
        let str = current.value;
        while (current.nextNode) {
            current = current.nextNode;
            str = str.concat(...' -> ', current.value)
            
        }
        str = str.concat(...' -> ', null);
        return console.log(str);
    }

    insertAt(value, index) {
        let current = this.first;
        for (let x=0; x<index-1; x++) {
            current = current.nextNode;
        }
        let temp = current.nextNode;
        current.nextNode = new node(value, temp);
    }

    removeAt(index) {
        let current = this.first;
        if (index > this.entries) {
            console.log("Empty index");
        }
        else {
            for (let x=0; x<index-1; x++) {
                current = current.nextNode
            }
            let temp = current.nextNode;
            console.log(`Remove ${temp.value} at index ${index}`)
            temp = temp.nextNode;
            current.nextNode = temp;
            
        }



    }

}

class node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }

}

let list = new linkedList();
list.append("tipple");
list.append("whittle");
list.append("trigger");
list.prepend('second');
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
list.contains('greg');
list.find('first');
list.find('tipple');
list.find('trigger'); //had been deleted with earlier 'pop'
list.toString();
list.insertAt('bubble', 3);
list.toString();
list.removeAt(3);
list.toString();
