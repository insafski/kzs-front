import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import get from "lodash/get";

import Block from "@/components/containers/Block";
import Button from "@/components/elements/Form/Button";
import { useFeedback } from "@/components/widgets/FeedbackForm";

import styles from "./Feedback.module.scss";

export default function Feedback({ heading, picture }) {
	const { handleOpen } = useFeedback();

	return (
		<Block
			heading={heading}
			headingProps={{
				underline: false,
			}}
			className={cx("feedback relative text-white", styles.feedback)}
			style={{
				backgroundImage: `url(${get(picture, "[0].src", "https://kzs.s3-eu-north-1.amazonaws.com/images/lovol-2.jpeg")})`,
				backgroundPosition: "center",
				backgroundSize: "cover",
			}}
		>
			<div className={"container mx-auto relative mt-8 px-4"}>
				<div className={"md:w-3/12"}>
					<Button
						className={"border-2 py-3 border-yellow-400 rounded-full text-yellow-400"}
						text={"Получить консультацию"}
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
	picture: PropTypes.array,
};
