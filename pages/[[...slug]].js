import React from "react";
import ErrorPage from "next/error";
import { getStrapiURL, getPageData } from "utils/api";
import { useRouter } from "next/dist/client/router";
import PropTypes from "prop-types";
import ImageGallery from "react-image-gallery";

import Sections from "@/components/sections";
import Seo from "@/components/elements/seo";

// The file is called [[...slug]].js because we're using Next's
// optional catch all routes feature. See the related docs:
// https://nextjs.org/docs/routing/dynamic-routes#optional-catch-all-routes

const DynamicPage = ({ sections, metadata, preview, slug }) => {
	const router = useRouter();

	// Check if the required data was provided
	if (!router.isFallback && !sections?.length) {
		return <ErrorPage statusCode={404} />;
	}

	// Loading screen (only possible in preview mode)
	if (router.isFallback) {
		return <div className="container">Loading...</div>;
	}

	console.log("slug", slug);

	return (
		<>
			{/* Add meta tags for SEO*/}
			<Seo metadata={metadata} />
			{
				!slug && <Banner />
			}
			{/* Display content sections */}
			{ sections && <Sections sections={sections} preview={preview} />}
			{slug === "contact" && (
				<div className={"container"}>
					<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A886f655d541db893c449c7ec6e4ab1ee6bbc51500a8d7834e993042b0df2e456&amp;width=100%25&amp;height=500&amp;lang=ru_RU&amp;scroll=true"></script>
				</div>
			)}
			{
				!slug && <Callme />
			}
			{
				slug === "catalog" && <Catalog />
			}
		</>
	);
};

DynamicPage.propTypes = {
	sections: PropTypes.array,
	metadata: PropTypes.object,
	preview: PropTypes.bool,
	slug: PropTypes.string,
};

export async function getStaticPaths() {
	// Get all pages from Strapi
	const pages = await (await fetch(getStrapiURL("/pages"))).json();
	//   const pages = data.pages;

	const paths = pages.map(page => {
		// Decompose the slug that was saved in Strapi
		const slugArray = page.slug.split("__");

		return {
			params: { slug: slugArray },
		};
	});

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params, preview = null }) {
	// Find the page data for the current slug
	let chainedSlugs;
	if (params === {} || !params.slug) {
		// To get the homepage, find the only page where slug is an empty string
		chainedSlugs = "";
	} else {
		// Otherwise find a page with a matching slug
		// Recompose the slug that was saved in Strapi
		chainedSlugs = params.slug.join("__");
	}

	// Fetch pages. Include drafts if preview mode is on
	const pageData = await getPageData(chainedSlugs, preview);

	if (pageData == null) {
		// Giving the page no props will trigger a 404 page
		return { props: {} };
	}

	// We have the required page data, pass it to the page component
	const { contentSections = {}, metadata = {} } = pageData;

	return {
		props: {
			preview,
			sections: contentSections,
			metadata,
			slug: chainedSlugs,
		},
	};
}

export default DynamicPage;

function Callme() {
	return (
		<div className={"call-me"} style={{
			width: "100%",
			background: "#ccc",
		}}>
			<div className={"container flex items-center"} style={{ height: 300 }}>
				<div className={"flex-col p-2 w-6/12 text-center"}>
					<h5 style={{
						color: "#6466F1",
						fontWeight: "bold",
						fontSize: 20,
					}}>
					Остались какие-то вопросы? Позваните нам или оставьте заявку на звонок. Наш менеджер свяжется с вами в ближайшее время
					</h5>
					<p style={{ color: "#6466F1",
						paddingTop: 20 }}>Мы окажем консультацию по техническим вопросам и подберем запчасти</p>
				</div>
				<div className={"flex-col p-2 w-6/12 text-center"}>
					<a href={"#"} style={{
						border: "2px solid #6466F1",
						borderRadius: 40,
						padding: "10px 20px",
						color: "#6466F1",
					}}>
						Перезвоните мне
					</a>
				</div>
			</div>
		</div>
	);
}

