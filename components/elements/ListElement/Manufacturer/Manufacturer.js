import React from "react";

export default function Manufacturer({ title, url }) {
	return (
		<a
			href={`/catalog/${url}`}
			className={"manufacturer"}
		>
			<div className={"flex justify-between items-center p-4 bg-gray-300 mb-4 rounded-md"}>
				{title}
				<img src="https://nationalrent.ru/local/templates/nationalrent/img/catalog/doosan-logo.png" alt="" style={{ height: 40 }}/>
			</div>
		</a>
	);
}
