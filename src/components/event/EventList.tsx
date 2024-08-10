import { useState, useEffect } from "react"

// components
import EventComponent from "./EventComponent"
import EventCalendar from "./EventCalendar"

import { Event } from "@/types/Event"

const EventList = () => {
	const [eventList, setEventList] = useState<Event[]>([])
	const [filteredEvents, setFilteredEvents] = useState([])
	const [categories, setCategories] = useState([])
	const [startDate, setStartDate] = useState("")
	const [endDate, setEndDate] = useState("")
	const [category, setCategory] = useState("Alle Kategorien")

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`${process.env.API_URL}/api/events?populate=*&sort=startTime:ASC`)
			const data = await response.json()

			setEventList(data.data)
		}
		fetchData()

		const fetchCategories = async () => {
			const response = await fetch(`${process.env.API_URL}/api/categories?populate=*&sort=category:ASC`)
			const data = await response.json()

			setCategories(data.data)
		}
		fetchCategories()
	}, [])

	useEffect(() => {
		let filtered = eventList

		if (startDate) {
			filtered = filtered.filter(event => new Date(event.attributes.startTime) >= new Date(startDate))
		}

		if (endDate) {
			filtered = filtered.filter(event => new Date(event.attributes.startTime) <= new Date(endDate))
		}

		if (category && category !== "Alle Kategorien") {
			filtered = filtered.filter(event => event.attributes.category.data.attributes.category === category)
		}

		setFilteredEvents(filtered)
	}, [startDate, endDate, category, eventList])

	return (
		<section>
			<EventCalendar categories={categories} setCategory={setCategory} setStartDate={setStartDate} setEndDate={setEndDate} />
			<div className="grid grid-cols-1 gap-y-8 mx-4">
				{filteredEvents.length > 0 ? (
					filteredEvents.map((eventItem: Event, index) => <EventComponent key={`event_${index}`} eventItem={eventItem} isVisible={true} />)
				) : (
					<p className="mt-16 text-center">Keine Ereignisse für diese Kriterien gefunden.</p>
				)}
			</div>
		</section>
	)
}

export default EventList
