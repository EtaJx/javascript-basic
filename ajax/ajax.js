/*
 * 转载自 http://ghmagical.com/article/page/id/AASiankfBJWp
 */


 
 function ajax(params) {
     params = params || {};
     params.data = params.data || {};
     var json = params.jsonp ? jsonp(params) : json(params);
     function json(params){
         params.type = (params.method || 'GET').toUpperCase();
         params.data = formatParams(params.data);
         var xhr = null;
         if(window.XMLHttpRequest){
             xhr = new XMLHttpRequest();
         }else{
             xhr = new ActiveXObject('Micorosoft.XMLHTTP');
         }

         xhr.onreadystatechange = function(){
             if(xhr.readyState == 4){
                 var status = xhr.status;
                 if(status >= 200 && status < 300){
                     var response = '';
                     var type = xhr.getResponseHeader('content-type');
                     if(type.indexOf('xml') !== -1 && xhr.responseXML){
                         response = xhr.responseXML;
                     }else if(type === 'application/json'){
                         response = JSON.parse(xhr.responseText);
                     }else{
                         reponse = xhr.reponseText;
                     }
                     params.success && params.success(response);
                 }else{
                     params.error && params.error(status);
                 }
             }
         };

         if(prams.type == 'GET'){
             xhr.open(params.type,params.url+'?'+params.data,true);
             xhr.send(null);
         } else {
             xhr.open(params.type,params.url,true);
             xhr.setRequestHeader('content-type','application/x-www-form-urlencoded;charset=UTF-8');
             xhr.send(params.data);
         }
     }

     function formatParams(data){
         var arr = [];
         for (var name in data){
             arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
         }
         arr.push('v=' + random());
         return  arr.join('&');
     }
     function random(){
         return Math.floor(Math.random()*10000+500);
     }

 }
