const items = []

function addItem() {
    const itemInput = document.getElementById('input-item')
    const itemName = itemInput.value
    const itemsList = document.getElementById('items-list')
    
    items.push(itemName)
    itemInput.value = ''

    itemsList.innerHTML += `<li>${itemName} <button onclick="removeItem(${items.length - 1})">x</button></li>`
    
}

function removeItem(i) {
    items.splice(i, 1)
    const itemsList = document.getElementById('items-list')
    itemsList.innerHTML = ''
    for (let index = 0; index < items.length; index++) {
        itemsList.innerHTML += `<li>${items[index]} <button onclick="removeItem(${index})">x</button></li>`
    }
}