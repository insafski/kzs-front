import React from "react";
import Image from "../elements/image";
import PropTypes from "prop-types";

const Advantages = ({ data }) => {
	console.log("advantages", data);

	return (
		<>
			<div className="container py-12">
				<h4 style={{ display: "block" }}>
					{data.title}
				</h4>
			</div>
			<div className="container flex py-12">
				{
					data.items.map((item, idx) => {
						return (
							<div key={idx}>
								<Image media={{ url: item.logo.url }} />
								<p>{item.title}</p>
								<p>{item.description}</p>
							</div>
						);
					})
				}
			</div>
		</>
	);
};

Advantages.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string,
		items: PropTypes.array,
	}),
};

export default Advantages;
