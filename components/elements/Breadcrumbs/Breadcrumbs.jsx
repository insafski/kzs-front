import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import PropTypes from "prop-types";
// import compact from "lodash/compact";
import Icon from "@/components/elements/Icon";

const convertBreadcrumb = string => {
	return string
		.replace(/-/g, " ")
		.replace(/oe/g, "ö")
		.replace(/ae/g, "ä")
		.replace(/ue/g, "ü")
		.toUpperCase();
};

export default function Breadcrumbs({ items }) {
	const router = useRouter();
	const [breadcrumbs, setBreadcrumbs] = useState(items);

	// const linkPath = router.asPath.split("/");

	// const showBreadcrumbs = !!compact(linkPath).length;

	useEffect(() => {
		setBreadcrumbs(items);
	}, [router]);

	return breadcrumbs.length ? (
		<div className={"container py-4"}>
			<nav
				aria-label={"breadcrumbs"}
				className={"breadcrumbs"}
			>
				<ul
					className={"breadcrumbs__list flex"}
				>
					<li className={"breadcrumbs__item"}>
						<Link href={"/"}>
							<a className={"breadcrumbs__link hover:underline hover:text-yellow-500 transition-all duration-200 ease-in-out"}>Главная</a>
						</Link>
					</li>
					{
						breadcrumbs.map(({ slug, title }, idx) => {
							return (
								<li
									key={`${slug}-${idx}`}
									className={"breadcrumbs__item ml-2"}
								>
									<Icon type={"angle-right"} />
									{
										breadcrumbs.length - 1 !== idx
											? (
												<Link href={slug}>
													<a className={"breadcrumbs__link hover:underline hover:text-yellow-500 transition-all duration-200 ease-in-out"}>
														{convertBreadcrumb(title)}
													</a>
												</Link>
											)
											: convertBreadcrumb(title)
									}
								</li>
							);
						})
					}
				</ul>
			</nav>
		</div>
	) : null;
}

Breadcrumbs.propTypes = {
	items: PropTypes.array,
};
