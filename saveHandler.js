function CreateImage() {
    var table = document.querySelector(".table-save")
    
    html2canvas(table).then(canvas => {
        var image = canvas.toDataURL('image/jpeg')

        var imageMeta = AddShiftMetadata(image)

        var link = document.createElement('a')
        link.setAttribute('download', GetTextMonth() + ' Schedule.jpg')
        link.setAttribute('href', imageMeta.replace("image/jpeg", "image/octet-stream"))
        link.click()
    })
}

function AddShiftMetadata(image) {
    let tableTitle = document.querySelector(".table-title").textContent
    let saveJson = {
        "table-name": tableTitle,
        "table-shift-count": datalist[0].length,
        "table-data":datalist
    }
    var exifObj = {'Exif': {0xA434: JSON.stringify(saveJson)}}
    var imageWithMetadata = piexif.insert(piexif.dump(exifObj), image);

    return imageWithMetadata;
}

function ReadShiftMetadata(image) {
    var metadata = (piexif.load(image))
    var rawData = metadata.Exif[42036]
    var JsonData = JSON.parse(rawData)

    CUSTOM_TABLE_TITLE_SELECTOR.value = JsonData["table-name"]

    ImportShiftData(JsonData["table-data"])
}

 function ImportShiftData(data) {
     datalist = data
     createTable()
}