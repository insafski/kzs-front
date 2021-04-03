import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import get from "lodash/get";

import Picture from "@/components/elements/Picture";
import { Button } from "@/components/elements/Form";
import Icon from "@/components/elements/Icon";
import { useFeedback } from "@/components/widgets/FeedbackForm";

export default function Product({ heading, picture, slug, category, articul }) {
	const { handleOpen } = useFeedback();

	const title = get(heading, "title", "");
	// const description = get(heading, "description", "");

	return (
		<div className={"product mb-8 px-2 md:w-1/2"}>
			<div className={"product__picture mb-2"}>
				<Link href={`/novosti/${slug}`}>
					<a>
						<Picture items={picture} classNames={"w-full object-contain"} />
					</a>
				</Link>
			</div>
			<div className={"product__articul text-sm mb-2"}>
				<span className={"font-semibold"}>Артикул: </span>
				<span>{articul}</span>
			</div>
			<div className={"product__description text-sm mb-2 hover:underline"}>
				<Link href={`/products/${get(category, "slug", "")}`}>
					{get(category, "heading.title", "")}
				</Link>
			</div>
			<div className={"product__title text-sm md:text-base font-semibold md:h-12 mb-4"}>
				<Link href={`/products/${slug}`}>
					{title}
				</Link>
			</div>
			<div className={"product__call"}>
				<Button
					type={"primary"}
					handlers={{ onClick: handleOpen }}
					text={"Узнать цену"}
					icon={"phone"}
				/>
			</div>
		</div>
	);
}

Product.propTypes = {
	heading: PropTypes.object,
	description: PropTypes.string,
	publishedAt: PropTypes.string,
	picture: PropTypes.array,
	category: PropTypes.object,
	articul: PropTypes.string,
	slug: PropTypes.array,
};

Product.propTypes = {
	heading: {},
	description: "",
	publishedAt: "",
	picture: [],
	category: {},
	articul: "",
	slug: "",
};

Product.displayName = "NewsItem";
