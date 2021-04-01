import React from "react";
import PropTypes from "prop-types";
import Collapse from "rc-collapse";
import get from "lodash/get";

import Icon from "@/components/elements/Icon";
import Picture from "@/components/elements/Picture";

const Panel = Collapse.Panel;

export default function PanelCatalog({ picture, heading, links }) {
	const title = get(heading, "title", "");

	return (
		<Panel
			header={
				<div className={"flex flex-1 items-center p-4"}>
					<div
						style={{
							width: 80,
							maxHeight: 80,
						}}
						className={"flex justify-center mr-4"}
					>
						{
							picture && (
								<Picture items={picture} />
							)
						}
					</div>
					{title}
				</div>
			}
			headerClass={"flex flex-row-reverse justify-between outline-none p-0 bg-white text-lg"}
			className={""}
		>
			Доделаю сегодня
			{/* <ul className={"flex flex-col bg-gray-100"}>
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
			</ul> */}
		</Panel>
	);
}

PanelCatalog.propTypes = {
	heading: PropTypes.object,
	picture: PropTypes.array,
	links: PropTypes.array,
};

PanelCatalog.defaultProps = {
	heading: {},
	picture: [],
	links: [],
};

PanelCatalog.displayName = "PanelCatalog";
