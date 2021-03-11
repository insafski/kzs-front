import React, { useState } from "react";
import PropTypes from "prop-types";
import { useToggle } from "ahooks";

import Modal from "@/components/containers/Modal";
import { FeedbackContextProvider } from "../context";

export default function FeedbackProvider({ children }) {
	const [isOpen, { toggle }] = useToggle();
	const [mousePosition, setMousePosition] = useState({
		x: null,
		y: null,
	});

	function handleClose() {
		toggle(false);
	}

	function handleOpen(event) {
		setMousePosition({
			x: event.pageX,
			y: event.pageY,
		});
		toggle(true);
	}

	return (
		<FeedbackContextProvider
			value={{
				isOpen,
				toggle,
				handleClose,
				handleOpen,
			}}
		>
			<Modal
				title={"Обратка"}
				visible={isOpen}
				onClose={handleClose}
				mousePosition={mousePosition}
				wrapClassName={"center"}
				style={{
					width: 600,
				}}
			>
			</Modal>
			{children}
		</FeedbackContextProvider>
	);
}

FeedbackProvider.propTypes = {
	children: PropTypes.node,
};

