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
        a.addEventListener('click', displayProduct)
    })
}

function displayProduct(e) {
    const ul = document.getElementById('brand-list')
    const info = document.getElementById('info')
    info.innerHTML = ""
    ul.innerHTML = ""
    const product = products.find(p => p.id === parseInt(e.target.id))
    info.innerHTML = `
        <h1>${product.brand}</h1>
        <h3>Name:</h3>
        <p>${product.name}</p>
        <h3>Description:</h3>
        <p>${product.description}</p>
        <h3>Price:</h3>
        <p>${product.price_sign}${product.price}</p>
        <h3>Product link:</h3>
        <p><a href="${product.product_link}">Click</a></p>
        <img src=${product.image_link}>
        <h3>Colors:</h3>`
    const product_colors = document.createElement('ul')
    for (let i = 0; i < product.product_colors.length; i++) {
        let color_hex = product.product_colors[i].hex_value
        let color_name = product.product_colors[i].colour_name
        product_colors.id = "colors"
        let li = document.createElement('li')
        let span = document.createElement('span')
        span.className = 'dot'
        span.style.backgroundColor = color_hex
        li.innerHTML += span.outerHTML
        li.innerHTML += `  ${color_name}`
        product_colors.appendChild(li)
    }
    info.appendChild(product_colors)
    info.innerHTML += `<button id="back">Back</button>`
    document.getElementById('back').addEventListener('click', clearAndReturn)
}

function clearAndReturn() {
    const info = document.getElementById('info')
    info.innerHTML = ""
    displayProducts()
}