import React from "react";

export default function Catalog() {
	return (
		<div className={"catalog-bar"}>
			<button
				className={"w-full inline-flex justify-center py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 uppercase"}
			>
				Каталог
			</button>
			<div className="catalog-bar__nav">
				<ul>
					<li>
						<a href="">
							Камаз
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
