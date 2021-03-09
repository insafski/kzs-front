import React from "react";
import { useToggle } from "ahooks";

import Drawer from "../../../containers/Drawer";
import Collapse from "../../../containers/Collapse";

export default function Catalog() {
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
			<button
				className={"w-full inline-flex justify-center py-2 border border-transparent shadow-sm text-md font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 uppercase"}
				onClick={toggle}
			>
				Каталог
			</button>
			<Drawer
				open={state}
				placement={"top"}
				onChange={toggle}
				onClose={() => toggle(false)}
				handler={false}
				level={null}
				width={"100vw"}
				height={"90vh"}
			>
				<div>
					<div className={"catsalog-bar__header px-4 py-4 flex justify-end bg-gray-100"}>
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
				</div>
			</Drawer>
		</div>
	);
}
