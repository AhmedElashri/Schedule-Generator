//TODO function to render empty table
function createTable() {
	const tableDisplay = document.querySelector(".table-save")

	const title = document.createElement("h1")
	title.textContent =
		getTextMonth() + " " + selectedDate.getFullYear() + " Schedule"
	tableDisplay.appendChild(title)

	const table = document.createElement("table")
	table.classList.add("the-table")

	const tableheader = document.createElement("thead")
	const headerRow = document.createElement("tr")

	const headers = ["Day", "Date", "Morning", "Night", "Date", "Day"]
	headers.forEach((headerText) => {
		const th = document.createElement("th")
		th.textContent = headerText
		headerRow.appendChild(th)
	})

	tableheader.appendChild(headerRow)
	table.appendChild(tableheader)

	const tbody = document.createElement("tbody")
	datalist.forEach((row) => {
		const tr = document.createElement("tr")
		//day
		let day = document.createElement("td")
		day.textContent = row[0]
		day.classList.add("day")
		if (row[0] == "Fri") tr.classList.add("friday")

		tr.appendChild(day)

		//date
		let date = document.createElement("td")
		date.textContent = row[1]
		date.classList.add("date")

		tr.appendChild(date)

		//morning
		let morning = document.createElement("td")
		morning.textContent = row[2]
		morning.classList.add("people")
		morning.dataset.x = 2
		morning.dataset.y = row[1] - 1

		tr.appendChild(morning)

		//night
		let night = document.createElement("td")
		night.textContent = row[3]
		night.classList.add("people")
		night.dataset.x = 3
		night.dataset.y = row[1] - 1

		tr.appendChild(night)

		//date
		let date2 = document.createElement("td")
		date2.textContent = row[1]
		date2.classList.add("date")

		tr.appendChild(date2)

		tbody.appendChild(tr)

		//day
		let day2 = document.createElement("td")
		day2.textContent = row[0]
		day2.classList.add("day")

		tr.appendChild(day2)
	})
	table.appendChild(tbody)

	// Add table to the DOM
	tableDisplay.appendChild(table)
}

createTable()

//TODO function to populate table with data inside datalist
//TODO Shift numbers with on or off for it
