import React from "react";
import PropTypes from "prop-types";
import { useToggle } from "ahooks";

import Modal from "@/components/containers/Modal";
import { FeedbackContextProvider } from "../context";

export default function FeedbackProvider({ children }) {
	const [isOpen, { toggle }] = useToggle();

	function handleClose() {
		toggle(false);
	}

	function handleOpen() {
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
			>
			</Modal>
			{children}
		</FeedbackContextProvider>
	);
}

FeedbackProvider.propTypes = {
	children: PropTypes.node,
};

