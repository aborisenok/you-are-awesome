// DO WHATEVER YOU WANT HERE


/*+*/const createEnumerableProperty = () => {
  return {};
};
const createNotEnumerableProperty = (property) => {

Object.defineProperty(Object.prototype, property, {
        enumerable: false,
        get: function() {
            return property;
        },
        set: function(value) {
            property = value;
        }
    });
    return property;

};

/*+*/const createProtoMagicObject = () => {
	function Magic(){

	}
	
	Magic.prototype = Function.prototype;
	return Magic;
};
/*+*/const incrementor = () => {
	if(incrementor.count){
      incrementor.count++;
    }else{
      incrementor.count = 1;
    }
  
    function foo(){
      incrementor.count++;
      return foo;
    }
  
    foo.valueOf = () => incrementor.count;

	return foo;
};
/*+*/const asyncIncrementor = () => {
	if(asyncIncrementor.count){
      asyncIncrementor.count++;
    }else{
      asyncIncrementor.count = 1;
    }
  
    function foo(){
      asyncIncrementor.count++;
      return foo;
    }
  
    foo.valueOf = () => asyncIncrementor.count;

	return foo;
};
/*+*/const createIncrementer = () => {
  foo = {
    value : 0,
    to: 10,
    next : function(){
      foo.value++;
      return foo;
    }
  };
 
  foo[Symbol.iterator] = function() {

  	let current = this.value;
  	let last = this.to;

  	return {
    	next() {
      		if (current <= last) {
        		return {
          			done: false,
          			value: ++current
        		};
      		} else {
        		return {
          			done: true
        		};
      		}
    	}
  	}
  };
  
  return foo;
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
	function delay(time){
    	return new Promise(function(resolve){
        	return setTimeout(function(){ resolve(param);}, time)
    	});
    }
    return delay(1200);
};
const getDeepPropertiesCount = (obj) => {
	var count = 0;
	function deeper(obj){
  		var params = Object.keys(obj);
  		count += params.length;
  		for(var key in obj){
    		var inside = Object.keys(obj[key]);
    		if(inside.length != 0){
      			deeper(obj[key]);
    		}
  		}
	}
	deeper(obj);
	return count;
};
const createSerializedObject = () => {
	return null;
};
const toBuffer = () => {};
const sortByProto = (arr) => {

  function counter(elem){
    var count = 0;
    function foo(elem){
      if(elem){
        count++;
        foo(elem.__proto__)
      } 
    }
    foo(elem);
    return count;  
  }
  
  var sorted = arr.sort(function(a, b){
    var aP = counter(a);
    var bP = counter(b);   
    return bP - aP;
  });
  return sorted;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;

