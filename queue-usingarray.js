class Queue {
  constructor() {
    this.queue = {};
    this.front = 0;
    this.rear = 0;
  }
  enqueue(queue) {
    this.queue[this.rear] = queue;
    this.rear++;
  }
  dequeue() {
    const item = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return item;
  }
  peek() {
    return this.queue[this.front];
  }
  get length() {
    return this.rear - this.front;
  }
  get isEmpty() {
    return this.length === 0;
  }
}

let q = new Queue();
for (let i = 1; i <= 7; i++) {
  q.enqueue(i);
}

console.log(q.peek());

console.log(q.length);

while (!q.isEmpty) {
  console.log(q.dequeue());
}
