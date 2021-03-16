import React from "react";
import PropTypes from "prop-types";
import { linkPropTypes, mediaPropTypes } from "utils/types";
import Link from "next/link";
import { BrowserView, MobileView } from "react-device-detect";
import get from "lodash/get";

import Social from "@/components/elements/Social";
import Icon from "@/components/elements/Icon";
export default function Footer({ footer, contacts, social }) {
	const navigation = get(footer, "navigation", []);

	return (
		<footer className={"footer bg-gray-100"}>
			<div className={"container mx-auto px-4 py-16 flex flex-col lg:flex-row lg:justify-between"}>
				<div className={"footer__item mb-8 md:mb-0 md:w-1/5 lg:w-1/4"}>
					<div className={"mt-8 md:mt-0 px-4"}>
						{
							footer.logo && footer.logo.picture && (
							// <Image media={footer.logo.picture} className="h-8 w-auto object-contain" />
								<img src={footer.logo.picture[0].src} />
							)
						}
					</div>
				</div>
				<div className={"footer__item mb-8 md:mb-0 md:w-1/5 lg:w-1/4"}>
					<ul className={"mt-8 md:mt-0 px-4"}>
						{
							get(footer, "catalog", []).map(({ link, title }, idx) => (
								<li key={idx} className={"mb-2 text-base"}>
									<Link href={link}>
										{title}
									</Link>
								</li>
							))
						}
					</ul>
				</div>
				<div className={"footer__item mb-8 md:mb-0 md:w-1/5 lg:w-1/4"}>
					<ul className={"mt-8 md:mt-0 px-4"}>
						{
							navigation.map(({ link, title }, idx) => (
								<li key={idx} className={"mb-2 text-base"}>
									<Link href={link}>
										{title}
									</Link>
								</li>
							))
						}
					</ul>
				</div>
				<div className={"footer__item mb-8 md:mb-0 md:w-2/5 lg:w-1/4"}>
					<ul className={"mt-8 md:mt-0 px-4"}>
						{
							contacts.map(({ icon, title, showtitle, link }, idx) => {
								return (
									<li key={idx} className={"w-6/12 md:w-full text-lg mb-4"}>
										<div className={"mb-1"}>
											<Icon type={icon} className={"mr-2"} />
											{title}
										</div>
										<a href={link}>
											{showtitle}
										</a>
									</li>
								);
							})
						}
					</ul>
					<Social items={social}/>
				</div>
			</div>
			<div className={"footer__copyright text-sm px-4 py-4 text-gray-700 border-t border-gray-500"}>
				<div className={"container mx-auto flex justify-between"}>
					<span>КазЗапчастьСервис</span>
					<span>2021</span>
				</div>
			</div>
		</footer>
	);
}

Footer.propTypes = {
	footer: PropTypes.shape({
		logo: mediaPropTypes.isRequired,
		columns: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
					.isRequired,
				title: PropTypes.string.isRequired,
				links: PropTypes.arrayOf(linkPropTypes),
			}),
		),
		smallText: PropTypes.string.isRequired,
	}),
	contacts: PropTypes.array,
	social: PropTypes.array,
};
