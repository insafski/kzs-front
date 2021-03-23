import React from "react";
import PropTypes from "prop-types";
import Dialog from "rc-dialog";

import "rc-dialog/assets/index.css";

export default function Modal({ title, className, visible, wrapClassName, animation, maskAnimation, onClose, style, mousePosition, forceRender, footer, children }) {
	return (
		<Dialog
			className={className}
			visible={visible}
			wrapClassName={wrapClassName}
			animation={animation}
			maskAnimation={maskAnimation}
			onClose={onClose}
			style={style}
			title={title}
			mousePosition={mousePosition}
			destroyOnClose={true}
			forceRender={forceRender}
			focusTriggerAfterClose={false}
			footer={footer}
		>
			{children}
		</Dialog>
	);
}

Modal.propTypes = {
	title: PropTypes.string,
	className: PropTypes.string,
	visible: PropTypes.bool,
	wrapClassName: PropTypes.string,
	animation: PropTypes.string,
	maskAnimation: PropTypes.string,
	onClose: PropTypes.func,
	style: PropTypes.object,
	mousePosition: PropTypes.object,
	forceRender: PropTypes.bool,
	footer: PropTypes.node,
	children: PropTypes.node,
};

Modal.defaultProps = {
	title: "",
	className: "",
	visible: false,
	wrapClassName: "",
	animation: "zoom",
	maskAnimation: "fade",
	onClose: () => Function,
	style: {},
	mousePosition: {
		x: null,
		y: null,
	},
	forceRender: false,
	footer: <></>,
	children: null,
};

Modal.displayName = "Modal";
