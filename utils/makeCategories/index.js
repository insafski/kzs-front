export default function makeCategories(categories = []) {
	return categories.reduce((result, { slug, m_slug, m_picture, m_heading, ...props }) => {
		const current = result.some(({ slug: currentSlug }) => currentSlug === slug);
		const manufacturer = {
			slug: m_slug,
			picture: m_picture,
			heading: m_heading,
			categorySlug: slug,
		};

		if (current) {
			const currentIdx = result.findIndex(({ slug: currentSlug }) => currentSlug === slug);

			result[currentIdx].links.push(manufacturer);
		} else {
			result.push({
				slug,
				...props,
				links: [manufacturer],
			});
		}

		return result;
	}, []);
}
