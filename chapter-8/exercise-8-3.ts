function addElement<T>(element: T, allSubsets: Array<Array<T>> = []): Array<Array<T>> {
    let newAllSubsets = [...allSubsets];
    allSubsets.forEach(subset => {
        const newSubset = [...subset, element];
        newAllSubsets = [...newAllSubsets, newSubset];
    });
    return newAllSubsets;
}

function getAllSubsets<T>(set: Array<T>): Array<Array<T>> {
    let allSubsets = [[]];
    set.forEach(element => {
       allSubsets = addElement(element, allSubsets);
    });
    return allSubsets;
}

function test<T>(set: Array<T>) {
    console.log('----------------------------------------');
    console.log('set', set.length, set);
    const allSubsets = getAllSubsets(set);
    console.log('all subsets', allSubsets.length, allSubsets);
}

test([]);
test([1, 2]);
test([1, 2, 3]);
test([1, 2, 3, 4, 5]);
