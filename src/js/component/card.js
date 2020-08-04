import React from "react";
import PropTypes from "prop-types";

export const Card = ({ name, key }) => {
	return (
		<div className="card mx-auto my-4" style={{ width: "18rem" }}>
			<div className="card-body">
				<h5 className="card-title">
					{key}
					{name}
				</h5>
				<p className="text-muted">Click on the task to erase it</p>
			</div>
		</div>
	);
};

Card.propTypes = {
	name: PropTypes.string,
	key: PropTypes.string
};
