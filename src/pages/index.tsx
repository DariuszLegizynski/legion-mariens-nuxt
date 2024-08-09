import { useState, useEffect } from "react"
import Image from "next/image"

// layout
import Layout from "@/components/layout"

// type
import { LandingPageData, Content, Child } from "@/types/LandingPage"

// components
import Separator from "@/components/base/Separator"

const Home = () => {
	const [mainContentData, setMainContentData] = useState<LandingPageData[]>([])

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				`${process.env.API_URL}/api/landing-page?populate[introduction][populate][avatar][populate]=true&populate[about][populate]=true&populate[termine][populate]=true`
			)
			const data = await response.json()

			setMainContentData(data.data.attributes)
		}

		fetchData()
	}, [])

	return (
		<Layout>
			<main className="flex min-h-screen flex-col items-center justify-between mx-4 mt-20">
				{mainContentData.introduction && (
					<section className="flex flex-col mb-8">
						<div>
							<Image
								src={`${process.env.API_URL}${mainContentData.introduction?.avatar.data.attributes.url}`}
								alt={mainContentData.introduction?.avatar.data.attributes.alternativeText || "Avatar"}
								width={64}
								height={64}
								className="float-left mr-5 rounded-full"
							/>
							<h3 className="my-2.5">{mainContentData.introduction?.title}</h3>
						</div>
						<div
							dangerouslySetInnerHTML={{
								__html: mainContentData.introduction?.content?.map((item: Content) => item.children.map((child: Child) => child.text).join("")).join(""),
							}}
							className="text-left mt-4 grid gap-y-4"
						/>
					</section>
				)}
				{mainContentData.about && (
					<section className="flex flex-col mb-8">
						<div className="h2 my-2.5">{mainContentData.about?.title}</div>
						<div
							dangerouslySetInnerHTML={{
								__html: mainContentData.about?.content?.map((item: Content) => item.children.map((child: Child) => child.text).join("")).join(""),
							}}
							className="text-left mt-4 grid gap-y-4"
						/>
					</section>
				)}
				<Separator />
				{mainContentData.termine && (
					<section className="flex flex-col mb-8">
						<div className="h2 my-2.5">{mainContentData.termine?.title}</div>
						<div
							dangerouslySetInnerHTML={{
								__html: mainContentData.termine?.content?.map((item: Content) => item.children.map((child: Child) => child.text).join("")).join(""),
							}}
							className="text-left mt-4 grid gap-y-4"
						/>
					</section>
				)}
			</main>
		</Layout>
	)
}

export default Home
