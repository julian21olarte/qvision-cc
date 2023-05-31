// maxNum using JS arrays api (reduce)
export const maxNum = (nums = []) => nums.reduce((prev, curr) => curr > prev ? curr : prev, -Infinity);

// maxNum using iterative approach
export const maxNumIterative = (nums = []) => {
    let max = -Infinity;
    for (let i = 0; i <= nums.length; ++i) {
        max = nums[i] > max ? nums[i] : max;
    }
    return max;
}