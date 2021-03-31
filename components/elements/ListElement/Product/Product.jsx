import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import get from "lodash/get";

import Picture from "@/components/elements/Picture";
import { Button } from "@/components/elements/Form";
import Icon from "@/components/elements/Icon";
import { useFeedback } from "@/components/widgets/FeedbackForm";

export default function Product({ heading, picture, slug }) {
	const { handleOpen } = useFeedback();

	const title = get(heading, "title", "");
	const description = get(heading, "description", "");

	return (
		<div className={"product mb-4 px-2 md:w-1/4"}>
			<div className={"product__picture mb-2"}>
				<Link href={`/novosti/${slug}`}>
					<a>
						<Picture items={picture} />
					</a>
				</Link>
			</div>
			<div className={"product__title mb-4"}>
				<Link href={`/products/${slug}`}>
					<a className={"text-xl font-semibold"}>{title}</a>
				</Link>
			</div>
			<div className={"product__description text-sm"}>
				<p>
					{description}
				</p>
			</div>
			<div className={"product__call text-sm"}>
				<Button
					className={"border-transparent bg-yellow-400"}
					handlers={{ onClick: handleOpen }}
				>
					<Icon type={"phone"} className={"mr-2"} />
					{"Узнать цену"}
				</Button>
			</div>
		</div>
	);
}

Product.propTypes = {
	heading: PropTypes.object,
	description: PropTypes.string,
	publishedAt: PropTypes.string,
	picture: PropTypes.array,
	slug: PropTypes.array,
};

Product.propTypes = {
	heading: {},
	description: "",
	publishedAt: "",
	picture: [],
	slug: "",
};

Product.displayName = "NewsItem";
