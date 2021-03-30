import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import cx from "classnames";

import Heading from "@/components/elements/Heading";
import Picture from "@/components/elements/Picture";

export default function ContentFlow({ items }) {
	return (
		<div className={"container"}>
			<div className={"content-flow"}>
				{
					items.map(({ heading, picture, content }, idx) => {
						return (
							<div key={idx} className={"content-flow__item"}>
								<Heading heading={heading} />
								<div
									className={
										cx(
											"content-flow__body flex flex-column",
											{ "md:flex-row": idx % 2 },
											{ "md:flex-row-reverse": !(idx % 2) },
										)
									}
								>
									<div className={"content-flow__picture"}>
										<Picture items={picture} />
									</div>
									<div className={"content-flow__content"}>
										<ReactMarkdown>
											{content}
										</ReactMarkdown>
									</div>
								</div>
							</div>
						);
					})
				}
			</div>
		</div>
	);
}

ContentFlow.propTypes = {
	items: PropTypes.array,
};

ContentFlow.defaultProps = {
	items: [],
};

ContentFlow.displayName = "ContentFlow";
