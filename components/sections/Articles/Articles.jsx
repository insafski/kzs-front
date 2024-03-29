import React from "react";
import PropTypes from "prop-types";

import Block from "@/components/containers/Block";
import List from "@/components/containers/List";

export default function Articles({ heading, items }) {
	return (
		<Block heading={heading}>
			<div className={"container px-4"}>
				<List items={items} type={"article"} />
			</div>
		</Block>
	);
}

Articles.propTypes = {
	heading: PropTypes.shape({
		title: PropTypes.string,
		subTitle: PropTypes.string,
		subText: PropTypes.string,
	}),
	items: PropTypes.array,
};