function Banner() {
	const imgs = [
		{
			original: "https://tehno-komplekt.com/wa-data/public/photos/10/00/10/10.1250x0.jpg",
			thumbnail: "https://tehno-komplekt.com/wa-data/public/photos/10/00/10/10.1250x0.jpg",
		},
		{
			original: "https://tehno-komplekt.com/wa-data/public/photos/08/00/8/8.1250x0.jpg",
			thumbnail: "https://tehno-komplekt.com/wa-data/public/photos/08/00/8/8.1250x0.jpg",
		},
		{
			original: "https://tehno-komplekt.com/wa-data/public/photos/09/00/9/9.1250x0.jpg",
			thumbnail: "https://tehno-komplekt.com/wa-data/public/photos/09/00/9/9.1250x0.jpg",
		},

	];

	return (
		<ImageGallery
			items={[...imgs]}
			showPlayButton={false}
			autoPlay={true}
			showBullets={false}
			showThumbnails={false}
			showNav={false}
			infinite={true}
			showFullscreenButton={false}
			slideDuration={1000}
			slideInterval={6000}
			// renderItem={({ original }) => {
			// 	return (
			// 		<img
			// 			className="image-gallery-image"
			// 			style={{
			// 				objectFit: "contain",
			// 			}}
			// 			src={original}
			// 		/>
			// 	);
			// }}
			// renderThumbInner={({ thumbnail }) => {
			// 	return (
			// 		<div style={{ height: 100 }}>
			// 			<img
			// 				width={"100%"}
			// 				height={"100%"}
			// 				src={thumbnail}
			// 				style={{ objectFit: "cover" }}
			// 			/>
			//                             ;
			// 		</div>
			// 	);
			// }}
		/>
	);
}

function Catalog() {
	const imgs = [
		"https://thumb.tildacdn.com/tild6631-3537-4765-b231-346166373566/-/format/webp/depositphotos-504334.jpg",
		"https://thumb.tildacdn.com/tild6631-3537-4765-b231-346166373566/-/format/webp/depositphotos-504334.jpg",
		"https://thumb.tildacdn.com/tild6631-3537-4765-b231-346166373566/-/format/webp/depositphotos-504334.jpg",
	];

	return (
		<>
			<div className={"container flex"}>
				<div className={"flex-col p-2 w-3/12"}>
				</div>
				<div className={"flex-col p-2 w-9/12"}>
					<ul>
						<li style={{ display: "inline" }}>
							<a href={"/"}>{"Главная > "}</a>
						</li>
						<li style={{ display: "inline" }}>
							<a href={"/catalog"}>{"Каталог > "}</a>
						</li>
						<li style={{ display: "inline" }}>
							{"Двигатели"}
						</li>
					</ul>
				</div>
			</div>
			<div className={"container flex"}>
				<div className={"flex-col p-6 w-3/12"}>
					<ul className={"sidebar-nav"}>
						<li>
							<a href={"#"}>Двигатели</a>
						</li>
						<li>
							<a href={"#"}>Фильтры, ремни</a>
						</li>
						<li>
							<a href={"#"}>Гильзопоршневая группа</a>
						</li>
						<li>
							<a href={"#"}>Коренные вкладыши, шатун</a>
						</li>
						<li>
							<a href={"#"}>Прокаладки, сальники</a>
						</li>
						<li>
							<a href={"#"}>Турбокомпрессор</a>
						</li>
						<li>
							<a href={"#"}>Система смазки</a>
						</li>
						<li>
							<a href={"#"}>Система охлаждения</a>
						</li>
						<li>
							<a href={"#"}>ГБЦ и запчасти на нее</a>
						</li>
						<li>
							<a href={"#"}>Блок и запчасти на него</a>
						</li>
						<li>
							<a href={"#"}>Топливная система</a>
						</li>
						<li>
							<a href={"#"}>Электрооборудование</a>
						</li>
						<li>
							<a href={"#"}>Другие детали</a>
						</li>
					</ul>
				</div>
				<div className={"flex-col p-2 py-6 w-9/12"}>
					<h2 style={{ fontSize: 24 }}>Двигатели</h2>

					<div className={"container flex"}>
						{
							imgs.map((item, idx) => {
								return (
									<div key={idx} className={"flex-col p-4 py-4 w-4/12 lll"}>
										<img src={item}></img>
										<p className={"text-center p-2"} style={{ fontSize: 20 }}>Двигатель Weichai-Deutz</p>
										<p className={"text-center p-2"} style={{ fontSize: 20,
											border: "1px solid #ccc" }}>Цену уточняйте</p>
									</div>
								);
							})
						}
					</div>
					<div className={"container flex"}>
						{
							imgs.map((item, idx) => {
								return (
									<div key={idx} className={"flex-col p-4 py-4 w-4/12 lll"}>
										<img src={item}></img>
										<p className={"text-center p-2"} style={{ fontSize: 20 }}>Двигатель Weichai-Deutz</p>
										<p className={"text-center p-2 ddds"} style={{ fontSize: 20,
											border: "1px solid #ccc" }}>Цену уточняйте</p>
									</div>
								);
							})
						}
					</div>
				</div>
			</div>
		</>
	);
}
