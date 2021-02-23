import React from "react";
import PropTypes from "prop-types";
import Image from "../elements/image";

const Developers = ({ data }) => {
	console.log("developers", data);

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
							</div>
						);
					})
				}
			</div>
		</>
	);
};

Developers.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string,
		items: PropTypes.array,
	}),
};

export default Developers;
