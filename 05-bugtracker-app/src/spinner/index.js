import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';

let spinnerActionCreators = {
	increment(){
		let action = { type : 'INCREMENT'};
		return action;
	},
	decrement(){
		let action = { type : 'DECREMENT'};
		return action;
	}
};

class Spinner extends Component{

	onIncrementClick = () => {
		this.props.increment();
	}
	onDecrementClick = () => {
		this.props.decrement();
	}
	render(){
		let { value } = this.props;
		return(
			<div>
				<input type="button" value="DECREMENT" onClick={this.onDecrementClick}/>
				<span> [ {value} ] </span>
				<input type="button" value="INCREMENT" onClick={this.onIncrementClick}/>
			</div>
		)
	}
}

function mapStateToSpinnerProps(storeState){
	let value = storeState.spinnerData;
	return { value : value };
}
function mapDispatchToSpinnerProps(dispatch){
	let spinnerActions = bindActionCreators(spinnerActionCreators, dispatch);
	return spinnerActions;		
}

export default connect(
		mapStateToSpinnerProps,
		mapDispatchToSpinnerProps
	)(Spinner);