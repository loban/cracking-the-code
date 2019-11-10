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

function _removeNode(head, curr, node) {
    if (curr === null) {
        return head;
    }
    if (curr.next === node) {
        curr.next = curr.next.next;
        return head;
    }
    return _removeNode(head, curr.next, node);
}

function removeNode(head, node) {
    if (node === null) {
        return head;
    }
    if (head === node) {
        return head.next;
    }
    return _removeNode(head, head, node);
}

const list1 =
    new Node(5);
const list2 =
    new Node(5,
        new Node(7));
const list3 =
    new Node(5,
        new Node(7));
const list4 =
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
print(removeNode(list1, list1));

console.log('----------');
print(list2);
print(removeNode(list2, list2));

console.log('----------');
print(list3);
print(removeNode(list3, list3.next));

console.log('----------');
print(list4);
print(removeNode(list4, list4.next.next.next));

function trickyRemoveNode(node) {
    // Since it states "middle", we know next is NOT null
    node.val = node.next.val;
    node.next = node.next.next;
}

const list5 =
    new Node(5,
        new Node(7,
            new Node(3,
                new Node(9,
                    new Node(7,
                        new Node(4,
                            new Node(5,
                                new Node(7,
                                    new Node(1)))))))));

console.log('=============');
print(list5);
trickyRemoveNode(list5.next.next.next);
print(list5);
trickyRemoveNode(list5.next.next.next);
print(list5);
