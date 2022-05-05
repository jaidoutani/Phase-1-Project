const BASE_URL = "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick"

document.addEventListener("DOMContentLoaded", () => {
    getMakeup()
})

function getMakeup() {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
        products = data
        displayProducts()
    })
}

function displayProducts() {
    const ul = document.getElementById('brand-list')
    products.forEach(product => {
        const li = document.createElement("li")
        ul.appendChild(li)
        const a = document.createElement("a")
        a.innerText = product.name
        a.href = '#'
        a.id = product.id
        li.appendChild(a)
    })
}