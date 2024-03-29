import React from "react";
import Link from "next/link";

export default function Article(props) {
	return (
		<div className={"article"}>
			<div className={"article__img mb-4"}>
				<Link href="/">
					<a>
						<img src="" alt="" />
					</a>
				</Link>
			</div>
			<div className={"artcile__date mb-2"}>
				12.01.2012
			</div>
			<div className="article__title">
				<Link href="/">
					<a>
						Название новости
					</a>
				</Link>
			</div>
		</div>
	);
}
