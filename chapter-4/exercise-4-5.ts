import * as util from 'util';

class BinaryTreeNode<T> {
    constructor(
        public val: T = null,

        public left: BinaryTreeNode<T> = null,
        public right: BinaryTreeNode<T> = null,
        public parent: BinaryTreeNode<T> = null,

        public next: BinaryTreeNode<T> = null,
    ) {
        if (this.left)
            this.left.parent = this;
        if (this.right)
            this.right.parent = this;
    }
}

export function generateTree<T>(sortedArray: Array<T>) {
    if (!sortedArray.length)
        return null;

    const index = Math.floor(sortedArray.length / 2);

    const val = sortedArray[index];
    const leftArray = sortedArray.slice(0, index);
    const rightArray = sortedArray.slice(index + 1);

    return new BinaryTreeNode(
        val,
        generateTree(leftArray),
        generateTree(rightArray),
    );
}

function first<T>(node: BinaryTreeNode<T>, debug = true): BinaryTreeNode<T> {
    if (!node)
        return node;
    if (debug)
        console.debug('first', node.val);

    if (node.left)
        return first(node.left, debug);

    if (debug)
        console.debug('FIRST', node.val);
    return node;
}

function last<T>(node: BinaryTreeNode<T>, debug = true): BinaryTreeNode<T> {
    if (!node)
        return node;
    if (debug)
        console.debug('last', node.val);

    if (node.right)
        return last(node.right, debug);

    if (debug)
        console.debug('LAST', node.val);
    return node;
}

function generateNext<T>(node: BinaryTreeNode<T>, debug = true): BinaryTreeNode<T> {
    if (!node)
        return node;
    if (debug)
        console.debug('next', node.val);

    const left = last(node.left, debug);
    if (left)
        left.next = node;

    let next = node;
    let lastNext = null;
    while (!next.right && next.right != lastNext) {
        lastNext = next;
        next = next.parent;
    }

    const right = first(next?.right, debug);
    if (right)
        node.next = right;

    generateNext(node.left, debug);
    generateNext(node.right, debug);

    if (debug)
        console.debug('NEXT', left?.val, node.val, right?.val);
    return node;
}

function generateList<T>(node: BinaryTreeNode<T>): Array<T> {
    if (!node)
        return [];
    return [node.val, ...generateList(node.next)];
}

function test1<T>(tree: BinaryTreeNode<T>) {
    console.log('--------------------------------------------------');
    tree = generateNext(tree, false);

    console.log('..................................................');
    // console.log(util.inspect(tree, { depth: null }));

    console.log('..................................................');
    const list = generateList(first(tree, false));

    console.log('..................................................');
    console.log(util.inspect(list, { maxArrayLength: null }));
}

function test2<T>(sortedArray: Array<T>) {
    console.log('==================================================');
    console.log(util.inspect(sortedArray, { maxArrayLength: null }));

    console.log('..................................................');
    const tree = generateTree(sortedArray);

    test1(tree);
}

test2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);

test1(
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
