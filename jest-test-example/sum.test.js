const maths = require('./maths');

test('adds 1 + 2 to equal 3', () => {
    expect(maths.sum(1,2)).toBe(3);
});

test('subtract 2 - 1 to equal 1', () => {
    expect(maths.subtract(2,1)).toBe(1);
});
