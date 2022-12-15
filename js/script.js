function addToDoItem() {
    var toDoItem = document.getElementById('toDoItem').value
    var listItem = document.createElement('li')
    var checkbox = document.createElement('input')

    checkbox.type = 'checkbox'
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            listItem.classList.add('done')
        } else {
            listItem.classList.remove('done')
        }

        saveToDoList()
    })

    var span = document.createElement('span')
    span.innerHTML = toDoItem

    var button = document.createElement('button')
    button.innerHTML = 'Delete'
    button.addEventListener('click', function() {
        deleteToDoItem(listItem)
        saveToDoList()
    })

    listItem.appendChild(checkbox)
    listItem.appendChild(span)
    listItem.appendChild(button)

    var toDoList = document.getElementById('toDoList')
    toDoList.appendChild(listItem)

    document.getElementById('toDoItem').value = ''

    saveToDoList()
}

function deleteToDoItem(item) {
    item.parentNode.removeChild(item)
}

function saveToDoList() {
    var toDoList = document.getElementById('toDoList')
    var toDoItems = toDoList.getElementsByTagName('li')
    var toDoArray = []

    for (var i = 0; i < toDoItems.length; i++) {
        var toDoData = {
            text: toDoItems[i].getElementsByTagName('span')[0].innerHTML,
            done: toDoItems[i].classList.contains('done')
        }
        toDoArray.push(toDoData)
    }

    localStorage.setItem('toDoList', JSON.stringify(toDoArray))
}

window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scroll-btn").style.display = "block";
    } else {
        document.getElementById("scroll-btn").style.display = "none";
    }
}
 
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}