var A = [6,4,1,8,3]
console.log(`checke ${JSON.stringify(A)} with start ${A[0]}`)
var pos = 0;
var minimum = A[0];

for(var i=0;i<A.length;i++){
	for(var j=i;j<A.length;j++){
		if(A[j]<minimum){
			minimum = A[j];
			pos = j;
		}
	}
	[A[pos],A[i]]=[A[i],A[pos]];
	minimum = A[i+1];
}
console.log(`result ${JSON.stringify(A)}`)
