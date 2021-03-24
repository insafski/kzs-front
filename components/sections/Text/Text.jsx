import React from "react";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";
import cx from "classnames";

import Block from "@/components/containers/Block";

import styles from "./Text.module.scss";

export default function Text({ heading, text }) {
	return (
		<Block heading={heading} className={"text"}>
			<div className={cx("container", styles.markdown)}>
				{
					!!text && (
						<ReactMarkdown allowDangerousHtml>
							{text}
						</ReactMarkdown>
					)
				}
			</div>
		</Block>
	);
}

Text.propTypes = {
	heading: PropTypes.shape({
		title: PropTypes.string,
		subTitle: PropTypes.string,
		subText: PropTypes.string,
	}),
	text: PropTypes.string,
};
