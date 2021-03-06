const getData = require('../getData');

test('check return value', () => {
  getData(data => {
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThanOrEqual(1);
    expect(typeof data[Math.floor(Math.random() * data.length)]).toBe("string");
  });
});