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

function sum(head1, head2, carry = 0) {
    if (head1 === null && head2 === null) {
        if (carry === 0) {
            return null;
        }
        return new Node(carry);
    }

    let s = carry;
    if (head1 !== null) {
        s += head1.val;
        head1 = head1.next;
    }
    if (head2 !== null) {
        s += head2.val;
        head2 = head2.next;
    }

    const s1 = s % 10;
    const s2 = Math.floor(s / 10);

    // head1 = head1 === null ? head1 : head1.next;
    // head2 = head2 === null ? head2 : head2.next;

    return new Node(s1, sum(head1, head2, s2));
}

const list1 = null;

const list2 =
    new Node(5,
        new Node(7));

const list3 =
    new Node(5,
        new Node(7,
            new Node(6)));

console.log('-----------');
print(list1);
print(list2);
print(list3);
console.log('-----------');
print(sum(list1, list1));
print(sum(list1, list2));
print(sum(list1, list3));
console.log('-----------');
print(sum(list2, list1));
print(sum(list2, list2));
print(sum(list2, list3));
console.log('-----------');
print(sum(list3, list1));
print(sum(list3, list2));
print(sum(list3, list3));
console.log('-----------');
