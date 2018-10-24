(function(){
	function addSync(x,y){
		console.log(`	[@Service] processing ${x} and ${y}`);
		var result = x + y;
		console.log(`	[@Service] returning result`);
		return result;
	}

	function addSyncClient(x,y){
		console.log(`[@Client] triggering addSync`);
		var result = addSync(x,y);
		console.log(`[@Client] result = ${result}`);
	}

	window['addSyncClient'] = addSyncClient;

	function addAsync(x,y,callback){
		console.log(`	[@Service] processing ${x} and ${y}`);
		setTimeout(function(){
			var result = x + y;
			console.log(`	[@Service] returning result`);
			callback(result);
		}, 4000);
	}

	function addAsyncClient(x,y){
		console.log(`[@Client] triggering addAsync`);
		addAsync(x,y, function(result){
			console.log(`[@Client] result = ${result}`);
		});
	}

	window['addAsyncClient'] = addAsyncClient;

	function addAsyncPromise(x,y){
		console.log(`	[@Service] processing ${x} and ${y}`);

		var promise = new Promise(function(resolveFn, rejectFn){

			setTimeout(function(){
				var result = x + y;
				console.log(`	[@Service] returning result`);
				resolveFn(result);
			}, 4000);

		});

		return promise;
	}

	//window['addAsyncPromise'] = addAsyncPromise;

	/*function addAsyncPromiseClient(x,y){
		console.log(`[@Client] triggering addAsyncPromise`);
		
		addAsyncPromise(x,y)
			.then(function(result){
				console.log(`[@Client] result = ${result}`);
			});
	}*/

	async function addAsyncPromiseClient(x,y){
		console.log(`[@Client] triggering addAsyncPromise`);		
		var result = await addAsyncPromise(x,y);
		console.log(`[@Client] result = ${result}`);
	}

	window['addAsyncPromiseClient'] = addAsyncPromiseClient;

})();

/*
Promise Client Code

var p = addAsyncPromise(100,200);
//then, catch

//Followup operation is asynchronous
var p2 = p.then(function(result){
	console.log(`[@Client] result = ${result}`);
	
	return new Promise(function(resolveFn, rejectFn){
		setTimeout(function(){
			var doubleResult = result * 2;
			resolveFn(doubleResult);
        }, 5000);
    }
});

//Folloup operation is synchronous - 1
var p2 = p.then(function(result){
	console.log(`[@Client] result = ${result}`);
	
	return new Promise(function(resolveFn, rejectFn){
        var doubleResult = result * 2;
        resolveFn(doubleResult);
    });
});

//Followup operation is synchronous - 2
var p2 = p.then(function(result){
	console.log(`[@Client] result = ${result}`);
	var doubleResult = result * 2;
	return Promise.resolve(doubleResult);
});

//Followup operation is synchronous - 3
var p2 = p.then(function(result){
	console.log(`[@Client] result = ${result}`);
	var doubleResult = result * 2;
	return doubleResult;
});

*/