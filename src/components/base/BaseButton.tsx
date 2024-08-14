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
	return (
		<>
			{buttonType === "close" && (
				<button className="p-2 text-grey">
					<IconItems type={iconType} width={width} height={height} />
				</button>
			)}
			{buttonType === "accent" && (
				<Link href={`${linkPath}`} className="p-2 min-w-56 text-accent text-sm text-center uppercase border-2 border-accent w-full max-w-72">
					{text}
				</Link>
			)}
			{buttonType === "submit" && (
				<button disabled={isDisabled} type="submit" className="p-2 min-w-56 text-accent text-sm text-center uppercase border-2 border-accent w-full max-w-72">
					<p>{text}</p>
				</button>
			)}
			{buttonType === "logout" && (
				<button onClick={onClick} className="p-2 text-accent uppercase w-full max-w-72">
					<p>{text}</p>
				</button>
			)}
			{buttonType === "cart" && (
				<button
					onClick={onClick}
					className="p-2 text-black capitalize w-full max-w-52 border border-grey rounded-xl hover:text-white focus:text-white hover:bg-primary focus:bg-primary"
				>
					<p>{text}</p>
				</button>
			)}
		</>
	)
}

export default BaseButton
