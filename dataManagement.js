var datalist = []
var shifts = []
var selectedName = ""
const SEPARATORS = /[,;|_\-:/+]+/

function GetShiftCount() {
	return Number(datalist[datalist.length - 1].length - 2)
}

function createDataList(width = 2, height = GetDayCount()) {
	var array = []
	var dayIndex = GetFirstDay()
	if (width <= 0) width = 2 

	// HEADERS
	var headers = ["Morning", "Night"]

	if (width > 2) {
		headers = []
		for (let i = 0; i < width; i++) {
			headers.push("Time " + (i + 1))
		}
	} else if (width == 1) {
		headers = ["Shift"]
	}
	array.push(headers)

	//Rows
	for (let i = 0; i < height; i++) {
		let row = [DAYS[(dayIndex + i) % 7], i + 1]
		for (let i = 0; i < width; i++) {
			row.push("")
		}
		array.push(row)
	}

	datalist = array
	renderSchedule()
}

function EditDataList(x, y, value) {
	if (y != 0 &&(x < 2 ) || x > (GetShiftCount() + 2)) return
	datalist[y][x] = value
	renderSchedule()
}

function GetUniqueNames() {
	var nameList = datalist.slice(1).map(subarray => subarray.slice(-GetShiftCount()))
	console.log(nameList)
	var flatNameList = nameList.flat().flatMap(str => String(str)
		.split(SEPARATORS)
		.map(s => s.trim())
	)
	var uniqueNames = [...new Set(flatNameList)]
	return uniqueNames
}

function GetShiftsFromNames() {
	shifts = []
	var uniqueNames = GetUniqueNames()

	var dataSplitDelimiters = datalist.slice(1).flat().flatMap(str => String(str)
		.split(SEPARATORS)
		.map(s => s.trim())
	)

	uniqueNames.forEach(name => {
		shifts.push([name, dataSplitDelimiters.filter(data => data === name).length])
	});
}

function AddTestData(x = 7) {
	if (x > 7) x = 7
	let names = ["Ahmad", "Mohammad", "Yousef", "Omar", "Khaled", "Osama", "Mitsubishi Material"]
	for (let i = 1; i < GetDayCount() + 1; i++) {
		for (let j = 0; j < GetShiftCount(); j++) {
			datalist[i][j+2] = names[Math.floor(Math.random() * x)]
		}
	}
	renderSchedule()
}