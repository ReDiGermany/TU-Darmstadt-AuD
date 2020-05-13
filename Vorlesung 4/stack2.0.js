class stack {
	max = 1;
	top = -1;
	memsize = 1;
	A = [];
	constructor(){
	}
	isEmpty(){
		return (this.top<0);
	}
	pop(){
		if(this.isEmpty()){
			throw("underflow")
		}else{
			this.top--;
			if(4*(this.top+1)==this.memsize){
				this.memsize /= 2;
				this.resize(this.A,this.memsize);
			}
			return this.A[this.top+1];
		}
	}
	push(k){
		this.top++;
		this.A[this.top]=k;
		if(this.top+1>=this.memsize){
			this.memsize *= 2;
			this.resize(this.A,this.memsize);
		}
	}
	resize(A,memsize){
		console.log(`setting up a new Stack with ${memsize} elements`)
		// nothing todo here, just for languages with fixed array sizes
	}
}
var S = new stack();
console.log(`isEmpty: ${S.isEmpty()}`)
var max = 16
for(var i=0;i<max;i++) S.push(i);
console.log(S)
for(var i=0;i<max;i++) S.pop();
console.log(S)
for(var i=0;i<max;i++) if(i%2==0)S.push(i*i);
console.log(S)
