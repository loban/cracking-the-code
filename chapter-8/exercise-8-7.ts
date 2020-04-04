// -------------------------------------------------------------
function getChangeCount(n: number): number {
    const bag = calculateChange(n);
    console.debug(bag);
    return bag.size;
}

function calculateChange(n: number,
                         seq: Array<number> = [],
                         bag: Set<Array<number>> = new Set<Array<number>>()): Set<Array<number>> {
    if (sum(seq) === n) {
        bag.add(seq.sort());
        return bag;
    }
    if (sum(seq) > n) {
        return bag;
    }

    calculateChange(n, [...seq, 25], bag);
    calculateChange(n, [...seq, 10], bag);
    calculateChange(n, [...seq, 5], bag);
    calculateChange(n, [...seq, 1], bag);

    return bag;
}

function sum(seq: number[]): number {
    return seq.reduce((total, num) => total + num, 0);
}

// -------------------------------------------------------------

function test(n) {
    console.log('--------------------------------------------------');
    console.log(n, '-->', getChangeCount(n));
}

for (let i = 0; i <= 10; i++)
    test(i);
