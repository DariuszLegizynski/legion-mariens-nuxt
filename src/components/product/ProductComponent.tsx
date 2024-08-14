import { FC } from "react"
import type { Product } from "@/types/Product"
import Image from "next/image"
import BaseButton from "@/components/base/BaseButton"

const ProductComponent: FC<{ productItem: Product }> = ({ productItem }) => {
	return (
		<article className="border border-grey rounded-lg p-2">
			<Image
				className="h-96 p-2 w-auto object-contain mx-auto"
				src={`${process.env.API_URL}${productItem.attributes.image.data.attributes.url}`}
				alt={`${process.env.API_URL}/${productItem.attributes.image.data.attributes.alternativeText}`}
				width={100}
				height={400}
			/>
			<section className="h-72 flex flex-col justify-between">
				<div className="grid grid-rows-[auto_100px_auto] mt-4">
					<i>{productItem.attributes?.product_category?.data?.attributes?.name}</i>
					<h2 className="!capitalize" style={{ fontFamily: "Open-Sans, sans-serif" }}>
						{productItem.attributes?.title}
					</h2>
					<p>Best.Nr: {productItem.attributes?.article_code}</p>
				</div>

				<p>{productItem.attributes?.quantity}</p>
				<p>€ {productItem.attributes?.price.toFixed(2).replace(".", ",")}</p>
				<div className="flex justify-center w-full">
					<BaseButton buttonType="cart" text="Zum Warenkorb" />
				</div>
			</section>
		</article>
	)
}

export default ProductComponent
