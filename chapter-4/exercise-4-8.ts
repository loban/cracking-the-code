class BinaryTreeNode<T> {
    constructor(
        public val: T = null,
        public left: BinaryTreeNode<T> = null,
        public right: BinaryTreeNode<T> = null,
    ) {}
}

function searchPaths(node: BinaryTreeNode<number>, sum: number,
                     currentPath: Array<number> = [], currentSum: number = 0,
                     solutions: Array<Array<number>> = []): Array<Array<number>> {
    // console.debug('Node', node?.val, currentPath, currentSum);

    if (!node)
        return solutions;

    currentPath = [...currentPath]; // clone
    currentPath.push(node.val);
    currentSum += node.val;

    while (currentSum >= sum) {
        if (currentSum === sum)
            solutions.push(currentPath);

        currentPath = [...currentPath]; // clone
        const currentVal = currentPath.shift();
        currentSum -= currentVal;
    }

    if (node.left)
        solutions = searchPaths(node.left, sum, currentPath, currentSum, solutions);
    if (node.right)
        solutions = searchPaths(node.right, sum, currentPath, currentSum, solutions);

    return solutions;
}

function test(tree: BinaryTreeNode<number>, sum: number) {
    console.log('--------------------------------------------------');
    console.log(sum, '=>', searchPaths(tree, sum));
}

const tree = (
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

for (let i = 0; i < 30; i++)
    test(tree, i);
