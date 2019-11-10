class StackNode<T> {
    constructor(
        public val: T,
        public next: StackNode<T> = null
    ) {}
}

export class Stack<T> {
    topNode: StackNode<T> = null;

    push(val: T): this {
        this.topNode = new StackNode(val, this.topNode);

        return this;
    }

    pop(): T {
        const val = this.top();

        this.drop();

        return val;
    }

    top(): T {
        this.throwIfEmpty();

        return this.topNode.val;
    }

    drop(): this {
        this.throwIfEmpty();

        this.topNode = this.topNode.next;

        return this;
    }

    isEmpty(): boolean {
        return this.topNode === null;
    }

    toString(): string {
        let str = '[';
        for (let node = this.topNode; node !== null; node = node.next)
            str += node.val + ', ';
        str += ']';

        return str;
    }

    throwIfEmpty() {
        if (this.isEmpty())
            throw new Error('Stack is empty');
    }
}

export class StackWithMin<T> extends Stack<T> {
    minStack: Stack<T> = new Stack<T>();

    push(val: T): this {
        if (this.minStack.isEmpty() || val <= this.min())
            this.minStack.push(val);

        return super.push(val);
    }

    drop(): this {
        if (this.top() == this.minStack.top())
            this.minStack.drop();

        return super.drop();
    }

    min(): T {
        return !this.minStack.isEmpty() ? this.minStack.top() : undefined;
    }

    toString(): string {
        return `{ stack = ${super.toString()}, min = ${this.min()} }`;
    }
}

const stack1 = new StackWithMin();
console.log(stack1.toString());

stack1.push(13);
console.log(stack1.toString());

stack1.push(6).push(9).push(6).push(7).push(4).push(4).push(23);
console.log(stack1.toString());

stack1.drop().drop();
console.log(stack1.toString());

stack1.drop().drop();
console.log(stack1.toString());

stack1.drop().drop().drop();
console.log(stack1.toString());

stack1.drop();
console.log(stack1.toString());
