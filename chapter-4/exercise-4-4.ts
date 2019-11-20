import * as util from 'util';
import { createBalancedBinaryTreeFromSortedArray } from './exercise-4-3';

class BinaryTreeNode<T> {
    constructor(
        public val: T = null,
        public left: BinaryTreeNode<T> = null,
        public right: BinaryTreeNode<T> = null,
    ) {}
}

function generateDepthLists<T>(
    node: BinaryTreeNode<T>,
    depth: number = 0,
    depthLists: Array<Array<T>> = []): Array<Array<T>> {

    if (!node)
        return depthLists;

    if (!depthLists[depth])
        depthLists[depth] = [];

    depthLists[depth].push(node.val);

    depthLists = generateDepthLists(node.left, depth + 1, depthLists);
    depthLists = generateDepthLists(node.right, depth + 1, depthLists);

    return depthLists;
}

function test<T>(sortedArray: Array<T>) {
    console.log('--------------------------------------------------');
    console.log(util.inspect(sortedArray, { maxArrayLength: null }));
    const tree = createBalancedBinaryTreeFromSortedArray(sortedArray);
    console.log(util.inspect(tree, { depth: null }));
    const depthLists = generateDepthLists(tree);
    console.log(util.inspect(depthLists, { maxArrayLength: null }));
}

test([1, 2, 3, 4, 5, 6, 7, 8]);
test([1, 2, 3, 4, 5, 6, 7, 8, 9]);
test([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
