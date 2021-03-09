import React from "react";

export default function Manufacturer({ title, url }) {
	return (
		<div className={"manufacturer p-4"}>
			<a
				href={`/catalog/${url}`}
				className={"manufacturer__title"}
			>
				{title}
			</a>
		</div>
	);
}
