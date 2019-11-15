import { Stack } from './exercise-3-2';

class MyQueue<T> {
    private readonly stack1 = new Stack<T>();
    private readonly stack2 = new Stack<T>();

    // O(n)
    // FIXME: Is it possible to make it O(1)?
    enqueue(val: T): this {
        while (!this.stack1.isEmpty())
            this.stack2.push(this.stack1.pop());
        this.stack1.push(val);
        while (!this.stack2.isEmpty())
            this.stack1.push(this.stack2.pop());

        return this;
    }

    // O(1)
    dequeue(): T {
        return this.stack1.pop();
    }

    // O(1)
    isEmpty(): boolean {
        return this.stack1.isEmpty();
    }

    // O(n)
    toString(): string {
        return this.stack1.toString();
    }
}

const q = new MyQueue();

for (let i = 0; i < 10; i++)
    q.enqueue(i);

while(!q.isEmpty())
    console.log(q.dequeue());
