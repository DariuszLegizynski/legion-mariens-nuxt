import { useRouter } from "next/router"
import Link from "next/link"

import IconItems from "@/components/base/IconItems"

interface BaseButtonProps {
	buttonType?: string
	iconType?: string
	text?: string
	width?: string
	height?: string
	linkPath?: string
	isDisabled?: boolean
	onClick?: () => void
}

const BaseButton: React.FC<BaseButtonProps> = ({ buttonType, iconType, text, width, height, linkPath, isDisabled, onClick }) => {
	const router = useRouter()

	return (
		<>
			{buttonType === "close" && (
				<button className="p-2 text-grey">
					<IconItems type={iconType} width={width} height={height} />
				</button>
			)}
			{buttonType === "accent" && (
				<Link href={`${linkPath}`} className="p-2 min-w-56 text-accent text-sm text-center uppercase border-2 border-accent w-full">
					{text}
				</Link>
			)}
			{buttonType === "submit" && (
				<button disabled={isDisabled} type="submit" className="p-2 min-w-56 text-accent text-sm text-center uppercase border-2 border-accent w-full">
					<p>{text}</p>
				</button>
			)}
			{buttonType === "logout" && (
				<button onClick={onClick} className="p-2 text-accent uppercase w-full">
					<p>{text}</p>
				</button>
			)}
		</>
	)
}

export default BaseButton
