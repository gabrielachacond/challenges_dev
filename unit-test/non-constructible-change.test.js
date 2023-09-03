const { ControllerNonConstructibleChange } = require("../src/api/controller/non-constructible-change");

const controllerNonConstructibleChange = new ControllerNonConstructibleChange();

test('should return 1 if the array is empty', () => {
     expect(controllerNonConstructibleChange.nonConstructibleChange([])).toBe(1)
});


test('should return 1 if the array = [0]', () => {
     expect(controllerNonConstructibleChange.nonConstructibleChange([0])).toBe(1)
});


test('should return 2 if the array = [1]', () => {
     expect(controllerNonConstructibleChange.nonConstructibleChange([1])).toBe(2)
});

test('should return 1 if the array = [2]', () => {
     expect(controllerNonConstructibleChange.nonConstructibleChange([2])).toBe(1)
});


test('should return 4 if the array = [1, 2, 5]', () => {
     expect(controllerNonConstructibleChange.nonConstructibleChange([1, 2, 5])).toBe(4)
});

test('should return 20 if the array = [5, 7, 1, 1, 2, 3, 22]', () => {
     expect(controllerNonConstructibleChange.nonConstructibleChange([5, 7, 1, 1, 2, 3, 22])).toBe(20)
});