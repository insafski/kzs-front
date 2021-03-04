import React from "react";
import PropTypes from "prop-types";

// import "./AboutUs.css";

const About = ({ data }) => {
	const { picture = "", title = "", subTitle = "", description = "" } = data;

	return (
		<section className="container flex flex-col sm:flex-row sm:justify-center sm:items-center mt-custom15 sm:mt-16 lg:mt-32 pr-custom5.5 sm:pr-0">
			<div className="relative w-full h-auto sm:w-1/2 sm:mr-8 lg:mr-custom13.5">
				<img className="relative z-10 w-full h-full rounded-r-custom" src={picture} alt="" />
				<div className="absolute z-0 -right-2 lg:-right-4 -bottom-2 lg:-bottom-4 left-0 sm:-left-7 top-custom1/5 rounded-custom sm:rounded-r-custom bg-gradient-to-t from-green-custom2 to-green-custom1"></div>
			</div>
			<div className="text-black-custom2 pl-3.5 -mr-2 sm:mr-0 sm:pl-0 sm:pr-3.5 sm:ml-6 lg:ml-11 sm:w-1/2">
				<div className="text-left lg:max-w-md">
					<h3 className="relative mt-custom7.5 sm:mt-0 mb-8 lg:mb-11 font-semibold text-2xl text-black-2">
						{title}
						<div className="absolute left-0 -bottom-2.5 w-20 h-1 rounded-sm bg-green-custom1"></div>
					</h3>
					<strong className="font-black">{subTitle}</strong>
					<p className="text-sm mt-5 sm:mt-4">{description}</p>
				</div>
			</div>
		</section>
	);
};

About.propTypes = {
	data: PropTypes.object,
};

export default About;
