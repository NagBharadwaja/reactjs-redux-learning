const skillReducer = (state = {
	skill: "UI Development"
}, action) => {
	switch(action.type){
		case "SET_SKILL_FULFILLED":
			state = {
				...state,
				skill: action.payload
			}
			break;
	}
	return state;
};

export default skillReducer;