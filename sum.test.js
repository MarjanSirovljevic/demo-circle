const sum = require('./sum');

test('1 plus 2 equals to 3', function() {
    expect(sum(1, 2)).toBe(3);
});