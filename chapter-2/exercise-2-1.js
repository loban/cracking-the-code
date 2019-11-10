class Node {
    val;
    next = null;

    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function print(node) {
    let output = '[';
    for (let currNode = node; currNode; currNode = currNode.next) {
        output += `${currNode.val}, `;
    }
    output += ']';

    console.log(output);
}

function removeDuplicates(node) {
    const memory = new Set();

    if (!node) {
        return;
    }

    memory.add(node.val);
    for (let currNode = node; currNode.next;) {
        if (memory.has(currNode.next.val)) {
            currNode.next = currNode.next.next;
        }
        else {
            memory.add(currNode.next.val);
            currNode = currNode.next;
        }
    }
}

const list1 = null;
const list2 = new Node(4);
const list3 =
    new Node(5,
        new Node(7,
            new Node(3,
                new Node(9,
                    new Node(7,
                        new Node(4,
                            new Node(5,
                                new Node(7,
                                    new Node(1)))))))));

console.log('----------');
print(list1);
removeDuplicates(list1);
print(list1);

print(list2);
removeDuplicates(list2);
print(list2);

print(list3);
removeDuplicates(list3);
print(list3);

function removeDuplicatesNoBuffer(node) {
    if (!node) {
        return;
    }

    const val = node.val;
    for (let currNode = node; currNode.next;) {
        if (currNode.next.val === val) {
            currNode.next = currNode.next.next;
        }
        else {
            currNode = currNode.next;
        }
    }

    removeDuplicatesNoBuffer(node.next);
}

const list4 = null;
const list5 = new Node(4);
const list6 =
    new Node(5,
        new Node(7,
            new Node(3,
                new Node(9,
                    new Node(7,
                        new Node(4,
                            new Node(5,
                                new Node(7,
                                    new Node(1)))))))));

console.log('----------');
print(list4);
removeDuplicatesNoBuffer(list4);
print(list4);

print(list5);
removeDuplicatesNoBuffer(list5);
print(list5);

print(list6);
removeDuplicatesNoBuffer(list6);
print(list6);
