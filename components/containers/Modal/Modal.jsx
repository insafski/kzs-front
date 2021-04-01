import React from "react";
import PropTypes from "prop-types";
import Dialog from "rc-dialog";
import get from "lodash/get";

function Title({ heading }) {
	const title = get(heading, "title", "");
	const subtitle = get(heading, "subtitle", "");

	return (title || subtitle) && (
		<div className={"border-b p-4 text-center"}>
			{
				title && (
					<h2 className={"text-3xl font-bold mb-4"}>
						{title}
					</h2>
				)
			}
			{
				subtitle && (
					<p>{subtitle}</p>
				)
			}
		</div>
	);
}

Title.propTypes = {
	heading: PropTypes.object,
};

export default function Modal({ heading, className, visible, wrapClassName, animation, maskAnimation, onClose, style, mousePosition, forceRender, footer, children }) {
	return (
		<Dialog
			className={className}
			visible={visible}
			wrapClassName={wrapClassName}
			animation={animation}
			maskAnimation={maskAnimation}
			onClose={onClose}
			style={style}
			title={<Title heading={heading} />}
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
	heading: PropTypes.object,
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
	heading: {},
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
