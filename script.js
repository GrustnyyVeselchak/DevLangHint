var myArray = [
      {
        "word": "element",
        "transcription": "[ˈɛləmənt]",
        "translation": "элемент",
        "explanation": "Отдельный компонент в HTML-документе, например, тег <p> представляет элемент абзаца"
      },
      {
        "word": "attribute",
        "transcription": "ˈætrɪbjuːt",
        "translation": "атрибут",
        "explanation": "Дополнительная информация, содержащаяся в теге элемента, которая помогает описать или изменить его свойства, например, атрибут href у тега <a> задает ссылку на другую страницу"
      },
      {
        "word": "content",
        "transcription": "ˈkɒntɛnt",
        "translation": "содержимое",
        "explanation": "Текст, изображения или другой медиа-контент, размещенный внутри элемента"
      },
      {
        "word": "document",
        "transcription": "ˈdɒkjʊmənt",
        "translation": "документ",
        "explanation": "Основной контейнер для всего содержимого веб-страницы, который включает в себя заголовок, тело и другие элементы"
      },
      {
        "word": "specifies",
        "transcription": "ˈspɛsɪfaɪz",
        "translation": "указывает",
        "explanation": "Определяет или устанавливает какое-либо значение или свойство для элемента, например, атрибут src тега <img> указывает источник изображения"
      },
      {
        "word": "used",
        "transcription": "juːzd",
        "translation": "используется",
        "explanation": "Описывает, как элемент, атрибут или другой компонент веб-страницы используется для отображения содержимого или управления поведением страницы"
      },
      {
        "word": "metadata",
        "transcription": "ˈmɛtədeɪtə",
        "translation": "метаданные",
        "explanation": "Информация о содержимом документа, которая не отображается на странице, но может быть использована для поиска, индексации и других целей, например, мета-теги <title> и <meta> в заголовке документа"
      },
      {
        "word": "value",
        "transcription": "ˈvæljuː",
        "translation": "значение",
        "explanation": "Числовое, текстовое или логическое значение, которое может быть назначено свойству элемента или переменной в программном коде"
      },
]

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
                        <td>${data[i].translation}</td>
                        <td><pre>${data[i].explanation}<pre></td>
                    </tr>`
        table.innerHTML +=row
    }
}

