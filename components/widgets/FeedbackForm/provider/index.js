import React, { useState } from "react";
import PropTypes from "prop-types";
import { useToggle } from "ahooks";

import Modal from "@/components/containers/Modal";
import Form from "@/components/containers/Form";
import { Input, Button, Textarea } from "@/components/elements/Form";

import { FeedbackContextProvider } from "../context";

export default function FeedbackProvider({ children }) {
	const [isOpen, { toggle }] = useToggle();
	const [mousePosition, setMousePosition] = useState({
		x: null,
		y: null,
	});

	function handleClose() {
		toggle(false);
	}

	function handleOpen(event) {
		setMousePosition({
			x: event.pageX,
			y: event.pageY,
		});
		toggle(true);
	}

	return (
		<FeedbackContextProvider
			value={{
				isOpen,
				toggle,
				handleClose,
				handleOpen,
			}}
		>
			<Modal
				heading={
					{
						title: "Заказать звонок",
						subtitle: "Оставьте ваши контактные данные и мы с вами свяжемся",
					}
				}
				visible={isOpen}
				onClose={handleClose}
				mousePosition={mousePosition}
				wrapClassName={"center"}
				style={{
					width: 400,
				}}
				footer={
					<div className={"flex"}>
						<div className={"pr-2 flex-1"}>
							<Button
								text={"Отмена"}
								handlers={{
									onClick: handleClose,
								}}
							/>
						</div>
						<div className={"pl-2 flex-1"}>
							<Button text={"Заказать"} />
						</div>
					</div>
				}
			>
				<Form>
					<Input
						name={"firstName"}
						placeholder={"Введите ваше имя"}
						className={"mb-4"}
						required
					/>
					{/* <Input
						name={"lastName"}
						placeholder={"Введите вашу фамилию"}
						className={"mb-4"}
						required
					/> */}
					<Input
						name={"phone"}
						placeholder={"Контактный номер телефона"}
						className={"mb-4"}
						required
					/>
					<Textarea name={"message"} placeholder={"Введите ваш вопрос"} />
				</Form>
			</Modal>
			{children}
		</FeedbackContextProvider>
	);
}

FeedbackProvider.propTypes = {
	children: PropTypes.node,
};

