import React from "react";
import PropTypes from "prop-types";

import Block from "../../containers/Block";
import Heading from "../../elements/Heading";
import List from "../../containers/List";

export default function Articles({ articles }) {
	return (
		<div className="articles">
			<Block>
				<div className="container mx-auto">
					<Heading text={"Статьи"} subText={"Подзаголовок"} />
				</div>
				<div className="container mx-auto">
					<List items={articles} />
				</div>
			</Block>
		</div>
	);
}

Articles.propTypes = {
	articles: PropTypes.array.isRequired,
};

Articles.defaultProps = {
	articles: [],
};

Articles.displlayName = "Articles";
