import React from "react";
import { render } from "react-dom"

export const Main = (props) => {
		return(
			<div>
				<div className="row">
					<div className="col-xs-12">
						<h1> The Main page</h1>
					</div>
				</div>
				<div className="row">
					<button className="btn btn-primary"
							onClick = { () => props.changeUsername() }>Change the user name</button>
				</div>
			</div>
		);
};