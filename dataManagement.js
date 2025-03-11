var datalist = []
CreateDataList()

function GetShiftCount() {
	return (datalist[0].length - 2)
}

function CreateDataList(width = 2) {
	var y = GetDayCount()
	var array = []
	var dayIndex = GetFirstDay()
	if (width <= 0) width = 2 

	for (let i = 0; i < y; i++) {
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
