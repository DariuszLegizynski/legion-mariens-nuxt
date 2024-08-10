const EventCalendar = ({ categories, setCategory, setStartDate, setEndDate }) => {
	return (
		<section className="flex flex-col items-center gap-y-4 my-8">
			<select className="border-2 border-primary py-1.5 px-2.5 min-w-56" onChange={e => setCategory(e.target.value)}>
				<option value="Alle Kategorien">Alle Kategorien</option>
				{categories &&
					categories.map(cat => (
						<option key={cat.id} value={cat.attributes.category}>
							{cat.attributes.category}
						</option>
					))}
			</select>
			<input className="border-2 border-primary py-1.5 px-2.5 min-w-56" type="date" onChange={e => setStartDate(new Date(e.target.value).toISOString())} />
			<input className="border-2 border-primary py-1.5 px-2.5 min-w-56" type="date" onChange={e => setEndDate(new Date(e.target.value).toISOString())} />
		</section>
	)
}

export default EventCalendar
