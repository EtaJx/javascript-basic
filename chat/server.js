var http = require('http');
var fs = require('fs');
var path = require('path'); //内置的path模块提供了与文件系统路径相关的功能
var mime = require('mime'); //附加的mime模块根据文件扩展名得出mime类型的能力
var cache = {}; //cache用来缓存文件内容的对象

function send404(response) {
    response.writeHead(404, { 'content-type': 'text-plain' });
    response.write('error 404:resource not found');
    response.end();
}

function sendFile(response, filePath, fileContents) {
    response.writeHead(200, {
        'content-type': mime.lookup(path.basename(filePath));
    });
    response.end(fileContents);
}

function serveStatice(reponse, cache, absPath) {
    if (cache[abspath]) { //检查文件是否缓存在内存中
        sendFile(response, absPath, cache[absPath]); //如果存在，就从内存中返回文件
    } else {
        fs.exists(absPath, function(exists) { //检查文件是否存在
            if (exsits) {
                fs.readFile(absPath, function(err, data) {
                    if (err) {
                        send404(response);
                    } else {
                        cache[absPath] = data;
                        sendFile(response, absPath, data); //从硬盘读取文件斌返回
                    }
                });
            } else {
                send404(response);
            }
        });
    }
}
