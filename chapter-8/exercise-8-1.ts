function nth_fibonacci_dynamic(n: number) {
    const MEM = [];

    function nth_fibonacci_dynamic_memoized(n: number) {
        if (n < 0)
            throw new Error('n must be an integer 0 or above');

        if (n === 0)
            return 0;
        if (n === 1)
            return 1;

        if (MEM[n] === undefined)
            MEM[n] = nth_fibonacci_dynamic_memoized(n - 1) + nth_fibonacci_dynamic_memoized(n - 2);

        return MEM[n];
    }

    return nth_fibonacci_dynamic_memoized(n);
}

function nth_fibonacci_iterative(n: number) {
    if (n < 0)
        throw new Error('n must be an integer 0 or above');

    if (n === 0)
        return 0;
    if (n === 1)
        return 1;

    let f1 = 0, f2 = 1;
    for (let i = 2; i <= n; i++) {
        const f3 = f1 + f2;
        f1 = f2;
        f2 = f3;
    }

    return f2;
}

function test(n: number) {
    console.log(n, nth_fibonacci_dynamic(n), nth_fibonacci_iterative(n));
}

test(10);
test(20);
test(30);
test(100);
test(1000);
