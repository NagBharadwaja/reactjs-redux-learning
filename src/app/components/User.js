import React from "react";

export const User = (props) => {
		return(
			<div>
				<div className="col-xs-12">
					<h1>The User Page</h1>
				</div>
				<div className="row">
					<p>User name: { props.username }</p>
				</div>
			</div>
		);
}