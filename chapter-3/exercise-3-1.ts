import * as assert from 'assert';

function generateBigArray<T>(length = 24) {
    return new Array<T>(length).fill(null);
}

class ArrayStack<T> {
    private topIndex: number;

    constructor(private readonly bigArray: Array<T>,
                private readonly totalStacks = 3,
                private readonly stackIndex = 0) {
        this.topIndex = this.stackIndex;
    }

    push(val: T): this {
        assert(this.topIndex < this.bigArray.length);

        this.bigArray[this.topIndex] = val;
        this.topIndex += this.totalStacks;

        return this;
    }

    pop(): T {
        const val = this.top();

        this.drop();

        return val;
    }

    top(): T {
        assert(this.topIndex !== this.stackIndex);

        return this.bigArray[this.topIndex - this.stackIndex];
    }

    drop(): this {
        assert(this.topIndex !== this.stackIndex);

        this.topIndex -= this.totalStacks;
        this.bigArray[this.topIndex] = null;

        return this;
    }

    toString(): string {
        let str = '[';
        for (let i = 0; i < this.bigArray.length; i++)
            str += this.bigArray[i] + ', ';
        str += ']';

        return str;
    }
}

class MultipleArrayStacks<T> {
    bigArray = generateBigArray<T>();
    stacks = [
        new ArrayStack<T>(this.bigArray, 3, 0),
        new ArrayStack<T>(this.bigArray, 3, 1),
        new ArrayStack<T>(this.bigArray, 3, 2)
    ];

    push(val: T, stackIndex = 0): this {
        assert(stackIndex < 3);

        this.stacks[stackIndex].push(val);

        return this;
    }

    pop(stackIndex = 0): T {
        assert(stackIndex < 3);

        return this.stacks[stackIndex].pop();
    }

    top(stackIndex = 0): T {
        assert(stackIndex < 3);

        return this.stacks[stackIndex].top();
    }

    drop(stackIndex = 0): this {
        assert(stackIndex < 3);

        this.stacks[stackIndex].drop();

        return this;
    }

    toString(): string {
        return this.stacks[0].toString();
    }
}

const stack1 = new MultipleArrayStacks();
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
