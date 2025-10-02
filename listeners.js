const YEAR_SELECTOR = document.querySelector("#year-modifier")
const MONTH_SELECTOR = document.querySelector("#month-modifier")
const SHIFT_SELECTOR = document.querySelector("#shift-selector")
const SHIFT_ENABLER = document.querySelector("#shift-enabler")
const TEST_DATA = document.querySelector("#test-data-button")
const FILE_INPUT = document.querySelector("#file-input")
const NAME_SELECTOR = document.querySelector("#name-selector")
const CUSTOM_TABLE_TITLE_SELECTOR = document.querySelector("#custom-table-title")
const SAVE_IMAGE = document.querySelector("#save-image")
const ITEM_CHECKBOX = document.querySelectorAll(".item-checkbox")

YEAR_SELECTOR.addEventListener("change", YearSelectorSelect)
MONTH_SELECTOR.addEventListener("change", MonthSelectorSelect)
SHIFT_SELECTOR.addEventListener("change", ShiftSelectorSelect)
SHIFT_ENABLER.addEventListener("change", ShiftEnablerChecked)
FILE_INPUT.addEventListener("change", FileInputUsed)
NAME_SELECTOR.addEventListener("change", SelectName)
TEST_DATA.addEventListener("click", TestData)
CUSTOM_TABLE_TITLE_SELECTOR.addEventListener("change", ChangeTableTitle)
SAVE_IMAGE.addEventListener("click", SaveImage)
ITEM_CHECKBOX.forEach((checkbox) => {
  checkbox.addEventListener("change", renderSchedule)
})

function ChangeTableTitle() {
	renderSchedule()
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
	if ((cell && cell.classList.contains("people") && cell.tagName ==="TD") || (cell.tagName === "TH"))  {
		EditDataList(cell.dataset.x, cell.dataset.y, selectedName)
	}
}

function MonthSelectorSelect() {
	SelectMonth(Number(this.value))
	CUSTOM_TABLE_TITLE_SELECTOR.value = GetTextMonth() + " " + GetTextYear() + " Schedule"
	createDataList(SHIFT_SELECTOR.value)
}

function YearSelectorSelect() {
	SelectYear(Number(this.value))
	createDataList(SHIFT_SELECTOR.value)
}

function ShiftSelectorSelect() {
	createDataList(this.value)
}

function ShiftEnablerChecked() {
	renderSchedule()
}

function SelectName() {
	selectedName = this.value.trim()
}

function TestData() {
	AddTestData()
}


const list = document.querySelector('.sortable-item-container');
let draggingItem = null;

// enable drag only from handle
document.querySelectorAll('.part-handle').forEach(handle => {
  handle.addEventListener('mousedown', (e) => {
    const item = e.target.closest('.sortable-item');
    item.setAttribute('draggable', 'true');
  });
  handle.addEventListener('mouseup', (e) => {
    const item = e.target.closest('.sortable-item');
    item.removeAttribute('draggable');
  });
});

// standard drag events
list.addEventListener('dragstart', (e) => {
  draggingItem = e.target.closest('.sortable-item');
  draggingItem.classList.add('dragging');
});

list.addEventListener('dragend', (e) => {
  e.target.classList.remove('dragging');
  document.querySelectorAll('.over')
    .forEach(item => item.classList.remove('over'));
  draggingItem.removeAttribute('draggable'); // safety reset
  draggingItem = null;
  renderSchedule()
});

list.addEventListener('dragover', (e) => {
  e.preventDefault();
  const draggingOverItem = getDragAfterElement(list, e.clientY);
  document.querySelectorAll('.over')
    .forEach(item => item.classList.remove('over'));
  if (draggingOverItem) {
    draggingOverItem.classList.add('over');
    list.insertBefore(draggingItem, draggingOverItem);
  } else {
    list.appendChild(draggingItem);
  }
});

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.sortable-item:not(.dragging)')];
  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child };
    } else {
      return closest;
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}