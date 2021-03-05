import React from "react";
import PropTypes from "prop-types";
import { linkPropTypes, mediaPropTypes } from "utils/types";
import Link from "next/link";

// import Image from "../../elements/Image";
import get from "lodash/get";

// import Icon from "../../elements/Icon";

export default function Footer({ footer, contacts }) {
	return (
		<footer className="footer bg-gray-100 px-4">
			<div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row lg:justify-between">
				<div className={"footer__item md:w-1/5 lg:w-1/4"}>
					<>
						{/* <img width={300} src={"https://static.tildacdn.com/tild3531-6461-4331-a164-363362633034/_2.jpg"} /> */}
						{footer.logo.picture && (
							// <Image media={footer.logo.picture} className="h-8 w-auto object-contain" />
							<img width={300} src={footer.logo.picture[0].src} />
						)
						}
					</>
				</div>
				<div className={"footer__item md:w-1/5 lg:w-1/4"}>
					<a href={"/catalog"} className={"text-xl"}>Каталог</a>
					<ul className={"mt-8"}>
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
				<div className={"footer__item md:w-1/5 lg:w-1/4"}>
					<a href={"/catalog"} className={"text-xl"}>Наивгация</a>
					<ul className={"mt-8"}>
						{
							get(footer, "navigation", []).map(({ link, title }, idx) => (
								<li key={idx} className={"mb-2 text-base"}>
									<Link href={link}>
										{title}
									</Link>
								</li>
							))
						}
					</ul>
				</div>
				<div className={"footer__item md:w-2/5 lg:w-1/4"}>
					<a href={"/contacts"} className={"text-xl"}>Контакты</a>
					{
						contacts.map(({ icon, title }, idx) => {
							return (
								<div key={idx} className={"w-6/12"}>
									<i className={`kzs-${icon} text-yellow-400`} />
									{title}
								</div>
							);
						})
					}
					{/* <div className={"mt-8 w-6/12"}>
						{footer.smallText}
					</div>

					<div className={"w-6/12 text-right"}>
						<Icon type={"clock"} />
						Пн-Сб 10:00-21:00
					</div> */}
				</div>

				{/* <nav className="flex flex-wrap flex-row lg:gap-20 items-start lg:justify-end mb-10">
					{
						footer.columns.map(footerColumn => (
							<div
								key={footerColumn.id}
								className="footer__item mt-10 lg:mt-0 w-6/12 lg:w-auto"
							>
								<p className="uppercase tracking-wide font-semibold">
									{footerColumn.title}
								</p>
								<ul className="mt-2">
									{footerColumn.links.map(link => (
										<li key={link.id} className="text-gray-700 py-1 px-1 -mx-1 hover:text-gray-900">
											{link.text}
										</li>
									))}
								</ul>
							</div>
						))
					}
				</nav> */}
			</div>
			<div className="footer__copyright text-sm px-4 py-4 text-gray-700 border-t border-gray-200">
				<div className="container mx-auto flex justify-between">
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
};
