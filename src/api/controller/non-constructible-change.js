/*
---------------------------------------------------------------------------------------------------------------------
Chanllenge 2: Non-Constructible Change

Given an array of positive integers representing the values of coins in your possession, 
write a function that returns the minimum amount of change (the minimum sum of money)
 that you **cannot** create. The given coins can have any positive integer value and
  aren’t necessarily unique (i.e., you can have multiple coins of the same value).

For example, if you’re given coins = `[1, 2, 5]`, the minimum amount of change 
that you can’t create is `4`. If you’re given no coins, the minimum amount
 of change that you can’t create is 1.
---------------------------------------------------------------------------------------------------------------------

This function sorts the array from smallest to largest, 
so that it can evaluate whether the minimum amount of change exists or not. 
*/

class ControllerNonConstructibleChange {
    constructor() {
    }

    /**
     * 
     * @param {[]} coins given an array of integers, get the minimum change that cannot be created
     * @returns {number} the minimum change that cannot be created
     */
    nonConstructibleChange(coins) {
        coins.sort((a, b) => a - b)
        let concurrentChange = 0;

        for (let index = 0; index < coins.length; index++) {
            const coin = coins[index];

            if (coin > concurrentChange + 1) {
                return concurrentChange + 1;
            }
            concurrentChange += coin;
        }

        return concurrentChange + 1;

    }

    handler(req, res, next) {

        const minimumAmountChange = this.nonConstructibleChange(req.body.coins);

        const responseMsg = "The minimum amount of change that you cannot create is: " + minimumAmountChange;
        return res.status(200).set({ "Access-Control-Allow-Origin": "*" }).json({ result: responseMsg });

    }

}


exports.ControllerNonConstructibleChange = ControllerNonConstructibleChange;
