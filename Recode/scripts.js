const YEAR_CONTAINER = document.querySelector(".year-mod-container")
const MONTH_CONTAINER = document.querySelector(".month-mod-container")
const SHIFT_CONTAINER = document.querySelector(".shift-counter-container")

//- Year Selector
var yearLabel = document.createElement("label")
yearLabel.setAttribute("for", "year-modifier")
yearLabel.textContent = "Select Year: "
YEAR_CONTAINER.appendChild(yearLabel)

var yearSelect = document.createElement("select")
yearSelect.name = "year-modifier"
yearSelect.id = "year-modifier"

var yearValues = [GetTextYear(-1), GetTextYear(), GetTextYear(1)]
for (let i = -1; i < 2; i++) {
	let option = document.createElement("option")
	option.value = i
	option.textContent = yearValues[i + 1]
	if (i == 0) option.selected = "selected"
	yearSelect.appendChild(option)
}
YEAR_CONTAINER.appendChild(yearSelect)

//- Month Selector
var monthLabel = document.createElement("label")
monthLabel.setAttribute("for", "month-modifier")
monthLabel.textContent = "Select Month: "
MONTH_CONTAINER.appendChild(monthLabel)

var yearSelect = document.createElement("select")
yearSelect.name = "month-modifier"
yearSelect.id = "month-modifier"

for (let i = 0; i < 12; i++) {
	let option = document.createElement("option")
	option.value = i
	option.textContent = MONTHS[i]
	if (MONTHS[i] == GetTextMonth()) option.selected = "selected"
	yearSelect.appendChild(option)
}
MONTH_CONTAINER.appendChild(yearSelect)

//Shift Count Selector
var shiftSelectorLabel = document.createElement("label")
shiftSelectorLabel.setAttribute("for", "shift-selector")
shiftSelectorLabel.textContent = "Shift Count (1 or more): "
SHIFT_CONTAINER.appendChild(shiftSelectorLabel)

var shiftSelector = document.createElement("input")
shiftSelector.name = "shift-selector"
shiftSelector.id = "shift-selector"
shiftSelector.type = "number"
shiftSelector.value = 2
SHIFT_CONTAINER.appendChild(shiftSelector)
