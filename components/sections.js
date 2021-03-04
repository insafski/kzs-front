import React from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import Hero from "@/components/sections/hero";
import LargeVideo from "@/components/sections/large-video";
import FeatureColumnsGroup from "@/components/sections/feature-columns-group";
import FeatureRowsGroup from "@/components/sections/feature-rows-group";
import BottomActions from "@/components/sections/bottom-actions";
import TestimonialsGroup from "@/components/sections/testimonials-group";
import RichText from "./sections/rich-text";
import Pricing from "./sections/pricing";
import Advantages from "./sections/advantages";
import Developers from "./sections/developers";
import about from "./sections/About";

// import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

// Map Strapi sections to section components
const sectionComponents = {
	"hero": Hero,
	"about": about,
	"large-video": LargeVideo,
	"feature-columns-group": FeatureColumnsGroup,
	"feature-rows-group": FeatureRowsGroup,
	"bottom-actions": BottomActions,
	"testimonials-group": TestimonialsGroup,
	"rich-text": RichText,
	"pricing": Pricing,
	"advantages": Advantages,
	"developers": Developers,
};

// Display a section individually
const Section = ({ sectionData }) => {
	// Prepare the component
	// eslint-disable-next-line no-underscore-dangle
	const SectionComponent = sectionComponents[sectionData.component];

	if (!SectionComponent) {
		return null;
	}

	// Display the section
	return <SectionComponent data={sectionData} />;
};

Section.propTypes = {
	sectionData: PropTypes.object,
};

const PreviewModeBanner = () => {
	const router = useRouter();
	// const exitURL = `/api/exit-preview?redirect=${encodeURIComponent(
	// 	router.asPath,
	// )}`;

	return (
		<div className="py-4 bg-red-600 text-red-100 font-semibold uppercase tracking-wide">
			<div className="container">
				Preview mode is on.{" "}
				<a
					className="underline"
					href={`/api/exit-preview?redirect=${router.asPath}`}
				>
					Turn off
				</a>
			</div>
		</div>
	);
};

// Display the list of sections
const Sections = ({ sections, preview }) => {
	return (
		<div className="flex flex-col">
			{/* Show a banner if preview mode is on */}
			{preview && <PreviewModeBanner />}
			{/* Show the actual sections */}
			{/* <Parallax
              pages={3}
              scrolling={false}
              horizontal
              ref={(ref) => (this.parallax = ref)}
          > */}
			{sections.map(section => (
				// <ParallaxLayer offset={0} speed={0.5}>
				// <span onClick={() => this.parallax.scrollTo(1)}>
				<Section
					sectionData={section}
					// eslint-disable-next-line no-underscore-dangle
					key={`${section.component}${section.id}`}
				/>
				// </span>
				// </ParallaxLayer>
			))}
			{/* </Parallax> */}
		</div>
	);
};

Sections.propTypes = {
	sections: PropTypes.array,
	preview: PropTypes.bool,
};

export default Sections;
