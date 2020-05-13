function mergeSort(A){
	if(A.length<=1) return A; 
	var q = Math.floor(A.length/2);
	var left = mergeSort(A.slice(0,q));
	var right = mergeSort(A.slice(q));
	A = merge(left,right);
	return A;
}
function merge(left,right){
	var result = [], lIndex=0, rIndex=0;
	while (lIndex < left.length && rIndex < right.length) {
		if (left[lIndex] < right[rIndex]) {
			result.push(left[lIndex]);
			lIndex++;
		} else {
			result.push(right[rIndex]);
			rIndex++;
		}
	}
	return result
          .concat(left.slice(lIndex))
          .concat(right.slice(rIndex));
}
var A = [6,4,1,8,3]
console.log("A",A)
var B = mergeSort(A)
console.log("B",B)
// const array_chunks = (array, chunk_size) => Array(Math.ceil(array.length / chunk_size)).fill().map((_, index) => index * chunk_size).map(begin => array.slice(begin, begin + chunk_size));