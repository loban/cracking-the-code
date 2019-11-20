import * as util from 'util';

class BinaryTreeNode<T> {
    constructor(
        public val: T = null,
        public left: BinaryTreeNode<T> = null,
        public right: BinaryTreeNode<T> = null,
    ) {}
}

export function createBalancedBinaryTreeFromSortedArray<T>(sortedArray: Array<T>) {
    if (!sortedArray.length)
        return null;

    const index = Math.floor(sortedArray.length / 2);

    const val = sortedArray[index];
    const leftArray = sortedArray.slice(0, index);
    const rightArray = sortedArray.slice(index + 1);

    return new BinaryTreeNode(
        val,
        createBalancedBinaryTreeFromSortedArray(leftArray),
        createBalancedBinaryTreeFromSortedArray(rightArray),
    );
}

function test<T>(sortedArray: Array<T>) {
    console.log('--------------------------------------------------');
    console.log(util.inspect(sortedArray, { maxArrayLength: null }));
    console.log(util.inspect(createBalancedBinaryTreeFromSortedArray(sortedArray), { depth: null }));
}

// test([1, 2, 3, 4, 5, 6, 7, 8]);
// test([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// test([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
