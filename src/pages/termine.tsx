import { useState, useEffect } from "react"

// layout
import Layout from "@/components/layout"

// components
import EventList from "@/components/event/EventList"

const termine = () => {
	const [termine, setTermine] = useState({})

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`${process.env.API_URL}/api/termine?populate=*`)
			const data = await response.json()

			setTermine(data.data.attributes.content)
		}
		fetchData()
	}, [])

	return (
		<Layout>
			<article className="mt-20 mb-40">
				<section className="mx-4">
					<h1 className="mb-8">{termine.title}</h1>
					<div
						dangerouslySetInnerHTML={{
							__html: termine.content?.map((item: Content) => item.children.map((child: Child) => child.text).join("")).join(""),
						}}
						className="text-left mt-4 grid gap-y-4"
					/>
				</section>
				<EventList />
			</article>
		</Layout>
	)
}

export default termine
