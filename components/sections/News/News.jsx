import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/client";

import Block from "@/components/containers/Block";
import List from "@/components/containers/List";
import { Button } from "@/components/elements/Form";
import { NEWS } from "@/queries/queries.graphql";

import { client } from "../../../pages/api/apollo";

export default function News({ heading, items, news, more }) {
	const [limit, setLimit] = useState(9);

	// TODO: Need to move useQuery to root component like context

	const { loading, error, data, fetchMore } = useQuery(
		NEWS, {
			client,
			variables: {
				offset: 0,
				limit,
			},
		});

	return (
		<Block className={"news"} heading={heading}>
			<div className={"container px-4"}>
				<List items={data && !error && data.news || news || items} type={"news"} className={"flex -mx-2 flex-wrap md:flex-nowrap"} />
			</div>
			{
				more && (
					<div className={"container pt-10 flex justify-center"}>
						<div className={"w-full md:w-4/12"}>
							{/* TODO: Need to create Button component option loading with loading icon */}
							<Button
								text={"Загрузить ещё"}
								handlers={
									{
										onClick() {
											const offset = data.news.length;

											fetchMore({
												variables: {
													offset,
													limit,
												},
											}).then(moreResult => {
												setLimit(offset + moreResult.data.news.length);
											}).catch(error => console.error(error));
										},
									}
								}
							/>
						</div>
					</div>
				)
			}
		</Block>
	);
}

News.propTypes = {
	heading: PropTypes.shape({
		title: PropTypes.string,
		subTitle: PropTypes.string,
		subText: PropTypes.string,
	}),
	items: PropTypes.array,
	news: PropTypes.array,
	more: PropTypes.bool,
};

News.defaultProps = {
	heading: {
		title: "",
		subTitle: "",
		subText: "",
	},
	items: [],
	news: [],
	more: false,
};
