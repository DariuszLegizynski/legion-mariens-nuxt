import Link from "next/link"

import { Event } from "@/types/Event"

const EventModal = ({ eventItem, onClose }: { eventItem: Event; onClose: () => void }) => {
	if (!eventItem) return null

	const handleModalClick = (e: React.MouseEvent) => {
		e.stopPropagation()
	}

	const startTime = new Date(eventItem.attributes.startTime)
	const startDate = startTime.toLocaleDateString("de-DE", {
		day: "numeric",
		month: "long",
		year: "numeric",
	})

	let endDate: string | undefined

	if (eventItem.attributes?.endTime) {
		const endTime = new Date(eventItem.attributes.endTime)
		endDate = endTime.toLocaleDateString("de-DE", {
			day: "numeric",
			month: "long",
			year: "numeric",
		})
	}

	console.log({ eventItem })

	return (
		<section className="fixed inset-0 flex items-center justify-center z-20" onClick={onClose}>
			<div className="bg-white m-4 p-6 shadow-lg w-full z-30" onClick={handleModalClick}>
				<section className="border-l-[3px] border-primary pl-1.5">
					<div className="grid auto-rows-auto md:flex">
						<p className="text-[1.375rem] text-primary mb-1.5">{startDate}</p>
						{endDate && <p className="text-[1.375rem] text-primary mb-1.5">&nbsp;- {endDate}</p>}
					</div>
					<p>
						{eventItem.attributes?.arrival?.street} {eventItem.attributes?.arrival?.number}
						{eventItem.attributes?.arrival?.addressAddition}
					</p>
					<p>
						{eventItem.attributes?.arrival?.city}, {eventItem.attributes?.arrival?.country}
					</p>
					<p style={{ fontFamily: "Open-Sans-Italic, sans-serif" }}>{eventItem.attributes?.arrival?.shortDescription}</p>
					<p>
						<b>Veranstalter: </b>
						{eventItem.attributes?.arrival?.organiser}
					</p>
					<p>
						<b>Kontaktperson: </b>
					</p>
					<p>{eventItem.attributes?.arrival?.contactPerson}</p>
					<p>
						<Link href={`tel:${eventItem.attributes?.arrival?.phone}`}>{eventItem.attributes?.arrival?.phone}</Link>
					</p>
					<p>
						<Link href={`mailto:${eventItem.attributes?.arrival?.email}`}>{eventItem.attributes?.arrival?.email}</Link>
					</p>
				</section>
				<section>
					<div className="h1 !normal-case mb-4">{eventItem.attributes.title}</div>
					<p>{eventItem.attributes.category.data.attributes.category}</p>
				</section>
				<section>{/* add description */}</section>
				<button onClick={onClose} className="mt-4 p-2 bg-primary text-white rounded">
					Close
				</button>
			</div>
			<div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
		</section>
	)
}

export default EventModal
