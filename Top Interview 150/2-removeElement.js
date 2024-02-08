/**
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
 *
 * Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
 *
 * Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
 * Return k.
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // My solution
    let k = 0;

    for(let i = 0; i < nums.length; i++){
        for(let j = 1; j < nums.length; j++){
            if(nums[j - 1] === val){
                let temp = nums[j];
                nums[j] = nums[j - 1];
                nums[j - 1] = temp;
            }
        }
    }

    for(let n = 0; n < nums.length; n++){
        if(nums[n] !== val)
            k++;
    }

    nums.splice(k);
    return k;

    // Best Solution:
    // for(let i = 0; i < nums.length; i++){
    //     if(nums[i] != val){
    //         nums[k++] = nums[i];
    //     }
    // }

    // return k;

    // Another solution - i apparently did this?
    // nums.sort((a, b) => a - b);

    // let i = 0;
    // while(i < nums.length){
    //     if(nums[i] === val){
    //         nums.splice(i, 1);
    //     }
    //     else{
    //         i++;
    //     }
    // }

    // return nums.length;
};