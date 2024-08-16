import { useState, useEffect } from "react"
import qs from "qs"

import Layout from "@/components/layout"
import PrayerList from "@/components/prayer/PrayerList"
import Separator from "@/components/base/Separator"

const Gebete = () => {
	const [prayerContentData, setPrayerContentData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const url = `${process.env.API_URL}/api/spiritualitaet-gebete?populate[content][populate][content][populate]=*`

			const response = await fetch(url)
			const data = await response.json()

			setPrayerContentData(data.data.attributes)
		}
		fetchData()
	}, [])
	console.log({ prayerContentData })
	return (
		<Layout>
			<article className="mt-24 mx-4">
				<h1>{prayerContentData.title}</h1>

				{prayerContentData.content?.map((item, index) => (
					<div className="mt-24" key={`PrayerList_${index}`}>
						<PrayerList content={item.content} />
						{index < prayerContentData.content?.length - 1 && <Separator />}
					</div>
				))}
			</article>
		</Layout>
	)
}

export default Gebete
