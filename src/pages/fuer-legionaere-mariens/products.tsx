import { useState, useEffect } from "react"

import Layout from "@/components/product/layout"

// types
import type { Product } from "@/types/Product"

// components
import ProductComponent from "@/components/product/ProductComponent"
import ProductCategories from "@/components/product/ProductCategories"

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

	const [productsData, setProductsData] = useState<Product[]>([])
	const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
	const [productCategories, setProductCategories] = useState<any[]>([])
	const [productCategory, setProductCategory] = useState<string>("")

	useEffect(() => {
		const fetchProducts = async () => {
			const response = await fetch(`${process.env.API_URL}/api/products?populate=*&pagination[pageSize]=150&sort=article_code:ASC`)
			const data = await response.json()

			setProductsData(data)
		}
		fetchProducts()

		const fetchProductCategories = async () => {
			const response = await fetch(`${process.env.API_URL}/api/product-categories?populate=*`)
			const data = await response.json()

			setProductCategories(data.data)
		}
		fetchProductCategories()
	}, [])

	console.log(productsData)

	useEffect(() => {
		let filtered = productsData.data

		if (productCategory && productCategory != "Alles") {
			filtered = filtered.filter(productItem => productItem.attributes?.product_category?.data?.attributes.name === productCategory)
		}

		setFilteredProducts(filtered)
	}, [productCategory, productsData])

	return (
		<Layout>
			<article className="max-container mb-24">
				<h1 className="text-center">Materiallstelle</h1>
				<ProductCategories productCategories={productCategories} setProductCategory={setProductCategory} />
				<section className="grid grid-cols-2 items-center gap-5 mx-5">
					{filteredProducts?.length > 0 ? (
						filteredProducts?.map((productItem: Product) => <ProductComponent key={`product_${productItem.id}`} productItem={productItem} />)
					) : (
						<p className="my-16 col-span-2 text-center text-accent">Keine Produkte für diese Kategorie gefunden.</p>
					)}
				</section>
			</article>
		</Layout>
	)
}

export default products
