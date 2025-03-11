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
    var exifObj = {'Exif': {0xA434: [datalist[0].length,datalist]}}

    var imageWithMetadata = piexif.insert(piexif.dump(exifObj), image);

    return imageWithMetadata;
}

function ReadShiftMetadata(image) {
    var metadata = (piexif.load(image))
    var rawData = metadata.Exif[42036]
    var arrayData = rawData.split(',')
    var shiftCount = Number(arrayData[0])
    arrayData = arrayData.slice(1)

    var data = []
    for (let i = 0; i < arrayData.length; i+=shiftCount) {
        data.push(arrayData.slice(i, i + shiftCount))
    }
    return data
}