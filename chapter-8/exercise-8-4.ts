function addElement<T>(letter: string, allSubwords: Set<string>): Set<string> {
    Array.from(allSubwords.values()).forEach(subword => {
        for (let i = 0; i <= subword.length; i++) {
            const newSubword = subword.slice(0, i) + letter + subword.slice(i);
            allSubwords.add(newSubword);
        }
    });
    return allSubwords;
}

function getAllPermutations<T>(word: string): Set<string> {
    let allSubwords = new Set<string>(['']);
    Array.from(word).forEach(letter => {
        allSubwords = addElement(letter, allSubwords);
    });
    return allSubwords;
}

function test<T>(word: string) {
    console.log('----------------------------------------');
    console.log('word', word.length, word);
    const permutations = getAllPermutations(word);
    console.log('permutations', permutations.size, permutations);
}

test('');
test('ab');
test('aa');
test('abc');
test('aba');
test('abcd');
