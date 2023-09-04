const { ControllerSmallestDifference } = require("../src/api/controller/smallest-difference");

const controllerSmallestDifference = new ControllerSmallestDifference();

test('should return 3 if the array_one = [1, 3, 15, 11, 2] & array_two = [23, 127, 235, 19, 8]', () => {
     expect(controllerSmallestDifference.findSmallestDifference([1, 3, 15, 11, 2],[23, 127, 235, 19, 8])).toBe(3)
});

test('should return 10 if the array_one = [10, 5, 40] & array_two = [50, 90, 80]', () => {
     expect(controllerSmallestDifference.findSmallestDifference([10, 5, 40],[50, 90, 80])).toBe(10)
});


test('should return 1 if the array_one = [20,12,18] & array_two = [68,19,90]', () => {
     expect(controllerSmallestDifference.findSmallestDifference([20,12,18],[68,19,90])).toBe(1)
});


test('should return 2 if the array_one = [9,15,8] & array_two = [78,11,4]', () => {
     expect(controllerSmallestDifference.findSmallestDifference([9,15,8],[78,11,4])).toBe(2)
});


test('should return 6 if the array_one = [-9,10,-8] & array_two = [-80,-15,4]', () => {
     expect(controllerSmallestDifference.findSmallestDifference([-9,10,-8],[-80,-15,4])).toBe(6)
});

test('should return 4 if the array_one = [-9,-10,-8] & array_two = [-80,-15,-4]', () => {
     expect(controllerSmallestDifference.findSmallestDifference([-9,-10,-8],[-80,-15,-4])).toBe(4)
});


