import React, { useContext } from "react";
import PropTypes from "prop-types";

import Block from "@/components/containers/Block";
import Button from "@/components/elements/Form/Button";
import { FeedbackContext } from "@/components/widgets/FeedbackForm";

export default function Feedback({ heading }) {
	const { handleOpen } = useContext(FeedbackContext);

	return (
		<Block heading={heading} className={"feedback"}>
			<div className={"container mx-auto px-4"}>
				<Button
					text={"Связаться"}
					handlers={{
						onClick: handleOpen,
					}}
				/>
			</div>
		</Block>
	);
}

Feedback.propTypes = {
	heading: PropTypes.shape({
		title: PropTypes.string,
		subTitle: PropTypes.string,
		subText: PropTypes.string,
	}),
};
