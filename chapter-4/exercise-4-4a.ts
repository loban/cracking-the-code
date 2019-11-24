import * as util from 'util';

class BinaryTreeNode<T> {
    constructor(
        public val: T = null,
        public left: BinaryTreeNode<T> = null,
        public right: BinaryTreeNode<T> = null,

        public next: BinaryTreeNode<T> = null,
    ) {}
}

function calculateNext<T>(node: BinaryTreeNode<T>): void {
    if (!node)
        return;

    if (node.left) {
        node.left.next = node.right;
    }

    if (node.right) {
        if (node.next) {
            if (node.next.left)
                node.right.next = node.next.left;
            else
                node.right.next = node.next.right;
        }
    }
    else if (node.left) {
        if (node.next) {
            if (node.next.left)
                node.left.next = node.next.left;
            else
                node.left.next = node.next.right;
        }
    }

    calculateNext(node.left);
    calculateNext(node.right);
}

function generateList<T>(node: BinaryTreeNode<T>, lists: Array<Array<T>> = []): Array<Array<T>> {
    if (!node)
        return lists;

    const list = [];
    let next = null;
    for (let current = node; current != null; current = current.next) {
        list.push(current.val);

        if (!next) {
            if (current.left)
                next = current.left;
            else if (current.right)
                next = current.right
        }
    }
    lists.push(list);

    lists = generateList(next, lists);

    return lists;
}

function test<T>(tree: BinaryTreeNode<T>) {
    console.log('--------------------------------------------------');
    console.log(util.inspect(tree, { depth: null }));
    calculateNext(tree);
    const lists = generateList(tree);
    console.log(util.inspect(lists, { maxArrayLength: null }));
}

test(
    new BinaryTreeNode(0,
        new BinaryTreeNode(1,
            new BinaryTreeNode(3,
                new BinaryTreeNode(6),
                new BinaryTreeNode(7,
                    new BinaryTreeNode(11)
                ),
            ),
            new BinaryTreeNode(4,
                null,
                new BinaryTreeNode(8),
            ),
        ),
        new BinaryTreeNode(2,
            null,
            new BinaryTreeNode(5,
                new BinaryTreeNode(9,
                    null,
                    new BinaryTreeNode(12)
                ),
                new BinaryTreeNode(10),
            )
        ),
    )
);
