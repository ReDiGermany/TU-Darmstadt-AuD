function mergeSort(A,p,r){
	if(p<r){
		var q = Math.floor((p+r)/2);
		A = mergeSort(A,p,q);
		A = mergeSort(A,q+1,r);
		A = merge(A,p,q,r);
	}
	return A;
}
function merge(A,p,q,r){
	var n1 = q-p+1;
	var n2 = r-q;
	console.log(`p=${p},q=${q},r=${r},n1=${n1},n2=${n2}`)
	var L = [], R = [];
	for(var i=0;i<n1;i++)
		L[i]=A[p+1];
	for(var j=0;j<n2;j++)
		R[j]=A[q+j+1];
	L[n1]=Number.MAX_VALUE;
	R[n2]=Number.MAX_VALUE;
	// console.log(`L=${JSON.stringify(L)},R=${JSON.stringify(R)}`)
	var i=0, j=0;
	for(var k=p;k<(r+1);k++){
		if(L[i]<=R[j]){
			// console.log(`${A[k]}=${L[i]}`)
			A[k]=L[i];
			i=i+1;
		}else{
			// console.log(`${A[k]}=${L[j]}`)
			A[k]=R[j];
			j=j+1;
		}
	}
	return A;
}
A = [8,3,4,5,6,0,9,2,7,1]
B = [0,1,2,3,4,5,6,7,8,9]
console.log(">",JSON.stringify(A))
A = mergeSort(A,0,A.length-1);
console.log("<",JSON.stringify(A))
console.log("=",JSON.stringify(A)==JSON.stringify(B)?"Korrekt":"Falsch")