import { Stack } from './exercise-3-2';

class StackWithSize<T> extends Stack<T> {
    length: number = 0;

    push(val: T): this {
        this.length++;

        return super.push(val);
    }

    drop(): this {
        this.length--;

        return super.drop();
    }
}

class SetOfStacks<T> {
    stack = new Stack<StackWithSize<T>>();

    constructor(public readonly maxLength: number = 3) {}

    push(val: T): this {
        if (this.isEmpty() || this.stack.top().length === this.maxLength)
            this.stack.push(new StackWithSize<T>().push(val));
        else
            this.stack.top().push(val);

        return this;
    }

    pop(): T {
        const val = this.top();

        this.drop();

        return val;
    }

    top(): T {
        return this.stack.top().top();
    }

    drop(): this {
        this.throwIfEmpty();

        this.stack.top().drop();
        if (this.stack.top().isEmpty())
            this.stack.drop();

        return this;
    }

    isEmpty(): boolean {
        return this.stack.isEmpty();
    }

    toString(): string {
        return this.stack.toString();
    }

    protected throwIfEmpty() {
        return this.stack.throwIfEmpty();
    }
}

const stack1 = new SetOfStacks();
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


// class SetOfStacksPro<T> extends SetOfStacks<T> {
//     popAt(index: number) {
//
//         for (let iStack = this.stack, i = 0; i < index; i++) {
//
//         }
//     }
// }
