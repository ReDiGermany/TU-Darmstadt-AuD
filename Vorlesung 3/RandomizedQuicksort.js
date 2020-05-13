function randomizedQuicksort(A,p,r){
	if(p<r){
		var q = randomizedPartition(A,p,r);
		A = randomizedQuicksort(A,p,q-1);
		A = randomizedQuicksort(A,q+1,r);
	}
	return A;
}
function randomizedPartition(A,p,r){
	var i = Math.round(Math.random()*(r-p)+p);
	[A[r],A[i]]=[A[i],A[r]];
	return partition(A,p,r);
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
A = [8,3,4,5,6,0,9,2,7,1]
B = [0,1,2,3,4,5,6,7,8,9]
console.log(">",JSON.stringify(A))
A = randomizedQuicksort(A,0,A.length-1);
console.log("<",JSON.stringify(A))
console.log("=",JSON.stringify(A)==JSON.stringify(B)?"Korrekt":"Falsch")