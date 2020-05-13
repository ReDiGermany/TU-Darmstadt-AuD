var argv = process.argv;
var filename = process.argv[1].split("\\");
filename = filename[filename.length-1]
var n = 0;
var run = true;
if(argv.length==3) n = parseInt(argv[2])
else{ console.log(`Usage: node ${filename} {num}`); run = false; }
if((n.toString()=="NaN" || n<2) && run){ console.log(`Usage: node ${filename} {num} ({num} must be a number > 2)`); run = false; }
if(run){
	var o = 0;
	for(var i=0;i<=n;i++){
		o += i;
	}
	console.log(o)
}