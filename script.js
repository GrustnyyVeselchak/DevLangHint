import {myArray} from "./info.js"
console.log(myArray);
$('#search').on('keyup', function(){
    var value = $(this).val()
    console.log('Value:', value)
    var data = searchTable(value, myArray)
    buildTable(data)
})

buildTable(myArray);

function searchTable(value, data) {
    var filteredData = []

    for (var i = 0; i < data.length; i++){
        value = value.toLowerCase()
        var word = data[i].word.toLowerCase()

        if (word.includes(value)){
            filteredData.push(data[i])
        }
    }

    return filteredData;
}


function buildTable(data){
    var table = document.getElementById('myTable')
    table.innerHTML = ''
    for (var i = 0; i < data.length; i++){
        var row =  `<tr>
                        <td>${data[i].word}</td>
                        <td>${data[i].transcription}</td>
                        <td><audio controls src="${data[i].audio}"></td>
                        <td>${data[i].translation}</td>
                        <td>${data[i].explanation}</td>
                    </tr>`
        table.innerHTML +=row
    }
}

