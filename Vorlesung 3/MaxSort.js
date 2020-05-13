var A = [6,4,1,8,3]
console.log(`checke ${JSON.stringify(A)} with start ${A[0]}`)
var pos = 0;
var maximum = 0;
var len = A.length;
var lenn = A.length-1;
for(var i=0;i<len;i++){
	for(var j=0;j<len-i;j++){
		if(A[j]>maximum){
			maximum = A[j];
			pos = j;
		}
	}
	[A[lenn-i],A[pos]]=[A[pos],A[lenn-i]];
	maximum = 0;
}
console.log(`result ${JSON.stringify(A)}`)
