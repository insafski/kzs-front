import React from "react";
import PropTypes from "prop-types";
// import Image from "../elements/image";
// import ImageGallery from "react-image-gallery";

const Developers = ({ data }) => {
	console.log("developers", data);

	const imgs = [
		{
			original: "https://thumb.tildacdn.com/tild6134-3763-4162-a134-303065346261/-/resize/240x/-/format/webp/images_1.png",
			thumbnail: "https://thumb.tildacdn.com/tild6134-3763-4162-a134-303065346261/-/resize/240x/-/format/webp/images_1.png",
		},
		{
			original: "https://thumb.tildacdn.com/tild6434-6536-4437-a331-323839353233/-/resize/240x/-/format/webp/001.jpg",
			thumbnail: "https://thumb.tildacdn.com/tild6434-6536-4437-a331-323839353233/-/resize/240x/-/format/webp/001.jpg",
		},
		{
			original: "https://thumb.tildacdn.com/tild3634-6335-4030-b464-633530643263/-/resize/220x/-/format/webp/foton-lovol-logo.png",
			thumbnail: "https://thumb.tildacdn.com/tild3634-6335-4030-b464-633530643263/-/resize/220x/-/format/webp/foton-lovol-logo.png",
		},
		{
			original: "https://thumb.tildacdn.com/tild3738-3162-4866-b234-343238366462/-/resize/240x/-/format/webp/yto.jpg",
			thumbnail: "https://thumb.tildacdn.com/tild3738-3162-4866-b234-343238366462/-/resize/240x/-/format/webp/yto.jpg",
		},
		{
			original: "https://thumb.tildacdn.com/tild6434-3739-4130-a430-343831643963/-/resize/240x/-/format/webp/original.jpeg",
			thumbnail: "https://thumb.tildacdn.com/tild6434-3739-4130-a430-343831643963/-/resize/240x/-/format/webp/original.jpeg",
		},
		{
			original: "https://thumb.tildacdn.com/tild3264-3333-4361-a261-303130366634/-/resize/240x/-/format/webp/images_2.png",
			thumbnail: "https://thumb.tildacdn.com/tild3264-3333-4361-a261-303130366634/-/resize/240x/-/format/webp/images_2.png",
		},
		{
			original: "https://thumb.tildacdn.com/tild3365-3038-4430-b333-633465616166/-/resize/240x/-/format/webp/images36.png",
			thumbnail: "https://thumb.tildacdn.com/tild3365-3038-4430-b333-633465616166/-/resize/240x/-/format/webp/images36.png",
		},
		{
			original: "https://thumb.tildacdn.com/tild3964-6364-4365-b638-616461346234/-/resize/240x/-/format/webp/image001_385.jpg",
			thumbnail: "https://thumb.tildacdn.com/tild3964-6364-4365-b638-616461346234/-/resize/240x/-/format/webp/image001_385.jpg",
		},
	];

	return (
		<>
			<div className="container py-6 text-center">
				<h4 style={{ fontSize: 24 }}>
					{data.title}
				</h4>
			</div>
			<div className="container flex items-center justify-center" style={{ paddingBottom: 36 }}>

				{
					imgs.map((item, idx) => {
						return (
							<img key={idx} src ={item.original} width="100" height={"100"} style={{ objectFit: "cover",
								padding: 5,
								margin: 5 }} />
						);
					})
				}

				{/* <ImageGallery
					items={[...imgs]}
					showPlayButton={false}
					autoPlay={true}
					showBullets={false}
					showThumbnails={true}
					showNav={false}
					infinite={true}
					showFullscreenButton={false}
					slideDuration={1000}
					slideInterval={6000}
					renderItem={() => {
						return (<></>);
					}}
					renderThumbInner={({ thumbnail }) => {
						return (
							<div style={{ height: 100 }}>
								<img
									width={"100%"}
									height={"100%"}
									src={thumbnail}
									style={{ objectFit: "contain" }}
								/>
							</div>
						);
					}}
				/> */}
			</div>
		</>
	);
};

Developers.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string,
		items: PropTypes.array,
	}),
};

export default Developers;
