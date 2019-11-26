class BinaryTreeNode<T> {
    constructor(
        public val: T = null,
        public left: BinaryTreeNode<T> = null,
        public right: BinaryTreeNode<T> = null,
    ) {
    }
}

function find<T>(node: BinaryTreeNode<T>, val: T): boolean {
    if (!node)
        return false;

    if (node.val === val)
        return true;

    return find(node.left, val) || find(node.right, val);
}

function commonAncestor<T>(node: BinaryTreeNode<T>, val1: T, val2: T): T {
    const here1 = node.val === val1;
    const here2 = node.val === val2;

    if (here1)
        return node.val;
    if (here2)
        return node.val;

    const left1 = find(node.left, val1);
    const left2 = find(node.left, val2);
    const right1 = find(node.right, val1);
    const right2 = find(node.right, val2);

    if (left1 && right2)
        return node.val;
    if (right1 && left2)
        return node.val;

    if (left1 && left2)
        return commonAncestor(node.left, val1, val2);
    if (right1 && right2)
        return commonAncestor(node.right, val1, val2);
}

function test<T>(tree: BinaryTreeNode<T>, val1: T, val2: T) {
    console.log('--------------------------------------------------');
    const val = commonAncestor(tree, val1, val2);
    console.log(val1, val2, '=>', val);
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

test(tree, 1, 1);
test(tree, 1, 2);
test(tree, 1, 3);
test(tree, 1, 10);
test(tree, 3, 8);

test(tree, 11, 12);
test(tree, 12, 11);
test(tree, 11, 8);
test(tree, 8, 11);
test(tree, 8, 8);
test(tree, 0, 11);
test(tree, 11, 0);
test(tree, 12, 10);
test(tree, 10, 12);
test(tree, 6, 7);
test(tree, 7, 6);
test(tree, 3, 5);
test(tree, 5, 3);
