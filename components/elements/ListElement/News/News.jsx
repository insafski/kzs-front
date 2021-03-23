import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import get from "lodash/get";

export default function News({ title, publishedAt, picture }) {
	return (
		<div className={"w-4/12 text-center"}>
			<div className={"mb-4"}>
				<Link href="/">
					<a>
						<img src={get(picture, "[0].src", "")} alt="" width={"100"} />
					</a>
				</Link>
			</div>
			<div className={" mb-2"}>
				{publishedAt}
			</div>
			<div className="">
				<Link href="/">
					<a>{title}</a>
				</Link>
			</div>
		</div>
	);
}

News.propTypes = {
	title: PropTypes.strin,
	publishedAt: PropTypes.string,
	picture: PropTypes.array,
};
