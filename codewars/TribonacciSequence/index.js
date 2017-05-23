function tribonacci(signature,n){
    //your code here
    let count = 0;
    let sum = 0;
    let len = 0;
    let newSignature = [].concat(signature);
    if(!signature instanceof Array){
        return false;
    }
    for(let i = 0, len = n-signature.length; i<len; i++){
        if(i <= len){
            for(let val of signature){
                sum += val;
            }
            signature.shift();
            signature.push(sum);
            newSignature.push(sum);
            sum = 0;
        }
    }
    newSignature.length = n;
    return newSignature;
}
