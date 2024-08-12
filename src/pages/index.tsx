import { useState, useEffect } from "react"
import Image from "next/image"

// layout
import Layout from "@/components/layout"

// type
import { LandingPageData, Content, Child } from "@/types/LandingPage"

// components
import Separator from "@/components/base/Separator"
import EventComponent from "@/components/event/EventComponent"
import BaseButton from "@/components/base/BaseButton"

export const metadata = {
	title: "Legion Mariens",
	description: "Legion Mariens Website",
}

const Home = () => {
	const [mainContentData, setMainContentData] = useState<LandingPageData[]>([])
	const [events, setEvents] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				`${process.env.API_URL}/api/landing-page?populate[introduction][populate][avatar][populate]=true&populate[about][populate]=true&populate[termine][populate]=true`
			)
			const data = await response.json()

			setMainContentData(data.data.attributes)
		}
		fetchData()

		const fetchEvents = async () => {
			const today = new Date().toISOString()
			const response = await fetch(`${process.env.API_URL}/api/events?filters[startTime][$gte]=${today}&pagination[pageSize]=10&populate=*&sort=startTime:ASC`)
			const data = await response.json()

			setEvents(data.data)
		}
		fetchEvents()
	}, [])

	return (
		<Layout>
			<main className="flex min-h-screen flex-col items-center justify-between mx-4 my-20">
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
				<section className="grid grid-cols-1 gap-y-8">
					{events.length > 0 ? (
						events.map((eventItem: Event, index) => <EventComponent key={`event_${index}`} eventItem={eventItem} isVisible={true} />)
					) : (
						<p className="mt-16 text-center">Keine Ereignisse für diese Kriterien gefunden.</p>
					)}
					<BaseButton text="Alle Termine" buttonType="accent" linkPath="/termine" />
				</section>
			</main>
		</Layout>
	)
}

export default Home
