import React from "react";
import PropTypes from "prop-types";
import RCCollapse from "rc-collapse";

import motion from "../../../utils/motion.js";

import Icon from "@/components/elements/Icon";

const Panel = RCCollapse.Panel;

export default function Collapse({ accordion, items }) {
	return (
		<RCCollapse
			accordion={accordion}
			className={"border-0"}
			openMotion={motion}
			expandIcon={({ isActive }) => <Icon type={isActive ? "angle-up" : "angle-down"} className={"mr-4"} />}
		>
			{
				items.map(({ header, image, links }, idx) => {
					return (
						<Panel
							key={idx}
							header={
								<div className={"flex flex-1 items-center p-4"}>
									<div style={{ width: 80 }} className={"flex justify-center mr-4"}>
										{
											image && (
												<img
													src={image}
													style={{
														height: 40,
														maxWidth: "100%",
													}}
												/>
											)
										}
									</div>
									{header}
								</div>
							}
							// showArrow={false}
							headerClass={"flex flex-row-reverse justify-between outline-none p-0 bg-white text-lg"}
							className={""}
						>
							<ul className={"flex flex-col bg-gray-100"}>
								{
									links.map(({ title, link }, idx) => {
										return (
											<li
												key={idx}
												className={"px-8 py-4 border-gray-200 border-t"}
											>
												<a
													href={link}
													className={"flex flex-row items-center justify-between"}
												>
													{title}
													<Icon type={"angle-right"} />
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

Collapse.propTypes = {
	accordion: false,
	items: [],
};

Collapse.displayName = "Collapse";
