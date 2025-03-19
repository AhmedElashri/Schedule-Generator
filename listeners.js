const YEAR_SELECTOR = document.querySelector("#year-modifier")
const MONTH_SELECTOR = document.querySelector("#month-modifier")
const SHIFT_SELECTOR = document.querySelector("#shift-selector")
const SHIFT_ENABLER = document.querySelector("#shift-enabler")
const TEST_DATA = document.querySelector("#test-data-button")
const FILE_INPUT = document.querySelector("#file-input")

function MonthSelectorSelect() {
	SelectMonth(Number(this.value))
}

function YearSelectorSelect() {
	SelectYear(Number(this.value))
}

function ShiftSelectorSelect() {
	CreateDataList(this.value)
}

function ShiftEnablerChecked() {
	createTable()
}


FILE_INPUT.addEventListener("change", event=> {
	var file = event.target.files[0]

	if (file) {
		const reader = new FileReader();        
		reader.onload = function(e) {
			let image = e.target.result
			ReadShiftMetadata(image)
		}
		reader.readAsDataURL(file)
	}
})

function TestData() {
	AddTestData()
}

YEAR_SELECTOR.addEventListener("change", YearSelectorSelect)
MONTH_SELECTOR.addEventListener("change", MonthSelectorSelect)
SHIFT_SELECTOR.addEventListener("change", ShiftSelectorSelect)
SHIFT_ENABLER.addEventListener("change", ShiftEnablerChecked)
TEST_DATA.addEventListener("click", TestData)
