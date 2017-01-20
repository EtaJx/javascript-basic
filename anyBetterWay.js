fs.readdir(this.filePath,(err,files) => {
    if (err) {
        return;
    }

    let file:string;
    for (file of files){

        if (file.endsWith('.json')){
            fs.readFile(this.filePath+'/'+file,{encoding:'utf-8'},(file,err,text) => {
                if (err) {
                    return;
                }
                file=file.slice(0,-5);
                text=JSON.parse(text);
                this.data.set(file,text);
            }.bind(this,file));
        }

    }
}.bind(this));
