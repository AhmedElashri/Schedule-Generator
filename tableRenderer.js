const FNDICT = {
	createSchedule: createSchedule,
	createShifts: createShifts,
	createSignature: createSignature
}

const tableDisplay = document.querySelector(".table-save")

function renderSchedule() {
	//todo make it check if they are enabled
	tableDisplay.textContent = ""

	const title = document.createElement("h1")
	title.classList.add("table-title")
	if (CUSTOM_TABLE_TITLE_SELECTOR.value != "" && CUSTOM_TABLE_TITLE_SELECTOR.value !== null) {
		title.textContent = CUSTOM_TABLE_TITLE_SELECTOR.value
	} else {
		CUSTOM_TABLE_TITLE_SELECTOR.value = GetTextMonth() + " " + GetTextYear() + " Schedule"
		title.textContent = CUSTOM_TABLE_TITLE_SELECTOR.value
	}
	tableDisplay.appendChild(title)


	var itemOrder = []
	var itemOrderList = document.querySelectorAll(".sortable-item")
	itemOrderList.forEach((item) => {
		if (item.querySelector(".item-checkbox").checked) {
			let funcName = "create" + item.dataset.name
			itemOrder.push(window[funcName])
		}
	})

	console.log(itemOrder)
	itemOrder.forEach((item) => {
		item()
	})

	//cleanup
	document.querySelector(".shifts").style.width = document.querySelector(".the-table").offsetWidth + "px"

}

function createSchedule() {
	width = GetShiftCount()

	const table = document.createElement("table")
	table.classList.add("the-table")

	const tableheader = document.createElement("thead")
	const headerRow = document.createElement("tr")
	
	let head = ["Day", "Date"]
	head.forEach((headerText) => {
		const th = document.createElement("th")
		th.textContent = headerText
		headerRow.appendChild(th)
	})

	let headerCount = 0
	datalist[0].forEach((headerText) => {
		const th = document.createElement("th")
		th.classList.add("day-heads")
		th.textContent = headerText
		th.dataset.x = headerCount++
		th.dataset.y = 0
		headerRow.appendChild(th)
	})

	let tail = ["Date", "Day"]
	tail.forEach((headerText) => {
		const th = document.createElement("th")
		th.textContent = headerText
		headerRow.appendChild(th)
	})

	tableheader.appendChild(headerRow)
	table.appendChild(tableheader)

	const tbody = document.createElement("tbody")
	
	for (let i = 1; i < datalist.length; i++) {
		let row = datalist[i]
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

		//People
		for (let j = 0; j < width; j++) {
			let td = document.createElement("td")
			td.innerHTML = row[j+2]
			td.classList.add("people")
			td.dataset.x = j+2
			td.dataset.y = i

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
	}
	table.appendChild(tbody)
	table.addEventListener("click",NameSetter)

	// Add table to the DOM (imma keep this comment, idk why i said dom)
	tableDisplay.appendChild(table)
	// let shiftEnabler = document.querySelector("#shift-enabler")
	// if (shiftEnabler.checked) createShifts()
	// createSignature()
}

function createShifts() {

	const title = document.createElement("h2")
	title.textContent = "Shifts"
	tableDisplay.appendChild(title)

	//!min width for col = 24ch
	const shiftTable = document.createElement("div")
	shiftTable.classList.add("shifts")

	GetShiftsFromNames()
	shifts.forEach(person => {
		if (person[0] == null || person[0] == "") return
		let shiftPerson = document.createElement("div")
		shiftPerson.classList.add("shift-person")
		shiftPerson.textContent = person[0] + ": " + person[1]
		shiftTable.appendChild(shiftPerson)
	})

	tableDisplay.appendChild(shiftTable)
	
	
	//Resize shifts width to match longest name
	let shiftPeople = document.querySelectorAll(".shift-person")
	let mostCharacters = 0

	shiftPeople.forEach(person => {
		if (person.textContent.length > mostCharacters) mostCharacters = person.textContent.length
	})
	
	shiftPeople.forEach(person => {
		person.style.minWidth = "max(16.5ch" + (mostCharacters * 9) + "px)"
	})
	//End of Resize
}

function createSignature() {

	const signBox = document.createElement("div")
	signBox.classList.add("sign-box")

	let signLabel = document.createElement("div")
	signLabel.classList.add("sign-label")
	signLabel.textContent = "Approved by: "

	signBox.appendChild(signLabel)

	let signArea = document.createElement("div")
	signArea.classList.add("sign-area")
	signArea.textContent = "___________________________"
	
	signBox.appendChild(signArea)

	tableDisplay.appendChild(signBox)
}