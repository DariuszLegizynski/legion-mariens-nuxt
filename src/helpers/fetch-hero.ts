const fetchHero = async () => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/main-layout?populate[hero][populate]=*`)
	const data = await response.json()

	// Assuming hero is an array and we need to find "images.three-columns-images"
	const heroComponents = data.data.attributes.hero

	// Find the component of type "images.three-columns-images"
	const threeColumnsImagesComponent = heroComponents.find(component => component.__component === "images.three-columns-images")

	if (threeColumnsImagesComponent) {
		const { centerImage, leftImage, rightImage } = threeColumnsImagesComponent

		return {
			centerImage: centerImage.data ? centerImage.data.attributes : null,
			leftImage: leftImage.data ? leftImage.data.attributes : null,
			rightImage: rightImage.data ? rightImage.data.attributes : null,
		}
	}

	// If not found, return an empty object or null
	return { centerImage: null, leftImage: null, rightImage: null }
}

export default fetchHero
