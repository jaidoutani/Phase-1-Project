const BASE_URL = "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick"

document.addEventListener("DOMContentLoaded", () => {
    getMakeup()
})

function getMakeup() {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
        products = data
    })
}