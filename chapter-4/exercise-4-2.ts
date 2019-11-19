type AdjMatrix = Array<Array<0|1>>;

function isConnected(graph: AdjMatrix, start: number, end: number): boolean {
    function search(graph: AdjMatrix, start: number, end: number, queue: Array<number>, visited: Array<number>): boolean {
        console.log(queue, '#####', visited);

        if (queue.length === 0)
            return false;

        let node;
        do {
            node = queue.shift();
        } while (visited[node]);

        if (node === end)
            return true;

        visited.push(node);
        queue.push(...children(graph, node));

        return search(graph, start, end, queue, visited);
    }

    function children(graph: AdjMatrix, node: number): Array<number> {
        return graph[node]
            .map((val, idx) => val ? idx : null)
            .filter(val => val != null);
    }

    return search(graph, start, end, [start], []);
}

function test(graph, start, end) {
    console.log('-----------------------');
    console.log(graph, start, end);
    console.log(isConnected(graph, start, end));
}

const graph1: AdjMatrix = [
    [0, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1],
    [0, 1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0],
];

test(graph1, 0, 5);
test(graph1, 5, 0);
