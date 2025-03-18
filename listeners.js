const YEAR_SELECTOR = document.querySelector("#year-modifier")
const MONTH_SELECTOR = document.querySelector("#month-modifier")
const SHIFT_SELECTOR = document.querySelector("#shift-selector")
const SHIFT_ENABLER = document.querySelector("#shift-enabler")

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

YEAR_SELECTOR.addEventListener("change", YearSelectorSelect)
MONTH_SELECTOR.addEventListener("change", MonthSelectorSelect)
SHIFT_SELECTOR.addEventListener("change", ShiftSelectorSelect)
SHIFT_ENABLER.addEventListener("change", ShiftEnablerChecked)
