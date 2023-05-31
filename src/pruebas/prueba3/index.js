// sumOdd using JS arrays api (reduce)
export const sumOdd = (nums = []) => nums.reduce((prev, curr) => prev + (curr % 2 === 0 ? curr : 0), 0);

// sumOddIterative using iterative approach
export const sumOddIterative = (nums = []) => {
    let sum = 0;
    for (let i = 0; i <= nums.length; ++i) {
        sum += nums[i] % 2 === 0 ? nums[i] : 0
    }
    return sum;
}