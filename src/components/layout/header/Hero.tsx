import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

// helpers
import fetchHero from "@/helpers/fetch-hero"

const Hero = () => {
	const [heroContent, setHeroContent] = useState<null | { centerImage: any; leftImage: any; rightImage: any }>(null)
	useEffect(() => {
		const fetchData = async () => {
			const response = await fetchHero()

			setHeroContent(response)
		}
		fetchData()
	}, [])

	return (
		<section className="flex flex-col items-center justify-items-center gap-y-4 mt-12 mx-4 md:grid md:grid-cols-[5fr_2fr_5fr] md:gap-x-8 md:mt-20 md:">
			{heroContent?.leftImage?.url && (
				<Link href="/">
					<Image
						className="max-w-[400px] w-full min-h-24"
						src={`${process.env.API_URL}${heroContent.leftImage?.url}`}
						alt={`${process.env.API_URL}/${heroContent.leftImage?.alternativeText}`}
						width={400}
						height={200}
					/>
				</Link>
			)}
			{heroContent?.centerImage?.url && (
				<Image
					className="max-w-[400px] w-full md:max-w-[640px]"
					src={`${process.env.API_URL}${heroContent.centerImage?.url}`}
					alt={`${process.env.API_URL}/${heroContent.centerImage?.alternativeText}`}
					width={400}
					height={600}
				/>
			)}
			{heroContent?.rightImage?.url && (
				<Image
					className="hidden max-w-[400px] w-full md:block"
					src={`${process.env.API_URL}${heroContent.rightImage?.url}`}
					alt={`${process.env.API_URL}/${heroContent.rightImage?.alternativeText}`}
					width={400}
					height={200}
				/>
			)}
		</section>
	)
}

export default Hero
