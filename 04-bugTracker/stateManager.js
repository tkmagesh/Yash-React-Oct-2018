let SM = (function(){

	let _currentState = undefined,
		_reducer = undefined,
		__init_action = '@@INIT_ACTION',
		_listenerFns = [];

	function subscribe(listenerFn){
		_listenerFns.push(listenerFn);
	}

	function triggerChange(){
		_listenerFns.forEach(listenerFn => listenerFn());
	}

	function getState(){
		return _currentState;
	}

	function dispatch(action){
		let newState = _reducer(_currentState, action);
		if (newState === _currentState) return;
		_currentState = newState;
		triggerChange();
	}

	function createStore(reducer){
		_reducer = reducer;
		_currentState = reducer(_currentState, __init_action);
		let store = { getState, subscribe, dispatch };
		return store;
	}

	function bindActionCreators(actionCreators, dispatch){
		let result = {};
		for(let key in actionCreators){
			result[key] = function(){
				let action = actionCreators[key].apply(undefined, arguments);
				dispatch(action);
			}
		}
		return result;
	}

	return {
		createStore,
		bindActionCreators
	};
})();