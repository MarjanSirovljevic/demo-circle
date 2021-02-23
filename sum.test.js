const sum = require('./sum');

test('1 plus 2 equals to 3', function() {
    expect(sum(1, 2)).toBe(3);
});

test('1 plus 3 equals to 5', function() {
    expect(sum(3, 5)).toBe(8);
});