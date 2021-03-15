import React from "react";
import { Item } from "react-photoswipe-gallery";

export default function Photo({ original, thumbnail, width, height, title, id }) {
	return (
		<Item
			original="https://placekitten.com/1024/768?image=1"
			thumbnail="https://placekitten.com/80/60?image=1"
			width="1024"
			height="768"
		>
			{
				({ ref, open }) => {
					return (
						<img
							ref={ref}
							onClick={open}
							src="https://placekitten.com/80/60?image=1"
							alt={title}
							title={title}
						/>
					);
				}
			}
		</Item>
	);
}
