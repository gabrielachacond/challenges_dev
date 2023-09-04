/*
---------------------------------------------------------------------------------------------------------------------
Chanllenge 1: Smallest Difference

Given two arrays of integers, compute the pair of values (one value in each array)
 with the smallest (non-negative) difference. Return the difference.

Examples:

const a = [1, 3, 15, 11, 2];
const b = [23, 127, 235, 19, 8];

smallestDifference(a, b); // output: 3


const a = [10, 5, 40];
const b = [50, 90, 80];

smallestDifference(a, b); // output: 10
---------------------------------------------------------------------------------------------------------------------

this function calculates between 2 matrices, which are the values
that have the smallest difference between them.
*/

class ControllerSmallestDifference {
    constructor() {
    }

    /**
     * 
     * @param {[]} array_one contains 1 array of integers
     * @param {*} array_two  contains other array of integers
     * @returns {number} the smallest difference
     */

    findSmallestDifference(array_one, array_two) {

        let minimumDifference = Infinity;

        for (let i = 0; i < array_one.length; i++) {
            for (let j = 0; j < array_two.length; j++) {
                const difference = Math.abs(array_one[i] - array_two[j]);

                if (difference < minimumDifference) {
                   minimumDifference = difference;
                }
            }
        }

        return minimumDifference;

    }

    handler(req, res, next) {

        const smallestDifferenceArray = this.findSmallestDifference(req.body.array_one, req.body.array_two);

        const responseMsg = "The smallest difference is: " + smallestDifferenceArray;
        return res.status(200).set({ "Access-Control-Allow-Origin": "*" }).json({ result: responseMsg });

    }

}


exports.ControllerSmallestDifference = ControllerSmallestDifference;
