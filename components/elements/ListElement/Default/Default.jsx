import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import Image from "../../Image";

export default function Default({ title, url, image, date }) {
	return (
		<div className={"list-element"}>
			<Link href={url}>
				<Image src={image.src} alt={image.alt || title} />
			</Link>
			{
				date && (
					<span className={"list-element__date"}>
						{/* TODO: Need to use moment format */}
						{date}
					</span>
				)
			}
			<Link href={url}>
				<span className={"list-element__title"}>
					{title}
				</span>
			</Link>
		</div>
	);
}

Default.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	image: PropTypes.object.isRequired,
	date: PropTypes.string,
};

Default.defaultProps = {
	title: "",
	url: "",
	image: {
		src: "",
	},
	date: "",
};

Default.displayName = "Default";
