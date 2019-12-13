function paintFill(color: number, x: number, y: number, image: number[][], oldColor = null) {
    if (oldColor === null)
        oldColor = image[x][y];

    if (image.length === 0)
        return;
    if (image[0].length === 0)
        return;

    if (x < 0 || y < 0)
        return;
    if (x >= image.length || y >= image[0].length)
        return;

    if (image[x][y] !== oldColor)
        return;

    image[x][y] = color;

    paintFill(color, x - 1, y - 1, image, oldColor);
    paintFill(color, x, y - 1, image, oldColor);
    paintFill(color, x + 1, y - 1, image, oldColor);
    paintFill(color, x - 1, y, image, oldColor);
    paintFill(color, x + 1, y, image, oldColor);
    paintFill(color, x - 1, y + 1, image, oldColor);
    paintFill(color, x, y + 1, image, oldColor);
    paintFill(color, x + 1, y + 1, image, oldColor);
}

function test( x: number, y: number, image: number[][]) {
    console.log('-------------------------------');
    console.log(view(image));
    console.log(x, y);
    paintFill(8, x, y, image);
    console.log(view(image));
}

function view(image: number[][]) {
    return image.map(row => row.join('')).join('\n');
}

function clone(image: number[][]): number[][] {
    return [...image.map(row => [...row])];
}

const image = [
    [ 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0 ],
    [ 0, 0, 1, 1, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0 ],
    [ 0, 0, 1, 1, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0 ],
    [ 0, 0, 1, 1, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4 ],
    [ 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 3, 0, 0, 3, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 3, 0, 0, 3, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 3, 0, 0, 0, 3, 0, 0, 0 ],
];

test(0, 0, clone(image));
test(5, 10, clone(image));
