/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	let map = new Map();
	const len = nums.length;
	for (let i = 0; i < len; i++) {
		let other = target - nums[i];
		if (map.has(other)) return [map.get(other), i];
		map.set(nums[i], i);
	}
};
