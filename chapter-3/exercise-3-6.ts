import { Stack } from './exercise-3-2';

const stacks = [
    new Stack(),
    new Stack(),
    new Stack(),
];

function move(src, dst) {
    stacks[dst].push(stacks[src].pop());
}

function solve(count: number, src: number, dst: number, tmp: number) {
    console.log('--------------------');
    for (let i = 0; i < 3; i++)
        console.log(stacks[i].toString());

    if (count === 0)
        return;

    solve(count - 1, src, tmp, dst);
    move(src, dst);
    solve(count - 1, tmp, dst, src);
}

stacks[0].push(4).push(3).push(1).push(5).push(2);
solve(5, 0, 1, 2);
