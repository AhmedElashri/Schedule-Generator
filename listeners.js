const YEAR_SELECTOR = document.querySelector("#year-modifier")
const MONTH_SELECTOR = document.querySelector("#month-modifier")
const SHIFT_SELECTOR = document.querySelector("#shift-selector")

function MonthSelectorSelect() {
	SelectMonth(Number(this.value))
}

function YearSelectorSelect() {
	SelectYear(Number(this.value))
}

function ShiftSelectorSelect() {
	CreateDataList(this.value)
}

YEAR_SELECTOR.addEventListener("change", YearSelectorSelect)
MONTH_SELECTOR.addEventListener("change", MonthSelectorSelect)
SHIFT_SELECTOR.addEventListener("change", ShiftSelectorSelect)
