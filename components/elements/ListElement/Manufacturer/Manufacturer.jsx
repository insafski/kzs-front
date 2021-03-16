import React from "react";

export default function Manufacturer({ title, url }) {
	return (
		<div className={"manufacturer md:px-2 md:w-2/4 lg:w-2/6 xl:w-3/12"}>
			<a
				href={`/catalog/${url}`}
			>
				<div className={"flex justify-between items-center text-xl p-8 bg-gray-100 mb-4 rounded-md"}>
					{title}
					<img src="https://nationalrent.ru/local/templates/nationalrent/img/catalog/doosan-logo.png" alt="" style={{ height: 40 }}/>
				</div>
			</a>
		</div>
	);
}
