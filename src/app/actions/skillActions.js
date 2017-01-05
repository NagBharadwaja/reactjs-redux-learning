export function setSkill(skill){
/*	return {
		type: "SET_SKILL",
		payload: "STORY TELLING"
	}
*/
	/*return dispatch => {
		setTimeout(() => {
			dispatch({
				type: "SET_SKILL",
				payload: skill
			})
		}, 2000);
	}*/

	return{
		type: "SET_SKILL",
		payload: new Promise((resolve, reject) => {
			setTimeout(()=>{
				resolve(skill);
			}, 2000);
		})
	}
}