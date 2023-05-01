var myArray = [
      {
        "word": "element",
        "transcription": "ˈɛləmənt",
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

buildTable(myArray)



 $('th').on('click', function(){
     var column = $(this).data('colname')
     var order = $(this).data('order')
     var text = $(this).html()
     text = text.substring(0, text.length - 1);
     
     
     
     if (order == 'desc'){
        myArray = myArray.sort((a, b) => a[column] > b[column] ? 1 : -1)
        $(this).data("order","asc");
        text += '&#9660'
     }else{
        myArray = myArray.sort((a, b) => a[column] < b[column] ? 1 : -1)
        $(this).data("order","desc");
        text += '&#9650'
     }

    $(this).html(text)
    buildTable(myArray)
    })


   
 
    
function buildTable(data){
    var table = document.getElementById('myTable')
    table.innerHTML = ''
    for (var i = 0; i < data.length; i++){
        var colname = `name-${i}`
        var colage = `age-${i}`
        var colbirth = `birth-${i}`

        var row = `<tr>
                        <td>${data[i].name}</td>
                        <td>${data[i].age}</td>
                        <td>${data[i].birthdate}</td>
                   </tr>`
        table.innerHTML += row
    }
}

