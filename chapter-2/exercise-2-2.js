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

function _nthToLast(node, n, t, nodeAfter) {
    if (node === null) {
        return undefined;
    }
    else if (t === n) {
        if (nodeAfter.next === null) {
            return node.val;
        }
        else {
            return _nthToLast(node.next, n, t, nodeAfter.next);
        }
    }
    else if (t < n) {
        if (nodeAfter.next === null) {
            return undefined;
        }
        else {
            return _nthToLast(node, n, t + 1, nodeAfter.next);
        }
    }
}

function nthToLast(node, n) {
    return _nthToLast(node, n, 0, node);
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
console.log(nthToLast(list1, 0));
console.log(nthToLast(list1, 1));

console.log('----------');
print(list2);
console.log(nthToLast(list2, 0));
console.log(nthToLast(list2, 1));
console.log(nthToLast(list2, 2));

console.log('----------');
print(list3);
console.log(nthToLast(list3, 0));
console.log(nthToLast(list3, 1));
console.log(nthToLast(list3, 5));
console.log(nthToLast(list3, 9));
