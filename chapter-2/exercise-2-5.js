class Node {
    val;
    next = null;

    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function print(node, _max = 20) {
    let output = '[';
    for (let currNode = node, m = 0; currNode; currNode = currNode.next, m++) {
        if (m === _max) {
            output += '... ';
            break;
        }
        output += `${currNode.val}, `;
    }
    output += ']';

    console.log(output);
}

function _search(head, val) {
    if (head === null) {
        return null;
    }
    if (head.val === val) {
        return head;
    }
    return _search(head.next, val);
}

function findLoopStart(head, copyHead = null) {
    if (head === null) {
        return null;
    }

    let found = _search(copyHead, head);
    if (found) {
        return head;
    }

    let copyNewHead = new Node(head, copyHead);
    return findLoopStart(head.next, copyNewHead);
}

const list1 = null;

const list2 =
    new Node(5,
        new Node(7,
            new Node(6)));

const list3 =
    new Node(555,
        new Node(7,
            new Node(3)));
list3.next.next.next = list3;

const list4 =
    new Node(5,
        new Node(7,
            new Node(3,
                new Node(9,
                    new Node(777,
                        new Node(4,
                            new Node(1)))))));
list4.next.next.next.next.next.next.next = list4.next.next.next.next;

console.log('-----------');
print(list1);
print(list2);
print(list3);
print(list4);
console.log('-----------');
const start1 = findLoopStart(list1); console.log(start1 && start1.val);
const start2 = findLoopStart(list2); console.log(start2 && start2.val);
const start3 = findLoopStart(list3); console.log(start3 && start3.val);
const start4 = findLoopStart(list4); console.log(start4 && start4.val);
console.log('-----------');
