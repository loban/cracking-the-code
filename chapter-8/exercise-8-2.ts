type Coor = { x: number, y: number };

function get_all_paths(
    grid: number[][],
    pos: Coor = { x: 0, y: 0 },
    current_path: Coor[] = [],
    all_paths: Coor[][] = [],
): Coor[][] {
    current_path = [...current_path, pos];

    let end = true;
    if (grid[pos.x + 1] && grid[pos.x + 1][pos.y]) {
        all_paths = get_all_paths(grid, {x: pos.x + 1, y: pos.y}, current_path, all_paths);
        end = false;
    }
    if (grid[pos.x] && grid[pos.x][pos.y + 1]) {
        all_paths = get_all_paths(grid, {x: pos.x, y: pos.y + 1}, current_path, all_paths);
        end = false;
    }
    if (end) {
        all_paths.push(current_path);
    }

    return all_paths;
}

function test(grid: number[][]) {
    const all_paths = get_all_paths(grid);
    console.log('-------------------');
    console.log(grid);
    console.log(all_paths.length);
    // console.log(all_paths);
}

test([
    [1, 1],
    [1, 1],
]);

test([
    [1, 1],
    [1, 0],
]);

test([
    [1, 0],
    [1, 0],
]);

test([
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
]);

test([
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
]);

test([
    [1, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 0],
]);
