function insertionSort(A){
	for(var j=1;j<A.length;j++){
		var key = A[j];
		var i = j-1;
		while(i>=0 && A[i]>key){
			A[i+1]=A[i];
			i--;
		}
		A[i+1]=key;
	}
	return A;
}
var A = [59,22,27,8,42,18,29,34,1,44,15,17,16,7,36,11,53,9,26,12,24,21,4,41,51,37,52,49,48,25,23,38,47,30,14,55,3,54,19,33,58,35,32,39,46,2,56,20,5,50,45,57,40,28,0,31,10,6,13,43]
// A = [8,3,4,5,6,0,9,2,7,1]
console.log(">",JSON.stringify(A))
A = insertionSort(A);
console.log("<",JSON.stringify(A))
