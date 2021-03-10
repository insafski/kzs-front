import React, { cloneElement } from "react";
import { useToggle } from "ahooks";
import { isMobile } from "react-device-detect";

import Drawer from "../../../containers/Drawer";
import Collapse from "../../../containers/Collapse";

export default function Catalog({ trigger }) {
	const [state, { toggle }] = useToggle();

	const items = [
		{
			header: "Weichai-Steyr",
			links: [
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
			],
		},
		{
			header: "Weichai-Deutz",
			links: [
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
			],
		},
		{
			header: "Weichai-Huafengdongli",
			links: [
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
			],
		},
		{
			header: "Cummins",
			links: [
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
			],
		},
	];

	return (
		<div className={"catalog-bar"}>
			{
				cloneElement(
					trigger,
					{
						onClick: toggle,
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
						<h4>Каталог</h4>
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
