import React from "react";
import PropTypes from "prop-types";
import Collapse from "rc-collapse";
import get from "lodash/get";
import Link from "next/link";

import Icon from "@/components/elements/Icon";
import Picture from "@/components/elements/Picture";

export default function PanelCatalog({ picture, heading, links, ...props }) {
	const Panel = Collapse.Panel;

	const title = get(heading, "title", "");

	return (
		<Panel
			{...props}
			header={
				<div className={"flex flex-1 items-center py-4"}>
					<div
						style={{
							width: 80,
							maxHeight: 80,
							minWidth: 80,
						}}
						className={"flex justify-center mr-4"}
					>
						{
							picture && (
								<Picture items={picture} className={"object-cover"} />
							)
						}
					</div>
					{title}
				</div>
			}
			headerClass={"flex flex-row-reverse justify-between outline-none p-0 bg-white text-lg"}
			className={""}
		>
			<ul className={"flex flex-col bg-gray-100"}>
				{
					links.map(({ heading, categorySlug, slug }, idx) => {
						const title = get(heading, "title", "");

						return (
							<li
								key={idx}
								className={"border-gray-200 border-t"}
							>
								<Link href={`/catalog/${categorySlug}/${slug}`}>
									<a
										className={"flex flex-row items-center justify-between px-8 py-4 "}
									>
										{title}
										<Icon type={"angle-right"} />
									</a>
								</Link>
							</li>
						);
					})
				}
			</ul>
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
