import React from "react";
// import Image from "../elements/image";
import PropTypes from "prop-types";

const Advantages = ({ data }) => {
//	console.log("advantages", data);

	return (
		<>
			<div className="container py-12 text-center">
				<h4 style={{ fontSize: 24 }}>
					{data.title}
				</h4>
			</div>
			<div className="container flex">
				{
					data.items.map((item, idx) => {
						return (
							<div className={"flex-col p-2 w-6/12 text-center"} key={idx}>
								{/* <Image media={{ url: item.logo.url }} /> */}
								<p style={{ color: "#6466F1",
									fontSize: 24 }}>{item.title}</p>
								<p style={{ paddingTop: 16 }}>{item.description}</p>
							</div>
						);
					})
				}
			</div>
			<div className="container py-12 text-center">
				<h4 style={{ fontSize: 24 }}>
					{data.description}
				</h4>
			</div>
		</>
	);
};

Advantages.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string,
		items: PropTypes.array,
		description: PropTypes.string,
	}),
};

export default Advantages;
