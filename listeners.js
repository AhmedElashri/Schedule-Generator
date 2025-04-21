const YEAR_SELECTOR = document.querySelector("#year-modifier")
const MONTH_SELECTOR = document.querySelector("#month-modifier")
const SHIFT_SELECTOR = document.querySelector("#shift-selector")
const SHIFT_ENABLER = document.querySelector("#shift-enabler")
const TEST_DATA = document.querySelector("#test-data-button")
const FILE_INPUT = document.querySelector("#file-input")
const NAME_SELECTOR = document.querySelector("#name-selector")
const CUSTOM_TABLE_TITLE_SELECTOR = document.querySelector("#custom-table-title")
const SAVE_IMAGE = document.querySelector("#save-image")

YEAR_SELECTOR.addEventListener("change", YearSelectorSelect)
MONTH_SELECTOR.addEventListener("change", MonthSelectorSelect)
SHIFT_SELECTOR.addEventListener("change", ShiftSelectorSelect)
SHIFT_ENABLER.addEventListener("change", ShiftEnablerChecked)
FILE_INPUT.addEventListener("change", FileInputUsed)
NAME_SELECTOR.addEventListener("change", SelectName)
TEST_DATA.addEventListener("click", TestData)
CUSTOM_TABLE_TITLE_SELECTOR.addEventListener("change", ChangeTableTitle)
SAVE_IMAGE.addEventListener("click", SaveImage)

function ChangeTableTitle() {
	createTable()
}

function FileInputUsed(event){
	var file = event.target.files[0]

	if (file) {
		const reader = new FileReader();        
		reader.onload = function(e) {
			let image = e.target.result
			ReadShiftMetadata(image)
		}
		reader.readAsDataURL(file)
	}
}

function NameSetter(event) {
	var cell = event.target
	if (cell && cell.classList.contains("people") && cell.tagName ==="TD") {
		EditDataList(cell.dataset.x, cell.dataset.y, selectedName)
	}
}

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

function SelectName() {
	selectedName = this.value.trim()
}

function TestData() {
	AddTestData()
}

