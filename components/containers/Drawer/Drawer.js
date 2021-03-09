import React from "react";
import PropTypes from "prop-types";
import RCDrawer from "rc-drawer";

import "rc-drawer/assets/index.css";

export default function Drawer({ open, placement, onChange, onClose, handler, level, width, height, children }) {
	return (
		<RCDrawer
			open={open}
			placement={placement}
			onChange={onChange}
			onClose={onClose}
			handler={handler}
			level={level}
			width={width}
			height={height}
		>
			{children}
		</RCDrawer>
	);
}

Drawer.propTypes = {
	open: PropTypes.bool,
	placement: PropTypes.string,
	onChange: PropTypes.func,
	onClose: PropTypes.func,
	handler: PropTypes.func,
	level: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	children: PropTypes.node,
};

Drawer.displayName = "Drawer";
