import { useState, useEffect } from "react"

const products = () => {
	// const { token } = req.cookies

	// if (!token) {
	// 	return {
	// 		redirect: {
	// 			destination: "/login",
	// 			permanent: false,
	// 		},
	// 	}
	// }

	// const res = await fetch(`${process.env.STRAPI_API_URL}/users/me`, {
	// 	headers: {
	// 		Authorization: `Bearer ${token}`,
	// 	},
	// })

	// if (!res.ok) {
	// 	return {
	// 		redirect: {
	// 			destination: "/login",
	// 			permanent: false,
	// 		},
	// 	}
	// }

	// const user = await res.json()

	const [productsData, setProductsData] = useState<Products[]>([])

	useEffect(() => {
		const fetchProducts = async () => {
			const response = await fetch(`${process.env.API_URL}/api/products?populate=*`)
			const data = await response.json()

			setProductsData(data)
		}
		fetchProducts()
	}, [])

	console.log(productsData)

	return <div>products</div>
}

export default products
