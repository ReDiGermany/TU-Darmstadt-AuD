function quicksort(A,p,r){
	if(p<r){
		q = partition(A,p,r);
		A = quicksort(A,p,q-1);
		A = quicksort(A,q+1,r);
	}
	return A;
}
function partition(A,p,r){
	var x = A[r];
	var i = p-1;
	for(var j=p;j<r;j++){
		if(A[j]<=x){
			i++;
			[A[i],A[j]]=[A[j],A[i]];
		}
	}
	[A[i+1],A[r]]=[A[r],A[i+1]];
	return i+1;
}
// var A = [6,4,1,8,3]
var A = [59,22,27,8,42,18,29,34,1,44,15,17,16,7,36,11,53,9,26,12,24,21,4,41,51,37,52,49,48,25,23,38,47,30,14,55,3,54,19,33,58,35,32,39,46,2,56,20,5,50,45,57,40,28,0,31,10,6,13,43]
// A = [8,3,4,5,6,0,9,2,7,1]
console.log(">",JSON.stringify(A))
A = quicksort(A,0,A.length-1);
console.log("<",JSON.stringify(A))
