import { Stack as BaseStack } from './exercise-3-2';

class Stack<T> extends BaseStack<T> {
    peek(): T {
        return this.top();
    }
}

function insert<T>(val: T, stack: Stack<T>) {
    console.log('--', val, stack.toString());

    if (stack.isEmpty()) {
        stack.push(val);
    }
    else if (val < stack.peek()) {
        stack.push(val);
    }
    else {
        const top = stack.pop();
        insert(val, stack);
        stack.push(top);
    }
}

function sort<T>(stack: Stack<T>) {
    console.log('==', stack.toString());

    if (!stack.isEmpty()) {
        const val = stack.pop();
        sort(stack);
        insert(val, stack);
    }
}

const s = new Stack();
s.push(4).push(1).push(3).push(2).push(5);

console.log('====================');
console.log(s.toString());
sort(s);
console.log(s.toString());
