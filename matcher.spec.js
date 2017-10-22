test('two plus two equal four' , () => {
    expect(2 + 2).toBe(4)

})

test('two object with same value' , () => {
    var o1 = { name: 'ball'}
    var o2 = { name: 'ball'}

    expect(o1).toEqual(o2)
    expect(o1).toBe(o2)

})

test('assign value to object' , () => {
    var data = { one:1 }
    data['two'] = 2
    expect(data).toEqual({one: 1, two:2})

})
test('null' , () => {
    const n = null
expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});


test('two plus two' , () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
    expect(value).toBe(4);
    expect(value).toEqual(4);

})

const shoppingList = [
    'diapers' ,
    'kleenex' , 
    'trash bag' ,
    'paper towels' ,
    'beer'
]

test('the shopping list has beer on it' , () => {
    expect(shoppingList).toContain('beer')
}) 