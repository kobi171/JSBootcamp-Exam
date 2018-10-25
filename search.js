function find_s(extension,str){

	if (!fs.existsSync(extension)){
	    return [];
	}
	console.log("__dirname:",__dirname);
	var files=fs.readdirSync(__dirname);
	console.log("files:", files);

	for(var i=0;i<files.length;i++){
		var filename=path.join(files[i]);
		console.log(filename);
		var stat = fs.lstatSync(files[i]);
		console.log("bbb");
	    if (stat.isDirectory()){  
	    	find_s(extension,str);  //recurse
	    }
	    else{
		
			var content = fs.readFileSync(filename, "utf8");
		    if ( content.indexOf(str)>-1 ){
		    	results.push( __dirname + filename);
		    }
	    }
    }

    return results;

}

if (process.argv.length>2){
	var extension = process.argv[2]; 
	console.log(extension);
	var str = process.argv[3];
	console.log(str);
	var path = require('path');
	var fs = require('fs');
	var results = [];

	results =find_s(extension,str);
	if (results.length==0){
		console.log("No file was found");
	}
	if (results.length>0){
		for(var i=0;i<results.length;i++){
			if (path.extname(files[i])== '.'+extension){
				console.log(results[i]);
			}
		}
	}
}
else{
	console.log("USAGE: node search [EXT] [TEXT]");
}

  
