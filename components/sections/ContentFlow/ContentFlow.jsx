import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import cx from "classnames";

import Block from "@/components/containers/Block";
import Heading from "@/components/elements/Heading";
import Picture from "@/components/elements/Picture";

export default function ContentFlow({ items }) {
	return (
		<Block className={"content-flow"}>
			<div className={"container"}>
				{
					items.map(({ heading, picture, content }, idx) => {
						return (
							<div key={idx} className={"content-flow__item mb-14"}>
								<Heading heading={heading} />
								<div
									className={
										cx(
											"content-flow__body flex flex-col md:flex-row",
											{ "md:flex-row": idx % 2 },
											{ "md:flex-row-reverse": !(idx % 2) },
											{ "mb-4": items.length - 1 !== idx },
										)
									}
								>
									<div className={"content-flow__picture md:px-4 flex-1"}>
										<Picture items={picture} />
									</div>
									<div className={"text-justify flex-1"}>
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
		</Block>
	);
}

ContentFlow.propTypes = {
	items: PropTypes.array,
};

ContentFlow.defaultProps = {
	items: [],
};

ContentFlow.displayName = "ContentFlow";
