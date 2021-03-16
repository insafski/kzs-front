import React, { useContext } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import Block from "@/components/containers/Block";
import Button from "@/components/elements/Form/Button";
import { FeedbackContext } from "@/components/widgets/FeedbackForm";

import styles from "./Feedback.module.scss";

export default function Feedback({ heading }) {
	const { handleOpen } = useContext(FeedbackContext);

	return (
		<Block
			heading={heading}
			headingProps={{
				underline: false,
			}}
			className={cx("feedback relative text-white", styles.feedback)}
			style={{
				backgroundImage: "url(https://stroy-plys.ru/uploads/posts/2013-11/1385025371_frontalnyy-kolesnyy-pogruzchik-hyundai-hl770-7a.jpg)",
				backgroundPosition: "center",
				backgroundSize: "cover",
			}}
		>
			<div className={"container mx-auto relative px-4"}>
				<div className={"md:w-3/12"}>
					<Button
						text={"Связаться"}
						handlers={{
							onClick: handleOpen,
						}}
					/>
				</div>
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
