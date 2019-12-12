function getAllParenthesisPairs(
    n: number,
    open: number = 0,
    close: number = 0,
    result: string = '',
    allResults: string[] = []
): string[] {
    if (n === 0) {
        return allResults;
    }

    if (open === n && close === n) {
        allResults.push(result);
    }
    else {
        if (open < n) {
            allResults = getAllParenthesisPairs(n, open + 1, close, result + '(', allResults);
        }
        if (close < open) {
            allResults = getAllParenthesisPairs(n, open, close + 1, result + ')', allResults);
        }
    }

    return allResults
}

function test(n: number) {
    console.log('----------------------------------------');
    console.log('n', n);
    const result = getAllParenthesisPairs(n);
    console.log('result', result.length, result);
}

for (let i = 0; i <= 10; i++)
    test(i);

