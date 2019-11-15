class TreeNode<T> {
    constructor(
        readonly val: T,
        readonly children: TreeNode<T>[] = []
    ) {}

    isLeaf(): boolean {
        return this.children.length === 0;
    }
}

function maxDepth<T>(node: TreeNode<T>, currentDepth = 0): number {
    if (node.isLeaf())
        return currentDepth;

    const depths = node.children.map(child => maxDepth(child, currentDepth + 1));

    return Math.max(...depths);
}

function minDepth<T>(node: TreeNode<T>, currentDepth = 0): number {
    if (node.isLeaf())
        return currentDepth;

    const depths = node.children.map(child => minDepth(child, currentDepth + 1));

    return Math.min(...depths);
}

function isBalanced1<T>(node: TreeNode<T>): boolean {
    return maxDepth(node) - minDepth(node) <= 1;
}

function allDepths<T>(node: TreeNode<T>, currentDepth = 0): number[] {
    if (node.isLeaf())
        return [currentDepth];

    const listOfDepths = node.children.map(child => allDepths(child, currentDepth + 1));

    // Flatten the array of arrays
    return [].concat(...listOfDepths);
}

function isBalanced2<T>(node: TreeNode<T>): boolean {
    const depths = allDepths(node);

    return Math.max(...depths) - Math.min(...depths) <= 1;
}

const tree1 = new TreeNode(1, [
   new TreeNode(2, [
       new TreeNode(3),
       new TreeNode(4)
   ]),
    new TreeNode(4, [
        new TreeNode(5),
        new TreeNode(6, [
            new TreeNode(7)
        ])
    ]),
]);
const tree2 = new TreeNode(1, [
    new TreeNode(2, [
        new TreeNode(3),
        new TreeNode(4)
    ]),
    new TreeNode(4, [
        new TreeNode(5),
        new TreeNode(6, [
            new TreeNode(7, [
                new TreeNode(8)
            ])
        ])
    ]),
]);

console.log(maxDepth(tree1));
console.log(allDepths(tree1));
console.log(isBalanced1(tree1));
console.log(isBalanced2(tree1));

console.log(maxDepth(tree2));
console.log(allDepths(tree2));
console.log(isBalanced1(tree2));
console.log(isBalanced2(tree2));
