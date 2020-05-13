class stack {
	max = 0;
	top = -1;
	A = [];
	constructor(max){
		this.max = max;
	}
	isEmpty(){
		return (this.top<0);
	}
	pop(){
		if(this.isEmpty()){
			throw("underflow")
		}else{
			this.top--;
			return this.A[this.top+1];
		}
	}
	push(k){
		if(this.top==this.max-1){
			throw("overflow")
		}else{
			this.top++;
			this.A[this.top]=k;
		}
	}
}
var S = new stack(10);
console.log(`isEmpty: ${S.isEmpty()}`)
var n=0;
S.push(n++);
console.log(`isEmpty: ${S.isEmpty()} (should be false)`)
S.push(n++);
S.push(n++);
S.push(n++);
S.push(n++);
S.push(n++);
S.push(n++);
S.push(n++);
S.push(n++);
S.push(n++);
try{
	S.push(n++);
}catch(e){
	console.log("Successfull catched push")
}
var R = S.pop();
if(R+2==n) console.log("right")

// S.pop()