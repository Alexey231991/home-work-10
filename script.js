const arr = [
    1,
    2,
    3,
    [
      1.1,
      1.2,
      [
        1.1,
        1.2,
        [
          1.1,
          1.2,
          1.3,
        ],
      ],
    ],
    4,
    5
  ];
  
  function createList(array, destination) {
    let ul = document.createElement('ul');
    destination.append(ul)
    
    // проходимся по массиву array
    array.forEach(function (el) {
      //  проверка число ли это
      if (!isNaN(el)) {
        // если это число, то создаём новый элемент с тегом li
        let num = document.createElement('li')
        // изменяем текст элемента на 
        // значение текущего элемента в массиве
        num.innerHTML = el
        // и вставляем в главный список
        ul.append(num)
      }
  
      if ( Array.isArray(el) ) {
        // создаём li для вложенного списка
        let li = document.createElement('li')
        // вставляем новый li в главный ul
        ul.append(li)
  
        createList(el, li)
      }
    })
  }
  
  createList(arr, document.querySelector('.result'));