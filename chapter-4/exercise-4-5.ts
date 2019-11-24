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

export function generateTree<T>(sortedArray: Array<T>, debug = false) {
    if (!sortedArray.length)
        return null;

    const index = Math.floor(sortedArray.length / 2);

    const val = sortedArray[index];
    const leftArray = sortedArray.slice(0, index);
    const rightArray = sortedArray.slice(index + 1);

    if (debug)
        console.debug('tree', index, val);

    return new BinaryTreeNode(
        val,
        generateTree(leftArray, debug),
        generateTree(rightArray, debug),
    );
}

function firstNode<T>(node: BinaryTreeNode<T>, debug = false): BinaryTreeNode<T> {
    if (!node)
        return node;
    if (debug)
        console.debug('first', node.val);

    if (node.left)
        return firstNode(node.left, debug);

    if (debug)
        console.debug('FIRST', node.val);
    return node;
}

function lastNode<T>(node: BinaryTreeNode<T>, debug = false): BinaryTreeNode<T> {
    if (!node)
        return node;
    if (debug)
        console.debug('last', node.val);

    if (node.right)
        return lastNode(node.right, debug);

    if (debug)
        console.debug('LAST', node.val);
    return node;
}

function prevNode<T>(node: BinaryTreeNode<T>, debug = false): BinaryTreeNode<T> {
    if (!node)
        return node;
    if (debug)
        console.debug('prev', node.val);

    if (debug)
        console.debug('PREV', node.left?.val);
    return node.left;
}

function nextNode<T>(node: BinaryTreeNode<T>, lastNode: BinaryTreeNode<T> = null, debug = false): BinaryTreeNode<T> {
    if (!node)
        return node;
    if (debug)
        console.debug('next', node.val);

    if (!node.right && node.right !== lastNode)
        return nextNode(node.parent, node, debug);

    if (debug)
        console.debug('NEXT', node.right?.val);
    return node.right;
}

function generateNext<T>(node: BinaryTreeNode<T>, debug = true): BinaryTreeNode<T> {
    if (!node)
        return node;
    if (debug)
        console.debug('generate', node.val);

    const prev = prevNode(node, debug);

    const lastOfPrev = lastNode(prev, debug);
    if (lastOfPrev)
        lastOfPrev.next = node;

    const next = nextNode(node, null, debug);

    const firstOfNext = firstNode(next, debug);
    if (firstOfNext)
        node.next = firstOfNext;

    if (debug)
        console.debug('GENERATE', lastOfPrev?.val, node.val, firstOfNext?.val);

    generateNext(node.left, debug);
    generateNext(node.right, debug);

    return node;
}

function generateList<T>(node: BinaryTreeNode<T>): Array<T> {
    if (!node)
        return [];
    return [node.val, ...generateList(node.next)];
}

function test1<T>(tree: BinaryTreeNode<T>, debug = false) {
    console.log('--------------------------------------------------');
    tree = generateNext(tree, debug);

    console.log('..................................................');
    // console.log(util.inspect(tree, { depth: null }));

    console.log('..................................................');
    const list = generateList(firstNode(tree, debug));

    console.log('..................................................');
    console.log(util.inspect(list, { maxArrayLength: null }));
}

function test2<T>(sortedArray: Array<T>, debug = false) {
    console.log('==================================================');
    console.log(util.inspect(sortedArray, { maxArrayLength: null }));

    console.log('..................................................');
    const tree = generateTree(sortedArray, debug);

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
