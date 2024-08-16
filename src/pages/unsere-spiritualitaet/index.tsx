import TitleContext from "@/components/common/TitleContext"
import Layout from "@/components/layout"
import { useState, useEffect } from "react"

const page = () => {
	const [spiritData, setSpiritData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`${process.env.API_URL}/api/unsere-spiritualitaet?populate=*`)
			const data = await response.json()

			setSpiritData(data.data.attributes.content)
		}
		fetchData()
	}, [])

	return (
		<Layout>
			<div className="mt-20 mx-4">
				{spiritData.map((item, index) => (
					<TitleContext key={`spiritData_${index}`} title={item.title} content={item.content} />
				))}
			</div>
		</Layout>
	)
}

export default page
