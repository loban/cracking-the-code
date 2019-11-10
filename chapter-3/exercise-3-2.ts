class StackNode<T> {
    constructor(
        public val: T,
        public next: StackNode<T> = null
    ) {}
}

class Stack<T> {
    topNode: StackNode<T> = null;
    minNode: StackNode<T> = null;

    push(val: T): Stack<T> {
        this.topNode = new StackNode(val, this.topNode);

        if (this.minNode === null || this.topNode.val < this.minNode.val)
            this.minNode = this.topNode;

        return this;
    }

    pop(): T {
        this._checkIfEmpty();

        const val = this.topNode.val;
        this.topNode = this.topNode.next;

        return val;
    }

    min(): T {
        this._checkIfEmpty();

        return this.minNode.val;
    }

    top(): T {
        this._checkIfEmpty();

        return this.topNode.val;
    }

    isEmpty(): boolean {
        return this.topNode === null;
    }

    toString(): string {
        let str = '{ stack = [';
        for (let node = this.topNode; node !== null; node = node.next)
            str += node.val + ', ';
        str += '], min = ' + this.minNode?.val + '] }';

        return str;
    }

    private _checkIfEmpty() {
        if (this.isEmpty())
            throw new Error('Stack is empty');
    }
}

const stack1 = new Stack();
console.log(stack1.toString());

stack1.push(13);
console.log(stack1.toString());

stack1.push(4).push(6).push(5).push(6).push(23);
console.log(stack1.toString());
