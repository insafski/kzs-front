import React from "react";
import Link from "next/link";

export default function Article() {
	return (
		<div className={"article"}>
			<div className={"article__img"}>
				<Link href="/">
					<a>
						<img src="" alt="" />
					</a>
				</Link>
			</div>
			<div className="artcile__date">

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
