// reverse using JS arrays api
export const reverse = (str = '') => str.split('').reverse().join('');

// reverse using iterative approach
export const reverseIterative = (str = '') => {
    let res = '';
    for (let i = str.length - 1; i >= 0; --i) {
        res += str[i];
    }
    return res;
}