
function ajax(params) {
    [ params = {} ] = [ params ];
    var json = params.jsonp ? jsonp(params) : json(params);
    json(params);
}

ajax.prototype.json = (params) => {
    let xhr;
    [params.type = 'GET',params.data] = [params.method.toUpperCase(),this.formatParams(params.data)];
    xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('MIcorosoft.XMLHTTP');

    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4){//请求完成
            let status = xhr.status;
            if(status >= 200 && status < 300){//表示请求响应ok
                let response = '',
                type = xhr.getResponseHeader('content-type');
                if(type.indexOf('xml') !== -1 && xhr.responseXML){
                    response = xhr.responseXML;
                }else if(type == 'application/json'){
                    response = JSON.parse(xhr.reponseText);
                }else{
                    response = xhr.responseText;
                }
                params.success && params.success(response);
            }else{//请求没有完全顺利或者失败
                params.error && params.error(status);
            }
        }
    };

    if(params.type == 'GET'){//get方法
        xhr.open(params.type,params.url + '?' +params.data,true);
        xhr.send(null);
    }else{//post方法
        xhr.open(params.type,params.url,true);
        xhr.setRequestHeader('content-type','application/x-www-form-urlencoded;charset=UTF-8');//设置请求头，post方法都要设置，用来encode url
        xhr.send(params.data);
    }
}

ajax.prototype.formatParams = ( data ) => {
    let arr = [];
    for( let name in data ){
        arr.push(encodeURIComponent(name)) + '=' + encodeURIComponent(data[name]);//encode参数
    }
    return arr.join('&');//拼接参数
}
