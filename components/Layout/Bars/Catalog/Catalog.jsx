import React, { cloneElement } from "react";
import PropTypes from "prop-types";
import { useToggle } from "ahooks";
import { isMobile } from "react-device-detect";
import RCCollapse from "rc-collapse";

import motion from "@/utils/motion.js";
import Drawer from "@/components/containers/Drawer";
import Icon from "@/components/elements/Icon";

const Panel = RCCollapse.Panel;

// TODO: NEED TO FIX THIS BAR !!!

function Collapse({ accordion, items }) {
	return (
		<RCCollapse
			accordion={accordion}
			className={"border-0"}
			openMotion={motion}
			expandIcon={({ isActive }) => <Icon type={isActive ? "angle-up" : "angle-down"} className={"mr-4"} />}
		>
			{
				items.map(({ header, image, links = [] }, idx) => {
					return (
						<Panel
							key={idx}
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
	items: PropTypes.arrayOf(PropTypes.shape({
		header: PropTypes.object,
		image: PropTypes.string,
		links: PropTypes.array,
	})),
};

Collapse.propTypes = {
	accordion: false,
	items: [],
};

Collapse.displayName = "Collapse";

export default function Catalog({ trigger }) {
	const [state, { toggle }] = useToggle();

	const links = [
		{
			title: "Движки",
			link: "/",
		},
		{
			title: "Сальники",
			link: "/",
		},
		{
			title: "Колёса",
			link: "/",
		},
		{
			title: "Свечи",
			link: "/",
		},
		{
			title: "Карданы",
			link: "/",
		},
	];

	const items = [
		{
			header: "Weichai-Steyr",
			image: "https://kzs.s3-eu-north-1.amazonaws.com/images/weichai-group-vector-logo.svg",
			links,
		},
		{
			header: "Weichai-Deutz",
			image: "https://kzs.s3-eu-north-1.amazonaws.com/images/Deutz_Logo.svg",
			links,
		},
		{
			header: "Dongfeng",
			image: "https://kzs.s3-eu-north-1.amazonaws.com/images/dongfeng-seeklogo.com.svg",
			links,
		},
		{
			header: "SDEC",
			image: "https://kzs.s3-eu-north-1.amazonaws.com/images/sdec.svg",
			links,
		},
		{
			header: "YTO",
			image: "https://kzs.s3-eu-north-1.amazonaws.com/images/yto.jpeg",
			links,
		},
		{
			header: "Yuchai",
			image: "https://kzs.s3-eu-north-1.amazonaws.com/images/yuchai_logo.png",
			links,
		},
		{
			header: "Cummins",
			image: "https://kzs.s3-eu-north-1.amazonaws.com/images/cummins-vector-logo.svg",
			links,
		},
	];

	return (
		<div className={"catalog-bar"}>
			{
				cloneElement(
					trigger,
					{
						handlers: {
							onClick: toggle,
						},
					},
				)
			}
			<Drawer
				open={state}
				placement={isMobile ? "top" : "left"}
				onChange={toggle}
				onClose={() => toggle(false)}
				handler={false}
				level={null}
				width={isMobile ? "100vw" : "30vw"}
				height={isMobile ? "90vh" : "100vh"}
			>
				<>
					<div className={"catalog-bar__header px-4 py-4 flex justify-between bg-gray-100"}>
						<h4><Icon type={"box"} className={"mr-4"} />Каталог</h4>
						<button onClick={() => toggle(false)}>
							Закрыть
						</button>
					</div>
					<div className={"catalog-bar__nav"}>
						<Collapse
							accordion={true}
							items={items}
						/>
					</div>
				</>
			</Drawer>
		</div>
	);
}
