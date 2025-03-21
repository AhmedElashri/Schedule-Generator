var datalist = []
var shifts = []
var selectedName = ""

function GetShiftCount() {
	return Number(datalist[0].length - 2)
}

function CreateDataList(width = 2, height = GetDayCount()) {
	var array = []
	var dayIndex = GetFirstDay()
	if (width <= 0) width = 2 

	for (let i = 0; i < height; i++) {
		let row = [DAYS[(dayIndex + i) % 7], i + 1]
		for (let i = 0; i < width; i++) {
			row.push(null)
		}
		array.push(row)
	}

	datalist = array
	createTable()
}

function EditDataList(x, y, value) {
	if (x < 2 || x > (GetShiftCount() + 2)) return
	datalist[y][x] = value
	createTable()
}

function GetUniqueNames() {
	var nameList = datalist.map(subarray => subarray.slice(-GetShiftCount()))
	var flatNameList = nameList.flat()
	var uniqueNames = [...new Set(flatNameList)]
	return uniqueNames
}

function GetShiftsFromNames() {
	shifts = []
	var uniqueNames = GetUniqueNames()
	uniqueNames.forEach(name => {
		shifts.push([name, datalist.flat().filter(data => data === name).length])
	});
}

function AddTestData(x = 7) {
	if (x > 7) x = 7
	let names = ["Ahmad", "Mohammad", "Yousef", "Omar", "Khaled", "Osama", "Mitsubishi Material"]
	for (let i = 0; i < GetDayCount(); i++) {
		for (let j = 0; j < GetShiftCount(); j++) {
			datalist[i][j+2] = names[Math.floor(Math.random() * x)]
		}
	}
	createTable()
}