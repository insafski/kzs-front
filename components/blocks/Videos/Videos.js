import React from "react";
import PropTypes from "prop-types";

import Block from "../../containers/Block";
import Heading from "../../elements/Heading";
import List from "../../containers/List";

export default function Videos({ videos }) {
	return (
		<div className="articles">
			<Block>
				<div className="container mx-auto">
					<Heading text={"Видео"} subText={"Подзаголовок"} />
				</div>
				<div className="container mx-auto">
					<List items={videos} type={"MediaVideo"} />
				</div>
			</Block>
		</div>
	);
}

Videos.propTypes = {
	videos: PropTypes.array.isRequired,
};

Videos.defaultProps = {
	videos: [],
};

Videos.displlayName = "Videos";
