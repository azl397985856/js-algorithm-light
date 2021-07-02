/**
If u'r not familar with heap, read https://github.com/azl397985856/leetcode/blob/master/91/binary-search.md first
**/


function bisect_left(nums, x) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] >= x) right = mid - 1;
    if (nums[mid] < x) left = mid + 1;
  }

  return left;
}

function bisect_right(nums, x) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] > x) right = mid - 1;
    if (nums[mid] <= x) left = mid + 1;
  }

  return left;
}

// test:

bisect_left([1,2,5], 4) // 2
bisect_right([1,2,5], 4) // 2
bisect_left([1,2,5], 2) // 1
bisect_right([1,2,5], 2) // 2
