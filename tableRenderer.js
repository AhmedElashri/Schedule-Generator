//TODO function to render empty table
function createTable() {
	width = GetShiftCount()
	const tableDisplay = document.querySelector(".table-save")
	tableDisplay.textContent = ""

	const title = document.createElement("h1")
	title.textContent = GetTextMonth() + " " + GetTextYear() + " Schedule"
	tableDisplay.appendChild(title)

	const table = document.createElement("table")
	table.classList.add("the-table")

	const tableheader = document.createElement("thead")
	const headerRow = document.createElement("tr")

	const headers = ["Day", "Date", "Date", "Day"]
	var headersAdded = ["Morning", "Night"]

	if (width > 2) {
		headersAdded = []
		for (let i = 0; i < width; i++) {
			headersAdded.push("Time " + (i + 1))
		}
	} else if (width == 1) {
		headersAdded = ["Shift"]
	}

	headers.splice(2,0,...headersAdded)
	
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
		for (let i = 0; i < width; i++) {
			let td = document.createElement("td")
			td.textContent = row[i+2]
			td.classList.add("people")
			td.dataset.x = i+2
			td.dataset.y = row[1] - 1

			tr.appendChild(td)
		}

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

	// Add table to the DOM (imma keep this comment, idk why i said dom)
	tableDisplay.appendChild(table)
}


//TODO function to populate table with data inside datalist
//TODO Shift numbers with on or off for it
