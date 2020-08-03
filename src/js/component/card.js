import React from "react";
import PropTypes from "prop-types";

export const Card = ({ name }) => {
	return (
		<div className="card mx-auto my-4" style={{ width: "18rem" }}>
			<div className="card-body">
				<h5 className="card-title">{name}</h5>
			</div>
		</div>
	);
};

Card.propTypes = {
	name: PropTypes.string.isRequired
};
