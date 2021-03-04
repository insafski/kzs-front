import React from "react";
import PropTypes from "prop-types";
import { linkPropTypes, mediaPropTypes } from "utils/types";

import Image from "../../elements/Image";
import Icon from "../../elements/Icon";

export default function Footer({ footer }) {
	return (
		<footer className="footer bg-gray-100 px-4">
			<div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row lg:justify-between">
				<div className={"footer__item md:w-1/5 lg:w-1/4"}>
					<>
						<img width={300} src={"https://static.tildacdn.com/tild3531-6461-4331-a164-363362633034/_2.jpg"} />
						{footer.logo && (
							<Image media={footer.logo} className="h-8 w-auto object-contain" />
						)
						}
					</>
				</div>
				<div className={"footer__item md:w-1/5 lg:w-1/4"}>
					<a href={"/catalog"} className={"text-xl"}>Каталог</a>
					<ul className={"mt-8"}>
						<li className={"mb-2 text-base"}>
							<a href="">
								Шаанкси
							</a>
						</li>
						<li className={"mb-2 text-base"}>
							<a href="">
								Ауди
							</a>
						</li>
						<li className={"mb-2 text-base"}>
							<a href="">
								БМВ
							</a>
						</li>
						<li className={"mb-2 text-base"}>
							<a href="">
								Мерседес
							</a>
						</li>
						<li className={"mb-2 text-base"}>
							<a href="">
								Пушка
							</a>
						</li>
						<li className={"mb-2 text-base"}>
							<a href="">
								Гонка
							</a>
						</li>
					</ul>
				</div>
				<div className={"footer__item md:w-1/5 lg:w-1/4"}>
					<a href={"/catalog"} className={"text-xl"}>Наивгация</a>
					<ul className={"mt-8"}>
						<li className={"mb-2 text-base"}>
							<a href="">
								Шаанкси
							</a>
						</li>
						<li className={"mb-2 text-base"}>
							<a href="">
								Ауди
							</a>
						</li>
						<li className={"mb-2 text-base"}>
							<a href="">
								БМВ
							</a>
						</li>
						<li className={"mb-2 text-base"}>
							<a href="">
								Мерседес
							</a>
						</li>
						<li className={"mb-2 text-base"}>
							<a href="">
								Пушка
							</a>
						</li>
						<li className={"mb-2 text-base"}>
							<a href="">
								Гонка
							</a>
						</li>
					</ul>
				</div>
				<div className={"footer__item md:w-2/5 lg:w-1/4"}>
					<a href={"/contacts"} className={"text-xl"}>Контакты</a>
					<div className={"mt-8 w-6/12"}>
						{footer.smallText}
					</div>
					<div className={"w-6/12 text-center"}>
						<Icon type={"phone"} />
						+7 922488 30 88
					</div>
					<div className={"w-6/12 text-right"}>
						<Icon type={"clock"} />
						Пн-Сб 10:00-21:00
					</div>
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
};
