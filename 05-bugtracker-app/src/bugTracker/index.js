import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BugStats from './views/BugStats';
import BugSort from './views/BugSort';
import BugEdit from './views/BugEdit';
import BugList from './views/BugList';

import * as bugActionCreators from './actions';

class BugTracker extends Component{
	componentDidMount(){
		this.props.load();
	}
	render(){
		let { model : bugs, toggle, addNew, removeClosed, load } = this.props;
		return(

			<div>

				{/*BugStats*/}
				<BugStats bugs={bugs} />

				{/*BugSort*/}
				<BugSort />
				
				{/*BugEdit*/}
				<BugEdit addNew={addNew} />

				{/*BugList*/}
				<BugList {...{bugs, toggle, removeClosed}} />
			</div>
		)
	}
}

export default connect(
	state => ({model : state.bugsData}),
	dispatch => {
		let bugActions = bindActionCreators(bugActionCreators, dispatch);
		return bugActions;
	}
)(BugTracker);



