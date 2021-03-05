import React from "react";
import PropTypes from "prop-types";
import { useToggle } from "ahooks";
import Drawer from "rc-drawer";
import Link from "next/link";
// import { useRouter } from "next/router";
import get from "lodash/get";
import cx from "classnames";

import Icon from "../../elements/Icon";

import "rc-drawer/assets/index.css";

import styles from "./Navigation.module.css";

console.log({ styles });

export default function Navbar({ data = {} }) {
	const [state, { toggle }] = useToggle();

	const navigation = get(data, "navigation", []);

	// const { query: { slug } = {} } = useRouter();

	return (
		<div className={"navigation flex justify-between"}>
			<div className={"navigation__logo"}>
				<img src="https://upload.wikimedia.org/wikipedia/commons/5/59/Sketch_Logo.svg" alt="" style={{ width: 30 }} />
			</div>
			<Drawer
				open={state}
				placement={"right"}
				onChange={toggle}
				onClose={() => toggle(false)}
				handler={false}
				level={null}
				width={"90vw"}
			>
				<nav className={"navigation__container flex flex-col h-full w-full absolute md:relative"}>
					<div className={"navigation__header px-4 py-4 flex justify-end bg-gray-100"}>
						<button onClick={() => toggle(false)}>
							Закрыть
						</button>
					</div>
					<ul className={"navigation__body px-8 py-8 flex flex-col"}>
						{
							navigation.map(({ link, title }, idx) => {
								return (
									<li key={idx} className={"navigation__item mb-4 md:ml-4"}>
										<Link href={link} className={"navigation__link"}>
											{title}
										</Link>
									</li>
								);
							})
						}
					</ul>
					<div className="navigation__footer mt-auto bg-gray-100">
						<ul className={"flex flex-col"}>
							<li className={"py-4 px-4 border-b border-gray-200"}>
								<a href="/">
									<Icon type={"location"} />
									<span className={"ml-4"}>Карла Маркса, 5</span>
								</a>
							</li>
							<li className={"py-4 px-4 border-b border-gray-200"}>
								<a href="mailto:123@mail.ru">
									<Icon type={"mail"} />
									<span className={"ml-4"}>mailto:123@mail.ru</span>
								</a>
							</li>
							<li className={"py-4 px-4"}>
								<a href="tel:+79148888888">
									<Icon type={"phone"} />
									<span className={"ml-4"}>+7 914 888 88 88</span>
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</Drawer>
			<button className={"navigation__burger w-7"} onClick={toggle}>
				<span className={cx("block h-1 w-full mb-2 bg-yellow-400", styles.navigation__burger)} />
				<span className={cx("block h-1 w-full mb-2 bg-yellow-400", styles.navigation__burger)} />
				<span className={cx("block h-1 w-full mb-2 bg-yellow-400", styles.navigation__burger)} />
			</button>
		</div>
	);
}

Navbar.propTypes = {
	data: PropTypes.object,
};
