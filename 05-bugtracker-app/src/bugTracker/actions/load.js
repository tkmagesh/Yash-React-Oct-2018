import bugApi from '../services/bugApi';

export function load(){
  return async function(dispatch){
      console.log(arguments);
      /*bugApi
        .getAll()
    		.then(function(bugs){       
    			let action = { type : 'LOAD', payload : bugs};
          dispatch(action);
    		});*/

      let bugs = await bugApi.getAll();
  	  let action = { type : 'LOAD', payload : bugs};
      dispatch(action);
  };
}