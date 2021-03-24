import React from "react";
import PropTypes from "prop-types";

import Block from "@/components/containers/Block";
import List from "@/components/containers/List";

export default function News({ heading, items, news }) {
	return (
		<Block className={"news"} heading={heading}>
			<div className={"container px-4"}>
				<List items={news || items} type={"news"} className={"flex -mx-2 flex-wrap md:flex-nowrap"} />
			</div>
		</Block>
	);
}

News.propTypes = {
	heading: PropTypes.shape({
		title: PropTypes.string,
		subTitle: PropTypes.string,
		subText: PropTypes.string,
	}),
	items: PropTypes.array,
	news: PropTypes.array,
};
