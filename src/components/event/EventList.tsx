import { useState, useEffect } from "react"

import EventComponent from "./EventComponent"

import { Event } from "@/types/Event"

const EventList = () => {
	const [eventList, setEventList] = useState<Event[]>([])

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`${process.env.API_URL}/api/events?populate=*`)
			const data = await response.json()

			setEventList(data.data)
		}

		fetchData()
	}, [])

	console.log(eventList)

	return (
		<section>
			<p>All Categories</p>
			<p>StartDate</p>
			<p>EndDate</p>
			<button>Filter</button>
			<div className="grid grid-cols-1 gap-y-8 mx-4">
				{eventList && eventList.map((eventItem: Event, index) => <EventComponent key={`event_${index}`} eventItem={eventItem} />)}
			</div>
		</section>
	)
}

export default EventList
