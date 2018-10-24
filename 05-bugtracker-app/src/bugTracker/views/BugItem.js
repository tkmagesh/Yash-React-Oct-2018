import React, { Component } from 'react';

class BugItem extends Component{
	onBugNameClick = () => {
		let { bug } = this.props;
		this.props.toggle(bug);
		//console.log(bug);
	}
	render(){
		let { bug } = this.props;
		let bugStyle = 'bugname ' + (bug.isClosed ? 'closed' : '');
		return(
			<li>
				<span className={bugStyle} onClick={this.onBugNameClick}>{JSON.stringify(bug)}</span>
				<div className="datetime">[Created At]</div>
			</li>
		)
	}
}

export default BugItem;