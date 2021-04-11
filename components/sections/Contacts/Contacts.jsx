import React from "react";
import PropTypes from "prop-types";

import Block from "@/components/containers/Block";

export default function Contacts({ heading }) {
	return (
		<Block heading={heading} className={"contacts"}>
			<div className={"container"}>
				<div className={"flex flex-col md:flex-row"}>
					<ul className={"md:px-4 flex-1"}>
						<li className="md:w-full text-lg mb-4 flex">
							<div className="mb-1">
								<i className="kzs-mail mr-2"></i>
							</div>
							<a href="mailto:marat-agro@mail.ru">
							marat-agro@mail.ru
							</a>
						</li>
						<li className="md:w-full text-lg mb-4 flex">
							<div className="mb-1">
								<i className="kzs-skype mr-2"></i>
							</div>
							<a href="skype:marat-agro?chat">
							marat-agro
							</a>
						</li>
					</ul>
					<ul className={"md:px-4 flex-1"}>
						<li className="md:w-full text-lg mb-4 flex">
							<div className="mb-1">
								<i className="kzs-phone mr-2"></i>
							</div>
							<a href="tel:+79872265040">
							+7 (987) 226-50-40 - Хасанов Марат Васихович (директор)
							</a>
						</li>
						<li className="md:w-full text-lg mb-4 flex">
							<div className="mb-1">
								<i className="kzs-phone mr-2"></i>
							</div>
							<a href="tel:+79870010565">
							+7 (987) 001-05-65 - Харисов Рамиль (менеджер)
							</a>
						</li>
						{/* <li className="md:w-full text-lg mb-4 flex">
							<div className="mb-1">
								<i className="kzs-location mr-2"></i>
							Адрес:
							</div>
							<a href="г. Казань, ул. В.Кулагина 10" className={"ml-4"}>
							г. Казань, ул. В.Кулагина 10
							</a>
						</li> */}
					</ul>
					<div className="social flex justify-center md:justify-start flex-1 md:px-4">
						<a href="https://www.instagram.com/zapchasti_na_pogruzchik_02_16/" className="social__item text-3xl" target="_blank" rel="noreferrer">
							<i className="kzs-instagram"></i>

						</a>
						<a href="https://vk.com/" className="social__item text-3xl" target="_blank" rel="noreferrer">
							<i className="kzs-vkontakte"></i>
						</a>
						<a href="https://www.facebook.com/zapchastinapogruzchik0216/" className="social__item text-3xl" target="_blank" rel="noreferrer">
							<i className="kzs-facebook-squared"></i>
						</a>
					</div>
				</div>
			</div>
		</Block>
	);
}

Contacts.propTypes = {
	heading: PropTypes.shape({
		title: PropTypes.string,
		subTitle: PropTypes.string,
		subText: PropTypes.string,
	}),
};
