import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useToggle, useDebounceFn } from "ahooks";
import Link from "next/link";
// import { useRouter } from "next/router";
import get from "lodash/get";
import cx from "classnames";

import Icon from "@/components/elements/Icon";
import Drawer from "@/components/containers/Drawer";
import { AddressContext } from "@/components/widgets/Address";

import styles from "./Navigation.module.scss";

console.log({ styles });

export default function Navbar({ data = {} }) {
	const [state, { toggle }] = useToggle();
	const { run } = useDebounceFn(
		() => {
			toggle();
		},
		{
			wait: 200,
		},
	);
	const { handleOpen } = useContext(AddressContext);

	const navigation = get(data, "navigation", []);

	// const { query: { slug } = {} } = useRouter();

	return (
		<div className={"navigation flex justify-between items-center px-2"}>
			<div className={"navigation__logo"}>
				<Link href={"/"}>
					<a>
						<img
							src="https://kzs.s3.eu-north-1.amazonaws.com/images/header-logo.svg"
							alt={"КазЗапчастьСервис"}
							style={{ width: 200 }}
						/>
					</a>
				</Link>
			</div>
			<nav className={"navigation__container flex hidden md:block"}>
				<ul className={"navigation__body flex"}>
					{
						navigation.map(({ link, title }, idx) => {
							return (
								<li key={idx} className={"navigation__item"}>
									<Link href={link}>
										<a className={"navigation__link block p-4 hover:bg-yellow-400"}>
											{title}
										</a>
									</Link>
								</li>
							);
						})
					}
				</ul>
			</nav>
			<Drawer
				open={state}
				placement={"right"}
				onChange={toggle}
				onClose={() => toggle(false)}
				handler={false}
				level={null}
				width={"90vw"}
			>
				<nav className={"navigation__container flex flex-col h-full w-full absolute"}>
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
								<a href="/#" onClick={handleOpen}>
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
			<button className={cx("burger flex flex-col justify-between items-end md:hidden", styles.burger)} onClick={run}>
				<span className={cx("bg-gray-700 rounded-md", styles.burger__line)} />
				<span className={cx("bg-gray-700 rounded-md", styles.burger__line)} />
				<span className={cx("bg-gray-700 rounded-md", styles.burger__line)} />
			</button>
		</div>
	);
}

Navbar.propTypes = {
	data: PropTypes.object,
};
