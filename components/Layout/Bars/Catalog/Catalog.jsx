import React, { cloneElement } from "react";
import { useToggle } from "ahooks";
import { isMobile } from "react-device-detect";

import Drawer from "@/components/containers/Drawer";
import Collapse from "@/components/containers/Collapse";
import Icon from "@/components/elements/Icon";

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
