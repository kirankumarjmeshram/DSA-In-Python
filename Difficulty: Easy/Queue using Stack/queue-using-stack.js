class myQueue {
    constructor() {
        // Initialize your data members
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(x) {
        // Implement enqueue
        this.stack1.push(x)
    }

    dequeue() {
        // Implement dequeue
        if(this.stack2.length === 0 ){
            while(this.stack1.length) {
                this.stack2.push(this.stack1.pop())
            }
        }
        this.stack2.pop()
    }

    front() {
        // Return front element
        if(this.stack2.length === 0) {
            while(this.stack1.length) {
                this.stack2.push(this.stack1.pop())
            }
        }
        return  this.stack2.length ? this.stack2[this.stack2.length-1] : -1;
    }

    size() {
        // Return size of the queue
        return this.stack2.length + this.stack1.length 
    }
}
