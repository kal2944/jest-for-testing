const stringLength = require('../modules/stringLength');

test('string length wow should be 3', () => {
    expect(stringLength('wow')).toBe(3);
});

test('string length covenant should be 8', () => {
    expect(stringLength('covenant')).toBe('error: string length should be between 1 and 5');
});

test('string length - should be 2', () => {
    expect(stringLength('')).toBe('error: string length should be between 1 and 5');
});