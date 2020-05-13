var num = parseInt(process.argv[2]);
if(num.toString()!="NaN"){
	for (var a=[],i=0;i<num;++i) a[i]=i;
	// http://stackoverflow.com/questions/962802#962890
	function shuffle(array) {
	  var tmp, current, top = array.length;
	  if(top) while(--top) {
	    current = Math.floor(Math.random() * (top + 1));
	    tmp = array[current];
	    array[current] = array[top];
	    array[top] = tmp;
	  }
	  return array;
	}
	console.log(shuffle(a))
	console.log(JSON.stringify(shuffle(a)))
}else{
	var node = process.argv[1].split("\\");
	node = node[node.length-1];
	console.log(`Usage: node ${node} {num}`)
}