const YEAR_SELECTOR = document.querySelector("#year-modifier")
const MONTH_SELECTOR = document.querySelector("#month-modifier")

function MonthSelectorSelect() {
	SelectMonth(Number(this.value))
}

function YearSelectorSelect() {
	SelectYear(Number(this.value))
}

YEAR_SELECTOR.addEventListener("change", YearSelectorSelect)
MONTH_SELECTOR.addEventListener("change", MonthSelectorSelect)
