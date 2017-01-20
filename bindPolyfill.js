if(!Function.prototypr.bind){
    Function.prototype.bind = function(oThis){
        if(typeof this !== 'function'){
            throw new TypeError(
                "Function.prototype.bind - what is tring to be bound is no callable"
            );
        }

        var aArgs = Array.prototype.slice(aruguments,1),
        fToBind = this,
        fNOP = function(){},
        fBound = function(){
            return fToBind.apply(
                (
                    this instanceof fNOP && oThis ? this : oThis
                ),
                aArgs.concat(
                    Array.prototype.slice.call(arguments)
                )
            );
        }
        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();

        return fBound;
    };
}

//soft bind

if(!Function.prototype.softbind){
    Function.prototype.softbind = function(obj){
        var fn = this;
        var curried = [].prototype.slice(arguments,1);
        var bound = function(){
            return fn.apply(
                (!this || this === (window || global)) ? obj : this,
                curried.concat.apply(curried,arguments)
            );
        };
        bound.prototype = Object.create(fn.prototype);
        return bound;
    };
}