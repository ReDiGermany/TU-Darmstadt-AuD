var A = [5,2,4,6,1,3]
var checks = 0;
var checkssec = 0;
var swaps = 0;
console.log("Sorting "+JSON.stringify(A))
for(var i=0;i<A.length-2;i++){
	checks++;
	for(j=A.length-1;j>i-1;j--){
		checkssec++;
		if(A[j]<A[j-1]){
			swaps++;
			console.log(`swapping ${A[j]} with ${A[j-1]} on check ${checks}/${checkssec}`);
			[A[j],A[j-1]]=[A[j-1],A[j]]
		}
	}
}
console.log(`Sorted ${JSON.stringify(A)} with ${checks} for#1 ${checkssec} for#2 and ${swaps} swaps`)


// var A = [5,2,4,6,1,3]
// for(var i=0;i<A.length-2;i++)
// 	for(j=A.length-1;j>i-1;j--)
// 		if(A[j]<A[j-1])
// 			[A[j],A[j-1]]=[A[j-1],A[j]]
