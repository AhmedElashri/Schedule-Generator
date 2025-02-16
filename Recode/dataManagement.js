var datalist = []
CreateDataList()

function CreateDataList() {
	var y = GetDayCount()
	var array = []
	var dayIndex = GetFirstDay()

	for (let i = 0; i < y; i++) {
		let row = [DAYS[(dayIndex + i) % 7], i + 1, null, null]
		array.push(row)
	}

	datalist = array
}

function EditDataList(x, y, value) {
	if (x < 2 && x > 3) return
	datalist[y][x] = value
}
