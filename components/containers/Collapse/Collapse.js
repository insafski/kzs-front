import React from "react";
import PropTypes from "prop-types";
import RCCollapse from "rc-collapse";
import cx from "classnames";

import "rc-collapse/assets/index.css";

const Panel = RCCollapse.Panel;

export default function Collapse({ accordion, items }) {
	return (
		<RCCollapse
			accordion={accordion}
			className={"border-0"}
		>
			{
				items.map(({ header, links }, idx) => {
					return (
						<Panel
							key={idx}
							header={header}
							headerClass={"p-0 bg-white text-lg"}
							className={"m-0"}
						>
							<ul className={"flex flex-col"}>
								{
									links.map(({ title, link }, idx) => {
										return (
											<li
												key={idx}
												className={cx("px-12 py-4", { "border-b border-gray-200": items.length !== idx })}
											>
												<a
													href={link}
												>
													{title}
												</a>
											</li>
										);
									})
								}
							</ul>
						</Panel>
					);
				})
			}
		</RCCollapse>
	);
}

Collapse.propTypes = {
	accordion: PropTypes.bool,
	items: PropTypes.array,
};
