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

function generateNext<T>(node: BinaryTreeNode<T>): BinaryTreeNode<T> {
    if (!node)
        return;

    return node;
}

function test<T>(sortedArray: Array<T>) {
    console.log('--------------------------------------------------');
    console.log(util.inspect(sortedArray, { maxArrayLength: null }));
    let tree = generateTree(sortedArray);
    console.log(util.inspect(tree, { depth: null }));
    tree = generateNext(tree);
    console.log(util.inspect(tree, { depth: null }));
}

test([1, 2, 3, 4, 5, 6, 7, 8]);
test([1, 2, 3, 4, 5, 6, 7, 8, 9]);
test([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
