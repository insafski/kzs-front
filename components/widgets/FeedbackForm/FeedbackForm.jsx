import React from "react";

import Form from "@/components/containers/Form";
import { Input } from "@/components/elements/Form";

export default function FeedbackForm() {
	return (
		<Form>
			<Input
				name={"firstName"}
				placeholder={"Введите ваше имя"}
				className={"mb-4"}
				required
			/>
			<Input
				name={"lastName"}
				placeholder={"Введите вашу фамилию"}
				className={"mb-4"}
				required
			/>
			<Input
				name={"phone"}
				placeholder={"Контактный номер телефона"}
				className={"mb-4"}
				required
			/>
			<Input name={"message"} placeholder={"Введите ваш вопрос"} />
		</Form>
	);
}
