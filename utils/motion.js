function getCollapsedHeight() {
	return {
		height: 0,
		opacity: 0,
	};
}

function getRealHeight(node) {
	return {
		height: node.scrollHeight,
		opacity: 1,
	};
}

function getCurrentHeight(node) {
	return { height: node.offsetHeight };
}

function skipOpacityTransition(_, event) {
	return event.propertyName === "height";
}

const collapseMotion = {
	motionName: "rc-collapse-motion",
	onEnterStart: getCollapsedHeight,
	onEnterActive: getRealHeight,
	onLeaveStart: getCurrentHeight,
	onLeaveActive: getCollapsedHeight,
	onEnterEnd: skipOpacityTransition,
	onLeaveEnd: skipOpacityTransition,
	motionDeadline: 500,
	leavedClassName: "rc-collapse-content-hidden",
};

export default collapseMotion;
