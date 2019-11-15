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

const N = 5;
for (let i = N; i > 0; i--)
    stacks[0].push(i);
solve(N, 0, 1, 2);
