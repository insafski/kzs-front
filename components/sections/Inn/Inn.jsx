import React from "react";
import PropTypes from "prop-types";

import Block from "@/components/containers/Block";

export default function Inn({ heading }) {
	return (
		<Block heading={heading} className={"contacts"}>
			<div className={"container mx-auto text-lg"}>
				<h3 className={"mb-2 text-center text-xl font-bold"}>Юридические контактные данные</h3>
				<p className={"mb-2"}>{"ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ \"КАЗЗАПЧАСТЬСЕРВИС\""}</p>
				<p className={"mb-2"}>ИНН: 1659210805</p>
				<p className={"mb-2"}>ОГРН: 1201600063719</p>
				<p className={"mb-2"}>КПП: 165901001</p>
				<p className={"mb-2"}>Более подробную информацию о компании можно получить у менеджеров, позвонив по телефону либо написав письмо на электронную почту.</p>
			</div>
		</Block>
	);
}

Inn.propTypes = {
	heading: PropTypes.shape({
		title: PropTypes.string,
		subTitle: PropTypes.string,
		subText: PropTypes.string,
	}),
};
