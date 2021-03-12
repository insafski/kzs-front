import React from "react";
import PropTypes from "prop-types";
import { useToggle } from "ahooks";

import Drawer from "@/components/containers/Drawer";
import Map from "@/components/elements/GeoMap";
import { AddressContextProvider } from "../context";

export default function AddressProvider({ children }) {
	const [isOpen, { toggle }] = useToggle();

	function handleClose() {
		toggle(false);
	}

	function handleOpen() {
		toggle(true);
	}

	return (
		<AddressContextProvider
			value={{
				isOpen,
				toggle,
				handleClose,
				handleOpen,
			}}
		>
			<Drawer
				open={isOpen}
				placement={"top"}
				onChange={toggle}
				onClose={() => toggle(false)}
				handler={false}
				level={null}
				width={"100vw"}
				height={"90vh"}
			>

				<>
					<div className={"px-4 py-4 flex justify-between bg-gray-100"}>
						<h4>Карла Маркса, 5</h4>
						<button onClick={() => toggle(false)}>
							Закрыть
						</button>
					</div>
					<Map />
				</>
			</Drawer>
			{children}
		</AddressContextProvider>
	);
}

AddressProvider.propTypes = {
	children: PropTypes.node,
};

