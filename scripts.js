var morningCount = 2
var nightCount = 2

var storage = {
    "day": [],
    "night": []
}

function SaveDetails() {
    var morningPeople = document.querySelectorAll(".mp")
    var nightPeople = document.querySelectorAll(".np")

    var daylist = []
    var nightlist = []

    morningPeople.forEach((person) => {
        let name = person.firstElementChild
        let days = person.lastElementChild

        let guy = []
        guy.push(name.value)
        guy.push(days.value.split(","))
        
        daylist.push(guy)
    })

    nightPeople.forEach((person) => {
        let name = person.firstElementChild
        let days = person.lastElementChild

        let guy = []
        guy.push(name.value)
        guy.push(days.value.split(","))
        
        nightlist.push(guy)
    })

    storage.day = daylist
    storage.night = nightlist
    UpdateTable()
}

function StartOfMonth(year, month) {
    return new Date(year, month, 1);
}

function UpdateDateInfo() {
    starts = StartOfMonth(date.getFullYear(), date.getMonth())
    month = MONTHS[date.getMonth()]
    if (date.getMonth() == 1) {
        if ((date.getFullYear() % 4) == 0) {
            month[1] = 29
        } else {
            month[1] = 28
        }
    }
    
    UpdateTable()
}

function UpdateTable() {
    var table = '<H1>' + MONTHS[date.getMonth()][0] + " " + date.getFullYear() + ' Schedule</H1><table id="ahmad"><tr><th class="day">Day</th><th class="date">Date</th><th class="peeps">Morning</th><th class="peeps">Night</th><th class="date">Date</th><th class="day">Day</th></tr>'
    for (let i = 0; i < month[1]; i++) {
        let date = "<td>" + (i + 1) + "</td>" 
        let day = "<td>" + DAYS[((starts.getDay() + i + 1) % 7)] + "</td>"
        let morning = '<td id="morn' + (i+1) + '"></td>'
        let night = '<td id="nigh' + (i+1) + '"></td>'

        table += "<tr>" + day + date + morning + night + date + day + "</tr>"
    }
    table += "</table>"

    // Day Counter Per Person

    var counters = []

    storage.day.forEach((day) => {
        var name = day[0]
        var count = day[1].length
        let noNeed = true

        counters.forEach(person => {
            if (person[0] == name) {
                person[1] += count
                noNeed = false
            }
        });

        if (noNeed) {
            counters.push([name,count])
        }
    })

    storage.night.forEach((night) => {
        var name = night[0]
        var count = night[1].length
        let noNeed = true

        counters.forEach(person => {
            if (person[0] == name) {
                person[1] += count
                noNeed = false
            }
        });
        
        if (noNeed) {
            counters.push([name,count])
        }
    })

    table += `<H2>Shift Numbers</H2>`

    table += `<div class="countDisplay">`

    counters.forEach(person => {
        table += `<div class="counter"> ` + person[0] + ": " + person[1] + ` </div>`
    });
    
    table += `</div>`

    document.querySelector(".display").innerHTML = table

    // Read the day and light list and then

    storage.day.forEach((day) => {
        var name = day[0]
        day[1].forEach((date) => {
            var cell = document.querySelector("#morn"+date)
            if (cell.textContent != "") {
                cell.textContent += " + " + name
            } else {
                cell.textContent = name
            }
        })
    })

    storage.night.forEach((night) => {
        var name = night[0]
        night[1].forEach((date) => {
            var cell = document.querySelector("#nigh"+date)
            if (cell.textContent != "") {
                cell.textContent += " + " + name
            } else {
                cell.textContent = name
            }
        })
    })
}

function NewMorning() {
    var count
    var time
    var clastic

    if (this.dataset.time == "m") {
        morningCount++
        count = morningCount
        time = "m"
        clastic = "mp"
    } else if (this.dataset.time == "n") {
        nightCount++
        count = nightCount
        time = "n"
        clastic = "np"
    }

    var person = document.createElement("div")
    person.classList.add("person-holder")
    person.classList.add(clastic)
    person.id = time + "person" + count

    var personName = document.createElement("input")
    personName.id = time + "person" + count + "-name"
    personName.name = "name"
    personName.type = "text"
    personName.placeholder = "Name"
    person.appendChild(personName)

    var personDays = document.createElement("textarea")
    personDays.id = time + "person" + count + "-day"
    personDays.cols = 30
    personDays.rows = 2
    personDays.name = "daysIn"
    personDays.placeholder = "1,2,5,6,7..."
    person.appendChild(personDays)

    this.parentNode.prepend(person)
}

function CreateImage() {
    var table = document.querySelector(".display")
    
    html2canvas(table).then(canvas => {
        var image = canvas.toDataURL('image/png')
        var link = document.createElement('a')
        link.setAttribute('download', MONTHS[date.getMonth()][0] + ' Schedule.png')
        link.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"))
        link.click()
    })

    CreateText()
}

function CreateText() {
    var newline = "\r\n"
    var text = "Morning" + newline
    var first = true

    console.log(storage.day)
    storage.day.forEach((day) => {
        text += day[0]
        text += "    "
        day[1].forEach((date) => {
            if (first) {
                text += date
                first = false
                return
            }
            text += "," + date
        })
        text += newline
        first = true
    })
    
    text += newline + newline
    text += "Night" + newline


    storage.night.forEach((night) => {
        text += night[0]
        text += "    "
        night[1].forEach((date) => {
            if (first) {
                text += date
                first = false
                return
            }
            text += "," + date
        })
        text += newline
        first = true
    })

    var link = document.createElement('a')
    link.setAttribute('download', MONTHS[date.getMonth()][0] + ' Schedule.txt')
    link.setAttribute('href','data:text/plain;charset=utf-8,' + encodeURIComponent(text))
    link.click()
    
}

function DateChange() {
    date = new Date((ACTUALDATE.getFullYear() + parseInt(yearSelector.value)), parseInt(monthSelector.value), 1)
    UpdateDateInfo()
    UpdateTable()
}

const MONTHS = [
    ["January", 31],
    ["February", 28],
    ["March", 31], 
    ["April", 30], 
    ["May", 31], 
    ["June", 30], 
    ["July", 31], 
    ["August", 31], 
    ["September", 30], 
    ["October", 31], 
    ["November", 30], 
    ["December", 31]
]
const DAYS = [
    "Sat",
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu", 
    "Fri"
]
const ACTUALDATE = new Date()
var date = new Date()

var monthSelector = document.querySelector("#monthSelector")
var yearSelector = document.querySelector("#yearSelector")
monthSelector.selectedIndex = date.getMonth()
monthSelector.addEventListener('change', DateChange)
yearSelector.addEventListener('change', DateChange)

var gloriousTimes = document.querySelectorAll(".prepender")
gloriousTimes.forEach((time) => {
    time.addEventListener('click', NewMorning)
})

var saveButton = document.querySelector("#saveDetails")
saveButton.addEventListener('click', SaveDetails)

var createImg = document.querySelector("#createImage")
createImg.addEventListener('click', CreateImage)

var starts
var month
UpdateDateInfo()