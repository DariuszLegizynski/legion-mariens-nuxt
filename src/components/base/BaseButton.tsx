import { useRouter } from "next/router"

import IconItems from "@/components/base/IconItems"

interface BaseButtonProps {
	buttonType?: string
	iconType?: string
	text?: string
	width?: string
	height?: string
}

const BaseButton: React.FC<BaseButtonProps> = ({ buttonType, iconType, text, width, height }) => {
	const router = useRouter()

	return (
		<>
			{buttonType === "close" && (
				<button className="p-2 text-grey">
					<IconItems type={iconType} width={width} height={height} />
				</button>
			)}
			{buttonType === "accent" && <button className="p-2 min-w-56 text-accent text-sm uppercase border-2 border-accent">{text}</button>}
			{!buttonType && (
				<button className="underline-effect transition-colors duration-200 ease-in-out transform relative">
					<h4>{text}</h4>
					<span />
				</button>
			)}
		</>
	)
}

export default BaseButton
