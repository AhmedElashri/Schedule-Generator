const YEAR_CONTAINER = document.querySelector(".year-mod-container")
const MONTH_CONTAINER = document.querySelector(".month-mod-container")
const SHIFT_CONTAINER = document.querySelector(".shift-counter-container")
const SORTABLE_ITEM_CONTAINER = document.querySelector(".sortable-item-container")
const SHIFT_ENABLER_CONTAINER = document.querySelector(".shift-enabler-container")
const FILE_INPUT_CONTAINER = document.querySelector(".file-input-container")
const NAME_SELECTOR_CONTAINER = document.querySelector(".name-selector-container")
const CUSTOM_TABLE_TITLE = document.querySelector(".custom-table-title-container")

//- Year Selector
var yearLabel = document.createElement("label")
yearLabel.setAttribute("for", "year-modifier")
yearLabel.textContent = "Select Year: "
YEAR_CONTAINER.appendChild(yearLabel)

var yearSelect = document.createElement("select")
yearSelect.name = "year-modifier"
yearSelect.id = "year-modifier"

var yearValues = [GetTextYear(-1), GetTextYear(), GetTextYear(1)]
for (let i = -1; i < 2; i++) {
	let option = document.createElement("option")
	option.value = i
	option.textContent = yearValues[i + 1]
	if (i == 0) option.selected = "selected"
	yearSelect.appendChild(option)
}
YEAR_CONTAINER.appendChild(yearSelect)

//- Month Selector
var monthLabel = document.createElement("label")
monthLabel.setAttribute("for", "month-modifier")
monthLabel.textContent = "Select Month: "
MONTH_CONTAINER.appendChild(monthLabel)

var yearSelect = document.createElement("select")
yearSelect.name = "month-modifier"
yearSelect.id = "month-modifier"

for (let i = 0; i < 12; i++) {
	let option = document.createElement("option")
	option.value = i
	option.textContent = MONTHS[i]
	if (MONTHS[i] == GetTextMonth()) option.selected = "selected"
	yearSelect.appendChild(option)
}
MONTH_CONTAINER.appendChild(yearSelect)

//Shift Count Selector
var shiftSelectorLabel = document.createElement("label")
shiftSelectorLabel.setAttribute("for", "shift-selector")
shiftSelectorLabel.textContent = "Shift Count (1 or more): "
SHIFT_CONTAINER.appendChild(shiftSelectorLabel)

var shiftSelector = document.createElement("input")
shiftSelector.name = "shift-selector"
shiftSelector.id = "shift-selector"
shiftSelector.type = "number"
shiftSelector.value = 2
SHIFT_CONTAINER.appendChild(shiftSelector)

//Shift Enabler
var shiftEnablerLabel = document.createElement("label")
shiftEnablerLabel.setAttribute("for", "shift-enabler")
shiftEnablerLabel.textContent = "Enable Shift Table: "
SHIFT_ENABLER_CONTAINER.appendChild(shiftEnablerLabel)

var shiftEnabler = document.createElement("input")
shiftEnabler.name = "shift-enabler"
shiftEnabler.id = "shift-enabler"
shiftEnabler.type = "checkbox"
shiftEnabler.checked = true
SHIFT_ENABLER_CONTAINER.appendChild(shiftEnabler)

//Input File 
var fileInputLabel = document.createElement("label")
fileInputLabel.setAttribute("for", "file-input")
fileInputLabel.textContent = "Select File: "
FILE_INPUT_CONTAINER.appendChild(fileInputLabel)

var fileInput = document.createElement("input")
fileInput.name = "file-input"
fileInput.id = "file-input"
fileInput.type = "file"
fileInput.accept = ".jpg"
FILE_INPUT_CONTAINER.appendChild(fileInput)

//Test Data Button
var testDataContainer = document.querySelector(".testdata")
var testDataButton = document.createElement("button")
testDataButton.id = "test-data-button"
testDataButton.textContent = "AddTestData"
testDataContainer.appendChild(testDataButton)

//Name Selector
var nameSelectorLabel = document.createElement("label")
nameSelectorLabel.setAttribute("for", "name-selector")
nameSelectorLabel.textContent = "Select Name: "
NAME_SELECTOR_CONTAINER.appendChild(nameSelectorLabel)

var nameSelector = document.createElement("input")
nameSelector.name = "name-selector"
nameSelector.id = "name-selector"
NAME_SELECTOR_CONTAINER.appendChild(nameSelector)

//Custom Table Title
var customTableTitleLabel = document.createElement("label")
customTableTitleLabel.setAttribute("for", "custom-table-name")
customTableTitleLabel.textContent = "Insert Custom Table Name: "
CUSTOM_TABLE_TITLE.appendChild(customTableTitleLabel)

var customTableTitle = document.createElement("input")
customTableTitle.name = "custom-table-title"
customTableTitle.id = "custom-table-title"
CUSTOM_TABLE_TITLE.appendChild(customTableTitle)

//Test Data Button
var saveImageContainer = document.querySelector(".save-image-container")
var SaveImageButton = document.createElement("button")
SaveImageButton.id = "save-image"
SaveImageButton.textContent = "Save As Image"
saveImageContainer.appendChild(SaveImageButton)

//Sortable Item Container
var itemOrder = ["Schedule", "Shifts", "Signature"]
itemOrder.forEach((item) => {
	let sortableItem = document.createElement("div")
	sortableItem.classList.add("sortable-item")
	sortableItem.dataset.name = item

	let checkboxHolder = document.createElement("checkbox-holder")
	checkboxHolder.classList.add("part-checkbox")

	let checkbox = document.createElement("input")
	checkbox.type = "checkbox"
	checkboxHolder.appendChild(checkbox)

	sortableItem.appendChild(checkboxHolder)

	let itemName = document.createElement("div")
	itemName.classList.add("part-name")
	itemName.textContent = item

	sortableItem.appendChild(itemName)

	let ItemHandle = document.createElement("div")
	ItemHandle.classList.add("part-handle")
	ItemHandle.textContent = "☰"

	sortableItem.appendChild(ItemHandle)
	SORTABLE_ITEM_CONTAINER.appendChild(sortableItem)
})
