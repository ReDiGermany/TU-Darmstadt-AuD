var argv = process.argv;
var filename = process.argv[1].split("\\");
filename = filename[filename.length-1]
var n = 0;
var run = true;
if(argv.length==3) n = parseInt(argv[2])
else{ console.log(`Usage: node ${filename} {num}`); run = false; }
if((n.toString()=="NaN" || n<2) && run){ console.log(`Usage: node ${filename} {num} ({num} must be a number > 2)`); run = false; }
if(run){
	arr = []
	console.log(`Calculating Prim numbers up to ${n}`)
	for(var i=0;i<n;i++){
		arr.push(1)
	}
	for(var i=2;i<arr.length;i++){
		if(arr[i]){
			for(var j=i+1;j<arr.length;j++){
				if(j % i == 0){
					arr[j] = 0;
					break;
				}
			}
		}
	}
	for(var i=2;i<arr.length;i++){
		if(arr[i]){
			console.log("Nummer "+i+" ist prim")
		}
	}
}
[{"ip":"192.168.178.74","name":"Master"},{"ip":"192.168.178.206","name":"Mirror"},{"ip":"192.168.178.254","name":"Kitchen"}]