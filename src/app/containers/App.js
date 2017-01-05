import React from "react";
import { connect } from "react-redux";

import { User } from "../components/User";
import { Main } from "../components/Main";
import { setSkill } from "../actions/skillActions";

class App extends React.Component{
	render(){
		return (
			<div className="container">
				<Main changeUsername = { () => this.props.setSkill("Story telling") } />
				<User username = { this.props.skill.skill } />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		skill: state.skill,
		math: state.math
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		setSkill: (skill) => {
			dispatch(setSkill(skill));
		}	
	};
};

// connects reactjs with redux. provide components which needs access to the store

export default connect(mapStateToProps, mapDispatchToProps)(App);