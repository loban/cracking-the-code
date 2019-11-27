class BinaryTreeNode<T> {
    constructor(
        public val: T = null,
        public left: BinaryTreeNode<T> = null,
        public right: BinaryTreeNode<T> = null,
    ) {}
}

function matchTree<T>(node: BinaryTreeNode<T>, subNode: BinaryTreeNode<T>): boolean {
    if (subNode === null)
        return true;

    if (node === null)
        return false;
    if (node.val !== subNode.val)
        return false;

    return matchTree(node.left, subNode.left) && matchTree(node.right, subNode.right);
}

function hasSubtree<T>(node: BinaryTreeNode<T>, subNode: BinaryTreeNode<T>): boolean {
    if (node === null || subNode === null)
        return false;

    if (node.val === subNode.val) {
        if (matchTree(node, subNode))
            return true;
    }

    return hasSubtree(node.left, subNode) || hasSubtree(node.right, subNode);
}

function test<T>(tree: BinaryTreeNode<T>, subtree: BinaryTreeNode<T>) {
    console.log('--------------------------------------------------');
    console.log(hasSubtree(tree, subtree));
}

const tree = (
    new BinaryTreeNode(0,
        new BinaryTreeNode(1,
            new BinaryTreeNode(0,
                new BinaryTreeNode(1,
                    new BinaryTreeNode(15),
                ),
                new BinaryTreeNode(2),
            )
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

const subtree1 = (
    new BinaryTreeNode(5,
        new BinaryTreeNode(9,
            null,
            new BinaryTreeNode(12)
        ),
        new BinaryTreeNode(10),
    )
);

const subtree2 = (
    new BinaryTreeNode(5,
        new BinaryTreeNode(9,
            new BinaryTreeNode(15),
            new BinaryTreeNode(12)
        ),
        new BinaryTreeNode(10),
    )
);

const subtree3 = (
    new BinaryTreeNode(0,
        new BinaryTreeNode(1),
        new BinaryTreeNode(2),
    )
);

const subtree4 = (
    new BinaryTreeNode(0,
        new BinaryTreeNode(1,
            new BinaryTreeNode(15),
        ),
        new BinaryTreeNode(2),
    )
);

test(tree, subtree1);
test(tree, subtree2);
test(tree, subtree3);
test(tree, subtree4);
