var currentDate = new Date()
currentDate.setDate(1)
var selectedDate = new Date(currentDate)

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const MONTHS = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
]

function ResetTime() {
	selectedDate = new Date(currentDate)
}

function SelectYear(offset) {
	selectedDate.setFullYear(currentDate.getFullYear() + offset)
	createSchedule()
}

function SelectMonth(month) {
	selectedDate.setMonth(month)
	createSchedule()
}

function GetFirstDay() {
	var dayIndex = selectedDate.getDay()
	return dayIndex
}

function GetDayCount() {
	var lastDay = new Date(
		selectedDate.getFullYear(),
		selectedDate.getMonth() + 1,
		0
	)
	return lastDay.getDate()
}

function GetTextMonth() {
	return MONTHS[selectedDate.getMonth()]
}

function GetTextYear(offset = 0) {
	return Number(selectedDate.getFullYear()) + Number(offset)
}
